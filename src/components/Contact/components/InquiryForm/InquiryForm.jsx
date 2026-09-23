import React, { useState, useRef } from "react";
import { FaLocationPin } from "react-icons/fa6";
import { motion } from "framer-motion";

// Submits the inquiry to the Nodemailer-backed serverless function
// (api/contact.js), which emails it to the company inbox.
const API_ENDPOINT = "/api/contact";

const InquiryForm = () => {
  const formRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const phoneRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);

  const resetForm = () => {
    formRef.current.reset();
    setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setStatus({ type: "", message: "" });

      // POST the inquiry to the serverless function, which sends the
      // email via Nodemailer. No page navigation/re-render.
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
          phone: phoneRef.current.value,
          message: messageRef.current.value,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Submission failed.");
      }

      setStatus({
        type: "success",
        message: "Thank you for your message! We will get back to you soon.",
      });
      setShowPopup(true);
      resetForm();

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending inquiry:", error);
      setStatus({
        type: "error",
        message:
          error?.message && error.message !== "Submission failed."
            ? error.message
            : "There was an error sending your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-secondary-900/80">
          <div className="bg-white border border-secondary-200 p-10 max-w-sm w-full mx-4 text-center">
            <h3 className="text-xl font-bold text-secondary-900 mb-4">Message Sent</h3>
            <p className="text-secondary-600 mb-8">{status.message}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-primary-900 text-white font-semibold py-3 hover:bg-primary-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full max-w-lg bg-white border border-secondary-200 p-10 lg:p-14"
      >
        <motion.span variants={itemVariants} className="text-primary-800 font-bold uppercase tracking-widest text-xs mb-8 block">
          Send Inquiry
        </motion.span>

        {status.type === "error" && status.message && (
          <motion.div variants={itemVariants} className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 text-sm font-semibold">
            {status.message}
          </motion.div>
        )}

        <motion.div variants={itemVariants} className="mb-6">
          <label htmlFor="name" className="block text-xs font-bold text-secondary-700 uppercase tracking-widest mb-2">
            Name
          </label>
          <input
            type="text"
            ref={nameRef}
            id="name"
            name="name"
            className="w-full border border-secondary-200 bg-secondary-50 px-4 py-3 text-secondary-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 focus:bg-white shadow-inner focus:shadow-md transition-all duration-300"
            placeholder="Enter your name"
            required
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <label htmlFor="email" className="block text-xs font-bold text-secondary-700 uppercase tracking-widest mb-2">
            Business Email Address
          </label>
          <input
            type="email"
            ref={emailRef}
            id="email"
            name="email"
            className="w-full border border-secondary-200 bg-secondary-50 px-4 py-3 text-secondary-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 focus:bg-white shadow-inner focus:shadow-md transition-all duration-300"
            placeholder="Enter your email"
            required
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <label htmlFor="phone" className="block text-xs font-bold text-secondary-700 uppercase tracking-widest mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            ref={phoneRef}
            id="phone"
            name="phone"
            className="w-full border border-secondary-200 bg-secondary-50 px-4 py-3 text-secondary-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 focus:bg-white shadow-inner focus:shadow-md transition-all duration-300"
            placeholder="Enter your phone number"
            required
            inputMode="numeric"
            maxLength={10}
            onInput={(event) => {
              event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "");
            }}
            pattern="[0-9]{10}"
          />
          <p className="text-xs text-secondary-500 mt-2 tracking-wide">
            Enter 10 digit mobile number
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-10">
          <label htmlFor="message" className="block text-xs font-bold text-secondary-700 uppercase tracking-widest mb-2">
            Message
          </label>
          <textarea
            ref={messageRef}
            id="message"
            name="message"
            rows="4"
            className="w-full border border-secondary-200 bg-secondary-50 px-4 py-3 text-secondary-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 focus:bg-white shadow-inner focus:shadow-md transition-all duration-300 resize-none"
            placeholder="Enter your message"
            required
          />
        </motion.div>

        <motion.button
          variants={itemVariants}
          type="submit"
          disabled={loading}
          className={`w-full font-semibold py-4 uppercase tracking-widest text-sm transition-colors ${loading ? "bg-secondary-200 text-secondary-500 cursor-not-allowed" : "bg-primary-900 text-white hover:bg-primary-800" }`}
        >
          {loading ? "Sending..." : "Submit Inquiry"}
        </motion.button>
      </motion.form>
    </>
  );
};

const InquiryAndMapComponent = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-0 border border-secondary-200">
      <div className="p-10 lg:p-14 bg-white border-b lg:border-b-0 lg:border-r border-secondary-200 flex flex-col justify-between">
        <div>
          <span className="text-primary-800 font-bold uppercase tracking-widest text-xs mb-4 block">
            Location
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary-900 tracking-tight leading-tight mb-6">
            We'd love to hear from you.
          </h2>
          <p className="text-lg text-secondary-600 mb-12 font-normal leading-relaxed">
            Please let us know what you are looking for and our experts will get in touch
            with you to discuss your requirements.
          </p>

          <div className="flex items-start mb-12">
            <FaLocationPin className="text-primary-800 text-2xl mt-1 mr-4" />
            <div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2 uppercase tracking-wide">
                Headquarters
              </h3>
              <p className="text-secondary-600 leading-relaxed text-sm">
                2nd Floor, Akshay Complex, No. 01, 16th Main Rd,<br />
                near Bharat Petroleum, BTM 2nd Stage,<br />
                Bengaluru, Karnataka 560076
              </p>
            </div>
          </div>
        </div>

 <div className="w-full h-[300px] border border-secondary-200 overflow-hidden relative bg-secondary-50">
          <iframe title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8106411375257!2d77.60544587473798!3d12.916304287388451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b14d40b127%3A0xf9c3ada4f0a27e4b!2sInnomatrics%20Technologies!5e0!3m2!1sen!2sin!4v1709641611099!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
        </div>
      </div>

      <div className="flex items-center justify-center bg-secondary-50 p-10 lg:p-14">
        <InquiryForm />
      </div>
    </div>
  );
};

export default InquiryAndMapComponent;
