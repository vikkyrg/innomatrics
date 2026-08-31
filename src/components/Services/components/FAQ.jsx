import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = ({ title = "Frequently Asked Questions", faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary-800 font-bold uppercase tracking-widest text-xs mb-4 block">Support</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary-900 tracking-tight">{title}</h2>
        </div>
        <div className="border border-secondary-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white transition-colors duration-300 ${index !== faqs.length - 1 ? 'border-b border-secondary-200' : ''}`}
              >
                <button
                  className={`w-full flex items-center justify-between p-8 text-left transition-colors duration-300 ${isOpen ? 'bg-secondary-50' : 'hover:bg-secondary-50'}`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <h3 className={`text-lg font-bold pr-8 ${isOpen ? 'text-primary-900' : 'text-secondary-900'}`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center transition-colors border ${isOpen ? 'bg-primary-900 border-primary-900 text-white' : 'bg-white border-secondary-300 text-secondary-600'}`}>
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="p-8 pt-2 text-secondary-600 leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
