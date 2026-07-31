import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { industryData } from '../../data/industryData';
import { FaDesktop, FaMobile, FaCode, FaCloud, FaShieldAlt, FaChartLine, FaChevronDown, FaChevronUp, FaBrain, FaRocket, FaHeadset } from 'react-icons/fa';

const IndustryDetail = () => {
  const { industry } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const [activeOffering, setActiveOffering] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const currentIndustry = industryData[industry?.toLowerCase()] || industryData.healthcare;

  // SEO: Dynamic Meta Tags and JSON-LD
  useEffect(() => {
    // 1. Set Document Title
    document.title = `${currentIndustry.title} IT Solutions & Services | Innomatrics`;
    
    // 2. Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = `Empowering the ${currentIndustry.title} sector with innovative digital transformation services, cloud solutions, and scalable enterprise applications.`;

    // 3. Inject JSON-LD Structured Data
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
      // Cleanup on unmount or industry change
      if (scriptTag) document.head.removeChild(scriptTag);
    };
  }, [currentIndustry]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* 1. Hero Section */}
      <section 
        className="bg-cover bg-center relative h-[500px]" 
        style={{
          backgroundImage: `url('${currentIndustry.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        <div className="container mx-auto px-4 py-20 md:py-40 relative z-10 h-full flex flex-col justify-center">
          <div className="flex flex-col my-[50px] md:my-[10px] items-start justify-start gap-4 text-start">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              {currentIndustry.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 max-w-2xl"
            >
              Transforming the {currentIndustry.title.split(' ')[0]} industry with digital innovation
            </motion.p>
            <motion.hr 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-sky-600 border-t-2 w-full md:w-[50%]" 
            />
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <div className="bg-gray-50 py-16 md:py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h2 className="text-xl font-bold text-orange-500 uppercase mb-4">Overview</h2>
          <p className="text-lg text-gray-800 leading-8 max-w-5xl">
            {currentIndustry.overview}
          </p>
        </div>
      </div>

      {/* 4. Offerings Interactive Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left Column: List */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-2xl font-bold text-red-500 uppercase mb-8 tracking-wide">
                Our Offerings
              </h2>
              <ul className="space-y-5 mb-8">
                {currentIndustry.capabilities?.map((cap, index) => (
                  <li 
                    key={index}
                    onClick={() => {
                      // We need a state for this. Let's assume activeOffering state is added at the top.
                      setActiveOffering(index);
                    }}
                    className={`cursor-pointer text-lg font-semibold transition-all duration-300 flex items-center ${
                      activeOffering === index 
                        ? 'text-red-500 transform translate-x-2' 
                        : 'text-gray-700 hover:text-red-400'
                    }`}
                  >
                    {activeOffering === index && <span className="mr-3">—</span>}
                    {cap.title}
                  </li>
                ))}
              </ul>
              
              <div className="animate-fade-in-up">
                <p className="text-gray-600 text-base leading-relaxed">
                  {currentIndustry.capabilities?.[activeOffering]?.description || 
                   "Leverage digital technologies to fundamentally change how you operate and deliver value."}
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="w-full lg:w-2/3">
              <div className="relative rounded-xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] group">
                {(() => {
                  const images = [
                    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1000&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'
                  ];
                  const currentImage = images[activeOffering % images.length];
                  
                  return (
                    <motion.img 
                      key={activeOffering} // Force re-render animation when activeOffering changes
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src={currentImage}
                      alt={currentIndustry.capabilities?.[activeOffering]?.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  );
                })()}
                
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 md:p-8 pt-20">
                  <motion.p 
                    key={`desc-${activeOffering}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white text-lg md:text-xl font-medium leading-relaxed"
                  >
                    Scalable solutions for {currentIndustry.title.split(' ')[0]} organizations: {currentIndustry.capabilities?.[activeOffering]?.description}
                  </motion.p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 5. Success Story / Case Study Section */}
      {currentIndustry.caseStudy && (
        <div className="bg-blue-900 py-16 md:py-24 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-12 text-center">Featured Success Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 md:h-full rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={currentIndustry.caseStudy.image}
                  alt={currentIndustry.caseStudy.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="space-y-8">
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">{currentIndustry.caseStudy.title}</h3>
                
                <div>
                  <h4 className="text-orange-500 font-semibold mb-2">The Challenge</h4>
                  <p className="text-gray-300 text-lg">{currentIndustry.caseStudy.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-orange-500 font-semibold mb-2">Our Solution</h4>
                  <p className="text-gray-300 text-lg">{currentIndustry.caseStudy.solution}</p>
                </div>
                
                <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                  <h4 className="text-white font-bold mb-2">The Impact</h4>
                  <p className="text-blue-200 text-lg font-medium">{currentIndustry.caseStudy.result}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. Insights & Resources Section */}
      {currentIndustry.insights && currentIndustry.insights.length > 0 && (
        <div className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-gray-900">Latest Insights in {currentIndustry.title.split(' ')[0]}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentIndustry.insights.map((insight, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-gray-500 mb-2 block">{insight.date}</span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {insight.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 7. Why Partner With Us (Value Proposition) Section */}
      <div className="bg-blue-900 py-20 md:py-32 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-500/10 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-4">The Innomatrics Advantage</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Why Partner With Us for {currentIndustry.title.split(' ')[0]}?
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We combine deep industry knowledge with engineering excellence to deliver solutions that drive real business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/40 transition-transform">
                <FaBrain className="w-7 h-7 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Domain Expertise</h4>
              <p className="text-slate-400 leading-relaxed">
                Deep understanding of {currentIndustry.title.split(' ')[0]} challenges, compliance requirements, and market dynamics.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500/40 transition-transform">
                <FaRocket className="w-7 h-7 text-orange-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Accelerated Delivery</h4>
              <p className="text-slate-400 leading-relaxed">
                Agile methodologies and pre-built accelerators ensuring faster time-to-market for your solutions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/40 transition-transform">
                <FaChartLine className="w-7 h-7 text-indigo-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Enterprise Scalability</h4>
              <p className="text-slate-400 leading-relaxed">
                Future-proof architectures designed to grow seamlessly as your business expands.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/40 transition-transform">
                <FaHeadset className="w-7 h-7 text-emerald-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">End-to-End Support</h4>
              <p className="text-slate-400 leading-relaxed">
                Dedicated engineering teams providing continuous maintenance, optimization, and 24/7 support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 8. FAQ Section for SEO */}
      {currentIndustry.faqs && currentIndustry.faqs.length > 0 && (
        <div className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {currentIndustry.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                    {openFaqIndex === index ? (
                      <FaChevronUp className="text-gray-400 w-5 h-5 flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="text-gray-400 w-5 h-5 flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 9. Call to Action Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Partner with us to leverage cutting-edge technology and engineering expertise to solve your most complex industry challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Contact Our Experts
            </Link>
            <Link
              to="/quote"
              className="inline-block bg-transparent text-white px-8 py-4 rounded-lg font-bold border-2 border-white hover:bg-white/10 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetail;