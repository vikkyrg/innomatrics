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
    <div className="absolute top-full left-0 lg:-left-32 w-[900px] z-50 animate-fadeIn cursor-default pt-4">
      <div className="bg-white shadow-md rounded-md border border-secondary-200 max-h-[85vh] overflow-y-auto">
        <div className="flex flex-col xl:flex-row p-6 gap-6 relative">
        
        {/* Left Side: Services Grid */}
        <div className="w-full xl:w-3/4 grid grid-cols-3 gap-y-6 gap-x-6">
          
          <Link to="/web-development" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaLaptopCode size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">Web Development</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">Modern & responsive sites</p>
            </div>
          </Link>

          <Link to="/app-development" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaMobileAlt size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">App Development</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">iOS & Android solutions</p>
            </div>
          </Link>

          <Link to="/custom-software" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaCode size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">Custom Software</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">Tailored enterprise solutions</p>
            </div>
          </Link>

          <Link to="/ai-automation" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaRobot size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">AI & Automation</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">Smart business processes</p>
            </div>
          </Link>

          <Link to="/saas-product" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaCloud size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">SaaS Product</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">Cloud-native applications</p>
            </div>
          </Link>

          <Link to="/e-commerce" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaShoppingCart size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">E-Commerce</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">Online retail platforms</p>
            </div>
          </Link>

          <Link to="/cloud-and-devops" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaServer size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">Cloud & DevOps</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">Scalable infrastructure</p>
            </div>
          </Link>

          <Link to="/cybersecurity" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaShieldAlt size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">Cybersecurity</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">Digital asset protection</p>
            </div>
          </Link>

          <Link to="/digital-marketing" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaBullhorn size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">Digital Marketing</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">Data-driven growth</p>
            </div>
          </Link>

          <Link to="/ui-ux-design" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaPaintBrush size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">UI/UX Design</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">User-centric experiences</p>
            </div>
          </Link>

          <Link to="/api-integration" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaPlug size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">API Integration</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">Seamless connectivity</p>
            </div>
          </Link>

          <Link to="/qa-testing" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaVial size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">QA Testing</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">Reliable performance</p>
            </div>
          </Link>

          <Link to="/it-consulting" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaUserTie size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">IT Consulting</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">Strategic technology advice</p>
            </div>
          </Link>

          <Link to="/dedicated-team" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaUsers size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">Dedicated Team</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">Extended engineering capacity</p>
            </div>
          </Link>

          <Link to="/maintenance-support" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaTools size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">Maintenance & Support</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">24/7 reliability</p>
            </div>
          </Link>

          <Link to="/logo-design" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaPenNib size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">Logo Design</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">Brand identity creation</p>
            </div>
          </Link>

          <Link to="/social-media" className="flex items-start group p-3 hover:bg-secondary-50 transition-colors border border-transparent hover:border-secondary-200 rounded-md">
            <div className="mt-1 mr-3 shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-secondary-100 text-secondary-600 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
              <FaShareAlt size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary-900 group-hover:text-primary-800 transition-colors">Social Media</h4>
              <p className="text-xs text-secondary-600 mt-1 leading-relaxed">Engaging audience growth</p>
            </div>
          </Link>

        </div>

        {/* Right Side: Feature Card */}
        <div className="w-full xl:w-1/4 bg-secondary-50 rounded-md p-5 border border-gray-100 flex flex-col group hover:shadow-md transition-shadow">
          <div className="h-48 rounded-lg overflow-hidden mb-4">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" 
              alt="Digital Services" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h4 className="font-bold text-primary-900 mb-2 text-lg">End-to-End Solutions</h4>
          <p className="text-sm text-secondary-600 leading-relaxed mb-6 flex-grow">
            From design to deployment, our comprehensive digital services cover every aspect of modern technology.
          </p>
          <Link to="/services" className="text-primary-700 font-bold flex items-center hover:text-blue-800 transition-colors mt-auto group/link">
            View All Services <FaArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
          </Link>
        </div>

        </div>

      </div>
    </div>
  );
};

export default ServiceHover;
