import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLaptopCode, FaMobileAlt, FaCode, FaRobot, 
  FaCloud, FaShoppingCart, FaServer, FaShieldAlt, 
  FaBullhorn, FaPaintBrush, FaPlug, FaVial, 
  FaUserTie, FaUsers, FaTools, FaPenNib, FaShareAlt 
} from 'react-icons/fa';

const ServiceHover = () => {
  const baseLink = "flex items-center px-3 py-2 rounded-lg transition-colors group";
  const baseIcon = "text-lg mr-3 group-hover:scale-110 transition-transform shrink-0";
  const baseText = "text-sm text-gray-700 font-medium transition-colors whitespace-nowrap";

  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-max bg-white shadow-2xl rounded-b-xl overflow-hidden mt-[1px] border-t border-blue-500 z-50 animate-fadeIn">
      <div className="grid grid-cols-4 p-3 gap-y-1 gap-x-4">
        <Link to="/webdev" className={`${baseLink} hover:bg-blue-50`}>
          <FaLaptopCode className={`${baseIcon} text-blue-500`} /> <span className={`${baseText} group-hover:text-blue-600`}>Web Development</span>
        </Link>
        <Link to="/appdev" className={`${baseLink} hover:bg-purple-50`}>
          <FaMobileAlt className={`${baseIcon} text-purple-500`} /> <span className={`${baseText} group-hover:text-purple-600`}>App Development</span>
        </Link>
        <Link to="/customsoftware" className={`${baseLink} hover:bg-green-50`}>
          <FaCode className={`${baseIcon} text-green-500`} /> <span className={`${baseText} group-hover:text-green-600`}>Custom Software</span>
        </Link>
        <Link to="/aiautomation" className={`${baseLink} hover:bg-red-50`}>
          <FaRobot className={`${baseIcon} text-red-500`} /> <span className={`${baseText} group-hover:text-red-600`}>AI & Automation</span>
        </Link>
        <Link to="/saasproduct" className={`${baseLink} hover:bg-cyan-50`}>
          <FaCloud className={`${baseIcon} text-cyan-500`} /> <span className={`${baseText} group-hover:text-cyan-600`}>SaaS Product</span>
        </Link>
        <Link to="/ecommerce" className={`${baseLink} hover:bg-orange-50`}>
          <FaShoppingCart className={`${baseIcon} text-orange-500`} /> <span className={`${baseText} group-hover:text-orange-600`}>E-Commerce</span>
        </Link>
        <Link to="/devops" className={`${baseLink} hover:bg-slate-50`}>
          <FaServer className={`${baseIcon} text-slate-500`} /> <span className={`${baseText} group-hover:text-slate-600`}>Cloud & DevOps</span>
        </Link>
        <Link to="/cybersecurity" className={`${baseLink} hover:bg-indigo-50`}>
          <FaShieldAlt className={`${baseIcon} text-indigo-500`} /> <span className={`${baseText} group-hover:text-indigo-600`}>Cybersecurity</span>
        </Link>
        <Link to="/digitalmarket" className={`${baseLink} hover:bg-teal-50`}>
          <FaBullhorn className={`${baseIcon} text-teal-500`} /> <span className={`${baseText} group-hover:text-teal-600`}>Digital Marketing</span>
        </Link>
        <Link to="/uiuxdesign" className={`${baseLink} hover:bg-pink-50`}>
          <FaPaintBrush className={`${baseIcon} text-pink-500`} /> <span className={`${baseText} group-hover:text-pink-600`}>UI/UX Design</span>
        </Link>
        <Link to="/apiintegration" className={`${baseLink} hover:bg-yellow-50`}>
          <FaPlug className={`${baseIcon} text-yellow-500`} /> <span className={`${baseText} group-hover:text-yellow-600`}>API Integration</span>
        </Link>
        <Link to="/qatesting" className={`${baseLink} hover:bg-emerald-50`}>
          <FaVial className={`${baseIcon} text-emerald-500`} /> <span className={`${baseText} group-hover:text-emerald-600`}>QA Testing</span>
        </Link>
        <Link to="/itconsulting" className={`${baseLink} hover:bg-amber-50`}>
          <FaUserTie className={`${baseIcon} text-amber-500`} /> <span className={`${baseText} group-hover:text-amber-600`}>IT Consulting</span>
        </Link>
        <Link to="/dedicatedteam" className={`${baseLink} hover:bg-violet-50`}>
          <FaUsers className={`${baseIcon} text-violet-500`} /> <span className={`${baseText} group-hover:text-violet-600`}>Dedicated Team</span>
        </Link>
        <Link to="/maintenancesupport" className={`${baseLink} hover:bg-rose-50`}>
          <FaTools className={`${baseIcon} text-rose-500`} /> <span className={`${baseText} group-hover:text-rose-600`}>Maintenance & Support</span>
        </Link>
        <Link to="/logodesign" className={`${baseLink} hover:bg-fuchsia-50`}>
          <FaPenNib className={`${baseIcon} text-fuchsia-500`} /> <span className={`${baseText} group-hover:text-fuchsia-600`}>Logo Design</span>
        </Link>
        <Link to="/socialmedia" className={`${baseLink} hover:bg-lime-50`}>
          <FaShareAlt className={`${baseIcon} text-lime-500`} /> <span className={`${baseText} group-hover:text-lime-600`}>Social Media Marketing</span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceHover;
