import React, { forwardRef, useEffect, useState } from "react";
import { FaCheckCircle, FaSyncAlt, FaPlug, FaCode, FaDesktop, FaMobile, FaShoppingCart, FaDatabase, FaCloud, FaLock, FaChartLine, FaUsers, FaShieldAlt, FaRocket, FaLightbulb, FaBuilding, FaChartLine as FaChartLineIcon, FaCogs, FaRobot, FaPaintBrush, FaBriefcase, FaReact, FaNodeJs, FaAngular, FaVuejs, FaPhp, FaPython } from "react-icons/fa";
import heroImg from "../../../assets/services_hero/hero_custom_software.png";

import app from "../../../assets/services_cards/CustomSoftware_cs1.jpg";
import app2 from "../../../assets/services_cards/CustomSoftware_cs2.jpg";
import w1 from "../../../assets/services_cards/CustomSoftware_w1.jpg";
import w2 from "../../../assets/services_cards/CustomSoftware_w2.jpg";
import w3 from "../../../assets/services_cards/CustomSoftware_w3.jpg";
import w4 from "../../../assets/services_cards/CustomSoftware_w4.jpg";
import w5 from "../../../assets/services_cards/CustomSoftware_w5.jpg";
import w6 from "../../../assets/services_cards/CustomSoftware_w6.jpg";
import introImg from "../../../assets/services_cards/CustomSoftware_intro.jpg";
import diffImg from "../../../assets/services_cards/CustomSoftware_diff.jpg";


import "./CustomSoftware.css";
import { Link } from "react-router-dom";


import { SiMongodb, SiMysql } from "react-icons/si";

const ServicesCard = ({ title, description, image }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 m-4 flex-1 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100">
    <img src={image} className="w-full h-32 object-contain mb-4" alt={title} />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const CustomSoftware = forwardRef((props, ref) => {
  const [hoveredService, setHoveredService] = useState(null);
  const technologies = [
    { name: "Python", icon: <FaCode className="text-blue-600 text-2xl" /> },
    { name: "Java", icon: <FaCode className="text-blue-600 text-2xl" /> },
    { name: "C#/.NET", icon: <FaDesktop className="text-blue-600 text-2xl" /> },
    { name: "React", icon: <FaCode className="text-blue-600 text-2xl" /> },
    { name: "Node.js", icon: <FaCode className="text-blue-600 text-2xl" /> },
    { name: "PostgreSQL", icon: <FaDatabase className="text-blue-600 text-2xl" /> },
    { name: "Docker", icon: <FaCloud className="text-blue-600 text-2xl" /> },
    { name: "AWS", icon: <FaCloud className="text-blue-600 text-2xl" /> },
  ];

  const services = [
            { icon: <FaDesktop className="w-8 h-8 text-blue-600" />, title: "Custom Business Software", description: "Tailored applications designed specifically for your unique operational workflows.", features: ["Scalable architecture", "Custom functionality", "Process automation", "API development"], image: w1 },
            { icon: <FaUsers className="w-8 h-8 text-blue-600" />, title: "HRMS Software", description: "Comprehensive human resource management systems to streamline employee lifecycles.", features: ["Payroll processing", "Attendance tracking", "Performance management", "Employee portals"], image: w2 },
            { icon: <FaDatabase className="w-8 h-8 text-blue-600" />, title: "Inventory Management", description: "Robust solutions to track stock, manage suppliers, and optimize supply chains.", features: ["Real-time tracking", "Barcode scanning", "Automated reordering", "Supplier portals"], image: w3 },
            { icon: <FaShoppingCart className="w-8 h-8 text-blue-600" />, title: "POS Software", description: "Seamless point-of-sale systems for retail and restaurant businesses.", features: ["Sales tracking", "Multi-store support", "Customer loyalty", "Receipt generation"], image: w4 },
            { icon: <FaChartLine className="w-8 h-8 text-blue-600" />, title: "Billing & Accounting", description: "Secure software for invoicing, tax compliance, and financial reporting.", features: ["Automated invoicing", "GST/Tax compliance", "Expense tracking", "Financial dashboards"], image: w5 },
            { icon: <FaBuilding className="w-8 h-8 text-blue-600" />, title: "Hospital/School Management", description: "Industry-specific management solutions for healthcare and education sectors.", features: ["Patient/Student records", "Appointment/Timetable scheduling", "Billing integration", "Parent/Patient portals"], image: w6 }
        ];

  const caseStudies = [
            { title: "Logistics Management System", description: "Built a custom ERP handling 10,000+ daily shipments", result: "Improved delivery times by 25%", image: w1 },
            { title: "Hospital Management Platform", description: "Developed a secure portal for patient records and billing", result: "Reduced administrative overhead by 40%", image: app }
        ];

  // Map service titles to their corresponding images
  const serviceImages = {
    'default': app2,
    'Custom Business Software': w1,
    'HRMS Software': w2,
    'Inventory Management': w3,
    'POS Software': w4,
    'Billing & Accounting': w5,
    'Hospital/School Management': w6
  };

  const serviceDescriptions = {
    'default': "We build high-performance custom software that delivers exceptional user experiences and measurable business results.",
    'Custom Business Software': "Expert implementation of Custom Business Software tailored to your specific business requirements and industry standards.",
    'HRMS Software': "Comprehensive HRMS Software solutions designed for scalability, security, and maximum performance.",
    'Inventory Management': "Advanced Inventory Management integrations to streamline your workflows and boost operational efficiency.",
    'POS Software': "Future-proof POS Software architectures that drive digital transformation and user engagement.",
    'Billing & Accounting': "Robust Billing & Accounting frameworks customized for your enterprise needs with 24/7 reliability.",
    'Hospital/School Management': "Cutting-edge Hospital/School Management strategies to keep your business ahead of the technological curve."
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
            backgroundImage: `url(${heroImg})`,
          }}
        ></div>
        <div className="absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mt-16">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-8 text-left">
              Custom Software Development Services
            </h1>
            <p className="text-xl text-white max-w-1xl mt-2 text-left">
              Innomatrics Tech delivers custom software solutions designed around your unique business workflows, driving efficiency and growth.
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
              <div className="space-y-4">
                {[
                  'Custom Business Software',
                  'HRMS Software',
                  'Inventory Management',
                  'POS Software',
                  'Billing & Accounting',
                  'Hospital/School Management'
                ].map((service) => (
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
                alt={hoveredService ? `${hoveredService} Services` : "Custom Software Development Services"}
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
                    <h4 className="text-xl font-semibold mb-4">Tailored Architecture</h4>
                    <p className="text-blue-100 mb-4">
                      Reduces operating costs by 40% through custom-built automation.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">40%</span>
                      <span className="text-sm">Cost Reduction</span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">High Availability</h4>
                    <p className="text-blue-100 mb-4">
                      Achieved 99.9% uptime with robust backend infrastructures.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">99.9%</span>
                      <span className="text-sm">Uptime</span>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Workflow Efficiency</h4>
                    <p className="text-blue-100 mb-4">
                      Improved employee productivity by 85% with intuitive internal tools.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">85%</span>
                      <span className="text-sm">Productivity</span>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Rapid Deployment</h4>
                    <p className="text-blue-100 mb-4">
                      Reduced deployment cycles by 60% using Agile methodologies.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">60%</span>
                      <span className="text-sm">Faster Delivery</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Stats Section */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600 mt-2">Years in Custom Dev</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">200+</div>
                  <div className="text-gray-600 mt-2">Software Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">100%</div>
                  <div className="text-gray-600 mt-2">Source Code Ownership</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600 mt-2">Enterprise Clients</div>
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
                  src={diffImg}
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
                  CustomSoftware Tech is a recognized leader in bespoke enterprise architecture and workflow automation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Digital Innovation</h2>
                <p className="text-lg text-gray-800">
                  Building scalable, cloud-native custom software that seamlessly integrates with your existing business processes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Technology Assets</h2>
                <p className="text-lg text-gray-800">
                  Leveraging proprietary development accelerators to ensure secure, high-performance software delivery.
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
                Transform Your Business with Custom Software
              </h2>
              <div className="w-24 h-1 bg-blue-600 mb-6"></div>
              <p className="text-xl  text-gray-600">
                We build high-performance custom software that delivers exceptional user experiences and measurable business results.
              </p>
            </div>
            <div className="w-full mt-16 md:w-1/2">
              <img
                src={introImg}
                alt="Innomatrics Digital Solutions"
                className="w-full h-72 rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
              Our Comprehensive Custom Software Development Services
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

          {/* Case Studies */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                    <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg inline-block">
                      <strong>Result:</strong> {caseStudy.result}
                    </div>
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
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-xl">Years in Custom Dev</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-xl">Software Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-xl">Source Code Ownership</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-xl">Enterprise Clients</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Ready to Build Your Custom Software?
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

export default CustomSoftware;
