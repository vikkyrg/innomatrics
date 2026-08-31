import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/innomatric_logo_only.png';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-primary-900 flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 flex items-center justify-center mb-6 relative overflow-hidden bg-white rounded-xl"
          >
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-0 bg-primary-100/50 skew-x-12"
            />
            <img src={logo} alt="Innomatrics Logo" className="w-12 h-12 object-contain relative z-10" />
          </motion.div>
          
          {/* Text Animation */}
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="text-white font-extrabold text-2xl tracking-widest uppercase"
            >
              INNOMATRICS
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mt-1">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="text-primary-300 font-bold text-[11px] tracking-[0.3em] uppercase"
            >
              Technologies
            </motion.p>
          </div>

          {/* Loading Bar */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-1 bg-primary-800 overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-white"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
