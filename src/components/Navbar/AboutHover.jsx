import React from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaBullseye, FaQuestionCircle } from 'react-icons/fa';

const AboutHover = () => {
  const baseLink = "flex items-center px-3 py-2 rounded-lg transition-colors group";
  const baseIcon = "text-lg mr-3 group-hover:scale-110 transition-transform shrink-0";
  const baseText = "text-sm text-gray-700 font-medium transition-colors whitespace-nowrap";

  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-max bg-white shadow-2xl rounded-b-xl overflow-hidden mt-[1px] border-t border-blue-500 z-50 animate-fadeIn">
      <div className="flex flex-col p-3 gap-y-1">
        <Link to="/about/overview" className={`${baseLink} hover:bg-blue-50`}>
          <FaBuilding className={`${baseIcon} text-blue-500`} /> <span className={`${baseText} group-hover:text-blue-600`}>Company Overview</span>
        </Link>
        <Link to="/about/vision-mission" className={`${baseLink} hover:bg-green-50`}>
          <FaBullseye className={`${baseIcon} text-green-500`} /> <span className={`${baseText} group-hover:text-green-600`}>Our Vision & Mission</span>
        </Link>
        <Link to="/about/why-us" className={`${baseLink} hover:bg-purple-50`}>
          <FaQuestionCircle className={`${baseIcon} text-purple-500`} /> <span className={`${baseText} group-hover:text-purple-600`}>Why Choose Us</span>
        </Link>
      </div>
    </div>
  );
};

export default AboutHover; 