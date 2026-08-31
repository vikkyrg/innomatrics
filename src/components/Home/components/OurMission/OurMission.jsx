import React from "react";
import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="h-full bg-primary-900 border border-primary-800 p-10 lg:p-14 flex flex-col relative overflow-hidden"
    >
      <div className="absolute top-[-20%] right-[-10%] w-[120px] h-[120px] bg-primary-400 blur-3xl opacity-20" />
      
      <span className="inline-block w-fit px-2 py-1 bg-primary-800 text-primary-200 text-xs font-bold tracking-widest uppercase mb-8 border border-primary-700 relative z-10">
        Mission
      </span>
      
      <h3 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-8 tracking-tight relative z-10">
        Accelerate digital transformation with uncompromising quality.
      </h3>
      
      <div className="mt-auto pt-8 border-t border-primary-800 relative z-10">
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 mt-1.5 font-bold text-xs uppercase tracking-widest">01.</span>
            <p className="text-primary-100 text-sm leading-relaxed font-normal">Deliver zero-defect software that scales effortlessly under load.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 mt-1.5 font-bold text-xs uppercase tracking-widest">02.</span>
            <p className="text-primary-100 text-sm leading-relaxed font-normal">Partner as a true technical extension of our clients' core teams.</p>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default OurMission;
