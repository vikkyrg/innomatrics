import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/innomatric_logo_only.png";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaRegClock,
  FaWhatsapp,
  FaPaperPlane,
  FaShieldAlt,
  FaRocket,
  FaLock,
  FaAward
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  MdHeadsetMic,
  MdAccessTime,
  MdVerified,
  MdOutlineSupportAgent,
  MdArrowForward,
  MdArrowUpward
} from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";
import { BiBuildingHouse, BiBox, BiBriefcase, BiGridAlt } from "react-icons/bi";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const isScrollingToTop = useRef(false);

  const toggleVisibility = () => {
    if (isScrollingToTop.current) return;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPos = window.innerHeight + window.pageYOffset;
    if (scrollHeight - scrollPos <= 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    isScrollingToTop.current = true;
    setIsVisible(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setTimeout(() => {
      isScrollingToTop.current = false;
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="font-sans">
      {/* 1. Top Banner Section (Kept light for contrast as a CTA) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 -mb-16">
        <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col xl:flex-row items-center justify-between border border-blue-100 shadow-xl gap-6">
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-blue-200">
              <FaPaperPlane className="text-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Have a Project in Mind?</h3>
              <p className="text-gray-600 text-sm md:text-base">Let's turn your ideas into powerful digital solutions.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 xl:gap-8 flex-grow justify-center xl:justify-end border-t xl:border-t-0 border-gray-200 pt-6 xl:pt-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <MdHeadsetMic className="text-xl" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900 leading-tight">Free Consultation</p>
                <p className="text-xs text-gray-500">Talk to our experts</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <MdAccessTime className="text-xl" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900 leading-tight">Quick Response</p>
                <p className="text-xs text-gray-500">Within 24 hours</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                <MdVerified className="text-xl" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900 leading-tight">100% Satisfaction</p>
                <p className="text-xs text-gray-500">We ensure quality</p>
              </div>
            </div>

            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-md shadow-blue-200 whitespace-nowrap ml-0 xl:ml-4">
              Get Free Quote <MdArrowForward />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Body (Original Dark Gradient Theme) */}
      <div className="footer-gradient-animated bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white pt-24 pb-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap xl:flex-nowrap justify-between gap-8 xl:gap-4">

            {/* Col 1: Brand & Newsletter */}
            <div className="w-full xl:w-[26%] flex-shrink-0">
              <div className="flex items-center mb-6">
                <img src={logo} alt="Innomatrics Logo" className="h-16 w-auto mr-3" />
                <div>
                  <h3 className="text-[17px] font-extrabold text-white leading-tight tracking-wide">INNOMATRICS</h3>
                  <p className="text-[10px] font-bold text-blue-200 tracking-widest uppercase">Technologies</p>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-300 mb-6 leading-relaxed">
                We empower businesses with innovative technology solutions. From idea to implementation, we build digital products that drive growth and success.
              </p>

              <div className="mb-8">
                <p className="text-sm font-bold text-white mb-3">Follow Us</p>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/people/Innomatrics-Technologies/61560974679711/" target="_blank" rel="noreferrer" className="flex items-center justify-center text-[#1877F2] hover:scale-110 transition-transform">
                    <FaFacebook size={24} />
                  </a>
                  <a href="https://www.linkedin.com/company/innomatricstech/" target="_blank" rel="noreferrer" className="flex items-center justify-center text-[#0077b5] hover:scale-110 transition-transform">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://www.instagram.com/innomatrics_tech/" target="_blank" rel="noreferrer" className="flex items-center justify-center text-[#E1306C] hover:scale-110 transition-transform">
                    <FaInstagram size={24} />
                  </a>
                  <a href="https://twitter.com/innomatricstech" target="_blank" rel="noreferrer" className="flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <FaXTwitter size={24} />
                  </a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="flex items-center justify-center text-[#FF0000] hover:scale-110 transition-transform">
                    <FaYoutube size={26} />
                  </a>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <FaEnvelope size={12} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white leading-tight">Subscribe to Our Newsletter</p>
                    <p className="text-[11px] text-gray-400">Get updates on tech, insights & more.</p>
                  </div>
                </div>
                <div className="flex">
                  <input type="email" placeholder="Enter your email" className="w-full bg-white/10 border border-white/20 rounded-l-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-green-400" />
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 rounded-r-lg flex items-center justify-center transition-colors">
                    <FaPaperPlane size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* Col 2: Company */}
            <div className="w-[45%] md:w-[30%] lg:w-[20%] xl:w-[13%] flex-shrink-0">
              <div className="flex items-center gap-2 mb-6">
                <BiBuildingHouse className="text-blue-300 text-xl" />
                <h3 className="text-[15px] font-bold text-white">Company</h3>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  { name: 'About Us', path: '/about' },
                  { name: 'Why Choose Us', path: '/why-us' },
                  { name: 'Our Team', path: '/about' },
                  { name: 'Careers', path: '/careers' },
                  { name: 'Blog', path: '/blog' },
                  { name: 'Case Studies', path: '#' },
                  { name: 'News & Updates', path: '#' },
                  { name: 'Contact Us', path: '/contact' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path} className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors flex items-center"><span className="w-1 h-1 rounded-full bg-blue-500 mr-2"></span>{item.name}</Link>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center justify-center gap-1 text-[13px] font-semibold text-white border border-white/20 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                Explore More <FiChevronRight />
              </Link>
            </div>

            {/* Col 3: Services */}
            <div className="w-[45%] md:w-[30%] lg:w-[20%] xl:w-[13%] flex-shrink-0">
              <div className="flex items-center gap-2 mb-6">
                <BiBox className="text-green-300 text-xl" />
                <h3 className="text-[15px] font-bold text-white">Services</h3>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  { name: 'Web Development', path: '/web-development' },
                  { name: 'App Development', path: '/app-development' },
                  { name: 'Custom Software', path: '/custom-software' },
                  { name: 'E-Commerce Solutions', path: '/e-commerce' },
                  { name: 'UI/UX Design', path: '/ui-ux-design' },
                  { name: 'Digital Marketing', path: '/digital-marketing' },
                  { name: 'Cloud & DevOps', path: '/cloud-and-devops' },
                  { name: 'Maintenance & Support', path: '/it-consulting' },
                  { name: 'API Integration', path: '#' },
                  { name: 'QA & Testing', path: '/qa-testing' },
                  { name: 'IT Consulting', path: '/it-consulting' },
                  { name: 'Dedicated Developers', path: '/hire-developers' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path} className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors flex items-center"><span className="w-1 h-1 rounded-full bg-green-500 mr-2"></span>{item.name}</Link>
                  </li>
                ))}
              </ul>
              <Link to="/services" className="inline-flex items-center justify-center gap-1 text-[13px] font-semibold text-white border border-white/20 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                View All Services <FiChevronRight />
              </Link>
            </div>

            {/* Col 4: Solutions */}
            <div className="w-[45%] md:w-[30%] lg:w-[20%] xl:w-[13%] flex-shrink-0">
              <div className="flex items-center gap-2 mb-6">
                <BiGridAlt className="text-purple-300 text-xl" />
                <h3 className="text-[15px] font-bold text-white">Solutions</h3>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  { name: 'AI & Automation', path: '/solutions' },
                  { name: 'ERP Solutions', path: '/solutions' },
                  { name: 'CRM Solutions', path: '/solutions' },
                  { name: 'SaaS Products', path: '/solutions' },
                  { name: 'Mobile Solutions', path: '/solutions' },
                  { name: 'Enterprise Solutions', path: '/solutions' },
                  { name: 'Startup Solutions', path: '/solutions' },
                  { name: 'API Integration', path: '/solutions' },
                  { name: 'Workflow Automation', path: '/solutions' },
                  { name: 'Business Intelligence', path: '/solutions' },
                  { name: 'Data Analytics', path: '/solutions' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path} className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors flex items-center"><span className="w-1 h-1 rounded-full bg-purple-500 mr-2"></span>{item.name}</Link>
                  </li>
                ))}
              </ul>
              <Link to="/solutions" className="inline-flex items-center justify-center gap-1 text-[13px] font-semibold text-white border border-white/20 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                View All Solutions <FiChevronRight />
              </Link>
            </div>

            {/* Col 5: Industries */}
            <div className="w-[45%] md:w-[30%] lg:w-[20%] xl:w-[13%] flex-shrink-0">
              <div className="flex items-center gap-2 mb-6">
                <BiBriefcase className="text-orange-300 text-xl" />
                <h3 className="text-[15px] font-bold text-white">Industries</h3>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  { name: 'Healthcare', path: '/industries/healthcare' },
                  { name: 'Education', path: '/industries/education' },
                  { name: 'E-Commerce', path: '/industries/e-commerce' },
                  { name: 'Real Estate', path: '/industries/real-estate' },
                  { name: 'Travel & Tourism', path: '/industries/travel-tourism' },
                  { name: 'Finance & Banking', path: '/industries/finance-banking' },
                  { name: 'Logistics & Transport', path: '/industries/logistics-transport' },
                  { name: 'Manufacturing', path: '/industries/manufacturing' },
                  { name: 'Retail & Distribution', path: '/industries/retail-distribution' },
                  { name: 'Media & Entertainment', path: '/industries/media-entertainment' },
                  { name: 'Non-Profit Organizations', path: '/industries/non-profit' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path} className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors flex items-center"><span className="w-1 h-1 rounded-full bg-orange-500 mr-2"></span>{item.name}</Link>
                  </li>
                ))}
              </ul>
              <Link to="/industries" className="inline-flex items-center justify-center gap-1 text-[13px] font-semibold text-white border border-white/20 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                View All Industries <FiChevronRight />
              </Link>
            </div>

            {/* Col 6: Get in Touch */}
            <div className="w-full lg:w-[45%] xl:w-[18%] flex-shrink-0">
              <div className="flex items-center gap-2 mb-6">
                <FaMapMarkerAlt className="text-blue-300 text-lg" />
                <h3 className="text-[15px] font-bold text-white">Get in Touch</h3>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-300 mt-1 flex-shrink-0 text-sm" />
                  <span className="text-[12px] font-medium text-gray-300 leading-relaxed">
                    2nd Floor, Akshay Complex,<br />
                    No. 01, 16th Main Rd,<br />
                    BTM 2nd Stage,<br />
                    Bengaluru - 560076,<br />
                    Karnataka, India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-blue-300 flex-shrink-0 text-sm" />
                  <a href="tel:+918431655799" className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors">+91 84316 55799</a>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-300 flex-shrink-0 text-sm" />
                  <a href="mailto:hello@innomatricstech.com" className="text-[13px] font-medium text-gray-300 hover:text-white transition-colors">hello@innomatricstech.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <FaRegClock className="text-blue-300 mt-1 flex-shrink-0 text-sm" />
                  <span className="text-[12px] font-medium text-gray-300 leading-relaxed">Mon - Sat: 9:30 AM - 6:30 PM</span>
                </li>
              </ul>
              <a href="https://wa.me/918431655799" target="_blank" rel="noreferrer" className="flex items-center justify-between bg-green-500/20 border border-green-500/30 p-3 rounded-xl hover:bg-green-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="text-green-400 text-2xl" />
                  <div>
                    <p className="text-[13px] font-bold text-white leading-tight">Chat on WhatsApp</p>
                    <p className="text-[10px] text-gray-300">We're online to help!</p>
                  </div>
                </div>
                <FiChevronRight className="text-green-400" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Bottom Features Banner */}
      <div className="bg-[#f5f5f5] border-t border-gray-200 py-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="flex items-center gap-4 pt-4 md:pt-0 justify-center md:justify-start px-2">
              <div className="w-12 h-12 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center text-green-500 flex-shrink-0">
                <FaShieldAlt className="text-xl" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-900 leading-tight">Trusted & Reliable</p>
                <p className="text-[11px] text-gray-600 mt-0.5">We are committed to your success</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 justify-center md:justify-start px-2">
              <div className="w-12 h-12 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center text-blue-500 flex-shrink-0">
                <FaRocket className="text-xl" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-900 leading-tight">On-Time Delivery</p>
                <p className="text-[11px] text-gray-600 mt-0.5">We deliver projects on time</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 justify-center md:justify-start px-2">
              <div className="w-12 h-12 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center text-orange-500 flex-shrink-0">
                <FaLock className="text-xl" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-900 leading-tight">Secure & Scalable</p>
                <p className="text-[11px] text-gray-600 mt-0.5">Security built into everything</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 justify-center md:justify-start px-2">
              <div className="w-12 h-12 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center text-purple-500 flex-shrink-0">
                <MdOutlineSupportAgent className="text-2xl" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-900 leading-tight">24/7 Support</p>
                <p className="text-[11px] text-gray-600 mt-0.5">Our team is always here</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 justify-center md:justify-start px-2 col-span-2 md:col-span-1">
              <div className="w-12 h-12 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center text-blue-500 flex-shrink-0">
                <FaAward className="text-xl" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-900 leading-tight">Quality Assured</p>
                <p className="text-[11px] text-gray-600 mt-0.5">Highest quality standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Dark Strip */}
      <div className="bg-[#0b1120] text-gray-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[12px] font-medium border-b border-gray-700 pb-6 mb-6">
            <Link to="/privacy" className="hover:text-white transition-colors flex items-center gap-2">
              <FaShieldAlt className="text-gray-500" /> Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors flex items-center gap-2">
              <FaPaperPlane className="text-gray-500" /> Terms of Service
            </Link>
            <Link to="/refund" className="hover:text-white transition-colors flex items-center gap-2">
              <FaAward className="text-gray-500" /> Refund Policy
            </Link>
            <Link to="/content" className="hover:text-white transition-colors flex items-center gap-2">
              <FaLock className="text-gray-500" /> Content Disclaimer
            </Link>
            <button onClick={() => setIsMapVisible(true)} className="hover:text-white transition-colors flex items-center gap-2">
              <BiGridAlt className="text-gray-500" /> Sitemap
            </button>
            <Link to="/cookie-policy" className="hover:text-white transition-colors flex items-center gap-2">
              <MdVerified className="text-gray-500" /> Cookie Policy
            </Link>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-[12px]">
            <p>© {new Date().getFullYear()} Innomatrics Technologies. All Rights Reserved.</p>
            <button onClick={scrollToTop} className="mt-4 md:mt-0 md:mr-24 flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
              <MdArrowUpward /> Back to Top
            </button>
          </div>
        </div>
      </div>

      {/* Map Modal */}
      {isMapVisible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4" onClick={() => setIsMapVisible(false)}>
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl w-full max-w-3xl relative mt-24" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsMapVisible(false)}
              className="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-colors z-10"
              aria-label="Close Map"
            >
              ✕
            </button>
            <div className="w-full h-[450px]">
              <iframe
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
