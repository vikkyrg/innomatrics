/**
 * Vercel Serverless Function — POST /api/contact
 *
 * Receives the Contact Us inquiry form (JSON) and emails it to
 * imtwebdevelopment@gmail.com using Nodemailer over Gmail SMTP.
 *
 * Required environment variables (set in Vercel → Project → Settings →
 * Environment Variables):
 *   GMAIL_USER          — the Gmail account that sends the mail
 *   GMAIL_APP_PASSWORD  — a 16-character Gmail App Password (NOT the login password)
 */

const nodemailer = require("nodemailer");

const RECIPIENT_EMAIL = "imtwebdevelopment@gmail.com";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed." });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  if (!gmailUser || !gmailAppPassword) {
    console.error("Missing GMAIL_USER / GMAIL_APP_PASSWORD environment variables.");
    return res.status(500).json({
      success: false,
      message: "Email service is not configured. Please try again later.",
    });
  }

  // --- Read and parse the JSON body (with a size guard) ---
  let rawBody = "";
  let oversized = false;
  req.on("data", (chunk) => {
    rawBody += chunk;
    if (rawBody.length > 64 * 1024) {
      oversized = true;
      rawBody = "";
      req.destroy();
    }
  });

  req.on("end", async () => {
    try {
      if (oversized) {
        return res.status(413).json({ success: false, message: "Message is too large." });
      }

      let body;
      try {
        body = rawBody ? JSON.parse(rawBody) : {};
      } catch (parseError) {
        return res.status(400).json({ success: false, message: "Invalid request format." });
      }

      const name = String(body.name || "").trim();
      const email = String(body.email || "").trim();
      const phone = String(body.phone || "").replace(/[\s-]/g, "");
      const message = String(body.message || "").trim();

      let validationMessage = "";
      if (name.length < 2) validationMessage = "Please enter your name.";
      else if (!EMAIL_REGEX.test(email)) validationMessage = "Please enter a valid email address.";
      else if (!PHONE_REGEX.test(phone)) validationMessage = "Please enter a valid 10-digit phone number.";
      else if (!message) validationMessage = "Please enter your message.";

      if (validationMessage) {
        return res.status(400).json({ success: false, message: validationMessage });
      }

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: gmailUser,
          pass: gmailAppPassword,
        },
      });

      const textBody = [
        "New contact inquiry from the website.",
        "",
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Phone:   ${phone}`,
        "",
        "Message:",
        message,
        "",
        `Received: ${new Date().toISOString()}`,
      ].join("\n");

      const htmlBody = `
        <h2 style="margin:0 0 16px;font-family:Arial,sans-serif;color:#1a2b4c;">
          New Contact Inquiry
        </h2>
        <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;color:#333;">
          <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Name</td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Email</td><td>${escapeHtml(email)}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Phone</td><td>${escapeHtml(phone)}</td></tr>
        </table>
        <p style="font-family:Arial,sans-serif;font-size:14px;color:#333;"><strong>Message:</strong></p>
        <p style="font-family:Arial,sans-serif;font-size:14px;color:#333;white-space:pre-wrap;">${escapeHtml(message)}</p>
      `;

      await transporter.sendMail({
        from: `"Innomatrics Website" <${gmailUser}>`,
        to: RECIPIENT_EMAIL,
        replyTo: email,
        subject: `New Contact Inquiry — ${name}`,
        text: textBody,
        html: htmlBody,
      });

      return res.status(200).json({ success: true, message: "Inquiry sent successfully." });
    } catch (error) {
      console.error("Failed to send contact inquiry email:", error);
      return res.status(500).json({
        success: false,
        message: "There was an error sending your message. Please try again.",
      });
    }
  });
};
