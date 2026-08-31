import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { hireDevelopersData } from './hireData';
import ServiceHero from '../Services/components/ServiceHero';
import SectionHeader from '../Services/components/SectionHeader';
import CTASection from '../Services/components/CTASection';

const HireDevelopers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Hire Top-Tier Developers | Innomatrics";
  }, []);

  return (
    <div className="bg-white font-sans">
      
      {/* Hero Section */}
      <ServiceHero 
        breadcrumbTitle="Staff Augmentation"
        title="Hire Top-Tier Developers"
        description="From React experts to AI engineers, we provide pre-vetted, elite tech talent to integrate seamlessly into your team and bring your digital vision to life."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
        primaryCTA="Consult Our Team"
        secondaryCTA="View Engagement Models"
        primaryLink="/contact"
        secondaryLink="#models"
      />

      {/* Main Grid */}
      <div className="section-padding bg-secondary-50 border-b border-secondary-200" id="models">
        <div className="container-custom">
          
          <SectionHeader 
            eyebrow="Specialized Talent"
            title="Scale Your Engineering Instantly"
            description="We provide full-stack capabilities across a wide array of specialized engineering disciplines."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-secondary-200 mt-12 gap-0">
            {Object.keys(hireDevelopersData).map((key) => {
              const data = hireDevelopersData[key];
              return (
                <div key={key} className="group bg-white border-b border-r border-secondary-200 overflow-hidden hover:bg-secondary-50 transition-colors flex flex-col h-full relative">
                  
                  <div className="h-48 overflow-hidden relative border-b border-secondary-200">
                    <img 
                      src={data.heroImage || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"} 
                      alt={data.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-primary-900/40 group-hover:bg-primary-900/20 transition-colors duration-500"></div>
                  </div>

                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-primary-700 transition-colors">
                        {data.title}
                      </h4>
                      <p className="text-sm text-secondary-600 mb-8 leading-relaxed">
                        {data.subtitle}
                      </p>
                    </div>
                    <Link to={`/hire/${key}`} className="inline-flex items-center text-primary-800 font-bold hover:text-primary-600 transition-colors mt-auto group/link text-sm uppercase tracking-wider">
                      Explore Profile 
                      <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <CTASection />
    </div>
  );
};

export default HireDevelopers;
