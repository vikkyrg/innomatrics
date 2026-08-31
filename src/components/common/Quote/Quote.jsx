import React, { forwardRef, useEffect, useState } from 'react';
import { FaFileInvoiceDollar } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import ServiceHero from '../../Services/components/ServiceHero';

const QuoteForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Add quote form submission logic here
    setTimeout(() => setLoading(false), 1000);
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
    <motion.form 
      onSubmit={handleSubmit} 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full max-w-lg bg-white border border-secondary-200 p-10 lg:p-14"
    >
      <motion.span variants={itemVariants} className="text-primary-800 font-bold uppercase tracking-widest text-xs mb-8 block">
        Request Form
      </motion.span>

      <motion.div variants={itemVariants} className="mb-6">
        <label htmlFor="name" className="block text-xs font-bold text-secondary-700 uppercase tracking-widest mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full border border-secondary-200 bg-secondary-50 px-4 py-3 text-secondary-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 focus:bg-white shadow-inner focus:shadow-md transition-all duration-300"
          placeholder="Enter your name"
          required
        />
      </motion.div>

      <motion.div variants={itemVariants} className="mb-6">
        <label htmlFor="email" className="block text-xs font-bold text-secondary-700 uppercase tracking-widest mb-2">
          Business email Address
        </label>
        <input
          type="email"
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
          id="phone"
          name="phone"
          className="w-full border border-secondary-200 bg-secondary-50 px-4 py-3 text-secondary-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 focus:bg-white shadow-inner focus:shadow-md transition-all duration-300"
          placeholder="Enter your phone number"
          required
          pattern="[0-9]{10}"
        />
      </motion.div>

      <motion.div variants={itemVariants} className="mb-6">
        <label htmlFor="service" className="block text-xs font-bold text-secondary-700 uppercase tracking-widest mb-2">
          Service Required
        </label>
        <select
          id="service"
          name="service"
          className="w-full border border-secondary-200 bg-secondary-50 px-4 py-3 text-secondary-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 focus:bg-white shadow-inner focus:shadow-md transition-all duration-300 appearance-none"
          required
        >
          <option value="">Select a service</option>
          <option value="web-development">Web Development</option>
          <option value="app-development">App Development</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="devops">DevOps Services</option>
          <option value="other">Other</option>
        </select>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-6">
        <label htmlFor="budget" className="block text-xs font-bold text-secondary-700 uppercase tracking-widest mb-2">
          Estimated Budget
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full border border-secondary-200 bg-secondary-50 px-4 py-3 text-secondary-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 focus:bg-white shadow-inner focus:shadow-md transition-all duration-300 appearance-none"
          required
        >
          <option value="">Select budget range</option>
          <option value="0-5000">$0 - $5,000</option>
          <option value="5000-10000">$5,000 - $10,000</option>
          <option value="10000-25000">$10,000 - $25,000</option>
          <option value="25000-50000">$25,000 - $50,000</option>
          <option value="50000+">$50,000+</option>
        </select>
      </motion.div>

      <motion.div variants={itemVariants} className="mb-10">
        <label htmlFor="requirements" className="block text-xs font-bold text-secondary-700 uppercase tracking-widest mb-2">
          Project Requirements
        </label>
        <textarea
          id="requirements"
          name="requirements"
          rows="4"
          className="w-full border border-secondary-200 bg-secondary-50 px-4 py-3 text-secondary-900 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/50 focus:bg-white shadow-inner focus:shadow-md transition-all duration-300 resize-none"
          placeholder="Please describe your project requirements"
          required
        />
      </motion.div>

      <motion.button
        variants={itemVariants}
        type="submit"
        disabled={loading}
        className={`w-full font-semibold py-4 uppercase tracking-widest text-sm transition-colors ${loading ? "bg-secondary-200 text-secondary-500 cursor-not-allowed" : "bg-primary-900 text-white hover:bg-primary-800"}`}
      >
        {loading ? "Submitting..." : "Request Quote"}
      </motion.button>
    </motion.form>
  );
};

const Quote = forwardRef((props, ref) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white font-sans overflow-x-hidden" ref={ref}>
      <ServiceHero 
        breadcrumbTitle="Request Quote"
        title="Start Your Project"
        description="Tell us about your project and we'll get back to you with a custom quote within 24 hours."
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"
        primaryCTA="Contact Us"
        secondaryCTA="Our Services"
        primaryLink="/contact"
        secondaryLink="/services"
      />

      <div className="section-padding bg-secondary-50 border-b border-secondary-200">
        <div className="container-custom">
          
          <div className="grid lg:grid-cols-2 gap-0 border border-secondary-200">
            <div className="p-10 lg:p-14 bg-white border-b lg:border-b-0 lg:border-r border-secondary-200 flex flex-col justify-center">
              <span className="text-primary-800 font-bold uppercase tracking-widest text-xs mb-4 block">
                Why Choose Us?
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary-900 tracking-tight leading-tight mb-8">
                Partner with the best to accelerate your growth.
              </h2>
              
              <div className="space-y-6">
                {[
                  "Competitive pricing and transparent project management",
                  "Expert team of engineers and designers",
                  "Focus on scalable architectures",
                  "Timely delivery and agile methodologies",
                  "Dedicated post-launch support and maintenance"
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary-700"></div>
                    </div>
                    <p className="text-secondary-700 leading-relaxed font-medium">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 pt-10 border-t border-secondary-200">
                <FaFileInvoiceDollar className="text-primary-800 text-4xl mb-6 opacity-20" />
                <p className="text-secondary-600 text-sm leading-relaxed italic">
                  "Our goal is to provide exceptional value and deliver products that exceed your expectations. Fill out the form, and a technical expert will reach out to schedule a discovery call."
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center bg-secondary-50 p-0 lg:p-0">
              <QuoteForm />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
});

export default Quote;