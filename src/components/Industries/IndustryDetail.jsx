import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { industryData } from '../../data/industryData';
import { FaChartLine, FaBrain, FaRocket, FaHeadset } from 'react-icons/fa';
import ServiceHero from '../Services/components/ServiceHero';
import SectionHeader from '../Services/components/SectionHeader';
import CTASection from '../Services/components/CTASection';
import FAQ from '../Services/components/FAQ';

const IndustryDetail = () => {
  const { industry } = useParams();
  const [activeOffering, setActiveOffering] = useState(0);

  const currentIndustry = industryData[industry?.toLowerCase()] || industryData.healthcare;

  useEffect(() => {
    document.title = `${currentIndustry.title} IT Solutions & Services | Innomatrics`;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = `Empowering the ${currentIndustry.title} sector with innovative digital transformation services, cloud solutions, and scalable enterprise applications.`;

    const scriptId = 'seo-structured-data';
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": `${currentIndustry.title} IT Solutions`,
      "provider": {
        "@type": "Organization",
        "name": "Innomatrics Technologies"
      },
      "description": currentIndustry.overview
    };
    
    scriptTag.text = JSON.stringify(structuredData);

    return () => {
      if (scriptTag) document.head.removeChild(scriptTag);
    };
  }, [currentIndustry]);

  return (
    <div className="bg-white font-sans">
      
      <ServiceHero 
        breadcrumbTitle={currentIndustry.title}
        title={`${currentIndustry.title} Digital Transformation`}
        description={`Transforming the ${currentIndustry.title.split(' ')[0]} industry with digital innovation and robust enterprise solutions.`}
        backgroundImage={currentIndustry.heroImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"}
        primaryCTA="Discuss Your Requirements"
        secondaryCTA="Explore Our Work"
        primaryLink="/contact"
        secondaryLink="/portfolio"
      />

      {/* Overview Section */}
      <div className="section-padding border-b border-secondary-200">
        <div className="container-custom">
          <SectionHeader 
            eyebrow="Industry Overview"
            title={`Driving Innovation in ${currentIndustry.title}`}
            description={currentIndustry.overview}
          />
        </div>
      </div>

      {/* Offerings Interactive Section */}
      <div className="section-padding bg-secondary-50 border-b border-secondary-200">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Left Column: List */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-sm font-bold text-primary-800 uppercase tracking-widest mb-8">
                Our Capabilities
              </h2>
              <ul className="space-y-4 mb-8">
                {currentIndustry.capabilities?.map((cap, index) => (
                  <li 
                    key={index}
                    onClick={() => setActiveOffering(index)}
                    className={`cursor-pointer p-4 border rounded-md transition-all duration-300 flex items-center ${
                      activeOffering === index 
                        ? 'border-primary-600 bg-white shadow-sm text-primary-900 font-bold' 
                        : 'border-transparent text-secondary-600 hover:text-primary-700 hover:bg-white/60'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full mr-4 transition-colors ${activeOffering === index ? 'bg-primary-600' : 'bg-secondary-300'}`}></div>
                    {cap.title}
                  </li>
                ))}
              </ul>
              
              <div className="p-6 bg-white border border-secondary-200 rounded-md">
                <p className="text-secondary-700 text-sm leading-relaxed">
                  {currentIndustry.capabilities?.[activeOffering]?.description || 
                   "Leverage digital technologies to fundamentally change how you operate and deliver value."}
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="w-full lg:w-2/3">
              <div className="relative rounded-md overflow-hidden border border-secondary-200 h-[400px] md:h-[600px] group shadow-sm">
                {(() => {
                  const images = [
                    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1000&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'
                  ];
                  const currentImage = currentIndustry.capabilities?.[activeOffering]?.image || images[activeOffering % images.length];
                  
                  return (
                    <motion.img 
                      key={activeOffering} 
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src={currentImage}
                      alt={currentIndustry.capabilities?.[activeOffering]?.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  );
                })()}
                
                <div className="absolute inset-x-0 bottom-0 bg-primary-900/90 p-8 pt-12">
                  <motion.p 
                    key={`desc-${activeOffering}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white text-lg font-medium leading-relaxed max-w-3xl"
                  >
                    Scalable solutions for {currentIndustry.title.split(' ')[0]} organizations: {currentIndustry.capabilities?.[activeOffering]?.description}
                  </motion.p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Success Story / Case Study Section */}
      {currentIndustry.caseStudy && (
        <div className="section-padding bg-primary-900 text-white border-b border-primary-800">
          <div className="container-custom">
            <h2 className="text-xs font-bold tracking-widest text-primary-300 uppercase mb-12 text-center">Featured Success Story</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-96 lg:h-full min-h-[400px] rounded-md overflow-hidden border border-primary-800">
                <img 
                  src={currentIndustry.caseStudy.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"}
                  alt={currentIndustry.caseStudy.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/20"></div>
              </div>
              <div className="space-y-10">
                <h3 className="text-3xl md:text-4xl font-bold leading-tight text-white">{currentIndustry.caseStudy.title}</h3>
                
                <div>
                  <h4 className="text-primary-300 text-sm font-bold uppercase tracking-widest mb-3 border-b border-primary-800 pb-2">The Challenge</h4>
                  <p className="text-primary-100 text-lg leading-relaxed">{currentIndustry.caseStudy.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-primary-300 text-sm font-bold uppercase tracking-widest mb-3 border-b border-primary-800 pb-2">Our Solution</h4>
                  <p className="text-primary-100 text-lg leading-relaxed">{currentIndustry.caseStudy.solution}</p>
                </div>
                
                <div className="bg-primary-800/50 p-8 border border-primary-700 rounded-md">
                  <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-3">The Impact</h4>
                  <p className="text-white text-xl font-medium">{currentIndustry.caseStudy.result}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Partner With Us Section */}
      <div className="section-padding bg-white border-b border-secondary-200">
        <div className="container-custom max-w-5xl">
          <SectionHeader 
            eyebrow="The Innomatrics Advantage"
            title={`Why Partner With Us for ${currentIndustry.title.split(' ')[0]}?`}
            description="We combine deep industry knowledge with engineering excellence to deliver solutions that drive real business outcomes."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-secondary-200 mt-12">
            
            <div className="bg-white border-b border-r border-secondary-200 p-8 hover:bg-secondary-50 transition-colors group">
              <div className="w-12 h-12 bg-primary-50 rounded-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaBrain className="w-5 h-5 text-primary-700" />
              </div>
              <h4 className="text-lg font-bold text-primary-900 mb-3">Domain Expertise</h4>
              <p className="text-sm text-secondary-600 leading-relaxed">
                Deep understanding of {currentIndustry.title.split(' ')[0]} challenges, compliance requirements, and market dynamics.
              </p>
            </div>

            <div className="bg-white border-b border-r border-secondary-200 p-8 hover:bg-secondary-50 transition-colors group">
              <div className="w-12 h-12 bg-primary-50 rounded-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaRocket className="w-5 h-5 text-primary-700" />
              </div>
              <h4 className="text-lg font-bold text-primary-900 mb-3">Accelerated Delivery</h4>
              <p className="text-sm text-secondary-600 leading-relaxed">
                Agile methodologies and pre-built accelerators ensuring faster time-to-market for your solutions.
              </p>
            </div>

            <div className="bg-white border-b border-r border-secondary-200 p-8 hover:bg-secondary-50 transition-colors group">
              <div className="w-12 h-12 bg-primary-50 rounded-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaChartLine className="w-5 h-5 text-primary-700" />
              </div>
              <h4 className="text-lg font-bold text-primary-900 mb-3">Enterprise Scalability</h4>
              <p className="text-sm text-secondary-600 leading-relaxed">
                Future-proof architectures designed to grow seamlessly as your business expands.
              </p>
            </div>

            <div className="bg-white border-b border-r border-secondary-200 p-8 hover:bg-secondary-50 transition-colors group">
              <div className="w-12 h-12 bg-primary-50 rounded-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaHeadset className="w-5 h-5 text-primary-700" />
              </div>
              <h4 className="text-lg font-bold text-primary-900 mb-3">End-to-End Support</h4>
              <p className="text-sm text-secondary-600 leading-relaxed">
                Dedicated engineering teams providing continuous maintenance, optimization, and 24/7 support.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* FAQ Section */}
      {currentIndustry.faqs && currentIndustry.faqs.length > 0 && (
        <FAQ faqs={currentIndustry.faqs} />
      )}

      {/* CTA Section */}
      <CTASection />
      
    </div>
  );
};

export default IndustryDetail;