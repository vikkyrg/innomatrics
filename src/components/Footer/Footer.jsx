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
  FaBuilding,
  FaLaptopCode,
  FaIndustry,
  FaUsers
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
        <div className="container-custom py-8 lg:py-10">
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
      <div className="container-custom pt-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1.25fr] gap-x-8 gap-y-12">
          
          {/* Brand & Socials */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center mb-6" onClick={scrollToTop}>
              <img src={logo} alt="Innomatrics Logo" className="h-10 w-auto mr-3" />
              <div className="flex flex-col items-start leading-none mt-1">
                <span className="text-xl font-extrabold tracking-wider text-white leading-none uppercase">INNOMATRICS</span>
                <span className="text-[0.55rem] font-bold tracking-[0.2em] text-primary-500 leading-none mt-1">TECHNOLOGIES</span>
              </div>
            </Link>
            <p className="text-secondary-400 text-sm leading-relaxed mb-6 text-justify">
              We empower global enterprises with innovative technology solutions. From strategic consulting to complex implementations, we engineer digital products that drive sustainable growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/company/innomatricstech/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-secondary-800 flex items-center justify-center text-secondary-300 hover:bg-primary-600 hover:text-white transition-all">
                <FaLinkedin size={14} />
              </a>
              <a href="https://twitter.com/innomatricstech" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-secondary-800 flex items-center justify-center text-secondary-300 hover:bg-primary-600 hover:text-white transition-all">
                <FaXTwitter size={14} />
              </a>
              <a href="https://www.facebook.com/people/Innomatrics-Technologies/61560974679711/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-secondary-800 flex items-center justify-center text-secondary-300 hover:bg-primary-600 hover:text-white transition-all">
                <FaFacebook size={14} />
              </a>
              <a href="https://www.instagram.com/innomatrics_tech/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-secondary-800 flex items-center justify-center text-secondary-300 hover:bg-primary-600 hover:text-white transition-all">
                <FaInstagram size={14} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest flex items-center gap-2">
              <FaBuilding className="text-primary-500" /> Company
            </h4>
            <ul className="space-y-3 mb-4 text-sm">
              <li><Link to="/overview" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>About Us</Link></li>
              <li><Link to="/why-us" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Why Choose Us</Link></li>
              <li><Link to="/vision-mission" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Vision & Mission</Link></li>
              <li><Link to="/careers" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Careers</Link></li>
              <li><Link to="/blog" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Insights & Blog</Link></li>
            </ul>
            <Link to="/about" className="inline-flex items-center text-sm font-bold text-primary-400 hover:text-primary-300 transition-colors" onClick={scrollToTop}>
              Explore More <span className="ml-1">›</span>
            </Link>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest flex items-center gap-2">
              <FaLaptopCode className="text-primary-500" /> Services
            </h4>
            <ul className="space-y-3 mb-4 text-sm">
              <li><Link to="/web-development" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Web Development</Link></li>
              <li><Link to="/app-development" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>App Development</Link></li>
              <li><Link to="/custom-software" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Custom Software</Link></li>
              <li><Link to="/ai-automation" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>AI & Automation</Link></li>
              <li><Link to="/cloud-and-devops" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Cloud & DevOps</Link></li>
            </ul>
            <Link to="/services" className="inline-flex items-center text-sm font-bold text-primary-400 hover:text-primary-300 transition-colors" onClick={scrollToTop}>
              View All Services <span className="ml-1">›</span>
            </Link>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest flex items-center gap-2">
              <FaIndustry className="text-primary-500" /> Industries
            </h4>
            <ul className="space-y-3 mb-4 text-sm">
              <li><Link to="/industries/healthcare" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Healthcare</Link></li>
              <li><Link to="/industries/education" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Education</Link></li>
              <li><Link to="/industries/ecommerce" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>E-Commerce</Link></li>
              <li><Link to="/industries/real-estate" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Real Estate</Link></li>
              <li><Link to="/industries/banking" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Finance & Banking</Link></li>
            </ul>
            <Link to="/industries" className="inline-flex items-center text-sm font-bold text-primary-400 hover:text-primary-300 transition-colors" onClick={scrollToTop}>
              View All Industries <span className="ml-1">›</span>
            </Link>
          </div>

          {/* Hire Developers */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest flex items-center gap-2">
              <FaUsers className="text-primary-500" /> Developers
            </h4>
            <ul className="space-y-3 mb-4 text-sm">
              <li><Link to="/hire/react-developers" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>React Developers</Link></li>
              <li><Link to="/hire/mobile-app-developers" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Mobile Developers</Link></li>
              <li><Link to="/hire/ai-engineers" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>AI Engineers</Link></li>
              <li><Link to="/hire/nodejs-developers" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Node.js Developers</Link></li>
              <li><Link to="/hire/development-team" className="text-secondary-400 hover:text-primary-400 transition-colors" onClick={scrollToTop}>Dedicated Team</Link></li>
            </ul>
            <Link to="/hire-developers" className="inline-flex items-center text-sm font-bold text-primary-400 hover:text-primary-300 transition-colors" onClick={scrollToTop}>
              View All Developers <span className="ml-1">›</span>
            </Link>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest flex items-center gap-2">
              <FaEnvelope className="text-primary-500" /> Get In Touch
            </h4>
            <ul className="space-y-4 text-sm">
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
        <div className="container-custom flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-secondary-500 text-sm">
            &copy; {new Date().getFullYear()} Innomatrics Technologies. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm justify-center">
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
