import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHeartbeat, FaUniversity, FaHandsHelping, FaPlane,
  FaHardHat, FaShieldAlt, FaGraduationCap, FaIndustry,
  FaTshirt, FaTruck, FaShoppingCart, FaBuilding,
  FaUtensils, FaStore, FaUserTie, FaRocket, FaArrowRight
} from 'react-icons/fa';

const IndustryHover = () => {
  const column1 = [
    { name: 'Healthcare', path: '/healthcare', icon: <FaHeartbeat size={18} />, desc: 'Medical & wellness tech' },
    { name: 'Banking & Finance', path: '/banking-finance', icon: <FaUniversity size={18} />, desc: 'Secure fintech solutions' },
    { name: 'Tours & Travel', path: '/tours-travel', icon: <FaPlane size={18} />, desc: 'Booking & discovery platforms' },
    { name: 'Education', path: '/education', icon: <FaGraduationCap size={18} />, desc: 'EdTech & learning platforms' },
    { name: 'Logistics', path: '/logistics', icon: <FaTruck size={18} />, desc: 'Supply chain optimization' },
    { name: 'Restaurants', path: '/restaurants', icon: <FaUtensils size={18} />, desc: 'Dining & delivery tech' },
  ];

  const column2 = [
    { name: 'NGO', path: '/ngo', icon: <FaHandsHelping size={18} />, desc: 'Non-profit digital impact' },
    { name: 'Construction', path: '/construction', icon: <FaHardHat size={18} />, desc: 'Project & resource management' },
    { name: 'Security', path: '/security', icon: <FaShieldAlt size={18} />, desc: 'Protection & monitoring systems' },
    { name: 'Manufacturing', path: '/manufacturing', icon: <FaIndustry size={18} />, desc: 'Industrial automation' },
    { name: 'E-Commerce', path: '/ecommerce', icon: <FaShoppingCart size={18} />, desc: 'Digital retail storefronts' },
    { name: 'Retail', path: '/retail', icon: <FaStore size={18} />, desc: 'Omnichannel shopping' },
  ];

  const column3 = [
    { name: 'Real Estate', path: '/real-estate', icon: <FaBuilding size={18} />, desc: 'Property & broker platforms' },
    { name: 'Professional Services', path: '/professional-services', icon: <FaUserTie size={18} />, desc: 'Consulting & agency tools' },
    { name: 'Startups', path: '/startups', icon: <FaRocket size={18} />, desc: 'Agile MVP development' },
    // If Garments needs to be kept:
    { name: 'Garments', path: '/garments', icon: <FaTshirt size={18} />, desc: 'Fashion & apparel tech' },
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
    <div className="absolute top-full left-0 lg:-left-[200px] xl:-left-[300px] w-[900px] z-50 animate-fadeIn cursor-default pt-4">
      <div className="bg-white shadow-md rounded-md border border-secondary-200 max-h-[85vh] overflow-y-auto">
        <div className="flex flex-col xl:flex-row p-6 gap-6 relative">
          
          {/* Left Side: 3 Column Grid */}
          <div className="w-full xl:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4">
            
            <div className="flex flex-col gap-2">
              {column1.map(renderLink)}
            </div>

            <div className="flex flex-col gap-2">
              {column2.map(renderLink)}
            </div>

            <div className="flex flex-col gap-2">
              {column3.map(renderLink)}
            </div>

          </div>

          {/* Right Side: Feature Card */}
          <div className="w-full xl:w-1/4 bg-secondary-50 rounded-md p-5 border border-secondary-200 flex flex-col group hover:shadow-md transition-shadow">
            <div className="h-48 rounded-md overflow-hidden mb-5 border border-secondary-200">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop" 
                alt="Industry Solutions" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="font-bold text-primary-900 mb-2 text-lg">Industry Expertise</h4>
            <p className="text-sm text-secondary-600 leading-relaxed mb-6 flex-grow">
              Tailored software solutions designed specifically for your industry's unique challenges and goals.
            </p>
            <Link to="/industries" className="text-primary-800 font-bold flex items-center hover:text-primary-600 transition-colors mt-auto group/link text-sm uppercase tracking-wider">
              Explore All <FaArrowRight className="ml-2 w-3.5 h-3.5 group-hover/link:translate-x-1.5 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IndustryHover;
