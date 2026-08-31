import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-secondary-50 font-sans pb-24">
      {/* Hero Section */}
      <div className="bg-primary-900 border-b border-primary-800 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-900 overflow-hidden">
          <div className="absolute inset-0 w-full h-full mix-blend-overlay opacity-20 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80')]"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-300 font-bold uppercase tracking-widest text-xs mb-4 block">Legal Document</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Terms of Service</h1>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-custom mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white border border-secondary-200 p-8 md:p-12 shadow-sm"
        >
          <div className="prose prose-lg max-w-none">

            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              Welcome to Innomatrics Technologies! These Terms of Service ("Terms") govern your access to and use of our website, services, and products provided by Innomatrics Technologies ("Innomatrics", "we", "our", or "us"). By accessing or using any part of our services, you agree to be bound by these Terms. If you do not agree to all the terms and conditions of this agreement, then you may not access our services.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">1. Acceptance of Terms</h2>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              By accessing or using our services, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any of these Terms, you are prohibited from using or accessing our services.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">2. Use of Services</h2>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of any account information and passwords associated with your use of our service.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">3. Intellectual Property</h2>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              All content included in or made available through our services, such as text, graphics, logos, images, and software, is the property of Innomatrics Technologies or its licensors and is protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">4. User Content</h2>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              You retain ownership of any content you submit, post, or display on or through our services ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such User Content.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">5. Prohibited Activities</h2>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              You agree not to engage in any of the following prohibited activities: (a) use our services for any illegal purpose; (b) transmit any viruses, worms, or other malicious software; (c) interfere with or disrupt our services or servers; (d) attempt to gain unauthorized access to our services or any accounts, computer systems, or networks connected to our services; (e) collect or harvest any personally identifiable information from our services; (f) impersonate any person or entity, or falsely state or misrepresent your affiliation with a person or entity.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">6. Termination</h2>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">7. Disclaimer</h2>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              Our services are provided on an "as is" and "as available" basis. We do not warrant that our services will be uninterrupted, secure, or error-free.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">8. Limitation of Liability</h2>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              In no event shall Innomatrics Technologies, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">9. Changes to Terms</h2>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>

            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6 mt-6">
              If you have any questions about these Terms, please contact us at hello@innomatricstech.com
            </p>

            <p className="text-secondary-700 mt-4 text-sm">
              Last updated: 19-06-2024
            </p>
          
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
