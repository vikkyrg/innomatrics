import React from 'react';
import { Link } from 'react-router-dom';

const ServiceHero = ({ breadcrumbTitle, title, description, primaryCTA = "Request a Quote", primaryLink = "/quote", secondaryCTA = "Contact Us", secondaryLink = "/contact", backgroundImage }) => {
  return (
    <div className="relative w-full min-h-[500px] flex items-center bg-primary-900 border-b border-primary-800">
      <div className="absolute inset-0 bg-primary-900 overflow-hidden">
        {backgroundImage ? (
          <div
            className="absolute inset-0 w-full h-full mix-blend-overlay opacity-20 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
        ) : (
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
        )}
      </div>
      
      <div className="container-custom relative z-10 py-24 lg:py-32">
        <div className="max-w-3xl">
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-xs font-bold uppercase tracking-widest text-primary-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-primary-600 mx-2">/</span>
                  <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-primary-400 hover:text-white transition-colors">Services</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-primary-600 mx-2">/</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-white">{breadcrumbTitle || title}</span>
                </div>
              </li>
            </ol>
          </nav>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-200 leading-relaxed font-normal mb-12">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={primaryLink}>
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-secondary-900 hover:bg-secondary-50 text-sm font-bold uppercase tracking-widest px-8 py-4 transition-colors">
                {primaryCTA}
              </button>
            </Link>
            <Link to={secondaryLink}>
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent border border-primary-500 text-white hover:bg-primary-800 text-sm font-bold uppercase tracking-widest px-8 py-4 transition-colors">
                {secondaryCTA}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
