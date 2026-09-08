import { NextResponse } from "next/server";
import { getForm, resolveSchema } from "@/lib/forms/registry";
import { toSections, identify } from "@/lib/forms/normalize";
import { sendFormNotification } from "@/lib/notifications/send";

// nodemailer needs Node APIs — it cannot run on the Edge runtime.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const bad = (message, errors) =>
  NextResponse.json(
    { ok: false, message, ...(errors ? { errors } : {}) },
    { status: 400 },
  );

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return bad("Malformed request body.");
  }

  const { formId, values, hp, page } = payload ?? {};

  const form = getForm(formId);
  if (!form) return bad("Unknown form.");

  // Honeypot: report success so bots learn nothing, but send nothing.
  if (typeof hp === "string" && hp.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  let validated;
  try {
    validated = await resolveSchema(form, values).validate(values, {
      abortEarly: false,
    });
  } catch (error) {
    const errors = {};
    (error.inner ?? []).forEach((issue) => {
      if (issue.path && !errors[issue.path]) errors[issue.path] = issue.message;
    });
    return bad("Please check the highlighted fields.", errors);
  }

  const sections = toSections(validated, form);
  const { name, email } = identify(validated, form);

  const submittedAt = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/London",
  }).format(new Date());

  const meta = [`Submitted ${submittedAt}`, page ? `from ${page}` : null]
    .filter(Boolean)
    .join(" · ");

  try {
    await sendFormNotification({
      formName: form.name,
      sections,
      meta,
      subjectDetail: name,
      replyTo: email || undefined,
    });
  } catch (error) {
    // The real SMTP error is for the logs only — never echoed to the client.
    console.error(`[api/forms] ${formId} delivery failed:`, error);
    return NextResponse.json(
      { ok: false, message: "We could not send that just now." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
