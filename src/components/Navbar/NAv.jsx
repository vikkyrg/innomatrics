import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaChevronDown,
} from "react-icons/fa";
import logo from "../../assets/innomatric_logo_only.png";
import "./NAv.css";
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
  const [showInfoBar, setShowInfoBar] = useState(true);
  const navRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
      if (window.scrollY > 10) {
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

  const toggleInfoBar = () => {
    setShowInfoBar(!showInfoBar);
  };

  // Update the mobile menu links to use closeMenu
  const MobileLink = ({ to, children }) => (
    <Link to={to} className="nav-item block" onClick={closeMenu}>
      {children}
    </Link>
  );

  return (
    <header className="relative">
      {/* Top Information Bar */}


      {/* Main Navigation */}
      <nav
        ref={navRef}
        className={`w-full z-50 top-0 fixed transition-all duration-300 ${scrolled || !isHomePage
          ? "bg-gradient-to-r from-blue-300 via-blue-800 to-blue-100 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
          } ${showInfoBar ? "" : "top-0"}`}
      >
        <div className="w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Company Name */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  className="h-16 w-16 md:h-36 md:w-40"
                  alt="Innomatrics Logo"
                />
              </Link>
            </div>

            {/* Mobile Contact Button */}
            <div className="xl:hidden flex items-center">
              <Link
                to="/contact"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-red-500 transition duration-150 ease-in-out shadow-lg"
              >
                Contact Us
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex xl:items-center xl:space-x-2">
              <div
                className="relative"
                onMouseEnter={() => setShowAbout(true)}
                onMouseLeave={() => setShowAbout(false)}
                onClick={closeMenu}
              >
                <button className="nav-item flex items-center text-white hover:text-blue-200">
                  About Us
                  <svg
                    className="ml-1 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {showAbout && <AboutHover />}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
                onClick={closeMenu}
              >
                <button className="nav-item flex items-center text-white hover:text-blue-200">
                  Services
                  <svg
                    className="ml-1 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {showServices && <ServiceHover />}
              </div>
              <Link to="/solutions" className="nav-item text-white hover:text-blue-200">
                Solutions
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setShowIndustries(true)}
                onMouseLeave={() => setShowIndustries(false)}
                onClick={closeMenu}
              >
                <Link to="/industries" className="nav-item flex items-center text-white hover:text-blue-200">
                  Industries
                  <svg
                    className="ml-1 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                {showIndustries && <IndustryHover />}
              </div>
              <Link to="/technologies" className="nav-item text-white hover:text-blue-200">
                Technologies
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setShowHireDevelopers(true)}
                onMouseLeave={() => setShowHireDevelopers(false)}
                onClick={closeMenu}
              >
                <Link to="/hire-developers" className="nav-item flex items-center text-white hover:text-blue-200">
                  Hire Developers
                  <svg
                    className="ml-1 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                {showHireDevelopers && <HireDevelopersHover />}
              </div>
              <Link to="/blog" className="nav-item text-white hover:text-blue-200">
                Blog
              </Link>
              <Link to="/careers" className="nav-item text-white hover:text-blue-200">
                Careers
              </Link>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 ml-4">
                <Link
                  to="/contact"
                  className="nav-button primary bg-blue-500/90 hover:bg-blue-600 text-white shadow-lg backdrop-blur-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? "block" : "hidden"} xl:hidden bg-blue-900 max-h-[calc(100vh-80px)] overflow-y-auto pb-10`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="relative">
              <button
                onClick={() => setShowAbout(!showAbout)}
                className="nav-item block w-full text-left flex items-center justify-between"
              >
                About Us
                <svg
                  className={`h-5 w-5 transform ${showAbout ? "rotate-180" : ""
                    } transition-transform duration-200`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showAbout && (
                <div className="bg-blue-800 rounded-md mt-1 py-2">
                  <Link to="/about/overview" className="nav-item block pl-4" onClick={closeMenu}>
                    Company Overview
                  </Link>
                  <Link
                    to="/about/vision-mission"
                    className="nav-item block pl-4"
                    onClick={closeMenu}
                  >
                    Our Vision & Mission
                  </Link>
                  <Link to="/about/why-us" className="nav-item block pl-4" onClick={closeMenu}>
                    Why Us
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setShowServices(!showServices)}
                className="nav-item block w-full text-left flex items-center justify-between"
              >
                Services
                <svg
                  className={`h-5 w-5 transform ${showServices ? "rotate-180" : ""
                    } transition-transform duration-200`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showServices && (
                <div className="bg-blue-800 rounded-md mt-1 py-2">
                  <Link to="/webdev" className="nav-item block pl-4" onClick={closeMenu}>
                    Web Development
                  </Link>
                  <Link to="/appdev" className="nav-item block pl-4" onClick={closeMenu}>
                    App Development
                  </Link>
                  <Link to="/customsoftware" className="nav-item block pl-4" onClick={closeMenu}>
                    Custom Software
                  </Link>
                  <Link to="/aiautomation" className="nav-item block pl-4" onClick={closeMenu}>
                    AI & Automation
                  </Link>
                  <Link to="/saasproduct" className="nav-item block pl-4" onClick={closeMenu}>
                    SaaS Product
                  </Link>
                  <Link to="/ecommerce" className="nav-item block pl-4" onClick={closeMenu}>
                    E-Commerce
                  </Link>
                  <Link to="/devops" className="nav-item block pl-4" onClick={closeMenu}>
                    Cloud & DevOps
                  </Link>
                  <Link to="/cybersecurity" className="nav-item block pl-4" onClick={closeMenu}>
                    Cybersecurity
                  </Link>
                  <Link to="/digitalmarket" className="nav-item block pl-4" onClick={closeMenu}>
                    Digital Marketing
                  </Link>
                  <Link to="/uiuxdesign" className="nav-item block pl-4" onClick={closeMenu}>
                    UI/UX Design
                  </Link>
                  <Link to="/apiintegration" className="nav-item block pl-4" onClick={closeMenu}>
                    API Integration
                  </Link>
                  <Link to="/qatesting" className="nav-item block pl-4" onClick={closeMenu}>
                    QA Testing
                  </Link>
                  <Link to="/itconsulting" className="nav-item block pl-4" onClick={closeMenu}>
                    IT Consulting
                  </Link>
                  <Link to="/dedicatedteam" className="nav-item block pl-4" onClick={closeMenu}>
                    Dedicated Team
                  </Link>
                  <Link to="/maintenancesupport" className="nav-item block pl-4" onClick={closeMenu}>
                    Maintenance & Support
                  </Link>
                  <Link to="/logodesign" className="nav-item block pl-4" onClick={closeMenu}>
                    Logo Design
                  </Link>
                  <Link to="/socialmedia" className="nav-item block pl-4" onClick={closeMenu}>
                    Social Media Marketing
                  </Link>
                </div>
              )}
            </div>
            <MobileLink to="/solutions">Solutions</MobileLink>
            <div className="relative">
              <button
                onClick={() => setShowIndustries(!showIndustries)}
                className="nav-item block w-full text-left flex items-center justify-between"
              >
                Industries
                <svg
                  className={`h-5 w-5 transform ${showIndustries ? "rotate-180" : ""
                    } transition-transform duration-200`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showIndustries && (
                <div className="bg-blue-800 rounded-md mt-1 py-2 h-64 overflow-y-auto">
                  <Link to="/industries" className="nav-item block pl-4 font-bold text-blue-200 pb-2 mb-2 border-b border-blue-700" onClick={closeMenu}>
                    View All Industries
                  </Link>
                  <Link to="/industries/healthcare" className="nav-item block pl-4" onClick={closeMenu}>Healthcare</Link>
                  <Link to="/industries/banking" className="nav-item block pl-4" onClick={closeMenu}>Banking & Finance</Link>
                  <Link to="/industries/ngo" className="nav-item block pl-4" onClick={closeMenu}>NGO</Link>
                  <Link to="/industries/travel" className="nav-item block pl-4" onClick={closeMenu}>Tours & Travel</Link>
                  <Link to="/industries/construction" className="nav-item block pl-4" onClick={closeMenu}>Construction</Link>
                  <Link to="/industries/security" className="nav-item block pl-4" onClick={closeMenu}>Security</Link>
                  <Link to="/industries/education" className="nav-item block pl-4" onClick={closeMenu}>Education</Link>
                  <Link to="/industries/manufacturing" className="nav-item block pl-4" onClick={closeMenu}>Manufacturing</Link>
                  <Link to="/industries/garments" className="nav-item block pl-4" onClick={closeMenu}>Garments</Link>
                  <Link to="/industries/logistics" className="nav-item block pl-4" onClick={closeMenu}>Logistics</Link>
                  <Link to="/industries/ecommerce" className="nav-item block pl-4" onClick={closeMenu}>E-Commerce</Link>
                  <Link to="/industries/real-estate" className="nav-item block pl-4" onClick={closeMenu}>Real Estate</Link>
                  <Link to="/industries/restaurants" className="nav-item block pl-4" onClick={closeMenu}>Restaurants</Link>
                  <Link to="/industries/retail" className="nav-item block pl-4" onClick={closeMenu}>Retail</Link>
                  <Link to="/industries/professional-services" className="nav-item block pl-4" onClick={closeMenu}>Professional Services</Link>
                  <Link to="/industries/startups" className="nav-item block pl-4" onClick={closeMenu}>Startups</Link>
                </div>
              )}
            </div>
            <MobileLink to="/technologies">Technologies</MobileLink>

            <div className="relative">
              <button
                onClick={() => setShowHireDevelopers(!showHireDevelopers)}
                className="nav-item block w-full text-left flex items-center justify-between"
              >
                Hire Developers
                <svg
                  className={`h-5 w-5 transform ${showHireDevelopers ? "rotate-180" : ""
                    } transition-transform duration-200`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showHireDevelopers && (
                <div className="bg-blue-800 rounded-md mt-1 py-2">
                  <Link to="/hire/react-developers" className="nav-item block pl-4" onClick={closeMenu}>Hire React Developers</Link>
                  <Link to="/hire/nodejs-developers" className="nav-item block pl-4" onClick={closeMenu}>Hire Node.js Developers</Link>
                  <Link to="/hire/mobile-app-developers" className="nav-item block pl-4" onClick={closeMenu}>Hire Mobile App Developers</Link>
                  <Link to="/hire/full-stack-developers" className="nav-item block pl-4" onClick={closeMenu}>Hire Full Stack Developers</Link>
                  <Link to="/hire/ai-engineers" className="nav-item block pl-4" onClick={closeMenu}>Hire AI & Automation Engineers</Link>
                  <Link to="/hire/ui-ux-designers" className="nav-item block pl-4" onClick={closeMenu}>Hire UI/UX Designers</Link>
                  <Link to="/hire/digital-marketers" className="nav-item block pl-4" onClick={closeMenu}>Hire Digital Marketers</Link>
                  <Link to="/hire/development-team" className="nav-item block pl-4 font-bold text-blue-200 pt-2 mt-2 border-t border-blue-700" onClick={closeMenu}>Hire Dedicated Team</Link>
                </div>
              )}
            </div>

            <MobileLink to="/blog">Blog</MobileLink>
            <MobileLink to="/careers">Careers</MobileLink>
            <div className="pt-4 flex flex-col items-center space-y-2 px-2">
              <Link
                to="/contact"
                className="nav-button primary w-full max-w-[200px] text-center"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
              <Link
                to="/contact"
                className="nav-button secondary w-full max-w-[200px] text-center"
                onClick={closeMenu}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NAv;
