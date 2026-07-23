import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Mail, Lock, AlertCircle, Loader2 } from 'lucide-react';

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
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Graphic Blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-3xl" />

      {/* Main Login Card */}
      <div className="w-full max-w-md bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl relative z-10 transition-all duration-300">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-blue-600/10 border border-blue-500/25 rounded-2xl flex items-center justify-center mb-4 text-blue-400">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Admin Console</h2>
          <p className="text-slate-400 text-sm mt-1">Access the Innomatrics blog manager</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-950/50 border border-red-500/30 flex items-start gap-3 text-red-200 text-sm animate-shake">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold block">Authentication Failed</span>
              {error}
            </div>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                <Mail className="w-5 h-5" />
              </span>
              <input
                type="email"
                required
                className="w-full bg-slate-900/60 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl py-3 pl-11 pr-4 text-white placeholder-slate-500 focus:outline-none transition-all duration-200 text-sm"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                <Lock className="w-5 h-5" />
              </span>
              <input
                type="password"
                required
                className="w-full bg-slate-900/60 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl py-3 pl-11 pr-4 text-white placeholder-slate-500 focus:outline-none transition-all duration-200 text-sm"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Guide Credentials Hint */}
          <div className="p-3 bg-slate-900/40 border border-slate-700/30 rounded-xl text-[11px] text-slate-400 leading-relaxed">
            <span className="font-semibold text-blue-400">Demo Sign-in Credentials:</span>
            <br />
            Email: <span className="font-mono text-slate-300">admin@example.com</span>
            <br />
            Password: <span className="font-mono text-slate-300">admin123</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3.5 px-4 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 focus:outline-none transition-all duration-200 flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Signing you in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
