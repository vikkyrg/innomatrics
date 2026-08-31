import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const useIntersection = (callback, options) => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [callback, options]);

  return ref;
};

const CountUpAnimation = ({ initialValue, targetValue, text, suffix = "+" }) => {
  const [count, setCount] = useState(initialValue);
  const [hasAnimated, setHasAnimated] = useState(false);
  const duration = 2000;

  const startAnimation = () => {
    if (hasAnimated) return;
    setHasAnimated(true);
    let startValue = initialValue;
    const intervalTime = Math.max(16, Math.floor(duration / (targetValue - initialValue)));
    
    const counter = setInterval(() => {
      startValue += Math.ceil((targetValue - initialValue) / (duration / intervalTime));
      if (startValue >= targetValue) {
        startValue = targetValue;
        clearInterval(counter);
      }
      setCount(startValue);
    }, intervalTime);
  };

  const ref = useIntersection(() => {
    startAnimation();
  }, { threshold: 0.1 });

  return (
    <div ref={ref} className="flex flex-col border-t border-primary-800 pt-6">
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight font-mono">
          {count >= targetValue ? targetValue : count}
        </span>
        <span className="text-2xl text-primary-400 font-bold">{suffix}</span>
      </div>
      <span className="text-xs md:text-sm text-primary-300 font-bold tracking-widest uppercase">
        {text}
      </span>
    </div>
  );
};

function CountRise() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-primary-900 py-24 border-t border-b border-primary-950 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left: Section Header */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="inline-block w-fit px-3 py-1.5 bg-primary-800 text-primary-200 text-xs font-bold tracking-widest uppercase mb-6 border border-primary-700">
              Telemetry & Impact
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Proven scale across global infrastructure.
            </h2>
            <p className="text-primary-200 leading-relaxed max-w-md text-sm font-normal">
              Our engineering systems handle massive concurrency and stringent security requirements for the world's most demanding enterprises.
            </p>
          </motion.div>
          
          {/* Right: Data Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-2 gap-x-8 gap-y-12"
          >
            <motion.div variants={itemVariants}>
              <CountUpAnimation initialValue={0} targetValue={99} suffix="%" text="Uptime Reliability" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CountUpAnimation initialValue={0} targetValue={150} suffix="+" text="Enterprise Deployments" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CountUpAnimation initialValue={0} targetValue={50} suffix="M+" text="API Requests / Day" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CountUpAnimation initialValue={0} targetValue={24} suffix="/7" text="Global Support Ops" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default CountRise;
