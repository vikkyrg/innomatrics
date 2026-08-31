import React from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaBullseye, FaQuestionCircle, FaArrowRight, FaBlog } from 'react-icons/fa';

const AboutHover = () => {
  return (
    <div className="absolute top-full left-0 w-[800px] z-50 animate-fadeIn cursor-default pt-4">
      <div className="bg-white shadow-md rounded-md overflow-hidden border border-secondary-200">
        <div className="flex flex-col lg:flex-row p-6 gap-6 relative">
        
        {/* Left Side: Links Column */}
        <div className="w-full lg:w-2/3 flex flex-col gap-y-4">
          
          <Link to="/overview" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaBuilding size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">Company Overview</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">Learn about our history and core values</p>
            </div>
          </Link>

          <Link to="/vision-mission" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaBullseye size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">Our Vision & Mission</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">Our dedication to excellence and future goals</p>
            </div>
          </Link>

          <Link to="/why-us" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaQuestionCircle size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">Why Choose Us</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">Discover what sets our agency apart from the rest</p>
            </div>
          </Link>

          <Link to="/blog" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaBlog size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">Blog</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">Read our latest insights and articles</p>
            </div>
          </Link>

        </div>

        {/* Right Side: Feature Card */}
        <div className="w-full lg:w-1/3 bg-secondary-50 p-5 border-l border-secondary-200 flex flex-col group transition-shadow">
          <div className="h-32 rounded-lg overflow-hidden mb-4">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" 
              alt="Our Team" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h4 className="font-bold text-primary-900 mb-2">Get to Know Us</h4>
          <p className="text-xs text-secondary-600 leading-relaxed mb-4 flex-grow">
            We are a team of passionate tech experts driven to transform businesses.
          </p>
          <Link to="/overview" className="text-sm text-primary-700 font-bold flex items-center hover:text-blue-800 transition-colors mt-auto">
            Read More <FaArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        </div>

      </div>
    </div>
  );
};

export default AboutHover;
