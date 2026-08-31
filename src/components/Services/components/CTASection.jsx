import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection = ({ title = "Ready to Transform Your Business?", description = "Partner with our expert engineers to accelerate your digital journey.", primaryCTA = "Get a Quote", primaryLink = "/quote", secondaryCTA = "Contact Sales", secondaryLink = "/contact" }) => {
  return (
    <div className="section-padding bg-white border-t border-secondary-200">
      <div className="container-custom">
        <motion.div 
          className="bg-primary-900 border border-primary-800 p-12 lg:p-20 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle background decoration */}
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 border border-primary-800 opacity-20"
            animate={{ 
              rotate: [0, 90, 180, 270, 360],
              x: [128, 140, 128],
              y: [-128, -140, -128]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          ></motion.div>
          
          <motion.div 
            className="absolute bottom-0 left-0 w-64 h-64 border border-primary-800 opacity-20"
            animate={{ 
              rotate: [360, 270, 180, 90, 0],
              x: [-128, -140, -128],
              y: [128, 140, 128]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          ></motion.div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.span 
              className="inline-block px-2 py-1 bg-primary-800 text-primary-200 text-xs font-semibold tracking-widest uppercase mb-8 border border-primary-700"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Next Steps
            </motion.span>
            
            <motion.h2 
              className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {title}
            </motion.h2>
            
            <motion.p 
              className="text-xl text-primary-200 mx-auto mb-12 leading-relaxed font-normal"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {description}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link to={primaryLink}>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-primary-900 hover:bg-secondary-50 text-sm font-bold uppercase tracking-widest px-8 py-4 transition-colors shadow-lg"
                >
                  {primaryCTA}
                </motion.button>
              </Link>
              <Link to={secondaryLink}>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent border border-primary-500 text-white hover:bg-primary-800 text-sm font-bold uppercase tracking-widest px-8 py-4 transition-colors"
                >
                  {secondaryCTA}
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;
