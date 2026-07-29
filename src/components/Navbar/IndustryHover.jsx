import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHeartbeat, FaUniversity, FaHandsHelping, FaPlane,
  FaHardHat, FaShieldAlt, FaGraduationCap, FaIndustry,
  FaTshirt, FaTruck, FaShoppingCart, FaBuilding,
  FaUtensils, FaStore, FaUserTie, FaRocket
} from 'react-icons/fa';

const IndustryHover = () => {
  const baseLink = "flex items-center px-3 py-2 rounded-lg transition-colors group";
  const baseIcon = "text-lg mr-3 group-hover:scale-110 transition-transform shrink-0";
  const baseText = "text-sm text-gray-700 font-medium transition-colors whitespace-nowrap";

  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-max bg-white shadow-2xl rounded-b-xl overflow-hidden mt-[1px] border-t border-blue-500 z-50 animate-fadeIn">
      <div className="grid grid-cols-4 p-3 gap-y-1 gap-x-4">
        <Link to="/industries/healthcare" className={`${baseLink} hover:bg-red-50`}>
          <FaHeartbeat className={`${baseIcon} text-red-500`} /> <span className={`${baseText} group-hover:text-red-600`}>Healthcare</span>
        </Link>
        <Link to="/industries/banking" className={`${baseLink} hover:bg-green-50`}>
          <FaUniversity className={`${baseIcon} text-green-500`} /> <span className={`${baseText} group-hover:text-green-600`}>Banking & Finance</span>
        </Link>
        <Link to="/industries/ngo" className={`${baseLink} hover:bg-blue-50`}>
          <FaHandsHelping className={`${baseIcon} text-blue-500`} /> <span className={`${baseText} group-hover:text-blue-600`}>NGO</span>
        </Link>
        <Link to="/industries/travel" className={`${baseLink} hover:bg-cyan-50`}>
          <FaPlane className={`${baseIcon} text-cyan-500`} /> <span className={`${baseText} group-hover:text-cyan-600`}>Tours & Travel</span>
        </Link>

        <Link to="/industries/construction" className={`${baseLink} hover:bg-orange-50`}>
          <FaHardHat className={`${baseIcon} text-orange-500`} /> <span className={`${baseText} group-hover:text-orange-600`}>Construction</span>
        </Link>
        <Link to="/industries/security" className={`${baseLink} hover:bg-slate-50`}>
          <FaShieldAlt className={`${baseIcon} text-slate-500`} /> <span className={`${baseText} group-hover:text-slate-600`}>Security</span>
        </Link>
        <Link to="/industries/education" className={`${baseLink} hover:bg-indigo-50`}>
          <FaGraduationCap className={`${baseIcon} text-indigo-500`} /> <span className={`${baseText} group-hover:text-indigo-600`}>Education</span>
        </Link>
        <Link to="/industries/manufacturing" className={`${baseLink} hover:bg-amber-50`}>
          <FaIndustry className={`${baseIcon} text-amber-500`} /> <span className={`${baseText} group-hover:text-amber-600`}>Manufacturing</span>
        </Link>

        <Link to="/industries/garments" className={`${baseLink} hover:bg-pink-50`}>
          <FaTshirt className={`${baseIcon} text-pink-500`} /> <span className={`${baseText} group-hover:text-pink-600`}>Garments</span>
        </Link>
        <Link to="/industries/logistics" className={`${baseLink} hover:bg-yellow-50`}>
          <FaTruck className={`${baseIcon} text-yellow-500`} /> <span className={`${baseText} group-hover:text-yellow-600`}>Logistics</span>
        </Link>
        <Link to="/industries/ecommerce" className={`${baseLink} hover:bg-purple-50`}>
          <FaShoppingCart className={`${baseIcon} text-purple-500`} /> <span className={`${baseText} group-hover:text-purple-600`}>E-Commerce</span>
        </Link>
        <Link to="/industries/real-estate" className={`${baseLink} hover:bg-emerald-50`}>
          <FaBuilding className={`${baseIcon} text-emerald-500`} /> <span className={`${baseText} group-hover:text-emerald-600`}>Real Estate</span>
        </Link>

        <Link to="/industries/restaurants" className={`${baseLink} hover:bg-rose-50`}>
          <FaUtensils className={`${baseIcon} text-rose-500`} /> <span className={`${baseText} group-hover:text-rose-600`}>Restaurants</span>
        </Link>
        <Link to="/industries/retail" className={`${baseLink} hover:bg-teal-50`}>
          <FaStore className={`${baseIcon} text-teal-500`} /> <span className={`${baseText} group-hover:text-teal-600`}>Retail</span>
        </Link>
        <Link to="/industries/professional-services" className={`${baseLink} hover:bg-violet-50`}>
          <FaUserTie className={`${baseIcon} text-violet-500`} /> <span className={`${baseText} group-hover:text-violet-600`}>Professional Services</span>
        </Link>
        <Link to="/industries/startups" className={`${baseLink} hover:bg-fuchsia-50`}>
          <FaRocket className={`${baseIcon} text-fuchsia-500`} /> <span className={`${baseText} group-hover:text-fuchsia-600`}>Startups</span>
        </Link>
      </div>
    </div>
  );
};

export default IndustryHover;
