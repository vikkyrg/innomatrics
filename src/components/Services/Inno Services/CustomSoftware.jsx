
import hospitalImg from "../../../assets/webServices/hospital.jpg";
import logisticImg from "../../../assets/webServices/logistic.jpg";
import posImg from "../../../assets/webServices/pos.jpg";
import projectMgmtImg from "../../../assets/webServices/project management.jpg";
import restaurantImg from "../../../assets/webServices/resturent.jpg";
import toursImg from "../../../assets/webServices/tours and travels.jpg";
import transportImg from "../../../assets/webServices/transport.jpg";
import erpImg from "../../../assets/webServices/ERP.jpg";
import React, { forwardRef, useEffect, useState } from "react";
import { FaCheckCircle, FaSyncAlt, FaPlug, FaCode, FaDesktop, FaMobile, FaShoppingCart, FaDatabase, FaCloud, FaLock, FaChartLine, FaUsers, FaShieldAlt, FaRocket, FaLightbulb, FaBuilding, FaChartLine as FaChartLineIcon, FaCogs, FaRobot, FaPaintBrush, FaBriefcase, FaReact, FaNodeJs, FaAngular, FaVuejs, FaPhp, FaPython , FaHandshake, FaIndustry, FaMoneyBillWave, FaUtensils, FaTshirt, FaTruckLoading, FaTruck, FaPlane, FaTasks } from "react-icons/fa";
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
import cs1 from "../../../assets/customSoftwareServices/cs_1.webp";
import cs2 from "../../../assets/customSoftwareServices/cs_2.webp";
import cs3 from "../../../assets/customSoftwareServices/cs_3.webp";
import cs4 from "../../../assets/customSoftwareServices/cs_4.webp";
import cs5 from "../../../assets/customSoftwareServices/cs_5.webp";
import cs6 from "../../../assets/customSoftwareServices/cs_6.webp";
import cs7 from "../../../assets/customSoftwareServices/cs_7.webp";
import cs8 from "../../../assets/customSoftwareServices/cs_8.webp";
import cs9 from "../../../assets/customSoftwareServices/cs_9.webp";
import cs10 from "../../../assets/customSoftwareServices/cs_10.webp";
import cs11 from "../../../assets/customSoftwareServices/cs_11.webp";
import cs12 from "../../../assets/customSoftwareServices/cs_12.webp";
import cs13 from "../../../assets/customSoftwareServices/cs_13.webp";
import cs14 from "../../../assets/customSoftwareServices/cs_14.webp";
import cs15 from "../../../assets/customSoftwareServices/cs_15.webp";
import cs16 from "../../../assets/customSoftwareServices/cs_16.webp";

import manufacturingImg from "../../../assets/webServices/manufacturing.jpg";

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
            { icon: <FaDesktop className="w-8 h-8 text-blue-600" />, title: "Custom Business Software", description: "Tailored applications designed specifically for your unique operational workflows.", features: ["Scalable architecture", "Custom functionality", "Process automation", "API development"], image: cs1 },
            { icon: <FaUsers className="w-8 h-8 text-blue-600" />, title: "HRMS Software", description: "Comprehensive human resource management systems to streamline employee lifecycles.", features: ["Payroll processing", "Attendance tracking", "Performance management", "Employee portals"], image: cs2 },
            { icon: <FaDatabase className="w-8 h-8 text-blue-600" />, title: "Inventory Management", description: "Robust solutions to track stock, manage suppliers, and optimize supply chains.", features: ["Real-time tracking", "Barcode scanning", "Automated reordering", "Supplier portals"], image: cs3 },
            { icon: <FaShoppingCart className="w-8 h-8 text-blue-600" />, title: "POS Software", description: "Seamless point-of-sale systems for retail and restaurant businesses.", features: ["Sales tracking", "Multi-store support", "Customer loyalty", "Receipt generation"], image: posImg },
            { icon: <FaChartLine className="w-8 h-8 text-blue-600" />, title: "Billing & Accounting", description: "Secure software for invoicing, tax compliance, and financial reporting.", features: ["Automated invoicing", "GST/Tax compliance", "Expense tracking", "Financial dashboards"], image: cs5 },
            { icon: <FaBuilding className="w-8 h-8 text-blue-600" />, title: "Hospital/School Management", description: "Industry-specific management solutions for healthcare and education sectors.", features: ["Patient/Student records", "Appointment/Timetable scheduling", "Billing integration", "Parent/Patient portals"], image: hospitalImg },
            { icon: <FaHandshake className="w-8 h-8 text-blue-600" />, title: "CRM Development", description: "Customer Relationship Management systems to boost sales and retention.", features: ["Lead management", "Sales pipeline tracking", "Customer analytics", "Email integration"], image: cs7 },
            { icon: <FaIndustry className="w-8 h-8 text-blue-600" />, title: "ERP Development", description: "Enterprise Resource Planning software for complete business automation.", features: ["Resource tracking", "Financial management", "Supply chain integration", "Workflow automation"], image: erpImg },
            { icon: <FaMoneyBillWave className="w-8 h-8 text-blue-600" />, title: "Payroll Software", description: "Automated payroll processing with built-in tax compliance and reporting.", features: ["Automated calculations", "Tax deductions", "Direct deposits", "Payslip generation"], image: cs9 },
            { icon: <FaUtensils className="w-8 h-8 text-blue-600" />, title: "Restaurant Management", description: "All-in-one software for orders, kitchen displays, and table management.", features: ["Table reservation", "KOT management", "Menu engineering", "Inventory tracking"], image: restaurantImg },
            { icon: <FaCogs className="w-8 h-8 text-blue-600" />, title: "Manufacturing ERP", description: "Specialized ERPs for manufacturing units to manage production lifecycles.", features: ["Production planning", "BOM management", "Quality control", "Machine maintenance"], image: manufacturingImg },
            { icon: <FaTshirt className="w-8 h-8 text-blue-600" />, title: "Garment ERP", description: "Tailored ERP systems for the textile and garment manufacturing industry.", features: ["Dyeing management", "Stitching tracking", "Fabric inventory", "Export documentation"], image: cs12 },
            { icon: <FaTruckLoading className="w-8 h-8 text-blue-600" />, title: "Logistics Management", description: "End-to-end logistics software for supply chain visibility and tracking.", features: ["Fleet tracking", "Route optimization", "Warehouse management", "Dispatch scheduling"], image: logisticImg },
            { icon: <FaTruck className="w-8 h-8 text-blue-600" />, title: "Transport Management", description: "Comprehensive transportation software for fleet and driver management.", features: ["Vehicle maintenance", "Fuel tracking", "Driver logs", "Trip management"], image: transportImg },
            { icon: <FaPlane className="w-8 h-8 text-blue-600" />, title: "Tours & Travels Software", description: "Booking and itinerary management tools for travel agencies and operators.", features: ["Itinerary builder", "Booking engine", "Agent portals", "Expense tracking"], image: toursImg },
            { icon: <FaTasks className="w-8 h-8 text-blue-600" />, title: "Project Management Software", description: "Agile project tracking and team collaboration software.", features: ["Task assignment", "Time tracking", "Gantt charts", "Document sharing"], image: projectMgmtImg }
        ];

  const caseStudies = [
            { title: "Logistics Management System", description: "Built a custom ERP handling 10,000+ daily shipments", result: "Improved delivery times by 25%", image: w1 },
            { title: "Hospital Management Platform", description: "Developed a secure portal for patient records and billing", result: "Reduced administrative overhead by 40%", image: app }
        ];

  // Map service titles to their corresponding images
  const serviceImages = {
    'default': app2,
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.image }), {})
  };

  const serviceDescriptions = {
    'default': "We build high-performance custom software that delivers exceptional user experiences and measurable business results.",
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
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                {services.map(s => s.title).map((service) => (
                  <div 
                    key={service}
                    onMouseEnter={() => setHoveredService(service)}
                    onMouseLeave={() => setHoveredService(null)}
                    className="group"
                  >
                    <h4 className="text-lg font-semibold text-gray-700 cursor-pointer group-hover:text-red-500 transition-colors duration-300">
                      {service}
                    </h4>
                  </div>
                ))}

                <p className="text-gray-600 mt-6 pt-4 border-t border-gray-100">
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
                  <div className="text-4xl font-bold text-blue-600">5+</div>
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
                <div className="text-4xl font-bold mb-2">5+</div>
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
