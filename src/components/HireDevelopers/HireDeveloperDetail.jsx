import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { hireDevelopersData } from './hireData';
import { FaCheckCircle, FaArrowRight, FaUsers, FaClock, FaChartLine, FaShieldAlt, FaCode, FaHeadset } from 'react-icons/fa';

const HireDeveloperDetail = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const roleData = hireDevelopersData[role];
    if (roleData) {
      setData(roleData);
      
      // Update SEO Meta Tags
      document.title = roleData.metaTitle || `${roleData.title} | Innomatrics`;
      
      // Update or create meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = roleData.metaDescription || roleData.subtitle;

    } else {
      // Redirect to home if the role is not found
      navigate('/');
    }
  }, [role, navigate]);

  if (!data) return <div className="min-h-screen flex items-center justify-center bg-gray-50">Loading...</div>;

  return (
    <div className="pt-20 min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-blue-900/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-100 text-sm font-semibold mb-6 border border-white/20 backdrop-blur-md">
              ✨ Innomatrics Experts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              {data.title}
            </h1>
            <p className="text-xl text-blue-50 mb-10 max-w-lg leading-relaxed drop-shadow-md">
              {data.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-orange-500 text-white rounded-lg font-bold text-lg hover:bg-orange-600 transition duration-300 text-center shadow-lg hover:shadow-orange-500/50 flex items-center justify-center group">
                Hire Now <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 relative inline-block">
                Overview
                <span className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-orange-500 rounded-full"></span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mt-6 mb-8">
                {data.description}
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="text-3xl font-extrabold text-blue-600 mb-1">50+</h4>
                    <p className="text-sm text-gray-600 font-medium">Projects Delivered</p>
                 </div>
                 <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="text-3xl font-extrabold text-blue-600 mb-1">98%</h4>
                    <p className="text-sm text-gray-600 font-medium">Client Retention</p>
                 </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-bl-full opacity-5"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 rounded-tr-full opacity-20"></div>
                <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Why Hire From Us?</h3>
                <ul className="space-y-5 relative z-10">
                  {data.whyUs.map((reason, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="bg-blue-700/50 rounded-full p-1.5 mr-4 mt-0.5 group-hover:bg-orange-500 transition-colors">
                        <FaCheckCircle className="text-white text-sm" />
                      </div>
                      <span className="text-blue-50 font-medium text-lg">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Flexible Engagement Models</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Choose the working model that perfectly aligns with your project scope, budget, and business needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.engagementModels && data.engagementModels.map((model, index) => {
              const icons = [<FaUsers />, <FaClock />, <FaChartLine />];
              return (
                <div key={index} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <div className="text-3xl text-blue-600 group-hover:text-white transition-colors duration-300">
                      {icons[index]}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{model.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{model.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Expertise & Technologies</h2>
          <p className="text-gray-600 text-lg mb-14 max-w-2xl mx-auto">We leverage the latest and most robust tech stacks to ensure your project is built for scale, security, and speed.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {data.skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 px-8 py-4 rounded-full border border-gray-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 shadow-sm cursor-default">
                <span className="font-semibold text-gray-800 hover:text-blue-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Value Guarantee Section */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                 <img src={data.guarantee.image} alt={data.guarantee.title} className="w-full h-[450px] object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xl font-bold text-white italic">{data.guarantee.quote}</p>
                 </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-10">{data.guarantee.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {data.guarantee.points.map((point, index) => {
                  const icons = [<FaShieldAlt />, <FaCode />, <FaCheckCircle />, <FaHeadset />];
                  return (
                    <div className="flex items-start" key={index}>
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center mr-4 shadow-inner text-blue-300 text-xl">
                        {icons[index]}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">{point.title}</h4>
                        <p className="text-blue-200 text-sm leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple Hiring Process</h2>
            <p className="text-gray-600 text-lg">Get started with your new top-tier team member in 3 simple steps.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 bg-gray-300 border-t-2 border-dashed border-blue-400 z-0"></div>
            
            <div className="text-center relative z-10">
              <div className="w-20 h-20 mx-auto bg-white border-4 border-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-md transition-transform hover:scale-110">1</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Consultation</h3>
              <p className="text-gray-600 leading-relaxed px-4">Share your requirements, technical needs, budget, and business goals with our expert strategy team.</p>
            </div>
            
            <div className="text-center relative z-10">
              <div className="w-20 h-20 mx-auto bg-blue-600 border-4 border-blue-200 text-white rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-md shadow-blue-500/30 transition-transform hover:scale-110">2</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Interview & Select</h3>
              <p className="text-gray-600 leading-relaxed px-4">We'll shortlist pre-vetted candidates. You interview them and select the perfect technical and cultural fit.</p>
            </div>
            
            <div className="text-center relative z-10">
              <div className="w-20 h-20 mx-auto bg-white border-4 border-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-md transition-transform hover:scale-110">3</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Onboarding</h3>
              <p className="text-gray-600 leading-relaxed px-4">Seamless integration of the developer into your team, tools, and existing Agile workflows within 48 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">Ready to accelerate your project with top talent?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Don't let talent shortages slow down your growth. Hire our industry-leading experts today and start building the future.</p>
          <Link to="/contact" className="inline-block px-12 py-5 bg-blue-600 text-white rounded-xl font-bold text-xl hover:bg-blue-700 hover:-translate-y-1 transition duration-300 shadow-2xl shadow-blue-500/40">
            Book a Free Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HireDeveloperDetail;
