import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLaptopCode, FaMobileAlt, FaCode, FaRobot, 
  FaCloud, FaShoppingCart, FaServer, FaShieldAlt, 
  FaBullhorn, FaPaintBrush, FaPlug, FaVial, 
  FaUserTie, FaUsers, FaTools, FaPenNib, FaShareAlt,
  FaArrowRight 
} from 'react-icons/fa';

const ServiceHover = () => {
  return (
    <div className="absolute top-full left-0 lg:-left-32 w-[1100px] z-50 animate-fadeIn cursor-default pt-4">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="flex flex-col xl:flex-row p-6 gap-6 relative">
        
        {/* Left Side: Services Grid */}
        <div className="w-full xl:w-3/4 grid grid-cols-3 gap-y-6 gap-x-6">
          
          <Link to="/webdev" className="flex items-start group">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaLaptopCode className="text-blue-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Web Development</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Modern & responsive sites</p>
            </div>
          </Link>

          <Link to="/appdev" className="flex items-start group">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaMobileAlt className="text-purple-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-purple-600 transition-colors">App Development</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">iOS & Android solutions</p>
            </div>
          </Link>

          <Link to="/customsoftware" className="flex items-start group">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaCode className="text-green-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-green-600 transition-colors">Custom Software</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Tailored enterprise solutions</p>
            </div>
          </Link>

          <Link to="/aiautomation" className="flex items-start group">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaRobot className="text-red-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors">AI & Automation</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Smart business processes</p>
            </div>
          </Link>

          <Link to="/saasproduct" className="flex items-start group">
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaCloud className="text-cyan-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">SaaS Product</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Cloud-native applications</p>
            </div>
          </Link>

          <Link to="/ecommerce" className="flex items-start group">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaShoppingCart className="text-orange-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">E-Commerce</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Online retail platforms</p>
            </div>
          </Link>

          <Link to="/devops" className="flex items-start group">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaServer className="text-slate-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-slate-600 transition-colors">Cloud & DevOps</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Scalable infrastructure</p>
            </div>
          </Link>

          <Link to="/cybersecurity" className="flex items-start group">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaShieldAlt className="text-indigo-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Cybersecurity</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Digital asset protection</p>
            </div>
          </Link>

          <Link to="/digitalmarket" className="flex items-start group">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaBullhorn className="text-teal-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-teal-600 transition-colors">Digital Marketing</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Data-driven growth</p>
            </div>
          </Link>

          <Link to="/uiuxdesign" className="flex items-start group">
            <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaPaintBrush className="text-pink-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-pink-600 transition-colors">UI/UX Design</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">User-centric experiences</p>
            </div>
          </Link>

          <Link to="/apiintegration" className="flex items-start group">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaPlug className="text-yellow-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">API Integration</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Seamless connectivity</p>
            </div>
          </Link>

          <Link to="/qatesting" className="flex items-start group">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaVial className="text-emerald-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">QA Testing</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Reliable performance</p>
            </div>
          </Link>

          <Link to="/itconsulting" className="flex items-start group">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaUserTie className="text-amber-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-amber-600 transition-colors">IT Consulting</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Strategic technology advice</p>
            </div>
          </Link>

          <Link to="/dedicatedteam" className="flex items-start group">
            <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaUsers className="text-violet-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-violet-600 transition-colors">Dedicated Team</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Extended engineering capacity</p>
            </div>
          </Link>

          <Link to="/maintenancesupport" className="flex items-start group">
            <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaTools className="text-rose-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-rose-600 transition-colors">Maintenance & Support</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">24/7 reliability</p>
            </div>
          </Link>

          <Link to="/logodesign" className="flex items-start group">
            <div className="w-10 h-10 bg-fuchsia-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaPenNib className="text-fuchsia-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-fuchsia-600 transition-colors">Logo Design</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Brand identity creation</p>
            </div>
          </Link>

          <Link to="/socialmedia" className="flex items-start group">
            <div className="w-10 h-10 bg-lime-100 rounded-lg flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform">
              <FaShareAlt className="text-lime-500 text-lg" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-lime-600 transition-colors">Social Media</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">Engaging audience growth</p>
            </div>
          </Link>

        </div>

        {/* Right Side: Feature Card */}
        <div className="w-full xl:w-1/4 bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col group hover:shadow-md transition-shadow">
          <div className="h-48 rounded-lg overflow-hidden mb-4">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" 
              alt="Digital Services" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h4 className="font-bold text-gray-900 mb-2 text-lg">End-to-End Solutions</h4>
          <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
            From design to deployment, our comprehensive digital services cover every aspect of modern technology.
          </p>
          <Link to="/services" className="text-blue-600 font-bold flex items-center hover:text-blue-800 transition-colors mt-auto group/link">
            View All Services <FaArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
          </Link>
        </div>

        </div>

      </div>
    </div>
  );
};

export default ServiceHover;
