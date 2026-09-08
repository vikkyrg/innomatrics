import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/innomatric_logo_only.png";
import { FaBuilding, FaBullseye, FaQuestionCircle, FaBlog, FaLaptopCode, FaMobileAlt, FaCode, FaRobot, FaCloud, FaShoppingCart, FaServer, FaShieldAlt, FaBullhorn, FaPaintBrush, FaPlug, FaVial, FaUserTie, FaUsers, FaTools, FaPenNib, FaShareAlt, FaHeartbeat, FaUniversity, FaPlane, FaGraduationCap, FaTruck, FaUtensils, FaHandsHelping, FaHardHat, FaIndustry, FaStore, FaRocket, FaTshirt, FaReact, FaChartLine, FaNodeJs, FaPalette, FaListUl } from 'react-icons/fa';

import ServiceHover from "./ServiceHover";
import AboutHover from "./AboutHover";
import IndustryHover from "./IndustryHover";
import HireDevelopersHover from "./HireDevelopersHover";

function NAv() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);
  const [showHireDevelopers, setShowHireDevelopers] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setShowServices(false);
    setShowAbout(false);
    setShowIndustries(false);
    setShowHireDevelopers(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const MobileLink = ({ to, children }) => (
    <Link to={to} className="nav-item block" onClick={closeMenu}>
      {children}
    </Link>
  );

  const navClass = "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 text-gray-900";

  const linkClass = "text-gray-700 hover:text-primary-600";

  return (
    <header className="relative">
      <nav
        ref={navRef}
        className={`w-full z-50 fixed top-0 transition-all duration-300 ${navClass}`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center group">
                <img
                  src={logo}
                  className="h-16 w-16 md:h-24 md:w-24 object-contain group-hover:scale-110 transition-transform duration-300"
                  alt="Innomatrics Logo"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex xl:items-center xl:space-x-8">
              <div
                className="relative h-full flex items-center py-8"
                onMouseEnter={() => setShowAbout(true)}
                onMouseLeave={() => setShowAbout(false)}
                onClick={closeMenu}
              >
                <button className={`nav-item flex items-center font-medium text-[15px] transition-colors ${linkClass}`}>
                  About
                  <svg className="ml-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {showAbout && <AboutHover />}
              </div>

              <div
                className="relative h-full flex items-center py-8"
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
                onClick={closeMenu}
              >
                <button className={`nav-item flex items-center font-medium text-[15px] transition-colors ${linkClass}`}>
                  Services
                  <svg className="ml-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {showServices && <ServiceHover />}
              </div>

              <Link to="/solutions" className={`nav-item font-medium text-[15px] transition-colors ${linkClass}`}>
                Solutions
              </Link>

              <div
                className="relative h-full flex items-center py-8"
                onMouseEnter={() => setShowIndustries(true)}
                onMouseLeave={() => setShowIndustries(false)}
                onClick={closeMenu}
              >
                <Link to="/industries" className={`nav-item flex items-center font-medium text-[15px] transition-colors ${linkClass}`}>
                  Industries
                  <svg className="ml-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                {showIndustries && <IndustryHover />}
              </div>

              <Link to="/technologies" className={`nav-item font-medium text-[15px] transition-colors ${linkClass}`}>
                Technologies
              </Link>

              <div
                className="relative h-full flex items-center py-8"
                onMouseEnter={() => setShowHireDevelopers(true)}
                onMouseLeave={() => setShowHireDevelopers(false)}
                onClick={closeMenu}
              >
                <Link to="/hire-developers" className={`nav-item flex items-center font-medium text-[15px] transition-colors ${linkClass}`}>
                  Hire Developers
                  <svg className="ml-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                {showHireDevelopers && <HireDevelopersHover />}
              </div>

              <Link to="/careers" className={`nav-item font-medium text-[15px] transition-colors ${linkClass}`}>
                Careers
              </Link>

              {/* Action Button */}
              <div className="pl-6">
                <Link
                  to="/contact"
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 bg-primary-600 text-white hover:bg-primary-700 shadow-md`}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className={`inline-flex items-center justify-center p-2 rounded-md font-medium focus:outline-none transition-colors text-gray-700 hover:text-primary-600`}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div className={`${isOpen ? "block" : "hidden"} xl:hidden bg-white shadow-sm max-h-[calc(100vh-80px)] overflow-y-auto border-t border-gray-100`}>
          <div className="px-4 py-4 space-y-1">
            <div className="relative">
              <button onClick={() => setShowAbout(!showAbout)} className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-primary-900 hover:bg-gray-50 rounded-lg transition-colors">
                About Us
                <svg className={`h-5 w-5 transform ${showAbout ? "rotate-180" : ""} transition-transform duration-200`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {showAbout && (
                <div className="p-2 space-y-1 bg-gray-50 rounded-xl mt-2 ml-4 border border-gray-100 shadow-inner">
                  <Link to="/overview" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaBuilding className="mr-3 inline-block text-primary-500 w-4 h-4" />Company Overview</Link>
                  <Link to="/vision-mission" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaBullseye className="mr-3 inline-block text-primary-500 w-4 h-4" />Our Vision & Mission</Link>
                  <Link to="/why-us" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaQuestionCircle className="mr-3 inline-block text-primary-500 w-4 h-4" />Why Us</Link>
                  <Link to="/blog" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaBlog className="mr-3 inline-block text-primary-500 w-4 h-4" />Blog</Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button onClick={() => setShowServices(!showServices)} className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-primary-900 hover:bg-gray-50 rounded-lg transition-colors">
                Services
                <svg className={`h-5 w-5 transform ${showServices ? "rotate-180" : ""} transition-transform duration-200`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {showServices && (
                <div className="p-2 space-y-1 bg-gray-50 rounded-xl mt-2 ml-4 border border-gray-100 shadow-inner max-h-60 overflow-y-auto">
                  <Link to="/services" className="flex items-center px-4 py-3 text-sm text-primary-700 font-bold border-b border-gray-200 mb-2 pb-3 hover:bg-white rounded-t-lg transition-all" onClick={closeMenu}><FaListUl className="mr-3 inline-block text-primary-500 w-4 h-4" />View All Services</Link>
                  <Link to="/web-development" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaLaptopCode className="mr-3 inline-block text-primary-500 w-4 h-4" />Web Development</Link>
                  <Link to="/app-development" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaMobileAlt className="mr-3 inline-block text-primary-500 w-4 h-4" />App Development</Link>
                  <Link to="/custom-software" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaCode className="mr-3 inline-block text-primary-500 w-4 h-4" />Custom Software</Link>
                  <Link to="/ai-automation" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaRobot className="mr-3 inline-block text-primary-500 w-4 h-4" />AI & Automation</Link>
                  <Link to="/saas-product" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaCloud className="mr-3 inline-block text-primary-500 w-4 h-4" />SaaS Product</Link>
                  <Link to="/e-commerce" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaShoppingCart className="mr-3 inline-block text-primary-500 w-4 h-4" />E-Commerce</Link>
                  <Link to="/cloud-and-devops" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaServer className="mr-3 inline-block text-primary-500 w-4 h-4" />Cloud & DevOps</Link>
                  <Link to="/cybersecurity" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaShieldAlt className="mr-3 inline-block text-primary-500 w-4 h-4" />Cybersecurity</Link>
                  <Link to="/digital-marketing" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaBullhorn className="mr-3 inline-block text-primary-500 w-4 h-4" />Digital Marketing</Link>
                  <Link to="/ui-ux-design" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaPaintBrush className="mr-3 inline-block text-primary-500 w-4 h-4" />UI/UX Design</Link>
                  <Link to="/api-integration" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaPlug className="mr-3 inline-block text-primary-500 w-4 h-4" />API Integration</Link>
                  <Link to="/qa-testing" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaVial className="mr-3 inline-block text-primary-500 w-4 h-4" />QA Testing</Link>
                  <Link to="/it-consulting" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaUserTie className="mr-3 inline-block text-primary-500 w-4 h-4" />IT Consulting</Link>
                  <Link to="/dedicated-team" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaUsers className="mr-3 inline-block text-primary-500 w-4 h-4" />Dedicated Team</Link>
                  <Link to="/maintenance-support" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaTools className="mr-3 inline-block text-primary-500 w-4 h-4" />Maintenance & Support</Link>
                  <Link to="/logo-design" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaPenNib className="mr-3 inline-block text-primary-500 w-4 h-4" />Logo Design</Link>
                  <Link to="/social-media" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaShareAlt className="mr-3 inline-block text-primary-500 w-4 h-4" />Social Media</Link>
                </div>
              )}
            </div>

            <Link to="/solutions" className="block px-4 py-3 text-base font-semibold text-primary-900 hover:bg-gray-50 rounded-lg transition-colors" onClick={closeMenu}>
              Solutions
            </Link>

            <div className="relative">
              <button onClick={() => setShowIndustries(!showIndustries)} className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-primary-900 hover:bg-gray-50 rounded-lg transition-colors">
                Industries
                <svg className={`h-5 w-5 transform ${showIndustries ? "rotate-180" : ""} transition-transform duration-200`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {showIndustries && (
                <div className="p-2 space-y-1 bg-gray-50 rounded-xl mt-2 ml-4 border border-gray-100 shadow-inner max-h-60 overflow-y-auto">
                  <Link to="/industries" className="flex items-center px-4 py-3 text-sm text-primary-700 font-bold border-b border-gray-200 mb-2 pb-3 hover:bg-white rounded-t-lg transition-all" onClick={closeMenu}><FaListUl className="mr-3 inline-block text-primary-500 w-4 h-4" />View All Industries</Link>
                  <Link to="/industries/healthcare" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaHeartbeat className="mr-3 inline-block text-primary-500 w-4 h-4" />Healthcare</Link>
                  <Link to="/industries/banking" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaUniversity className="mr-3 inline-block text-primary-500 w-4 h-4" />Banking & Finance</Link>
                  <Link to="/industries/travel" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaPlane className="mr-3 inline-block text-primary-500 w-4 h-4" />Tours & Travel</Link>
                  <Link to="/industries/education" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaGraduationCap className="mr-3 inline-block text-primary-500 w-4 h-4" />Education</Link>
                  <Link to="/industries/logistics" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaTruck className="mr-3 inline-block text-primary-500 w-4 h-4" />Logistics</Link>
                  <Link to="/industries/restaurants" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaUtensils className="mr-3 inline-block text-primary-500 w-4 h-4" />Restaurants</Link>
                  <Link to="/industries/ngo" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaHandsHelping className="mr-3 inline-block text-primary-500 w-4 h-4" />NGO</Link>
                  <Link to="/industries/construction" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaHardHat className="mr-3 inline-block text-primary-500 w-4 h-4" />Construction</Link>
                  <Link to="/industries/security" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaShieldAlt className="mr-3 inline-block text-primary-500 w-4 h-4" />Security</Link>
                  <Link to="/industries/manufacturing" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaIndustry className="mr-3 inline-block text-primary-500 w-4 h-4" />Manufacturing</Link>
                  <Link to="/industries/ecommerce" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaShoppingCart className="mr-3 inline-block text-primary-500 w-4 h-4" />E-Commerce</Link>
                  <Link to="/industries/retail" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaStore className="mr-3 inline-block text-primary-500 w-4 h-4" />Retail</Link>
                  <Link to="/industries/real-estate" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaBuilding className="mr-3 inline-block text-primary-500 w-4 h-4" />Real Estate</Link>
                  <Link to="/industries/professional-services" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaUserTie className="mr-3 inline-block text-primary-500 w-4 h-4" />Professional Services</Link>
                  <Link to="/industries/startups" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaRocket className="mr-3 inline-block text-primary-500 w-4 h-4" />Startups</Link>
                  <Link to="/industries/garments" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaTshirt className="mr-3 inline-block text-primary-500 w-4 h-4" />Garments</Link>
                </div>
              )}
            </div>
            
            <Link to="/technologies" className="block px-4 py-3 text-base font-semibold text-primary-900 hover:bg-gray-50 rounded-lg transition-colors" onClick={closeMenu}>
              Technologies
            </Link>

            <div className="relative">
              <button onClick={() => setShowHireDevelopers(!showHireDevelopers)} className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-primary-900 hover:bg-gray-50 rounded-lg transition-colors">
                Hire Developers
                <svg className={`h-5 w-5 transform ${showHireDevelopers ? "rotate-180" : ""} transition-transform duration-200`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {showHireDevelopers && (
                <div className="p-2 space-y-1 bg-gray-50 rounded-xl mt-2 ml-4 border border-gray-100 shadow-inner max-h-60 overflow-y-auto">
                  <Link to="/hire-developers" className="flex items-center px-4 py-3 text-sm text-primary-700 font-bold border-b border-gray-200 mb-2 pb-3 hover:bg-white rounded-t-lg transition-all" onClick={closeMenu}><FaListUl className="mr-3 inline-block text-primary-500 w-4 h-4" />View All Developers</Link>
                  <Link to="/hire/react-developers" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaReact className="mr-3 inline-block text-primary-500 w-4 h-4" />React Developers</Link>
                  <Link to="/hire/mobile-app-developers" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaMobileAlt className="mr-3 inline-block text-primary-500 w-4 h-4" />Mobile App Developers</Link>
                  <Link to="/hire/ai-engineers" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaRobot className="mr-3 inline-block text-primary-500 w-4 h-4" />AI Engineers</Link>
                  <Link to="/hire/digital-marketers" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaChartLine className="mr-3 inline-block text-primary-500 w-4 h-4" />Digital Marketers</Link>
                  <Link to="/hire/nodejs-developers" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaNodeJs className="mr-3 inline-block text-primary-500 w-4 h-4" />Node.js Developers</Link>
                  <Link to="/hire/full-stack-developers" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaLaptopCode className="mr-3 inline-block text-primary-500 w-4 h-4" />Full Stack Developers</Link>
                  <Link to="/hire/ui-ux-designers" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaPalette className="mr-3 inline-block text-primary-500 w-4 h-4" />UI/UX Designers</Link>
                  <Link to="/hire/development-team" className="flex items-center px-4 py-3 text-sm text-secondary-700 hover:text-primary-700 hover:bg-white rounded-lg font-medium transition-all" onClick={closeMenu}><FaUsers className="mr-3 inline-block text-primary-500 w-4 h-4" />Dedicated Team</Link>
                </div>
              )}
            </div>

            <Link to="/careers" className="block px-4 py-3 text-base font-semibold text-primary-900 hover:bg-gray-50 rounded-lg transition-colors" onClick={closeMenu}>
              Careers
            </Link>

            <div className="pt-6 pb-4 px-4 flex flex-col space-y-3 border-t border-gray-100 mt-4">
              <Link to="/contact" className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white font-medium text-center rounded-md shadow-sm transition-colors" onClick={closeMenu}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NAv;
