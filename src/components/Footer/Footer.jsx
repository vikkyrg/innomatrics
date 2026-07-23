import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";
import { X } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGoogle, FaArrowUp } from "react-icons/fa";
import logo from "../../assets/innomatric_logo_only.png";
import { useState, useEffect, useRef } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isScrollingToTop = useRef(false);

  // Show button only when user reaches near the bottom/footer
  const toggleVisibility = () => {
    // If we are currently animating to the top, don't show the button
    if (isScrollingToTop.current) return;

    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPos = window.innerHeight + window.pageYOffset;
    
    // Show button only if we are within 800px of the bottom (near the footer)
    if (scrollHeight - scrollPos <= 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    isScrollingToTop.current = true;
    setIsVisible(false); // Hide immediately on click
    
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    // Reset the flag after the animation is expected to be finished
    // Most smooth scrolls take less than 1 second
    setTimeout(() => {
      isScrollingToTop.current = false;
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section with Logo and Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Innomatrics Logo" className="h-12 w-12 mr-3" />
              <div>
                <h3 className="text-xl font-bold">INNOMATRICS TECH</h3>
                <p className="text-blue-300 text-sm">Innovate Inspire Integrate</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering businesses with innovative technology solutions. We specialize in web development, mobile apps, digital marketing, and more.
            </p>
            <div className="social-icons-container">
              <a 
                href="https://www.facebook.com/people/Innomatrics-Technologies/61560974679711/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link facebook"
                title="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://twitter.com/innomatricstech" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link twitter"
                title="Twitter"
              >
                <FontAwesomeIcon icon={faXTwitter} style={{fontSize: '18px'}} />
              </a>
              <a 
                href="https://www.instagram.com/innomatrics_tech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link instagram"
                title="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/innomatricstech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link linkedin"
                title="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LMs1Lcu2sMwxYLRSNaiwMDQwNTYzTDZPNE0yS04ytDKoME1KMrawNLRMSzE0N0kyMfGSyMzLy89NLCnKTC5WKElNzsjLz8lPz0wtBgCTQRi5&q=innomatrics+technologies&rlz=1C1VDKB_enIN1002IN1002&oq=innomatri&gs_lcrp=EgZjaHJvbWUqFQgCEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg8MgYIARBFGDwyFQgCEC4YJxivARjHARiABBiKBRiOBTIGCAMQRRg7MgYIBBBFGDsyBggFEEUYPDIGCAYQRRg8MgYIBxBFGD3SAQg0NDQwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link google"
                title="Google"
              >
                <FaGoogle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about/overview" className="text-gray-300 hover:text-white transition-colors">Company Overview</Link>
              </li>
              <li>
                <Link to="/about/vision-mission" className="text-gray-300 hover:text-white transition-colors">Vision & Mission</Link>
              </li>
              <li>
                <Link to="/about/why-us" className="text-gray-300 hover:text-white transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-300 hover:text-white transition-colors">Industries</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/webdev" className="text-gray-300 hover:text-white transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/appdev" className="text-gray-300 hover:text-white transition-colors">App Development</Link>
              </li>
              <li>
                <Link to="/digitalmarket" className="text-gray-300 hover:text-white transition-colors">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/logodesign" className="text-gray-300 hover:text-white transition-colors">Logo Design</Link>
              </li>
              <li>
                <Link to="/socialmedia" className="text-gray-300 hover:text-white transition-colors">Social Media Marketing</Link>
              </li>
              <li>
                <Link to="/devops" className="text-gray-300 hover:text-white transition-colors">DevOps Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-300 mt-1 mr-3" />
                <span className="text-gray-300">
                  2nd Floor, Akshay Complex, No. 01,<br />
                  16th Main Rd, near Bharat Petroleum,<br />
                  BTM 2nd Stage, Bengaluru,<br />
                  Karnataka 560076
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-300 mr-3" />
                <a href="tel:+918431655799" className="text-gray-300 hover:text-white transition-colors">
                  +91 8431655799
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-300 mr-3" />
                <a href="mailto:hello@innomatricstech.com" className="text-gray-300 hover:text-white transition-colors">
                  hello@innomatricstech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-300">
                © {new Date().getFullYear()} Innomatrics Technologies. All Rights Reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
                <li>
                  <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/content" className="text-gray-300 hover:text-white transition-colors">Content Disclaimer</Link>
                </li>
                <li>
                  <Link to="/refund" className="text-gray-300 hover:text-white transition-colors">Refund Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
