/**
 * Builds one notification in three shapes from a single source, so the email
 * and the ntfy push can never drift apart.
 *
 *   buildNotification({ formName, sections, meta })
 *     -> { subject, html, text }
 *
 * `sections` is [{ heading?, rows: [{ label, value }] }]. A section without a
 * heading renders inline; one with a heading (e.g. "Route 2") gets a subheading.
 */

const DIVIDER = "====================================";

/** ntfy rejects very large bodies; keep well under the limit. */
const TEXT_LIMIT = 3500;

const escapeHtml = (input) =>
  String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/**
 * Subject lines cannot carry newlines — a folded header gets collapsed or
 * mangled by most clients. So the banner lives in the body and the subject
 * carries the form name plus whoever sent it.
 */
const buildSubject = (formName, detail) => {
  // Plain ASCII separator on purpose. An em-dash forces the whole subject into
  // an RFC 2047 encoded-word ("=?UTF-8?Q?..."), which then folds across two
  // lines — a mostly-ASCII subject arriving encoded reads as obfuscated to
  // spam filters. A name with an accent will still encode, which is fine and
  // unavoidable; the point is not to encode when there is nothing to encode.
  return detail
    ? `[Travellia] ${formName} - ${detail}`
    : `[Travellia] ${formName}`;
};

const buildText = ({ formName, sections, meta }) => {
  const lines = [DIVIDER, formName.toUpperCase(), DIVIDER];

  sections.forEach((section) => {
    if (!section.rows.length) return;
    if (section.heading) lines.push("", `-- ${section.heading} --`);

    // Pad labels so values line up in a monospace push notification.
    const width = Math.max(...section.rows.map((row) => row.label.length));
    section.rows.forEach(({ label, value }) => {
      const [first, ...rest] = String(value).split("\n");
      lines.push(`${label.padEnd(width)}  ${first}`);
      rest.forEach((line) => lines.push(`${" ".repeat(width + 2)}${line}`));
    });
  });

  lines.push(DIVIDER);
  if (meta) lines.push(meta);

  const text = lines.join("\n");
  return text.length > TEXT_LIMIT
    ? `${text.slice(0, TEXT_LIMIT)}\n… (truncated, see email)`
    : text;
};

const buildHtml = ({ formName, sections, meta }) => {
  const divider = `<tr><td colspan="2" style="font-family:monospace;font-size:13px;color:#94a3b8;padding:6px 0;letter-spacing:1px;">${DIVIDER}</td></tr>`;

  const body = sections
    .filter((section) => section.rows.length)
    .map((section) => {
      const heading = section.heading
        ? `<tr><td colspan="2" style="padding:14px 0 4px;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;color:#c0891a;text-transform:uppercase;letter-spacing:.08em;">${escapeHtml(section.heading)}</td></tr>`
        : "";

      const rows = section.rows
        .map(
          ({ label, value }) => `<tr>
            <td style="padding:7px 16px 7px 0;font-family:Arial,sans-serif;font-size:14px;color:#64748b;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>
            <td style="padding:7px 0;font-family:Arial,sans-serif;font-size:14px;color:#0f172a;font-weight:600;vertical-align:top;">${escapeHtml(value).replace(/\n/g, "<br>")}</td>
          </tr>`,
        )
        .join("");

      return heading + rows;
    })
    .join("");

  // Styles are inline throughout — email clients strip <style> blocks.
  return `<div style="background:#f1f5f9;padding:24px;">
  <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:4px;">
    <tr><td style="padding:24px 28px;">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
        ${divider}
        <tr><td colspan="2" style="font-family:Arial,sans-serif;font-size:19px;font-weight:bold;color:#0f172a;padding:2px 0 6px;letter-spacing:.02em;">${escapeHtml(formName.toUpperCase())}</td></tr>
        ${divider}
        ${body}
        ${divider}
        ${meta ? `<tr><td colspan="2" style="font-family:Arial,sans-serif;font-size:12px;color:#94a3b8;padding-top:6px;">${escapeHtml(meta)}</td></tr>` : ""}
      </table>
    </td></tr>
  </table>
</div>`;
};

export function buildNotification({
  formName,
  sections = [],
  meta,
  subjectDetail,
}) {
  return {
    subject: buildSubject(formName, subjectDetail),
    html: buildHtml({ formName, sections, meta }),
    text: buildText({ formName, sections, meta }),
  };
}

export { DIVIDER };
