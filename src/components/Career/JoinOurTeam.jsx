import React, { useState, useEffect, useRef } from "react";
import { FiX, FiCheck, FiChevronRight, FiAlertCircle, FiFileText } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// External Indeed company page (opens in a new tab)
const INDEED_URL = "https://in.indeed.com/cmp/Innomatrics-Technologies";

// Submits the application to the Nodemailer-backed serverless function
// (api/careers.js), which emails the details + resume to the HR inbox.
const API_ENDPOINT = "/api/careers";

const MAX_RESUME_SIZE_MB = 5;
const ALLOWED_RESUME_EXTENSIONS = ["pdf", "doc", "docx"];

const BG_IMAGE =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop";

/* ------------------------------ Validation ------------------------------ */

const validateField = (field, form, resumeFile) => {
  switch (field) {
    case "fullName": {
      const value = form.fullName.trim();
      if (!value) return "Full name is required.";
      if (value.length < 3) return "Please enter your full name (minimum 3 characters).";
      return "";
    }
    case "email": {
      const value = form.email.trim();
      if (!value) return "Email address is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address.";
      return "";
    }
    case "phone": {
      const value = form.phone.replace(/[\s-]/g, "");
      if (!value) return "Phone number is required.";
      if (!/^[6-9]\d{9}$/.test(value)) return "Please enter a valid 10-digit Indian mobile number.";
      return "";
    }
    case "role": {
      if (!form.role.trim()) return "Please enter the position you're applying for.";
      return "";
    }
    case "experience": {
      const value = form.experience.trim();
      if (!value) return "Years of experience is required.";
      // Numeric only, no negative values (0 is allowed for freshers)
      if (!/^\d+(\.\d+)?$/.test(value))
        return "Please enter your years of experience as a positive number (e.g., 2).";
      return "";
    }
    case "resume": {
      if (!resumeFile) return "Please upload your resume.";
      const ext = resumeFile.name.split(".").pop().toLowerCase();
      if (!ALLOWED_RESUME_EXTENSIONS.includes(ext))
        return "Invalid file type. Please upload a PDF, DOC, or DOCX file.";
      if (resumeFile.size > MAX_RESUME_SIZE_MB * 1024 * 1024)
        return `File is too large. Maximum size is ${MAX_RESUME_SIZE_MB} MB.`;
      return "";
    }
    default:
      return "";
  }
};

const validateAll = (form, resumeFile) => ({
  fullName: validateField("fullName", form, resumeFile),
  email: validateField("email", form, resumeFile),
  phone: validateField("phone", form, resumeFile),
  role: validateField("role", form, resumeFile),
  experience: validateField("experience", form, resumeFile),
  resume: validateField("resume", form, resumeFile),
});

/* ------------------------- Small presentational bits ------------------------- */

const FieldError = ({ id, message }) =>
  message ? (
    <p id={id} role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
      <FiAlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
      {message}
    </p>
  ) : null;

const inputClasses = (hasError) =>
  `w-full rounded-md border bg-white px-4 py-3 text-secondary-900 placeholder-secondary-400 transition-colors focus:outline-none focus:ring-2 ${
    hasError
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
      : "border-secondary-300 focus:border-primary-600 focus:ring-primary-600/20"
  }`;

/* ------------------------------ Modal ------------------------------ */

const ApplicationModal = ({ onClose }) => {
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", role: "", experience: "" });
  const [resumeFile, setResumeFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [submitError, setSubmitError] = useState("");

  const formRef = useRef(null);
  const firstFieldRef = useRef(null);

  // Lock background scroll while the modal is open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Escape key closes the modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Move focus into the modal on open
  useEffect(() => {
    const timer = setTimeout(() => firstFieldRef.current?.focus(), 120);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (field) => (e) => {
    let value = e.target.value;
    if (field === "phone") value = value.replace(/\D/g, "").slice(0, 10);
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0] || null;
    setResumeFile(file);
    setErrors((prev) => ({ ...prev, resume: file ? validateField("resume", form, file) : "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allErrors = validateAll(form, resumeFile);
    setErrors(allErrors);
    if (Object.values(allErrors).some(Boolean)) return;

    setStatus("submitting");
    setSubmitError("");
    try {
      // POST the form (including the resume file) to the serverless
      // function, which sends the email via Nodemailer. Stays in this modal
      // — no page navigation or re-render.
      const payload = new FormData();
      payload.append("fullName", form.fullName.trim());
      payload.append("email", form.email.trim());
      payload.append("phone", form.phone.trim());
      payload.append("role", form.role.trim());
      payload.append("experience", form.experience.trim());
      payload.append("resume", resumeFile);

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        body: payload,
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Submission failed.");
      }

      setStatus("success");
    } catch (error) {
      console.error("Career application submission failed:", error);
      setStatus("error");
      setSubmitError(
        error?.message && error.message !== "Submission failed."
          ? error.message
          : "Something went wrong while submitting your application. Please try again."
      );
    }
  };

  const fieldMeta = [
    { id: "fullName", label: "Full Name", placeholder: "Enter your full name", type: "text", autoComplete: "name" },
    { id: "email", label: "Email Address", placeholder: "Enter your email address", type: "email", autoComplete: "email" },
    { id: "phone", label: "Phone Number", placeholder: "Enter your 10-digit phone number", type: "tel", autoComplete: "tel" },
    { id: "role", label: "Role You're Applying For", placeholder: "Enter the position you're applying for", type: "text" },
    { id: "experience", label: "Years of Experience", placeholder: "Enter your years of experience", type: "text", inputMode: "decimal" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-secondary-950/70 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="application-modal-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex max-h-[90vh] w-full max-w-[600px] flex-col rounded-lg bg-white shadow-2xl"
      >
        {/* Modal header */}
        <div className="flex shrink-0 items-center justify-between border-b border-secondary-200 px-6 py-5 md:px-8">
          <h2 id="application-modal-title" className="text-xl font-bold text-secondary-900 md:text-2xl">
            Submit Your Application
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close application form"
            className="rounded-md p-1.5 text-secondary-500 transition-colors hover:bg-secondary-100 hover:text-secondary-900 focus:outline-none focus:ring-2 focus:ring-primary-600"
          >
            <FiX className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Modal body (scrollable on small screens) */}
        <div className="flex-1 overflow-y-auto px-6 py-6 md:px-8 md:py-8">
          {status === "success" ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
                <FiCheck className="h-8 w-8 text-primary-700" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-secondary-900">
                Application submitted successfully.
              </h3>
              <p className="mx-auto mb-8 max-w-md leading-relaxed text-secondary-600">
                Thank you for your interest in joining our team. We'll review your application and
                get back to you if there is a suitable opportunity.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="rounded-md bg-primary-900 px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
              >
                Close
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
              {fieldMeta.map((field, index) => (
                <div key={field.id}>
                  <label
                    htmlFor={`application-${field.id}`}
                    className="mb-1.5 block text-sm font-semibold text-secondary-800"
                  >
                    {field.label}
                  </label>
                  <input
                    ref={index === 0 ? firstFieldRef : undefined}
                    id={`application-${field.id}`}
                    name={field.id}
                    type={field.type}
                    inputMode={field.inputMode}
                    autoComplete={field.autoComplete}
                    placeholder={field.placeholder}
                    value={form[field.id]}
                    onChange={handleChange(field.id)}
                    aria-invalid={Boolean(errors[field.id])}
                    aria-describedby={errors[field.id] ? `application-${field.id}-error` : undefined}
                    className={inputClasses(Boolean(errors[field.id]))}
                  />
                  <FieldError id={`application-${field.id}-error`} message={errors[field.id]} />
                </div>
              ))}

              {/* Resume upload */}
              <div>
                <label
                  htmlFor="application-resume"
                  className="mb-1.5 block text-sm font-semibold text-secondary-800"
                >
                  Upload Resume
                </label>
                <label
                  htmlFor="application-resume"
                  className={`flex cursor-pointer items-center gap-3 rounded-md border border-dashed px-4 py-3 transition-colors hover:border-primary-600 hover:bg-secondary-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-600/20 ${
                    errors.resume ? "border-red-500 bg-red-50" : "border-secondary-300 bg-secondary-50"
                  }`}
                >
                  <FiFileText className="h-5 w-5 shrink-0 text-primary-700" aria-hidden="true" />
                  <span className="truncate text-sm text-secondary-700">
                    {resumeFile ? resumeFile.name : "Upload your resume (PDF, DOC, or DOCX)"}
                  </span>
                  <input
                    id="application-resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeChange}
                    aria-invalid={Boolean(errors.resume)}
                    aria-describedby={errors.resume ? "application-resume-error" : "application-resume-help"}
                    className="sr-only"
                  />
                </label>
                <p id="application-resume-help" className="mt-1.5 text-xs text-secondary-500">
                  Upload your resume (PDF, DOC, or DOCX) — max {MAX_RESUME_SIZE_MB} MB
                </p>
                <FieldError id="application-resume-error" message={errors.resume} />
              </div>

              {submitError && (
                <div role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className={`w-full rounded-md py-3.5 font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 ${
                  status === "submitting"
                    ? "cursor-not-allowed bg-secondary-300 text-secondary-500"
                    : "bg-orange-600 hover:bg-orange-700"
                }`}
              >
                {status === "submitting" ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ------------------------------ Section ------------------------------ */

const JoinOurTeam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Cinematic fixed-background parallax: the background stays anchored to the
  // viewport (background-attachment: fixed) while the page content scrolls
  // over it. iOS/mobile Safari renders fixed backgrounds poorly, so smaller
  // screens fall back to normal scrolling attachment.
  const [fixedBackground, setFixedBackground] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const update = () => setFixedBackground(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    <section
      id="job-application"
      aria-labelledby="join-our-team-heading"
      className="relative overflow-hidden scroll-mt-24 md:scroll-mt-32"
    >
      {/* Fixed cinematic building background (scrolls normally on mobile) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundAttachment: fixedBackground ? "fixed" : "scroll",
        }}
      />
      {/* Dark navy overlay sits between the background and the white card */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/85 to-primary-950/90" />

      <div className="container-custom relative py-24 lg:py-32">
        {/* White card, right-aligned on desktop */}
        <div className="w-full rounded-lg bg-white p-8 shadow-card-hover md:p-10 lg:ml-auto lg:w-[46%] lg:p-12">
          <span className="text-sm font-bold uppercase tracking-widest text-orange-600">
            Join Our Team
          </span>
          <h2
            id="join-our-team-heading"
            className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-secondary-900 md:text-4xl"
          >
            Can't find your job?
            <br />
            Don't worry!
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-secondary-600 md:text-lg">
            We are always looking for talented people to join our team. Submit your application and
            we'll reach out when a suitable opportunity becomes available.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-600 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
            >
              Submit Application
              <FiChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <a
              href={INDEED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary-900 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Application modal */}
      <AnimatePresence>
        {isModalOpen && <ApplicationModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </section>
  );
};

export default JoinOurTeam;
