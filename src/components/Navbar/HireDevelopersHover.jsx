import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaMobileAlt, FaRobot, FaLaptopCode, FaPalette, FaUsers, FaArrowRight } from 'react-icons/fa';

const HireDevelopersHover = () => {
  return (
    <div className="absolute top-full right-0 w-[950px] z-50 animate-fadeIn cursor-default pt-4">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
        {/* Top Section: Grid and Card */}
        <div className="flex flex-col lg:flex-row p-6 gap-6 relative">
        
        {/* Left Side: Developer Links Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-2 gap-y-4 gap-x-6">
          
          <Link to="/hire/react-developers" className="flex items-start group p-2 hover:bg-blue-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaReact className="text-blue-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Hire React Developers</h4>
              <p className="text-xs text-gray-500 mt-0.5">Top-tier React professionals</p>
            </div>
          </Link>

          <Link to="/hire/nodejs-developers" className="flex items-start group p-2 hover:bg-green-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaNodeJs className="text-green-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-green-600 transition-colors">Hire Node.js Developers</h4>
              <p className="text-xs text-gray-500 mt-0.5">Scalable backend engineers</p>
            </div>
          </Link>

          <Link to="/hire/mobile-app-developers" className="flex items-start group p-2 hover:bg-purple-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaMobileAlt className="text-purple-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Hire Mobile App Developers</h4>
              <p className="text-xs text-gray-500 mt-0.5">iOS & Android specialists</p>
            </div>
          </Link>

          <Link to="/hire/full-stack-developers" className="flex items-start group p-2 hover:bg-orange-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaLaptopCode className="text-orange-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Hire Full Stack Developers</h4>
              <p className="text-xs text-gray-500 mt-0.5">End-to-end digital solutions</p>
            </div>
          </Link>

          <Link to="/hire/ai-engineers" className="flex items-start group p-2 hover:bg-red-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaRobot className="text-red-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors">Hire AI Engineers</h4>
              <p className="text-xs text-gray-500 mt-0.5">Machine learning experts</p>
            </div>
          </Link>

          <Link to="/hire/ui-ux-designers" className="flex items-start group p-2 hover:bg-pink-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaPalette className="text-pink-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-pink-600 transition-colors">Hire UI/UX Designers</h4>
              <p className="text-xs text-gray-500 mt-0.5">Creative design specialists</p>
            </div>
          </Link>

          <Link to="/hire/digital-marketers" className="flex items-start group p-2 hover:bg-teal-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaRobot className="text-teal-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-teal-600 transition-colors">Hire Digital Marketers</h4>
              <p className="text-xs text-gray-500 mt-0.5">Growth and SEO strategies</p>
            </div>
          </Link>

          <Link to="/hire/development-team" className="flex items-start group p-2 hover:bg-blue-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaUsers className="text-blue-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Hire Dedicated Team</h4>
              <p className="text-xs text-gray-500 mt-0.5">Fully integrated tech talent</p>
            </div>
          </Link>

        </div>

        {/* Right Side: Feature Card */}
        <div className="w-full lg:w-1/3 bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col group hover:shadow-md transition-shadow">
          <div className="h-32 rounded-lg overflow-hidden mb-4">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" 
              alt="Software Development Team" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h4 className="font-bold text-gray-900 mb-2">Hire Software Development Team</h4>
          <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-grow">
            Hire software development team merging tech brilliance with business impact.
          </p>
          <Link to="/hire/development-team" className="text-sm text-blue-600 font-bold flex items-center hover:text-blue-800 transition-colors">
            Explore Inside <FaArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        </div>

      </div>
    </div>
  );
};

export default HireDevelopersHover;
