import React, { forwardRef, useEffect, useState } from "react";
import { FaCheckCircle, FaSyncAlt, FaPlug, FaCode, FaDesktop, FaMobile, FaShoppingCart, FaDatabase, FaCloud, FaLock, FaChartLine, FaUsers, FaShieldAlt, FaRocket, FaLightbulb, FaBuilding, FaChartLine as FaChartLineIcon, FaCogs, FaRobot, FaPaintBrush, FaBriefcase, FaReact, FaNodeJs, FaAngular, FaVuejs, FaPhp, FaPython } from "react-icons/fa";
import heroImg from "../../../assets/services_hero/hero_dedicated_team.png";

import app from "../../../assets/services_cards/DedicatedTeam_cs1.jpg";
import app2 from "../../../assets/services_cards/DedicatedTeam_cs2.jpg";
import w1 from "../../../assets/services_cards/DedicatedTeam_w1.jpg";
import w2 from "../../../assets/services_cards/DedicatedTeam_w2.jpg";
import w3 from "../../../assets/services_cards/DedicatedTeam_w3.jpg";
import w4 from "../../../assets/services_cards/DedicatedTeam_w4.jpg";
import w5 from "../../../assets/services_cards/DedicatedTeam_w5.jpg";
import w6 from "../../../assets/services_cards/DedicatedTeam_w6.jpg";
import introImg from "../../../assets/services_cards/DedicatedTeam_intro.jpg";
import diffImg from "../../../assets/services_cards/DedicatedTeam_diff.jpg";


import "./DedicatedTeam.css";
import { Link } from "react-router-dom";


import { SiMongodb, SiMysql } from "react-icons/si";

const ServicesCard = ({ title, description, image }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 m-4 flex-1 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100">
    <img src={image} className="w-full h-32 object-contain mb-4" alt={title} />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const DedicatedTeam = forwardRef((props, ref) => {
  const [hoveredService, setHoveredService] = useState(null);
  const technologies = [
    { name: "Jira", icon: <FaBriefcase className="text-blue-600 text-2xl" /> },
    { name: "Slack", icon: <FaUsers className="text-blue-600 text-2xl" /> },
    { name: "GitHub", icon: <FaCode className="text-blue-600 text-2xl" /> },
    { name: "GitLab", icon: <FaCode className="text-blue-600 text-2xl" /> },
    { name: "Trello", icon: <FaDesktop className="text-blue-600 text-2xl" /> },
    { name: "Confluence", icon: <FaDatabase className="text-blue-600 text-2xl" /> },
    { name: "Zoom", icon: <FaUsers className="text-blue-600 text-2xl" /> },
    { name: "Figma", icon: <FaPaintBrush className="text-blue-600 text-2xl" /> },
  ];

  const services = [
            { icon: <FaUsers className="w-8 h-8 text-blue-600" />, title: "Hire Full Development Teams", description: "Deploy a complete, self-managed team of developers, designers, and QA engineers.", features: ["Agile team setup", "Project managers included", "End-to-end delivery", "Seamless collaboration"], image: w1 },
            { icon: <FaCode className="w-8 h-8 text-blue-600" />, title: "Hire React/Node.js Developers", description: "Expert JavaScript developers for building fast, scalable web applications.", features: ["Senior/Mid-level devs", "MERN stack experts", "API integration", "Performance optimization"], image: w2 },
            { icon: <FaMobile className="w-8 h-8 text-blue-600" />, title: "Hire Flutter/React Native Developers", description: "Specialized mobile app developers for high-quality cross-platform applications.", features: ["iOS & Android expertise", "Native performance", "Custom UI/UX", "App store deployment"], image: w3 },
            { icon: <FaDatabase className="w-8 h-8 text-blue-600" />, title: "Hire PHP/Laravel Developers", description: "Skilled backend developers for robust enterprise systems and web portals.", features: ["Custom API creation", "Database architecture", "Legacy support", "Security implementation"], image: w4 },
            { icon: <FaPaintBrush className="w-8 h-8 text-blue-600" />, title: "Hire UI/UX Designers", description: "Creative professionals to design engaging, user-friendly digital experiences.", features: ["Figma/XD experts", "Prototyping", "User research", "Design systems"], image: w5 },
            { icon: <FaCloud className="w-8 h-8 text-blue-600" />, title: "Hire DevOps Engineers", description: "Infrastructure specialists to manage your cloud deployments and CI/CD pipelines.", features: ["AWS/Azure/GCP", "Docker & Kubernetes", "Server monitoring", "Security compliance"], image: w6 }
        ];

  const caseStudies = [
            { title: "Team Augmentation for EdTech", description: "Provided a dedicated team of 5 developers to accelerate a product launch", result: "Delivered the MVP 2 months ahead of schedule", image: app },
            { title: "Long-term Maintenance Team", description: "Setup a dedicated QA and support team for an e-commerce platform", result: "Reduced bug reports by 80%", image: app2 }
        ];

  // Map service titles to their corresponding images
  const serviceImages = {
    'default': app2,
    'Hire Full Development Teams': w1,
    'Hire React/Node.js Developers': w2,
    'Hire Flutter/React Native Developers': w3,
    'Hire PHP/Laravel Developers': w4,
    'Hire UI/UX Designers': w5,
    'Hire DevOps Engineers': w6
  };

  const serviceDescriptions = {
    'default': "Hire top-tier, dedicated software engineers and designers who work exclusively on your project as an extension of your company.",
    'Hire Full Development Teams': "Expert implementation of Hire Full Development Teams tailored to your specific business requirements and industry standards.",
    'Hire React/Node.js Developers': "Comprehensive Hire React/Node.js Developers solutions designed for scalability, security, and maximum performance.",
    'Hire Flutter/React Native Developers': "Advanced Hire Flutter/React Native Developers integrations to streamline your workflows and boost operational efficiency.",
    'Hire PHP/Laravel Developers': "Future-proof Hire PHP/Laravel Developers architectures that drive digital transformation and user engagement.",
    'Hire UI/UX Designers': "Robust Hire UI/UX Designers frameworks customized for your enterprise needs with 24/7 reliability.",
    'Hire DevOps Engineers': "Cutting-edge Hire DevOps Engineers strategies to keep your business ahead of the technological curve."
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
              Dedicated Development Team Services
            </h1>
            <p className="text-xl text-white max-w-1xl mt-2 text-left">
              Hire expert developers and teams to scale your project delivery quickly and efficiently.
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
                  'Hire Full Development Teams',
                  'Hire React/Node.js Developers',
                  'Hire Flutter/React Native Developers',
                  'Hire PHP/Laravel Developers',
                  'Hire UI/UX Designers',
                  'Hire DevOps Engineers'
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
                alt={hoveredService ? `${hoveredService} Services` : "Dedicated Development Team Services"}
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
                    <h4 className="text-xl font-semibold mb-4">Team Scaling</h4>
                    <p className="text-blue-100 mb-4">
                      Scaled engineering teams by 300% within just 2 weeks of engagement.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">2 Wks</span>
                      <span className="text-sm">Onboarding Time</span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Cost Efficiency</h4>
                    <p className="text-blue-100 mb-4">
                      Reduced in-house hiring and overhead costs by up to 50%.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">50%</span>
                      <span className="text-sm">Cost Reduction</span>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Retention Rate</h4>
                    <p className="text-blue-100 mb-4">
                      Maintained a 98% developer retention rate across long-term projects.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">98%</span>
                      <span className="text-sm">Developer Retention</span>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Delivery Speed</h4>
                    <p className="text-blue-100 mb-4">
                      Accelerated product roadmaps by 40% with dedicated focus.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">40%</span>
                      <span className="text-sm">Faster Roadmaps</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Stats Section */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">100+</div>
                  <div className="text-gray-600 mt-2">Engineers Available</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">Top 1%</div>
                  <div className="text-gray-600 mt-2">Vetted Talent</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">0</div>
                  <div className="text-gray-600 mt-2">Recruitment Fees</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600 mt-2">Timezone Overlap</div>
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
                  Innomatrics Tech provides elite, pre-vetted software engineers that seamlessly integrate into your workflow.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Digital Innovation</h2>
                <p className="text-lg text-gray-800">
                  Offering flexible team augmentation to scale your development capacity up or down on demand.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Technology Assets</h2>
                <p className="text-lg text-gray-800">
                  Ensuring absolute code quality and cultural alignment with your in-house engineering standards.
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
                Scale Your Tech Team Instantly
              </h2>
              <div className="w-24 h-1 bg-blue-600 mb-6"></div>
              <p className="text-xl  text-gray-600">
                Our dedicated development team model allows you to hire highly skilled, pre-vetted developers who work exclusively on your projects. Overcome talent shortages and accelerate your time-to-market.
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
              Our Comprehensive Dedicated Development Team Services
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
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-xl">Engineers Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">Top 1%</div>
                <div className="text-xl">Vetted Talent</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">0</div>
                <div className="text-xl">Recruitment Fees</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-xl">Timezone Overlap</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Ready to Hire Your Dedicated Team?
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

export default DedicatedTeam;
