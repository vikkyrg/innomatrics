import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHeartbeat, FaUniversity, FaHandsHelping, FaPlane,
  FaHardHat, FaShieldAlt, FaGraduationCap, FaIndustry,
  FaTshirt, FaTruck, FaShoppingCart, FaBuilding,
  FaUtensils, FaStore, FaUserTie, FaRocket, FaArrowRight
} from 'react-icons/fa';

const IndustryHover = () => {
  return (
    <div className="absolute top-full left-1/2 transform -translate-x-[40%] w-[1100px] z-50 animate-fadeIn cursor-default pt-4">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="flex flex-col xl:flex-row p-6 gap-6 relative">
        
        {/* Left Side: Grid */}
        <div className="w-full xl:w-3/4 grid grid-cols-3 gap-y-6 gap-x-6">
          
          <Link to="/industries/healthcare" className="flex items-start group">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaHeartbeat className="text-red-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors">Healthcare</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Medical & wellness tech</p>
            </div>
          </Link>

          <Link to="/industries/banking" className="flex items-start group">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaUniversity className="text-green-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-green-600 transition-colors">Banking & Finance</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Secure fintech solutions</p>
            </div>
          </Link>

          <Link to="/industries/ngo" className="flex items-start group">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaHandsHelping className="text-blue-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">NGO</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Non-profit digital impact</p>
            </div>
          </Link>

          <Link to="/industries/travel" className="flex items-start group">
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaPlane className="text-cyan-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Tours & Travel</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Booking & discovery platforms</p>
            </div>
          </Link>

          <Link to="/industries/construction" className="flex items-start group">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaHardHat className="text-orange-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Construction</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Project & resource management</p>
            </div>
          </Link>

          <Link to="/industries/security" className="flex items-start group">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaShieldAlt className="text-slate-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-slate-600 transition-colors">Security</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Protection & monitoring systems</p>
            </div>
          </Link>

          <Link to="/industries/education" className="flex items-start group">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaGraduationCap className="text-indigo-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Education</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">EdTech & learning platforms</p>
            </div>
          </Link>

          <Link to="/industries/manufacturing" className="flex items-start group">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaIndustry className="text-amber-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-amber-600 transition-colors">Manufacturing</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Industrial automation</p>
            </div>
          </Link>

          <Link to="/industries/garments" className="flex items-start group">
            <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaTshirt className="text-pink-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-pink-600 transition-colors">Garments</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Fashion & apparel tech</p>
            </div>
          </Link>

          <Link to="/industries/logistics" className="flex items-start group">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaTruck className="text-yellow-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">Logistics</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Supply chain optimization</p>
            </div>
          </Link>

          <Link to="/industries/ecommerce" className="flex items-start group">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaShoppingCart className="text-purple-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-purple-600 transition-colors">E-Commerce</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Digital retail storefronts</p>
            </div>
          </Link>

          <Link to="/industries/real-estate" className="flex items-start group">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaBuilding className="text-emerald-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">Real Estate</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Property & broker platforms</p>
            </div>
          </Link>

          <Link to="/industries/restaurants" className="flex items-start group">
            <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaUtensils className="text-rose-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-rose-600 transition-colors">Restaurants</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Dining & delivery tech</p>
            </div>
          </Link>

          <Link to="/industries/retail" className="flex items-start group">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaStore className="text-teal-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-teal-600 transition-colors">Retail</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Omnichannel shopping</p>
            </div>
          </Link>

          <Link to="/industries/professional-services" className="flex items-start group">
            <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaUserTie className="text-violet-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-violet-600 transition-colors">Professional Services</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Consulting & agency tools</p>
            </div>
          </Link>

          <Link to="/industries/startups" className="flex items-start group">
            <div className="w-10 h-10 bg-fuchsia-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaRocket className="text-fuchsia-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-fuchsia-600 transition-colors">Startups</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Agile MVP development</p>
            </div>
          </Link>

        </div>

        {/* Right Side: Feature Card */}
        <div className="w-full xl:w-1/4 bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col group hover:shadow-md transition-shadow">
          <div className="h-48 rounded-lg overflow-hidden mb-4">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop" 
              alt="Industry Solutions" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h4 className="font-bold text-gray-900 mb-2 text-lg">Industry Expertise</h4>
          <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
            Tailored software solutions designed specifically for your industry's unique challenges.
          </p>
          <Link to="/industries" className="text-blue-600 font-bold flex items-center hover:text-blue-800 transition-colors mt-auto group/link">
            Explore Industries <FaArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
          </Link>
        </div>

        </div>

      </div>
    </div>
  );
};

export default IndustryHover;
