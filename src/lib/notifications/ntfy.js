/**
 * Publishes the plain-text form of a notification to an ntfy.sh topic.
 * ntfy has no HTML support, which is why buildNotification() produces both.
 */
export async function publishToNtfy({ title, text }) {
  const topic = process.env.NTFY_TOPIC;
  if (!topic) throw new Error("ntfy is not configured — missing NTFY_TOPIC");

  const base = process.env.NTFY_URL || "https://ntfy.sh";
  const token = process.env.NTFY_TOKEN;

  const response = await fetch(`${base.replace(/\/$/, "")}/${topic}`, {
    method: "POST",
    headers: {
      // Header values must be latin-1; strip anything outside it so an
      // accented name in the subject cannot fail the whole request.
      Title: title.replace(/[^\x20-\x7E]/g, "-"),
      Tags: "envelope",
      Priority: "default",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: text,
  });

  if (!response.ok) {
    throw new Error(`ntfy responded ${response.status} ${response.statusText}`);
  }

  return response;
}

export function ntfyConfigGaps() {
  return process.env.NTFY_TOPIC ? [] : ["NTFY_TOPIC"];
}
