import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Mail, Lock, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      const sanitizedEmail = email.trim().toLowerCase();
      const sanitizedPassword = password.trim();

      if (sanitizedEmail === 'admin@example.com' && sanitizedPassword === 'admin123') {
        localStorage.setItem('innomatrics_admin_token', 'mock-token');
        localStorage.setItem('innomatrics_admin_user', JSON.stringify({ email: 'admin@example.com', role: 'Administrator' }));
        setIsLoading(false);
        navigate('/admin/dashboard');
      } else {
        setError('Invalid email or password. Please use admin@example.com and admin123.');
        setIsLoading(false);
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative font-sans">
      
      {/* Main Login Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white border border-secondary-200 shadow-xl relative z-10"
      >
        
        {/* Header */}
        <div className="bg-primary-900 p-10 border-b border-primary-800 text-center relative overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[120px] h-[120px] bg-primary-400 blur-3xl opacity-20" />
          <div className="mx-auto w-16 h-16 bg-primary-800 border border-primary-700 flex items-center justify-center mb-6 text-primary-300 shadow-inner">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-extrabold text-white tracking-tight">Admin Console</h2>
          <p className="text-primary-300 text-xs font-bold uppercase tracking-widest mt-2">Secure Access Area</p>
        </div>

        <div className="p-10">
          {/* Error Alert */}
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-8 p-4 bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-sm"
            >
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block uppercase tracking-wider text-[10px] text-red-500 mb-1">Authentication Failed</span>
                {error}
              </div>
            </motion.div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold text-secondary-500 uppercase tracking-widest mb-2">
                Email Address
              </label>
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-secondary-400 group-focus-within:text-primary-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  required
                  className="w-full bg-white border border-secondary-300 focus:border-primary-600 focus:ring-0 py-3 pl-12 pr-4 text-secondary-900 placeholder-secondary-400 focus:outline-none transition-all duration-200 text-sm font-medium"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-secondary-500 uppercase tracking-widest mb-2">
                Password
              </label>
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-secondary-400 group-focus-within:text-primary-600 transition-colors">
                  <Lock className="w-4 h-4" />
                </span>
                <input
                  type="password"
                  required
                  className="w-full bg-white border border-secondary-300 focus:border-primary-600 focus:ring-0 py-3 pl-12 pr-4 text-secondary-900 placeholder-secondary-400 focus:outline-none transition-all duration-200 text-sm font-medium"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Guide Credentials Hint */}
            <div className="p-4 bg-secondary-50 border border-secondary-200 text-xs text-secondary-600 leading-relaxed font-medium">
              <span className="font-bold text-primary-800 uppercase tracking-widest text-[10px] block mb-2">Demo Sign-in Credentials</span>
              <div className="grid grid-cols-2 gap-2">
                <div>Email:</div>
                <div className="font-mono text-secondary-900">admin@example.com</div>
                <div>Password:</div>
                <div className="font-mono text-secondary-900">admin123</div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-8 bg-primary-900 hover:bg-white text-white hover:text-primary-900 border border-primary-900 font-bold uppercase tracking-widest text-xs py-4 px-4 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Authenticating...
                </>
              ) : (
                'Sign In to Console'
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
