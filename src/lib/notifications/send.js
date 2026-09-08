import { buildNotification } from "./format";
import { sendNotificationEmail } from "./mailer";
import { publishToNtfy } from "./ntfy";

/**
 * The single entry point for delivering a submitted form.
 *
 * Email and ntfy are attempted independently:
 *   - email failing means the enquiry was genuinely not delivered, so it throws
 *     and the caller returns an error to the visitor;
 *   - ntfy failing is only a missed convenience ping, so it is logged and
 *     swallowed. It must never lose an enquiry that already reached the inbox.
 */
export async function sendFormNotification({
  formName,
  sections,
  meta,
  subjectDetail,
  replyTo,
}) {
  const { subject, html, text } = buildNotification({
    formName,
    sections,
    meta,
    subjectDetail,
  });

  const [email, ntfy] = await Promise.allSettled([
    sendNotificationEmail({ subject, html, text, replyTo }),
    publishToNtfy({ title: subject, text }),
  ]);

  if (ntfy.status === "rejected") {
    console.error("[notifications] ntfy push failed:", ntfy.reason);
  }

  if (email.status === "rejected") {
    console.error("[notifications] email failed:", email.reason);
    throw email.reason;
  }

  return { emailSent: true, ntfySent: ntfy.status === "fulfilled" };
}
