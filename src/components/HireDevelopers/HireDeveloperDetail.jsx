import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { hireDevelopersData } from './hireData';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const HireDeveloperDetail = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const roleData = hireDevelopersData[role];
    if (roleData) {
      setData(roleData);
    } else {
      // Redirect to home or a 404 page if the role is not found
      navigate('/');
    }
  }, [role, navigate]);

  if (!data) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="pt-20 min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-200 text-sm font-semibold mb-6 border border-blue-400/30 backdrop-blur-sm">
              Innomatrics Experts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-lg leading-relaxed">
              {data.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold text-lg hover:bg-gray-100 transition duration-300 text-center shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] flex items-center justify-center">
                Hire Now <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
                Overview
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-600 rounded"></span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {data.description}
              </p>
            </div>
            <div className="lg:w-1/2 bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-bl-full opacity-5"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Hire From Us?</h3>
                <ul className="space-y-4">
                  {data.whyUs.map((reason, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                      <span className="text-gray-700 font-medium">{reason}</span>
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Core Expertise & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {data.skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex items-center justify-center text-center">
                <span className="text-gray-800 font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple Hiring Process</h2>
            <p className="text-blue-200">Get started with your new team member in 3 simple steps.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg z-10 relative">1</div>
              <h3 className="text-xl font-bold mb-3">Consultation</h3>
              <p className="text-blue-200">Share your requirements, technical needs, and business goals with our team.</p>
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-700 -z-0"></div>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg z-10 relative">2</div>
              <h3 className="text-xl font-bold mb-3">Interview & Selection</h3>
              <p className="text-blue-200">Interview pre-vetted candidates and select the perfect fit for your project.</p>
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-700 -z-0"></div>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto bg-white text-blue-900 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg z-10 relative">3</div>
              <h3 className="text-xl font-bold mb-3">Onboarding</h3>
              <p className="text-blue-200">Seamless integration of the developer into your team and existing workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to accelerate your project?</h2>
          <p className="text-xl text-gray-600 mb-10">Don't let talent shortages slow down your growth. Hire our experts and start building today.</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition duration-300 shadow-xl shadow-blue-500/30">
            Book a Free Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HireDeveloperDetail;
