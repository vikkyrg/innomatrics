import React, { forwardRef, useEffect, useState } from "react";
import heroImgNew from "../../../assets/new_category_images/DigitalMarket_hero.jpg";
import diffImgNew from "../../../assets/new_category_images/DigitalMarket_diff.jpg";
import { FaCheckCircle, FaSyncAlt, FaPlug, FaCode, FaDesktop, FaMobile, FaShoppingCart, FaDatabase, FaCloud, FaLock, FaChartLine, FaUsers, FaShieldAlt, FaRocket, FaLightbulb, FaBuilding, FaChartLine as FaChartLineIcon, FaCogs, FaRobot, FaPaintBrush, FaBriefcase, FaReact, FaNodeJs, FaAngular, FaVuejs, FaPhp, FaPython } from "react-icons/fa";

import "./DigitalMarket.css";
import { Link } from "react-router-dom";

const ServicesCard = ({ title, description, image }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 m-4 flex-1 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100">
    <img src={image} className="w-full h-32 object-cover rounded mb-4" alt={title} />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const DigitalMarket = forwardRef((props, ref) => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { title: "SEO", icon: <FaChartLine className="text-blue-600 text-2xl" />, description: "Boost your organic search rankings and drive targeted traffic to your website.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" },
    { title: "Local SEO", icon: <FaChartLineIcon className="text-blue-600 text-2xl" />, description: "Dominate local search results and attract customers in your geographical area.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop" },
    { title: "Technical SEO", icon: <FaCode className="text-blue-600 text-2xl" />, description: "Optimize your website's technical foundation for better crawling and indexing.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=600&auto=format&fit=crop" },
    { title: "Google Ads", icon: <FaChartLine className="text-blue-600 text-2xl" />, description: "High-converting pay-per-click campaigns on the Google Search Network.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=600&auto=format&fit=crop" },
    { title: "Meta Ads", icon: <FaMobile className="text-blue-600 text-2xl" />, description: "Targeted advertising campaigns across Facebook, Instagram, and the Meta ecosystem.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop" },
    { title: "Social Media Marketing", icon: <FaUsers className="text-blue-600 text-2xl" />, description: "Strategic marketing campaigns to grow your brand presence on social platforms.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=600&auto=format&fit=crop" },
    { title: "Social Media Management", icon: <FaDesktop className="text-blue-600 text-2xl" />, description: "Comprehensive management of your social profiles, content, and community.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop" },
    { title: "Content Marketing", icon: <FaPaintBrush className="text-blue-600 text-2xl" />, description: "Engaging, high-quality content strategies to educate and convert your audience.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=600&auto=format&fit=crop" },
    { title: "Google Business Profile Optimization", icon: <FaBuilding className="text-blue-600 text-2xl" />, description: "Maximize your visibility on Google Maps and local search results.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop" },
    { title: "Lead Generation", icon: <FaRocket className="text-blue-600 text-2xl" />, description: "Data-driven strategies to capture and nurture high-quality business leads.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop" },
    { title: "WhatsApp Marketing", icon: <FaMobile className="text-blue-600 text-2xl" />, description: "Direct, personalized marketing campaigns delivered straight to WhatsApp.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=600&auto=format&fit=crop" },
    { title: "Email Marketing", icon: <FaDesktop className="text-blue-600 text-2xl" />, description: "Automated email sequences and newsletters to retain customers and drive sales.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" },
    { title: "Online Reputation Management", icon: <FaShieldAlt className="text-blue-600 text-2xl" />, description: "Monitor, manage, and improve your brand's digital reputation and reviews.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { title: "Conversion Rate Optimization", icon: <FaChartLineIcon className="text-blue-600 text-2xl" />, description: "A/B testing and UX improvements to turn more visitors into paying customers.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=600&auto=format&fit=crop" }
  ];

  const serviceImages = {
    'default': diffImgNew,
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.image }), {})
  };

  const serviceDescriptions = {
    'default': "At Innomatrics, we help businesses grow their online presence with data-driven strategies and creative campaigns.",
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
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mt-16">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-8 text-left">
              Digital Marketing Agency
            </h1>
            <p className="text-xl text-white max-w-1xl mt-2 text-left">
              Data-driven strategies and creative campaigns to drive measurable growth and ROI.
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
              At Innomatrics, we understand the fast-changing landscape of the digital marketplace. To thrive in today's connected world, businesses must leverage data-driven strategies, enhance customer engagement, and optimize their digital platforms. Our team brings together deep expertise in digital technologies, domain knowledge, and hands-on experience to build scalable, measurable marketing solutions.
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
                alt={hoveredService ? `${hoveredService} Services` : "Digital Marketing Services"}
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
                Digital efficiency & enhanced<br />marketing value
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Proven ROI</h4>
                    <p className="text-blue-100 mb-4">
                      Our clients consistently achieve significant results, with typical ROI increases between 40%-80%.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">40-80%</span>
                      <span className="text-sm">ROI Boost</span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Lead Generation</h4>
                    <p className="text-blue-100 mb-4">
                      Targeted strategies that drive high-quality leads and increase conversion rates significantly.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">3x</span>
                      <span className="text-sm">More Leads</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Stats Section */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">40%</div>
                  <div className="text-gray-600 mt-2">Minimum ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">80%</div>
                  <div className="text-gray-600 mt-2">Maximum ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">100+</div>
                  <div className="text-gray-600 mt-2">Active Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600 mt-2">Marketing Experts</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20 mt-20">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
              Our Digital Marketing Services
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

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Let's discuss how Innomatrics Tech can help you achieve your digital
              marketing goals with data-driven strategies.
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

export default DigitalMarket;