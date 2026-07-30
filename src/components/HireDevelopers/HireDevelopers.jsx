import React, { useEffect } from 'react';
import NAv from '../Navbar/NAv';
import { Link } from 'react-router-dom';
import { hireDevelopersData } from './hireData';

const HireDevelopers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Hire Top-Tier Developers | Innomatrics";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <NAv />
      
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#020617] pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
            Staff Augmentation
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-300 mb-4 drop-shadow-lg">
            Hire <span className="text-blue-400">Top-Tier</span> Developers
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6 tracking-wide">
            Scale Your Engineering Instantly.
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-6 leading-relaxed font-light">
            From React experts to AI engineers, we provide pre-vetted, elite tech talent to integrate seamlessly into your team and bring your digital vision to life.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(hireDevelopersData).map((key) => {
            const data = hireDevelopersData[key];
            return (
              <div key={key} className="group bg-white/90 backdrop-blur-lg rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-3 border border-white/50 flex flex-col h-full relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/40 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
                
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={data.heroImage || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"} 
                    alt={data.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                </div>

                <div className="p-8 flex-grow flex flex-col justify-between relative z-10 bg-white">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 min-h-[64px] leading-tight group-hover:text-blue-900 transition-colors">
                      {data.title}
                    </h4>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {data.subtitle}
                    </p>
                  </div>
                  <Link to={`/hire/${key}`} className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors mt-auto group/link">
                    Explore Profile 
                    <svg className="w-5 h-5 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HireDevelopers;
