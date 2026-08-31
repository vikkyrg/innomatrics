import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/innomatric_logo_only.png";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  
  
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const isScrollingToTop = useRef(false);

  const scrollToTop = () => {
    if (isScrollingToTop.current) return;
    isScrollingToTop.current = true;
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setTimeout(() => {
      isScrollingToTop.current = false;
    }, 1000);
  };

  return (
    <footer className="bg-secondary-900 text-secondary-200 border-t border-secondary-800">
      {/* Top CTA Banner */}
      <div className="border-b border-secondary-800/50">
        <div className="container-custom py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to accelerate your digital transformation?</h2>
              <p className="text-lg text-secondary-300">Partner with Innomatrics to build scalable, secure, and future-proof technology solutions.</p>
            </div>
            <Link to="/contact" className="btn-primary whitespace-nowrap">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & About */}
          <div className="lg:col-span-4 pr-0 lg:pr-12">
            <Link to="/" className="flex items-center mb-6" onClick={scrollToTop}>
              <img src={logo} alt="Innomatrics Logo" className="h-14 w-auto mr-3" />
              <div className="flex flex-col items-start leading-none mt-1">
                <span className="text-2xl font-extrabold tracking-wider text-white leading-none uppercase">INNOMATRICS</span>
                <span className="text-[0.65rem] font-bold tracking-[0.2em] text-primary-500 leading-none mt-1">TECHNOLOGIES</span>
              </div>
            </Link>
            <p className="text-secondary-400 leading-relaxed mb-8">
              We empower global enterprises with innovative technology solutions. From strategic consulting to complex implementations, we engineer digital products that drive sustainable growth.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/innomatricstech/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center text-secondary-300 hover:bg-primary-600 hover:text-white transition-all">
                <FaLinkedin size={18} />
              </a>
              <a href="https://twitter.com/innomatricstech" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center text-secondary-300 hover:bg-primary-600 hover:text-white transition-all">
                <FaXTwitter size={18} />
              </a>
              <a href="https://www.facebook.com/people/Innomatrics-Technologies/61560974679711/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center text-secondary-300 hover:bg-primary-600 hover:text-white transition-all">
                <FaFacebook size={18} />
              </a>
              <a href="https://www.instagram.com/innomatrics_tech/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center text-secondary-300 hover:bg-primary-600 hover:text-white transition-all">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/web-development" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Enterprise Web Development</Link></li>
              <li><Link to="/custom-software" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Custom Software Solutions</Link></li>
              <li><Link to="/ai-automation" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>AI & Automation</Link></li>
              <li><Link to="/cloud-and-devops" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Cloud Architecture & DevOps</Link></li>
              <li><Link to="/cybersecurity" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Cybersecurity Services</Link></li>
              <li><Link to="/it-consulting" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>IT Strategic Consulting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>About Us</Link></li>

              <li><Link to="/careers" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Careers</Link></li>
              <li><Link to="/industries" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Industries</Link></li>
              <li><Link to="/blog" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Insights & Blog</Link></li>
              <li><Link to="/contact" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 text-lg">Global Headquarters</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-secondary-400">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-primary-500" />
                <span className="leading-relaxed">
                  2nd Floor, Akshay Complex,<br />
                  No. 01, 16th Main Rd,<br />
                  BTM 2nd Stage,<br />
                  Bengaluru - 560076, India
                </span>
              </li>
              <li className="flex items-center gap-3 text-secondary-400">
                <FaPhoneAlt className="flex-shrink-0 text-primary-500" />
                <a href="tel:+918431655799" className="hover:text-primary-400 transition-colors">+91 84316 55799</a>
              </li>
              <li className="flex items-center gap-3 text-secondary-400">
                <FaEnvelope className="flex-shrink-0 text-primary-500" />
                <a href="mailto:hello@innomatricstech.com" className="hover:text-primary-400 transition-colors">hello@innomatricstech.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800 py-6">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-500 text-sm">
            &copy; {new Date().getFullYear()} Innomatrics Technologies. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-secondary-500 hover:text-white transition-colors" onClick={scrollToTop}>Privacy Policy</Link>
            <Link to="/terms" className="text-secondary-500 hover:text-white transition-colors" onClick={scrollToTop}>Terms of Service</Link>
            <button onClick={() => setIsMapVisible(true)} className="text-secondary-500 hover:text-white transition-colors">Sitemap</button>
          </div>
        </div>
      </div>

      {/* Map Modal */}
      {isMapVisible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-secondary-900/90 p-4" onClick={() => setIsMapVisible(false)}>
          <div className="bg-white rounded-md overflow-hidden shadow-sm w-full max-w-4xl relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-secondary-900">Our Location</h3>
              <button
                onClick={() => setIsMapVisible(false)}
                className="w-8 h-8 hover:bg-gray-100 text-secondary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Close Map"
              >
                ✕
              </button>
            </div>
            <div className="w-full h-[500px]">
              <iframe
                title="Innomatrics Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8665580103234!2d77.61023809999999!3d12.916297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8105361c7a5b6cb1%3A0x5bb38919fd174b44!2sInnomatrics%20Technologies!5e0!3m2!1sen!2sin!4v1786448702845!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
