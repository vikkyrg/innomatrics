import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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

function NAv() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showInfoBar, setShowInfoBar] = useState(true);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setShowServices(false);
    setShowAbout(false);
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
        className={`w-full z-50 top-0 fixed transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-blue-300 via-blue-800 to-blue-100 shadow-lg backdrop-blur-sm"
            : "bg-transparent"
        } ${showInfoBar ? "" : "top-0"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="md:hidden flex items-center">
              <Link
                to="/contact"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-red-500 transition duration-150 ease-in-out shadow-lg"
              >
                Contact Us
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <div
                className="relative"
                onMouseEnter={() => setShowAbout(true)}
                onMouseLeave={() => setShowAbout(false)}
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
              <Link to="/industries" className="nav-item text-white hover:text-blue-200">
                Industries
              </Link>
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
                
                <Link
                  to="/contact"
                  className="nav-button secondary bg-red-500/90 hover:bg-red-600 text-white shadow-lg backdrop-blur-sm"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
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
        <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-blue-900`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="relative">
              <button
                onClick={() => setShowAbout(!showAbout)}
                className="nav-item block w-full text-left flex items-center justify-between"
              >
                About Us
                <svg
                  className={`h-5 w-5 transform ${
                    showAbout ? "rotate-180" : ""
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
                  className={`h-5 w-5 transform ${
                    showServices ? "rotate-180" : ""
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
                  <Link to="/digitalmarket" className="nav-item block pl-4" onClick={closeMenu}>
                    Digital Marketing
                  </Link>
                  <Link to="/logodesign" className="nav-item block pl-4" onClick={closeMenu}>
                    Logo Design
                  </Link>
                  <Link to="/socialmedia" className="nav-item block pl-4" onClick={closeMenu}>
                    Social Media Marketing
                  </Link>
                  <Link to="/devops" className="nav-item block pl-4" onClick={closeMenu}>
                    DevOps
                  </Link>
                </div>
              )}
            </div>
            <MobileLink to="/industries">Industries</MobileLink>
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
