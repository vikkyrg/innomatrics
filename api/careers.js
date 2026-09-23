/**
 * Vercel Serverless Function — POST /api/careers
 *
 * Receives the careers-page application form (multipart/form-data with a
 * resume file), validates it, and emails the details + resume attachment to
 * imtwebdevelopment@gmail.com using Nodemailer over Gmail SMTP.
 *
 * Required environment variables (set in Vercel → Project → Settings →
 * Environment Variables):
 *   GMAIL_USER          — the Gmail account that sends the mail
 *   GMAIL_APP_PASSWORD  — a 16-character Gmail App Password (NOT the login password)
 */

const nodemailer = require("nodemailer");
const Busboy = require("busboy");

const RECIPIENT_EMAIL = "imtwebdevelopment@gmail.com";
const MAX_RESUME_SIZE_MB = 4; // Vercel caps request bodies at ~4.5 MB
const ALLOWED_RESUME_EXTENSIONS = ["pdf", "doc", "docx"];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;
const EXPERIENCE_REGEX = /^\d+(\.\d+)?$/;

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

  const contentType = req.headers["content-type"] || "";
  if (!contentType.includes("multipart/form-data")) {
    return res.status(400).json({ success: false, message: "Invalid request format." });
  }

  let busboy;
  try {
    busboy = Busboy({
      headers: req.headers,
      limits: { fileSize: MAX_RESUME_SIZE_MB * 1024 * 1024, files: 1 },
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: "Invalid request format." });
  }

  let responded = false;
  const respond = (status, payload) => {
    if (responded) return;
    responded = true;
    return res.status(status).json(payload);
  };

  const fields = {};
  let resumeFile = null;
  let resumeTooLarge = false;

  busboy.on("field", (name, value) => {
    fields[name] = typeof value === "string" ? value.trim() : value;
  });

  busboy.on("file", (name, fileStream, info) => {
    if (name !== "resume") {
      fileStream.resume();
      return;
    }

    const chunks = [];
    fileStream.on("data", (chunk) => chunks.push(chunk));
    fileStream.on("limit", () => {
      resumeTooLarge = true;
      chunks.length = 0;
      fileStream.resume();
    });
    fileStream.on("end", () => {
      if (resumeTooLarge) return;
      resumeFile = {
        filename: info.filename || "resume",
        mimeType: info.mimeType || "application/octet-stream",
        buffer: Buffer.concat(chunks),
      };
    });
  });

  busboy.on("error", (err) => {
    console.error("Form parsing error:", err);
    respond(400, { success: false, message: "Could not read the submitted form. Please try again." });
  });

  busboy.on("close", async () => {
    try {
      if (resumeTooLarge) {
        return respond(413, {
          success: false,
          message: `Resume is too large. Maximum size is ${MAX_RESUME_SIZE_MB} MB.`,
        });
      }

      const fullName = (fields.fullName || "").trim();
      const email = (fields.email || "").trim();
      const phone = (fields.phone || "").replace(/[\s-]/g, "");
      const role = (fields.role || "").trim();
      const experience = (fields.experience || "").trim();

      let validationMessage = "";
      if (fullName.length < 3) validationMessage = "Full name is required.";
      else if (!EMAIL_REGEX.test(email)) validationMessage = "A valid email address is required.";
      else if (!PHONE_REGEX.test(phone)) validationMessage = "A valid 10-digit phone number is required.";
      else if (!role) validationMessage = "Role is required.";
      else if (!EXPERIENCE_REGEX.test(experience)) validationMessage = "Years of experience must be a positive number.";
      else if (!resumeFile || resumeFile.buffer.length === 0) validationMessage = "Please upload your resume.";
      else {
        const ext = resumeFile.filename.split(".").pop().toLowerCase();
        if (!ALLOWED_RESUME_EXTENSIONS.includes(ext)) {
          validationMessage = "Resume must be a PDF, DOC, or DOCX file.";
        }
      }

      if (validationMessage) {
        return respond(400, { success: false, message: validationMessage });
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
        "New job application from the careers page.",
        "",
        `Name:               ${fullName}`,
        `Email:              ${email}`,
        `Phone:              ${phone}`,
        `Role Applying For:  ${role}`,
        `Years of Experience:${experience}`,
        `Resume:             ${resumeFile.filename} (attached)`,
        "",
        `Received: ${new Date().toISOString()}`,
      ].join("\n");

      const htmlBody = `
        <h2 style="margin:0 0 16px;font-family:Arial,sans-serif;color:#1a2b4c;">
          New Job Application
        </h2>
        <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;color:#333;">
          <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Name</td><td>${escapeHtml(fullName)}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Email</td><td>${escapeHtml(email)}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Phone</td><td>${escapeHtml(phone)}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Role Applying For</td><td>${escapeHtml(role)}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Years of Experience</td><td>${escapeHtml(experience)}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Resume</td><td>${escapeHtml(resumeFile.filename)} (attached)</td></tr>
        </table>
      `;

      await transporter.sendMail({
        from: `"Innomatrics Careers" <${gmailUser}>`,
        to: RECIPIENT_EMAIL,
        replyTo: email,
        subject: `New Job Application — ${role} — ${fullName}`,
        text: textBody,
        html: htmlBody,
        attachments: [
          {
            filename: resumeFile.filename,
            content: resumeFile.buffer,
            contentType: resumeFile.mimeType,
          },
        ],
      });

      return respond(200, { success: true, message: "Application submitted successfully." });
    } catch (error) {
      console.error("Failed to send application email:", error);
      return respond(500, {
        success: false,
        message: "Something went wrong while submitting your application. Please try again.",
      });
    }
  });

  req.pipe(busboy);
};
