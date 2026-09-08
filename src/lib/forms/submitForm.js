/**
 * Posts one form to the notification endpoint.
 * Resolves to { ok, message, errors } — it never throws, so callers can branch
 * on `ok` without a try/catch at every call site.
 */
export async function submitForm({ formId, values, hp = "" }) {
  try {
    const response = await fetch("/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formId,
        values,
        hp,
        page:
          typeof window === "undefined" ? undefined : window.location.pathname,
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok || !data.ok) {
      return {
        ok: false,
        message: data.message || "We could not send that just now.",
        errors: data.errors,
      };
    }

    return { ok: true };
  } catch {
    // Offline, DNS failure, request blocked — all look the same to the visitor.
    return { ok: false, message: "No connection. Please check and try again." };
  }
}
