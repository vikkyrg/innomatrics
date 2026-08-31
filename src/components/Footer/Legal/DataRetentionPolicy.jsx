import React from 'react';
import { motion } from 'framer-motion';

const DataRetentionPolicy = () => {
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Data Retention Policy</h1>
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
              At Innomatrics Technologies, we are committed to protecting your privacy and ensuring the security of your personal data. This Data Retention Policy outlines how we manage and retain data collected through our website and services.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">Data Collection</h2>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              We collect and process personal data for the purposes of providing our services and improving user experience. This may include information such as name, email address, phone number, and other contact details provided by users.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">Data Retention Period</h2>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. The retention period may vary depending on the type of data and applicable laws and regulations.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">Data Security</h2>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              We implement appropriate technical and organizational measures to protect personal data against unauthorized access, disclosure, alteration, or destruction. Access to personal data is restricted to authorized personnel who need to know the information for legitimate business purposes.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">Data Deletion</h2>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              At the end of the retention period, or upon request, we will securely delete or anonymize personal data in our possession, unless we are required by law to retain it or have a legitimate business need to retain the data.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">Contact Us</h2>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              If you have any questions or concerns about our Data Retention Policy, please contact us at hello@innomatricstech.com.
            </p>
          
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DataRetentionPolicy;
