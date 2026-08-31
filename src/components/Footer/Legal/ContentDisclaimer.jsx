import React from 'react';
import { motion } from 'framer-motion';

const ContentDisclaimer = () => {
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Content Disclaimer</h1>
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
              The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
            </p>

            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>

            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              The content on this website is provided on an "as is" basis without any representations or warranties, express or implied. While we endeavor to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date.
            </p>

            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              Through this website, you are able to link to other websites which are not under the control of our company. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>

            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              Every effort is made to keep the website up and running smoothly. However, our company takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
            </p>

            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6 mt-8">
              If you have any concerns about the accuracy or reliability of the information on this website, please contact us at hello@innomatricstech.com.
            </p>
          
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentDisclaimer;
