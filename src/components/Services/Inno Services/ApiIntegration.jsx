import heroImgNew from "../../../assets/new_category_images/ApiIntegration_hero.jpg";
import diffImgNew from "../../../assets/new_category_images/ApiIntegration_diff.jpg";
import React, { forwardRef, useEffect, useState } from "react";
import { FaCheckCircle, FaSyncAlt, FaPlug, FaCode, FaDesktop, FaMobile, FaShoppingCart, FaDatabase, FaCloud, FaLock, FaChartLine, FaUsers, FaShieldAlt, FaRocket, FaLightbulb, FaBuilding, FaChartLine as FaChartLineIcon, FaCogs, FaRobot, FaPaintBrush, FaBriefcase, FaReact, FaNodeJs, FaAngular, FaVuejs, FaPhp, FaPython } from "react-icons/fa";




import w1 from "../../../assets/services_cards/ApiIntegration_w1.jpg";
import w2 from "../../../assets/services_cards/ApiIntegration_w2.jpg";
import w3 from "../../../assets/services_cards/ApiIntegration_w3.jpg";
import w4 from "../../../assets/services_cards/ApiIntegration_w4.jpg";
import w5 from "../../../assets/services_cards/ApiIntegration_w5.jpg";
import w6 from "../../../assets/services_cards/ApiIntegration_w6.jpg";




import "./ApiIntegration.css";
import { Link } from "react-router-dom";


import { SiMongodb, SiMysql } from "react-icons/si";
import restApiDevelopmentImg from "../../../assets/webServices/REST API Development.jpg";
import apiIntegrationImg from "../../../assets/webServices/API Integration.jpg";
import paymentGatewayIntegrationImg from "../../../assets/webServices/Payment Gateway Integration.jpg";
import razorpayIntegrationImg from "../../../assets/webServices/Razorpay Integration.jpg";
import whatsappApiImg from "../../../assets/webServices/WhatsApp API.jpg";
import smsGatewayImg from "../../../assets/webServices/SMS Gateway.jpg";
import emailApiImg from "../../../assets/webServices/Email API.jpg";
import shippingApiImg from "../../../assets/webServices/transport.jpg";
import busBookingApiImg from "../../../assets/webServices/Bus Booking API.jpg";
import hotelBookingApiImg from "../../../assets/webServices/Hotel Booking API.jpg";
import accountingSoftwareIntegrationImg from "../../../assets/webServices/Accounting Software Integration.jpg";
import governmentEnterpriseApiIntegrationImg from "../../../assets/webServices/GovernmentEnterprise API Integration.jpg";

const ServicesCard = ({ title, description, image }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 m-4 flex-1 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100">
    <img src={image} className="w-full h-32 object-contain mb-4" alt={title} />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ApiIntegration = forwardRef((props, ref) => {
  const [hoveredService, setHoveredService] = useState(null);
  const technologies = [
    { name: "REST APIs", icon: <FaCode className="text-blue-600 text-2xl" /> },
    { name: "GraphQL", icon: <FaDatabase className="text-blue-600 text-2xl" /> },
    { name: "SOAP", icon: <FaCode className="text-blue-600 text-2xl" /> },
    { name: "Postman", icon: <FaDesktop className="text-blue-600 text-2xl" /> },
    { name: "Swagger", icon: <FaCode className="text-blue-600 text-2xl" /> },
    { name: "Node.js", icon: <FaCogs className="text-blue-600 text-2xl" /> },
    { name: "MuleSoft", icon: <FaCloud className="text-blue-600 text-2xl" /> },
    { name: "OAuth 2.0", icon: <FaLock className="text-blue-600 text-2xl" /> },
  ];

  const services = [
    { title: "REST API Development", icon: <FaPlug className="text-blue-600 text-2xl" />, description: "Custom, secure, and scalable RESTful APIs to power your applications.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: restApiDevelopmentImg },
    { title: "API Integration", icon: <FaSyncAlt className="text-blue-600 text-2xl" />, description: "Seamless integration of third-party APIs into your existing software ecosystem.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: apiIntegrationImg },
    { title: "Payment Gateway Integration", icon: <FaShoppingCart className="text-blue-600 text-2xl" />, description: "Secure connections to global payment processors like Stripe, PayPal, and Razorpay.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: paymentGatewayIntegrationImg },
    { title: "Razorpay Integration", icon: <FaLock className="text-blue-600 text-2xl" />, description: "Specialized implementation of Razorpay for seamless Indian payment processing.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: razorpayIntegrationImg },
    { title: "WhatsApp API", icon: <FaMobile className="text-blue-600 text-2xl" />, description: "Automate messaging, notifications, and customer support directly through WhatsApp.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: whatsappApiImg },
    { title: "SMS Gateway", icon: <FaMobile className="text-blue-600 text-2xl" />, description: "Integrate robust SMS delivery systems for OTPs, alerts, and marketing.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: smsGatewayImg },
    { title: "Email API", icon: <FaDesktop className="text-blue-600 text-2xl" />, description: "Reliable transactional and marketing email integrations using SendGrid, AWS SES, etc.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: emailApiImg },
    { title: "Google Maps Integration", icon: <FaDesktop className="text-blue-600 text-2xl" />, description: "Embed interactive maps, geolocation, and routing capabilities into your apps.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=600&auto=format&fit=crop" },
    { title: "Shipping API", icon: <FaRocket className="text-blue-600 text-2xl" />, description: "Automate logistics with direct integrations to major shipping carriers.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: shippingApiImg },
    { title: "Bus Booking API", icon: <FaDesktop className="text-blue-600 text-2xl" />, description: "Connect with bus aggregators to enable seamless ticket booking on your platform.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: busBookingApiImg },
    { title: "Hotel Booking API", icon: <FaBuilding className="text-blue-600 text-2xl" />, description: "Integrate global hotel inventory and reservation systems directly into your app.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: hotelBookingApiImg },
    { title: "CRM Integration", icon: <FaUsers className="text-blue-600 text-2xl" />, description: "Sync your software with leading CRMs like Salesforce, HubSpot, and Zoho.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" },
    { title: "ERP Integration", icon: <FaCogs className="text-blue-600 text-2xl" />, description: "Connect your front-end systems with complex backend Enterprise Resource Planning software.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" },
    { title: "Accounting Software Integration", icon: <FaChartLine className="text-blue-600 text-2xl" />, description: "Automate financial data flow with Tally, QuickBooks, or Xero integrations.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: accountingSoftwareIntegrationImg },
    { title: "Government/Enterprise API Integration", icon: <FaShieldAlt className="text-blue-600 text-2xl" />, description: "Secure integration with official enterprise or government digital infrastructure.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: governmentEnterpriseApiIntegrationImg }
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
              API & Third-Party Integration
            </h1>
            <p className="text-xl text-white max-w-1xl mt-2 text-left">
              Seamlessly connect your systems and third-party tools to streamline data flow and operations.
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
                alt={hoveredService ? `${hoveredService} Services` : "API & Third-Party Integration"}
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
                    <h4 className="text-xl font-semibold mb-4">System Sync</h4>
                    <p className="text-blue-100 mb-4">
                      Reduced data silos by 100%, syncing CRM, ERP, and web apps instantly.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">100%</span>
                      <span className="text-sm">Data Sync</span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">API Performance</h4>
                    <p className="text-blue-100 mb-4">
                      Optimized endpoint latency down to sub-50 milliseconds.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">&lt;50ms</span>
                      <span className="text-sm">API Latency</span>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Automation</h4>
                    <p className="text-blue-100 mb-4">
                      Automated 80% of manual data entry tasks via direct API connections.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">80%</span>
                      <span className="text-sm">Manual Work Saved</span>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Uptime</h4>
                    <p className="text-blue-100 mb-4">
                      Maintained 99.99% availability on high-throughput microservices.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">99.99%</span>
                      <span className="text-sm">API Uptime</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Stats Section */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">100+</div>
                  <div className="text-gray-600 mt-2">Enterprise APIs Built</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">200+</div>
                  <div className="text-gray-600 mt-2">Systems Integrated</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">99.9%</div>
                  <div className="text-gray-600 mt-2">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600 mt-2">Third-party APIs</div>
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
                  Innomatrics Tech builds robust, scalable middleware and microservices architectures for complex integrations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Digital Innovation</h2>
                <p className="text-lg text-gray-800">
                  Connecting disparate legacy systems with modern cloud applications through secure REST and GraphQL APIs.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Technology Assets</h2>
                <p className="text-lg text-gray-800">
                  Ensuring secure data transmission with OAuth2, JWT, and encrypted payload architectures.
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
                Connect and Automate Your Systems
              </h2>
              <div className="w-24 h-1 bg-blue-600 mb-6"></div>
              <p className="text-xl  text-gray-600">
                We build secure, high-performance APIs and integrate third-party services to ensure your software ecosystem communicates flawlessly. From payment gateways to complex ERP integrations, we connect the tools you rely on.
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
              Our Comprehensive API & Third-Party Integration
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
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-xl">Enterprise APIs Built</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-xl">Systems Integrated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-xl">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-xl">Third-party APIs</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Ready to Connect Your Systems?
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

export default ApiIntegration;
