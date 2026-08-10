import React, { forwardRef, useEffect, useState } from "react";
import heroImgNew from "../../../assets/new_category_images/DevOps_hero.jpg";
import diffImgNew from "../../../assets/new_category_images/DevOps_diff.jpg";
import { FaCheckCircle, FaSyncAlt, FaPlug, FaCode, FaDesktop, FaMobile, FaShoppingCart, FaDatabase, FaCloud, FaLock, FaChartLine, FaUsers, FaShieldAlt, FaRocket, FaLightbulb, FaBuilding, FaChartLine as FaChartLineIcon, FaCogs, FaRobot, FaPaintBrush, FaBriefcase, FaReact, FaNodeJs, FaAngular, FaVuejs, FaPhp, FaPython } from "react-icons/fa";

import "./DevOps.css";
import { Link } from "react-router-dom";

import awsCloudServicesImg from "../../../assets/webServices/AWS Cloud Services.jpg";
import awsEc2SetupImg from "../../../assets/webServices/AWS EC2 Setup.jpg";
import serverMonitoringImg from "../../../assets/webServices/Server Monitoring.jpg";
import serverDeploymentImg from "../../../assets/webServices/Server Deployment.jpg";
import gitHubGitLabDeploymentImg from "../../../assets/webServices/GitHubGitLab Deployment.jpg";
import domainDnsManagementImg from "../../../assets/webServices/Domain & DNS Management.jpg";
import dockerDeploymentImg from "../../../assets/webServices/Docker Deployment.jpg";
import cloudflareSetupImg from "../../../assets/webServices/Cloudflare Setup.jpg";
import cloudDatabaseSetupImg from "../../../assets/webServices/Cloud Database Setup.jpg";
import cloudMigrationImg from "../../../assets/webServices/Cloud Migration.jpg";
import cloudCostOptimizationImg from "../../../assets/webServices/Cloud Cost Optimization.jpg";
import cicdPipelineImg from "../../../assets/webServices/CICD Pipeline.jpg";
import backupDisasterRecoveryImg from "../../../assets/webServices/Backup & Disaster Recovery.jpg";
import awsS3Img from "../../../assets/webServices/AWS S3.jpg";

const ServicesCard = ({ title, description, image }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 m-4 flex-1 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100">
    <img src={image} className="w-full h-32 object-cover rounded mb-4" alt={title} />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const DevOps = forwardRef((props, ref) => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { title: "AWS Cloud Services", icon: <FaCloud className="text-blue-600 text-2xl" />, description: "Comprehensive AWS solutions including architecture, deployment, and management.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: awsCloudServicesImg },
    { title: "Cloud Migration", icon: <FaSyncAlt className="text-blue-600 text-2xl" />, description: "Seamlessly migrate your legacy systems to scalable cloud environments.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: cloudMigrationImg },
    { title: "AWS EC2 Setup", icon: <FaDesktop className="text-blue-600 text-2xl" />, description: "Configure and optimize secure, resizable compute capacity in the cloud.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: awsEc2SetupImg },
    { title: "AWS S3", icon: <FaDatabase className="text-blue-600 text-2xl" />, description: "Secure, durable, and highly-scalable object storage infrastructure.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: awsS3Img },
    { title: "Cloud Database Setup", icon: <FaDatabase className="text-blue-600 text-2xl" />, description: "Deploy and manage highly available relational and NoSQL databases.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: cloudDatabaseSetupImg },
    { title: "Server Deployment", icon: <FaRocket className="text-blue-600 text-2xl" />, description: "Expert deployment of high-performance application servers.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: serverDeploymentImg },
    { title: "Domain & DNS Management", icon: <FaPlug className="text-blue-600 text-2xl" />, description: "Secure and reliable domain registration and DNS routing configuration.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: domainDnsManagementImg },
    { title: "SSL Installation", icon: <FaShieldAlt className="text-blue-600 text-2xl" />, description: "Ensure data security and trust with proper SSL/TLS certificate installation.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=600&auto=format&fit=crop" },
    { title: "Cloudflare Setup", icon: <FaCloud className="text-blue-600 text-2xl" />, description: "Implement robust CDN and DDoS protection for maximum performance and security.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: cloudflareSetupImg },
    { title: "CI/CD Pipeline", icon: <FaCogs className="text-blue-600 text-2xl" />, description: "Automate your software delivery process with continuous integration and deployment.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: cicdPipelineImg },
    { title: "GitHub/GitLab Deployment", icon: <FaCode className="text-blue-600 text-2xl" />, description: "Streamlined code deployment directly from your version control repositories.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: gitHubGitLabDeploymentImg },
    { title: "Docker Deployment", icon: <FaDesktop className="text-blue-600 text-2xl" />, description: "Containerize your applications for consistent and scalable deployments.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: dockerDeploymentImg },
    { title: "Server Monitoring", icon: <FaChartLineIcon className="text-blue-600 text-2xl" />, description: "24/7 proactive monitoring to ensure optimal uptime and performance.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: serverMonitoringImg },
    { title: "Backup & Disaster Recovery", icon: <FaLock className="text-blue-600 text-2xl" />, description: "Robust backup strategies to prevent data loss and ensure business continuity.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: backupDisasterRecoveryImg },
    { title: "Cloud Cost Optimization", icon: <FaChartLine className="text-blue-600 text-2xl" />, description: "Analyze and reduce your cloud infrastructure spending without sacrificing performance.", features: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"], image: cloudCostOptimizationImg }
  ];

  const serviceImages = {
    'default': diffImgNew,
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.image }), {})
  };

  const serviceDescriptions = {
    'default': "Transform your development pipeline with our comprehensive DevOps solutions that combine automation with best practices.",
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
              Cloud, DevOps & Infrastructure Solutions
            </h1>
            <p className="text-xl text-white max-w-1xl mt-2 text-left">
              Streamline your development and operations with modern DevOps practices. Our solutions automate workflows, enhance collaboration, and ensure reliable deployments.
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
              At Innomatrics, we understand that modern software development demands seamless integration between development and operations. Our DevOps services bridge this gap, implementing automated workflows, continuous integration/deployment pipelines, and robust monitoring solutions. We help organizations adopt DevOps practices that enhance collaboration, speed up delivery, and maintain high reliability standards. Our team brings extensive experience in cloud technologies, containerization, and automation tools to transform your development lifecycle.
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
                alt={hoveredService ? `${hoveredService} Services` : "Cloud & DevOps Services"}
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
                    <h4 className="text-xl font-semibold mb-4">Automation Excellence</h4>
                    <p className="text-blue-100 mb-4">
                      Our automated pipelines and infrastructure management reduce manual errors and speed up deployment cycles by up to 80%.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">80%</span>
                      <span className="text-sm">Faster Delivery</span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Cloud Optimization</h4>
                    <p className="text-blue-100 mb-4">
                      Leverage our deep knowledge of cloud platforms to reduce hosting costs by up to 40% while improving scalability.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">40%</span>
                      <span className="text-sm">Cost Reduction</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Stats Section */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600 mt-2">Cloud Migrations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">100%</div>
                  <div className="text-gray-600 mt-2">Pipeline Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">99.9%</div>
                  <div className="text-gray-600 mt-2">Uptime Guaranteed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">20+</div>
                  <div className="text-gray-600 mt-2">DevOps Engineers</div>
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
                Streamlined Development & Enhanced Operations
              </h3>
              <div className="relative rounded-lg overflow-hidden">
                <img src={diffImgNew}
                  alt="DevOps Professional"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Automation Excellence</h2>
                <p className="text-lg text-gray-800">
                  Implement end-to-end automation for your development pipeline, reducing manual errors and accelerating delivery.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Cloud Integration</h2>
                <p className="text-lg text-gray-800">
                  Seamlessly integrate cloud services with your development workflow for enhanced scalability and reliability.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Continuous Integration</h2>
                <p className="text-lg text-gray-800">
                  Implement robust CI/CD pipelines that automate testing and deployment for faster, more reliable software delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20 mt-20">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
              Our Cloud & DevOps Services
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
              Ready to Accelerate Delivery?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Let's discuss how Innomatrics Tech can help you achieve your digital
              goals with our expert Cloud & DevOps services.
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

export default DevOps;