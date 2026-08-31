import React from "react";
import { motion } from "framer-motion";

const OurVision = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="h-full bg-white border border-secondary-200 p-10 lg:p-14 flex flex-col hover:bg-secondary-50 transition-colors duration-300 shadow-sm hover:shadow-md"
    >
      <span className="inline-block w-fit px-2 py-1 bg-secondary-100 text-secondary-800 text-xs font-bold tracking-widest uppercase mb-8 border border-secondary-200">
        Vision
      </span>
      
      <h3 className="text-3xl lg:text-4xl font-extrabold text-secondary-900 leading-tight mb-8 tracking-tight">
        To architect the future of global enterprise technology.
      </h3>
      
      <div className="mt-auto pt-8 border-t border-secondary-200">
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-primary-800 mt-1.5 font-bold text-xs uppercase tracking-widest">01.</span>
            <p className="text-secondary-600 text-sm leading-relaxed font-normal">Pioneer scalable architectures that redefine industry standards.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-800 mt-1.5 font-bold text-xs uppercase tracking-widest">02.</span>
            <p className="text-secondary-600 text-sm leading-relaxed font-normal">Foster a culture of continuous engineering excellence.</p>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default OurVision;
