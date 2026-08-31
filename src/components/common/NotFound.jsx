import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* Background Decorators */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary-50 blur-3xl rounded-full opacity-50" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary-50 blur-3xl rounded-full opacity-50" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f172a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full bg-white border border-secondary-200 shadow-xl relative z-10 text-center"
      >
        <div className="bg-primary-900 p-12 lg:p-20 relative overflow-hidden flex flex-col items-center border-b border-primary-800">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-500 blur-3xl opacity-20 rounded-full" />
          
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="w-24 h-24 bg-white flex items-center justify-center text-primary-900 mb-8 relative z-10 shadow-2xl"
          >
            <ShieldAlert className="w-12 h-12" />
          </motion.div>
          
          <h1 className="text-6xl lg:text-8xl font-extrabold text-white tracking-tight relative z-10 font-mono mb-4">
            404
          </h1>
          <p className="text-primary-300 font-bold uppercase tracking-widest text-sm relative z-10">
            System Route Not Found
          </p>
        </div>

        <div className="p-10 lg:p-12 space-y-8 bg-secondary-50">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary-900">Page Does Not Exist</h2>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed max-w-lg mx-auto">
              The requested URL was not found on this server. It might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-900 hover:bg-primary-800 text-white font-bold uppercase tracking-widest text-xs transition-all duration-300 w-full sm:w-auto shadow-md hover:shadow-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Homepage
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-secondary-300 hover:border-primary-900 text-secondary-700 hover:text-primary-900 font-bold uppercase tracking-widest text-xs transition-all duration-300 w-full sm:w-auto"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
