import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLaptopCode, FaMobileAlt, FaCode, FaRobot, 
  FaCloud, FaShoppingCart, FaServer, FaShieldAlt, 
  FaBullhorn, FaPaintBrush, FaPlug, FaVial, 
  FaUserTie, FaUsers, FaTools, FaPenNib, FaShareAlt 
} from 'react-icons/fa';

const ServiceHover = () => {
  const linkClass = "flex flex-row items-center gap-2.5 p-2 rounded-md hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm transition-all duration-300 text-gray-700 font-medium text-[13px] group whitespace-nowrap";
  const iconClass = "text-blue-500 group-hover:scale-110 transition-transform duration-300 text-[15px] shrink-0";

  return (
    <div className="services-hover-menu absolute z-50 bg-white rounded-2xl shadow-2xl p-4 w-max border border-gray-100" style={{
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)'
    }}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-2xl"></div>
      
      <div className="grid grid-rows-4 grid-flow-col gap-x-6 gap-y-1">
        <Link to="/webdev" className={linkClass}><FaLaptopCode className={iconClass} /> Web Development</Link>
        <Link to="/appdev" className={linkClass}><FaMobileAlt className={iconClass} /> App Development</Link>
        <Link to="/customsoftware" className={linkClass}><FaCode className={iconClass} /> Custom Software</Link>
        <Link to="/aiautomation" className={linkClass}><FaRobot className={iconClass} /> AI & Automation</Link>
        
        <Link to="/saasproduct" className={linkClass}><FaCloud className={iconClass} /> SaaS Product</Link>
        <Link to="/ecommerce" className={linkClass}><FaShoppingCart className={iconClass} /> E-Commerce</Link>
        <Link to="/devops" className={linkClass}><FaServer className={iconClass} /> Cloud & DevOps</Link>
        <Link to="/cybersecurity" className={linkClass}><FaShieldAlt className={iconClass} /> Cybersecurity</Link>
        
        <Link to="/digitalmarket" className={linkClass}><FaBullhorn className={iconClass} /> Digital Marketing</Link>
        <Link to="/uiuxdesign" className={linkClass}><FaPaintBrush className={iconClass} /> UI/UX Design</Link>
        <Link to="/apiintegration" className={linkClass}><FaPlug className={iconClass} /> API Integration</Link>
        <Link to="/qatesting" className={linkClass}><FaVial className={iconClass} /> QA Testing</Link>
        
        <Link to="/itconsulting" className={linkClass}><FaUserTie className={iconClass} /> IT Consulting</Link>
        <Link to="/dedicatedteam" className={linkClass}><FaUsers className={iconClass} /> Dedicated Team</Link>
        <Link to="/maintenancesupport" className={linkClass}><FaTools className={iconClass} /> Maintenance & Support</Link>
        <Link to="/logodesign" className={linkClass}><FaPenNib className={iconClass} /> Logo Design</Link>
        
        <Link to="/socialmedia" className={linkClass}><FaShareAlt className={iconClass} /> Social Media Marketing</Link>
      </div>
    </div>
  );
};

export default ServiceHover;
