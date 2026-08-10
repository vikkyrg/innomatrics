import heroImgNew from "../../../assets/new_category_images/UiUxDesign_hero.jpg";
import diffImgNew from "../../../assets/new_category_images/UiUxDesign_diff.jpg";
import React, { forwardRef, useEffect, useState } from "react";
import { FaCheckCircle, FaSyncAlt, FaPlug, FaCode, FaDesktop, FaMobile, FaShoppingCart, FaDatabase, FaCloud, FaLock, FaChartLine, FaUsers, FaShieldAlt, FaRocket, FaLightbulb, FaBuilding, FaChartLine as FaChartLineIcon, FaCogs, FaRobot, FaPaintBrush, FaBriefcase, FaReact, FaNodeJs, FaAngular, FaVuejs, FaPhp, FaPython } from "react-icons/fa";




import w1 from "../../../assets/services_cards/UiUxDesign_w1.jpg";
import w2 from "../../../assets/services_cards/UiUxDesign_w2.jpg";
import w3 from "../../../assets/services_cards/UiUxDesign_w3.jpg";
import w4 from "../../../assets/services_cards/UiUxDesign_w4.jpg";
import w5 from "../../../assets/services_cards/UiUxDesign_w5.jpg";
import w6 from "../../../assets/services_cards/UiUxDesign_w6.jpg";




import "./UiUxDesign.css";
import { Link } from "react-router-dom";


import { SiMongodb, SiMysql } from "react-icons/si";
import wireframingImg from "../../../assets/webServices/Wireframing.jpg";
import websiteUiDesignImg from "../../../assets/webServices/Website UI Design.jpg";
import uiuxDesignImg from "../../../assets/webServices/UIUX Design.jpg";
import saasProductDesignImg from "../../../assets/webServices/SaaS Product Design.jpg";
import mobileAppUiDesignImg from "../../../assets/webServices/Mobile App UI Design.jpg";
import figmaPrototypingImg from "../../../assets/webServices/Figma Prototyping.jpg";
import dashboardDesignImg from "../../../assets/webServices/Dashboard Design.jpg";
import brandingVisualIdentityImg from "../../../assets/webServices/Branding & Visual Identity.jpg";
import designSystemDevelopmentImg from "../../../assets/webServices/Website Security.jpg";

const ServicesCard = ({ title, description, image }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 m-4 flex-1 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100">
    <img src={image} className="w-full h-32 object-contain mb-4" alt={title} />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const UiUxDesign = forwardRef((props, ref) => {
  const [hoveredService, setHoveredService] = useState(null);
  const technologies = [
    { name: "Figma", icon: <FaPaintBrush className="text-blue-600 text-2xl" /> },
    { name: "Adobe XD", icon: <FaPaintBrush className="text-blue-600 text-2xl" /> },
    { name: "Sketch", icon: <FaPaintBrush className="text-blue-600 text-2xl" /> },
    { name: "InVision", icon: <FaDesktop className="text-blue-600 text-2xl" /> },
    { name: "Zeplin", icon: <FaCode className="text-blue-600 text-2xl" /> },
    { name: "Miro", icon: <FaLightbulb className="text-blue-600 text-2xl" /> },
    { name: "Webflow", icon: <FaDesktop className="text-blue-600 text-2xl" /> },
    { name: "Framer", icon: <FaMobile className="text-blue-600 text-2xl" /> },
  ];

  const services = [
    { title: "UI/UX Design", icon: <FaPaintBrush className="text-blue-600 text-2xl" />, description: "User-centric interfaces that combine stunning aesthetics with seamless usability.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: uiuxDesignImg },
    { title: "Website UI Design", icon: <FaDesktop className="text-blue-600 text-2xl" />, description: "Beautiful, responsive website designs that captivate and convert visitors.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: websiteUiDesignImg },
    { title: "Mobile App UI Design", icon: <FaMobile className="text-blue-600 text-2xl" />, description: "Intuitive mobile application interfaces optimized for iOS and Android.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: mobileAppUiDesignImg },
    { title: "Dashboard Design", icon: <FaChartLine className="text-blue-600 text-2xl" />, description: "Clear, functional, and visually appealing admin panels and data dashboards.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: dashboardDesignImg },
    { title: "SaaS Product Design", icon: <FaCloud className="text-blue-600 text-2xl" />, description: "End-to-end product design for scalable Software-as-a-Service platforms.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: saasProductDesignImg },
    { title: "Design System Development", icon: <FaCogs className="text-blue-600 text-2xl" />, description: "Comprehensive component libraries and style guides for consistent branding.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: designSystemDevelopmentImg },
    { title: "Figma Prototyping", icon: <FaDesktop className="text-blue-600 text-2xl" />, description: "Interactive, high-fidelity prototypes to visualize and test your product before coding.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: figmaPrototypingImg },
    { title: "UX Research", icon: <FaUsers className="text-blue-600 text-2xl" />, description: "In-depth user research, testing, and persona development to inform design decisions.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=600&auto=format&fit=crop" },
    { title: "Wireframing", icon: <FaCode className="text-blue-600 text-2xl" />, description: "Structural blueprints that define the layout and flow of your digital product.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: wireframingImg },
    { title: "Branding & Visual Identity", icon: <FaLightbulb className="text-blue-600 text-2xl" />, description: "Cohesive brand identities, including logos, typography, and color palettes.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: brandingVisualIdentityImg }
  ];

  const serviceImages = {
    'default': diffImgNew,
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.image }), {})
  };

  const serviceDescriptions = {
    'default': "Explore our comprehensive suite of professional services designed to accelerate your digital transformation.",
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.description }), {})
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50" ref={ref}>
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImgNew})`,
          }}
        ></div>
        <div className="absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mt-16">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-8 text-left">
              UI/UX & Product Design Services
            </h1>
            <p className="text-xl text-white max-w-1xl mt-2 text-left">
              Engaging, intuitive, and high-conversion design services for web and mobile platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Paragraph */}
          <div className="mb-20 px-4 md:px-4">
            <h2 className="text-xl font-bold text-orange-600 mb-4">OVERVIEW</h2>
            <p className="text-lg text-gray-900 leading-relaxed">
              At Innomatrics, we understand the pace of today's digital
              transformation. Businesses must rapidly innovate to meet customer
              demands, reduce technical debt, modernize legacy systems, and stay
              ahead with emerging technologies. digital transformation.Businesses must be innovative
              <br />
              Our team brings together deep technical expertise, domain
              knowledge, and hands-on experience to deliver scalable, secure,
              and reliable software solutions. Whether it's full-stack web
              development, custom enterprise applications, or cloud-native
              services — we build with performance, flexibility, and
              future-readiness in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-6">OUR OFFERINGS</h3>
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                {services.map(s => s.title).map((service) => (
                  <div 
                    key={service}
                    onMouseEnter={() => setHoveredService(service.replace('— ', ''))}
                    onMouseLeave={() => setHoveredService(null)}
                    className="group"
                  >
                    <h4 className="text-lg font-semibold text-gray-700 cursor-pointer group-hover:text-red-500 transition-colors duration-300">
                      {service}
                    </h4>
                  </div>
                ))}

                <p className="text-gray-600 mt-6">
                  Leverage digital technologies to fundamentally change how you operate and deliver value to customers. 
                  Embrace digital transformation to enhance your agility, creativity, and decision-making capabilities 
                  while improving growth opportunities.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src={serviceImages[hoveredService || 'default']}
                alt={hoveredService ? `${hoveredService} Services` : "UI/UX & Product Design Services"}
                className="rounded-lg shadow-xl w-full object-cover transition-opacity duration-500"
                style={{ height: '500px' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-lg">
                  {serviceDescriptions[hoveredService || 'default']}
                </p>
              </div>
            </div>
          </div>

          {/* Value Delivered Section */}
          <div className="w-full px-4 py-16 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-xl font-bold text-orange-500 mb-4">VALUE DELIVERED</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-12">
                Engineering excellence with<br />real-world impact
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">User Retention</h4>
                    <p className="text-blue-100 mb-4">
                      Increased app retention rates by 60% through intuitive UX redesigns.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">60%</span>
                      <span className="text-sm">Retention Boost</span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Task Completion</h4>
                    <p className="text-blue-100 mb-4">
                      Improved user task completion speed by 40% with streamlined flows.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">40%</span>
                      <span className="text-sm">Faster Workflows</span>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Brand Engagement</h4>
                    <p className="text-blue-100 mb-4">
                      Boosted user interaction times by 85% with modern aesthetics.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">85%</span>
                      <span className="text-sm">Engagement</span>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Design Handoff</h4>
                    <p className="text-blue-100 mb-4">
                      Accelerated development by 50% using comprehensive Design Systems.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">50%</span>
                      <span className="text-sm">Dev Speedup</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Stats Section */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">300+</div>
                  <div className="text-gray-600 mt-2">Screens Designed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">99%</div>
                  <div className="text-gray-600 mt-2">User Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">100%</div>
                  <div className="text-gray-600 mt-2">Figma Handoffs</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">15+</div>
                  <div className="text-gray-600 mt-2">UX Researchers</div>
                </div>
              </div>
            </div>
          </div>

          {/* The Infinite Difference Section */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side */}
            <div>
              <h2 className="text-xl font-bold text-orange-500 mb-4">THE INNOMATRICS DIFFERENCE</h2>
              <h3 className="text-4xl font-bold text-gray-800 mb-8">
                Innovative solutions & enhanced business value
              </h3>
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={diffImgNew}
                  alt="Innomatrics Tech Professional"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Industry Recognition</h2>
                <p className="text-lg text-gray-800">
                  Innomatrics Tech creates award-winning, user-centric digital experiences that captivate audiences.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Digital Innovation</h2>
                <p className="text-lg text-gray-800">
                  Crafting pixel-perfect, accessible interfaces that work flawlessly across all device breakpoints.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Technology Assets</h2>
                <p className="text-lg text-gray-800">
                  Leveraging data-driven UX research and interactive prototyping to validate designs before coding.
                </p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
            {/* Left Image */}
            

            {/* Right Content */}
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-red-600 mb-4">
                Design That Drives User Engagement
              </h2>
              <div className="w-24 h-1 bg-blue-600 mb-6"></div>
              <p className="text-xl  text-gray-600">
                We craft beautiful, user-centric interfaces that not only look stunning but also enhance usability and drive conversions. Our design process ensures your product is intuitive, accessible, and aligned with your brand identity.
              </p>
            </div>
            <div className="w-full mt-16 md:w-1/2">
              <img
                src={heroImgNew}
                alt="Innomatrics Digital Solutions"
                className="w-full h-72 rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
              Our Comprehensive UI/UX & Product Design Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <svg
                            className="w-4 h-4 text-blue-600 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Innomatrics */}
          <div className="mb-20 bg-blue-900 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Innomatrics?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">300+</div>
                <div className="text-xl">Screens Designed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-xl">User Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-xl">Figma Handoffs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-xl">UX Researchers</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Ready to Redesign Your App?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Let's discuss how Innomatrics Tech can help you achieve your digital
              goals with our expert web development services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-md"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default UiUxDesign;
