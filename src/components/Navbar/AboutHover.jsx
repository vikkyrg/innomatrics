import React from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaBullseye, FaQuestionCircle, FaArrowRight } from 'react-icons/fa';

const AboutHover = () => {
  return (
    <div className="absolute top-full left-0 w-[800px] z-50 animate-fadeIn cursor-default pt-4">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="flex flex-col lg:flex-row p-6 gap-6 relative">
        
        {/* Left Side: Links Column */}
        <div className="w-full lg:w-2/3 flex flex-col gap-y-4">
          
          <Link to="/about/overview" className="flex items-start group p-2 hover:bg-blue-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaBuilding className="text-blue-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Company Overview</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Learn about our history and core values</p>
            </div>
          </Link>

          <Link to="/about/vision-mission" className="flex items-start group p-2 hover:bg-green-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaBullseye className="text-green-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-green-600 transition-colors">Our Vision & Mission</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Our dedication to excellence and future goals</p>
            </div>
          </Link>

          <Link to="/about/why-us" className="flex items-start group p-2 hover:bg-purple-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaQuestionCircle className="text-purple-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Why Choose Us</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Discover what sets our agency apart from the rest</p>
            </div>
          </Link>

        </div>

        {/* Right Side: Feature Card */}
        <div className="w-full lg:w-1/3 bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col group hover:shadow-md transition-shadow">
          <div className="h-32 rounded-lg overflow-hidden mb-4">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" 
              alt="Our Team" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h4 className="font-bold text-gray-900 mb-2">Get to Know Us</h4>
          <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-grow">
            We are a team of passionate tech experts driven to transform businesses.
          </p>
          <Link to="/about/overview" className="text-sm text-blue-600 font-bold flex items-center hover:text-blue-800 transition-colors mt-auto">
            Read More <FaArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        </div>

      </div>
    </div>
  );
};

export default AboutHover;