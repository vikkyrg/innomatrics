import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaMobileAlt, FaRobot, FaLaptopCode, FaPalette, FaUsers } from 'react-icons/fa';

const HireDevelopersHover = () => {
  const baseLink = "flex items-center px-3 py-2 rounded-lg transition-colors group";
  const baseIcon = "text-lg mr-3 group-hover:scale-110 transition-transform shrink-0";
  const baseText = "text-sm text-gray-700 font-medium transition-colors whitespace-nowrap";

  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-max bg-white shadow-2xl rounded-b-xl overflow-hidden mt-[1px] border-t border-blue-500 z-50 animate-fadeIn">
      <div className="grid grid-cols-2 p-3 gap-y-1 gap-x-4">
        <Link to="/hire/react-developers" className={`${baseLink} hover:bg-blue-50`}>
          <FaReact className={`${baseIcon} text-blue-500`} />
          <span className={`${baseText} group-hover:text-blue-600`}>Hire React Developers</span>
        </Link>

        <Link to="/hire/nodejs-developers" className={`${baseLink} hover:bg-green-50`}>
          <FaNodeJs className={`${baseIcon} text-green-500`} />
          <span className={`${baseText} group-hover:text-green-600`}>Hire Node.js Developers</span>
        </Link>

        <Link to="/hire/mobile-app-developers" className={`${baseLink} hover:bg-purple-50`}>
          <FaMobileAlt className={`${baseIcon} text-purple-500`} />
          <span className={`${baseText} group-hover:text-purple-600`}>Hire Mobile App Developers</span>
        </Link>

        <Link to="/hire/full-stack-developers" className={`${baseLink} hover:bg-orange-50`}>
          <FaLaptopCode className={`${baseIcon} text-orange-500`} />
          <span className={`${baseText} group-hover:text-orange-600`}>Hire Full Stack Developers</span>
        </Link>

        <Link to="/hire/ai-engineers" className={`${baseLink} hover:bg-red-50`}>
          <FaRobot className={`${baseIcon} text-red-500`} />
          <span className={`${baseText} group-hover:text-red-600`}>Hire AI Engineers</span>
        </Link>

        <Link to="/hire/ui-ux-designers" className={`${baseLink} hover:bg-pink-50`}>
          <FaPalette className={`${baseIcon} text-pink-500`} />
          <span className={`${baseText} group-hover:text-pink-600`}>Hire UI/UX Designers</span>
        </Link>

        <Link to="/hire/digital-marketers" className={`${baseLink} hover:bg-teal-50`}>
          <FaRobot className={`${baseIcon} text-teal-500`} />
          <span className={`${baseText} group-hover:text-teal-600`}>Hire Digital Marketers</span>
        </Link>

        <Link to="/hire/development-team" className={`${baseLink} hover:bg-blue-50`}>
          <FaUsers className={`${baseIcon} text-blue-500`} />
          <span className={`${baseText} group-hover:text-blue-600`}>Hire Dedicated Team</span>
        </Link>
      </div>
    </div>
  );
};

export default HireDevelopersHover;
