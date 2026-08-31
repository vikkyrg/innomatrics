import React, { useEffect, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaRobot, FaCloud, FaShoppingCart, FaShieldAlt, FaPaintBrush, FaPlug, FaCheckCircle, FaBriefcase, FaUsers, FaCogs, FaDesktop, FaMobile, FaChartLine } from 'react-icons/fa';

const ALL_SERVICES = [
  { path: '/web-development', title: 'Web Development', icon: FaDesktop, description: 'Modern, responsive websites and web applications.' },
  { path: '/app-development', title: 'Mobile App Development', icon: FaMobile, description: 'Android, iOS and cross-platform applications.' },
  { path: '/custom-software', title: 'Custom Software', icon: FaCode, description: 'Business software built around your workflow.' },
  { path: '/ai-automation', title: 'AI & Automation', icon: FaRobot, description: 'Intelligent automation, AI agents and chatbots.' },
  { path: '/saas-product', title: 'SaaS Product Development', icon: FaCloud, description: 'Scalable cloud-based SaaS solutions.' },
  { path: '/e-commerce', title: 'E-Commerce Solutions', icon: FaShoppingCart, description: 'Online stores and multi-vendor marketplaces.' },
  { path: '/cloud-and-devops', title: 'Cloud & DevOps', icon: FaCloud, description: 'Secure, scalable infrastructure deployment.' },
  { path: '/cybersecurity', title: 'Cybersecurity', icon: FaShieldAlt, description: 'Data protection and security audits.' },
  { path: '/digital-marketing', title: 'Digital Marketing', icon: FaChartLine, description: 'SEO, Google Ads and lead generation.' },
  { path: '/ui-ux-design', title: 'UI/UX Design', icon: FaPaintBrush, description: 'Engaging user interfaces and experiences.' },
  { path: '/api-integration', title: 'API Integration', icon: FaPlug, description: 'Seamless third-party system connections.' },
  { path: '/qa-testing', title: 'Software Testing & QA', icon: FaCheckCircle, description: 'Automated and manual testing services.' },
  { path: '/it-consulting', title: 'IT Consulting', icon: FaBriefcase, description: 'Digital transformation strategy and guidance.' },
  { path: '/dedicated-team', title: 'Dedicated Team', icon: FaUsers, description: 'Hire expert developers for your projects.' },
  { path: '/maintenance-support', title: 'Maintenance & Support', icon: FaCogs, description: 'Ongoing IT management and support.' },
  { path: '/logo-design', title: 'Logo Design', icon: FaPaintBrush, description: 'Professional brand identity creation.' },
  { path: '/social-media', title: 'Social Media Marketing', icon: FaUsers, description: 'Social media strategy and management.' },
];

const Services = forwardRef((props, ref) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={ref} className="bg-secondary-50 min-h-screen">
      <section className="relative min-h-[400px] flex items-center bg-primary-900 border-b border-primary-800">
        <div className="absolute inset-0 bg-primary-900 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
        </div>
        <div className="container-custom relative z-10 py-24">
          <div className="max-w-3xl">
            <span className="inline-block w-fit px-2 py-1 bg-primary-800 text-primary-200 text-xs font-semibold tracking-widest uppercase mb-6 border border-primary-700">
              Capabilities
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-200 leading-relaxed font-normal">
              Comprehensive end-to-end digital solutions for modern enterprises.
            </p>
          </div>
        </div>
      </section>

      <div className="section-padding">
        <div className="container-custom">
          {/* Category: Development */}
          <div className="mb-20">
            <h2 className="text-3xl font-extrabold text-secondary-900 mb-8 tracking-tight border-b-4 border-primary-900 inline-block pb-2">Development & Engineering</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-secondary-200">
              {ALL_SERVICES.slice(0, 3).map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link key={index} to={service.path} className="bg-white p-10 hover:bg-secondary-900 hover:text-white transition-colors duration-300 border-b border-r border-secondary-200 flex flex-col items-start group">
                    <div className="w-12 h-12 flex items-center justify-center text-primary-800 mb-6 border border-secondary-200 group-hover:border-secondary-700 group-hover:bg-secondary-800 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 group-hover:text-white mb-3 transition-colors">{service.title}</h3>
                    <p className="text-secondary-600 group-hover:text-secondary-300 mb-6 flex-grow text-sm leading-relaxed transition-colors">{service.description}</p>
                    <span className="text-primary-800 group-hover:text-primary-400 text-xs font-bold uppercase tracking-widest inline-flex items-center mt-auto transition-colors">
                      Explore 
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Category: Cloud & Data */}
          <div className="mb-20">
            <h2 className="text-3xl font-extrabold text-secondary-900 mb-8 tracking-tight border-b-4 border-primary-900 inline-block pb-2">Cloud, Data & Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-secondary-200">
              {ALL_SERVICES.slice(3, 8).map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link key={index} to={service.path} className="bg-white p-10 hover:bg-secondary-900 hover:text-white transition-colors duration-300 border-b border-r border-secondary-200 flex flex-col items-start group">
                    <div className="w-12 h-12 flex items-center justify-center text-primary-800 mb-6 border border-secondary-200 group-hover:border-secondary-700 group-hover:bg-secondary-800 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 group-hover:text-white mb-3 transition-colors">{service.title}</h3>
                    <p className="text-secondary-600 group-hover:text-secondary-300 mb-6 flex-grow text-sm leading-relaxed transition-colors">{service.description}</p>
                    <span className="text-primary-800 group-hover:text-primary-400 text-xs font-bold uppercase tracking-widest inline-flex items-center mt-auto transition-colors">
                      Explore 
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Category: Strategy & Design */}
          <div className="mb-20">
            <h2 className="text-3xl font-extrabold text-secondary-900 mb-8 tracking-tight border-b-4 border-primary-900 inline-block pb-2">Strategy, Design & Marketing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-secondary-200">
              {ALL_SERVICES.slice(8).map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link key={index} to={service.path} className="bg-white p-10 hover:bg-secondary-900 hover:text-white transition-colors duration-300 border-b border-r border-secondary-200 flex flex-col items-start group">
                    <div className="w-12 h-12 flex items-center justify-center text-primary-800 mb-6 border border-secondary-200 group-hover:border-secondary-700 group-hover:bg-secondary-800 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 group-hover:text-white mb-3 transition-colors">{service.title}</h3>
                    <p className="text-secondary-600 group-hover:text-secondary-300 mb-6 flex-grow text-sm leading-relaxed transition-colors">{service.description}</p>
                    <span className="text-primary-800 group-hover:text-primary-400 text-xs font-bold uppercase tracking-widest inline-flex items-center mt-auto transition-colors">
                      Explore 
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Services;
