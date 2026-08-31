import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaMobileAlt, FaRobot, FaLaptopCode, FaPalette, FaUsers, FaArrowRight, FaChartLine } from 'react-icons/fa';

const HireDevelopersHover = () => {
  const column1 = [
    { name: 'Hire React Developers', path: '/hire/react-developers', icon: <FaReact size={18} />, desc: 'Top-tier React professionals' },
    { name: 'Hire Mobile App Developers', path: '/hire/mobile-app-developers', icon: <FaMobileAlt size={18} />, desc: 'iOS & Android specialists' },
    { name: 'Hire AI Engineers', path: '/hire/ai-engineers', icon: <FaRobot size={18} />, desc: 'Machine learning experts' },
    { name: 'Hire Digital Marketers', path: '/hire/digital-marketers', icon: <FaChartLine size={18} />, desc: 'Growth and SEO strategies' },
  ];

  const column2 = [
    { name: 'Hire Node.js Developers', path: '/hire/nodejs-developers', icon: <FaNodeJs size={18} />, desc: 'Scalable backend engineers' },
    { name: 'Hire Full Stack Developers', path: '/hire/full-stack-developers', icon: <FaLaptopCode size={18} />, desc: 'End-to-end digital solutions' },
    { name: 'Hire UI/UX Designers', path: '/hire/ui-ux-designers', icon: <FaPalette size={18} />, desc: 'Creative design specialists' },
    { name: 'Hire Dedicated Team', path: '/hire/development-team', icon: <FaUsers size={18} />, desc: 'Fully integrated tech talent' },
  ];

  const renderLink = (item, idx) => (
    <Link key={idx} to={item.path} className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
      <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
        {item.icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">{item.name}</h4>
        <p className="text-xs text-secondary-600 mt-1 leading-relaxed">{item.desc}</p>
      </div>
    </Link>
  );

  return (
    <div className="absolute top-full right-0 w-[950px] z-50 animate-fadeIn cursor-default pt-4">
      <div className="bg-white shadow-md rounded-md border border-secondary-200 max-h-[85vh] overflow-y-auto">
        <div className="flex flex-col lg:flex-row p-6 gap-6 relative">
          
          {/* Left Side: Developer Links 2 Column Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
            
            <div className="flex flex-col gap-2">
              {column1.map(renderLink)}
            </div>

            <div className="flex flex-col gap-2">
              {column2.map(renderLink)}
            </div>

          </div>

          {/* Right Side: Feature Card */}
          <div className="w-full lg:w-1/3 bg-secondary-50 p-5 border border-secondary-200 rounded-md flex flex-col group hover:shadow-md transition-shadow">
            <div className="h-40 rounded-md overflow-hidden mb-5 border border-secondary-200">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" 
                alt="Software Development Team" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="font-bold text-primary-900 mb-2 text-lg">Hire Software Development Team</h4>
            <p className="text-sm text-secondary-600 leading-relaxed mb-6 flex-grow">
              Merge tech brilliance with business impact by augmenting your staff with our elite engineers.
            </p>
            <Link to="/hire-developers" className="text-sm text-primary-800 font-bold flex items-center hover:text-primary-600 transition-colors mt-auto group/link uppercase tracking-wider">
              Explore Inside <FaArrowRight className="ml-2 w-3.5 h-3.5 group-hover/link:translate-x-1.5 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HireDevelopersHover;
