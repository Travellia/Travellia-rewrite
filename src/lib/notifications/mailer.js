import nodemailer from "nodemailer";

// Module singleton — a new pool per request would exhaust the SMTP
// connection limit.
let transporter;

// Host and port are configurable so swapping provider needs no code change.
const HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const PORT = Number(process.env.SMTP_PORT ?? 465);

/** The mailbox that authenticates, sends, and (by default) receives. */
const account = () => process.env.USER_EMAIL;

/**
 * Google shows app passwords in four-character groups ("abcd efgh ijkl mnop").
 * Pasting that verbatim is the single most common cause of a 535 auth failure,
 * so strip whitespace rather than making the user notice.
 */
const password = () => process.env.USER_APP_PASSWORD?.replace(/\s+/g, "");

const missing = () => {
  const gaps = [];
  if (!account()) gaps.push("USER_EMAIL");
  if (!password()) gaps.push("USER_APP_PASSWORD");
  return gaps;
};

function getTransporter() {
  if (transporter) return transporter;

  const gaps = missing();
  if (gaps.length) {
    throw new Error(`Mail is not configured — missing ${gaps.join(", ")}`);
  }

  transporter = nodemailer.createTransport({
    host: HOST,
    port: PORT,
    // 465 is implicit TLS; 587 upgrades via STARTTLS.
    secure: PORT === 465,
    auth: {
      user: account(),
      pass: password(),
    },
  });

  return transporter;
}

/**
 * Sends one notification email. Throws on failure — the caller decides whether
 * that should fail the request.
 */
export async function sendNotificationEmail({ subject, html, text, replyTo }) {
  // Gmail rewrites From to the authenticated account anyway unless MAIL_FROM
  // is a verified "send as" alias, so defaulting to the account is the
  // predictable choice.
  const from = process.env.MAIL_FROM || account();
  const to = process.env.MAIL_TO || account();

  return getTransporter().sendMail({
    from: `"Travellia Website" <${from}>`,
    to,
    // Lets staff reply straight to the enquirer from the notification.
    ...(replyTo ? { replyTo } : {}),
    subject,
    text,
    html,
    headers: {
      // RFC 3834: marks this as machine-generated so vacation responders and
      // auto-replies on the receiving side do not bounce back at the sender.
      "Auto-Submitted": "auto-generated",
    },
  });
}

/** Used by the config check at startup, not per request. */
export function mailConfigGaps() {
  return missing();
}
