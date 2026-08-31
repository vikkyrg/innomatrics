import React, { useEffect, useState } from "react";
import data from "./data";
import { Link } from "react-router-dom";
import ServiceHero from "../Services/components/ServiceHero";
import SectionHeader from "../Services/components/SectionHeader";
import CTASection from "../Services/components/CTASection";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white font-sans">
      <ServiceHero 
        breadcrumbTitle="Our Work"
        title="Digital Portfolio"
        description="Explore our track record of engineering excellence and digital transformation across diverse industries."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
        primaryCTA="Discuss Your Project"
        secondaryCTA="View All Projects"
        primaryLink="/contact"
        secondaryLink="#projects"
      />

      <div id="projects" className="section-padding bg-secondary-50 border-b border-secondary-200">
        <div className="container-custom">
          
          <SectionHeader 
            eyebrow="Case Studies"
            title="Projects We've Delivered"
            description="A curated selection of our successful partnerships and technological achievements."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-secondary-200 mt-12">
            {data.map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="group relative bg-white border-b border-r border-secondary-200 overflow-hidden flex flex-col h-[400px]"
              >
                <div className="relative h-[60%] overflow-hidden border-b border-secondary-200">
                  <img
                    src={item.image}
                    alt={item.title || item.text}
 className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow bg-white group-hover:bg-secondary-50 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-800 transition-colors">
                    {item.text}
                  </h3>
                  {item.desc && (
                    <p className="text-secondary-600 text-sm leading-relaxed flex-grow line-clamp-2">
                      {item.desc}
                    </p>
                  )}
                  <span className="text-primary-800 group-hover:text-primary-600 text-xs font-bold uppercase tracking-widest inline-flex items-center mt-auto transition-colors">
                    Visit Website
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>

      <CTASection />
    </div>
  );
};

export default Portfolio;
