import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForward, MdStorage, MdCloudQueue, MdSecurity } from "react-icons/md";
import { motion } from 'framer-motion';

const bgImages = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop"
];

const HeroSlider = () => {
  const [currentBg, setCurrentBg] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[85vh] flex items-center bg-white overflow-hidden border-b border-secondary-200">
      
      {/* Background Image Carousel */}
      <motion.div
        key={currentBg}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('${bgImages[currentBg]}')`, filter: "saturate(1.3)" }}
      ></motion.div>

      {/* Soft Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-transparent to-primary-50/50 pointer-events-none z-0"></div>
      
      <div className="container-custom relative z-10 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Typographic Core */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-50 border border-secondary-200 text-secondary-800 text-xs font-semibold tracking-widest uppercase mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary-600"></span>
              Enterprise Technology Partner
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-[72px] font-bold text-secondary-900 mb-8 leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Architecting the <br className="hidden md:block"/>
              <span className="text-primary-800">Digital Enterprise.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-secondary-600 mb-12 leading-relaxed max-w-2xl font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              We engineer scalable, secure, and high-performance digital platforms. By bridging complex business logic with modern infrastructure, we accelerate modernization for global industry leaders.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-primary-900 hover:bg-primary-800 text-white text-sm font-semibold px-8 py-4 transition-colors group relative z-20">
                Discuss Architecture
                <MdArrowForward className="text-lg transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-3 bg-white hover:bg-secondary-50 text-secondary-900 border border-secondary-200 text-sm font-semibold px-8 py-4 transition-colors relative z-20">
                Explore Capabilities
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Technical Abstract / Data Viz abstraction */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary-50 rounded-full blur-3xl opacity-50 z-0"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.6, 0.5]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              {/* Stat Block 1 */}
              <motion.div 
                className="bg-white border border-secondary-200 p-6 flex flex-col justify-between h-48 transform translate-y-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: 28, transition: { duration: 0.2 } }}
              >
                <MdStorage className="text-2xl text-secondary-400 mb-4" />
                <div>
                  <div className="text-3xl font-bold text-secondary-900 mb-1">99.9%</div>
                  <div className="text-xs font-semibold text-secondary-500 uppercase tracking-widest">Uptime SLA</div>
                </div>
              </motion.div>
              
              {/* Stat Block 2 */}
              <motion.div 
                className="bg-primary-900 border border-primary-800 p-6 flex flex-col justify-between h-48"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <MdCloudQueue className="text-2xl text-primary-400 mb-4" />
                <div>
                  <div className="text-3xl font-bold text-white mb-1">Scale</div>
                  <div className="text-xs font-semibold text-primary-400 uppercase tracking-widest">Cloud Native</div>
                </div>
              </motion.div>

              {/* Stat Block 3 */}
              <motion.div 
                className="bg-white border border-secondary-200 p-6 flex flex-col justify-between h-48 col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="flex justify-between items-start mb-4">
                  <MdSecurity className="text-2xl text-secondary-400" />
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-75"></span>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-150"></span>
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold text-secondary-900 mb-1">Zero-Trust Architecture</div>
                  <div className="text-xs font-semibold text-secondary-500 uppercase tracking-widest">Enterprise Security Standard</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;