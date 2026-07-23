import React, { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import "./DevOps.css";

const ServicesCard = ({ title, description, image, features }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
    <div className="relative h-48">
      <img src={image} className="w-full h-full object-cover" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      {features && (
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-gray-600 text-sm">
              <svg className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const DevOps = forwardRef((props, ref) => {
  const [hoveredService, setHoveredService] = useState(null);

  const offerings = {
    items: [
      "Continuous Integration/Deployment",
      "Infrastructure Automation",
      "Cloud Services Management",
      "Container Orchestration",
      "Monitoring & Logging",
      "Security Implementation"
    ],
    description: "At Innomatrics, we streamline your development and operations with modern DevOps practices. Our solutions automate workflows, enhance collaboration, and ensure reliable deployments.",
    images: {
      default: "https://img.freepik.com/free-vector/devops-team-abstract-concept-vector-illustration_107173-25133.jpg",
      "Continuous Integration/Deployment": "https://img.freepik.com/free-vector/continuous-integration-abstract-concept-illustration_335657-4849.jpg",
      "Infrastructure Automation": "https://img.freepik.com/free-vector/cloud-services-isometric-composition_1284-55829.jpg",
      "Cloud Services Management": "https://img.freepik.com/free-vector/cloud-computing-security-abstract-concept-illustration_335657-2105.jpg",
      "Container Orchestration": "https://img.freepik.com/free-vector/container-ship-abstract-concept-illustration_335657-4427.jpg",
      "Monitoring & Logging": "https://img.freepik.com/free-vector/data-analytics-illustration_335657-4661.jpg",
      "Security Implementation": "https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg"
    },
    descriptions: {
      default: "Transform your development pipeline with our comprehensive DevOps solutions that combine automation with best practices.",
      "Continuous Integration/Deployment": "Implement robust CI/CD pipelines that automate testing and deployment for faster, more reliable software delivery.",
      "Infrastructure Automation": "Automate infrastructure provisioning and management with Infrastructure as Code (IaC) practices.",
      "Cloud Services Management": "Optimize cloud resources and costs while maintaining high availability and scalability.",
      "Container Orchestration": "Manage containerized applications efficiently with Kubernetes and Docker orchestration.",
      "Monitoring & Logging": "Implement comprehensive monitoring and logging solutions for real-time system visibility.",
      "Security Implementation": "Integrate security best practices throughout the development lifecycle (DevSecOps)."
    }
  };

  const services = [
    {
      title: "CI/CD Pipeline Implementation",
      description: "Automate your software delivery process with robust CI/CD pipelines.",
      image: "https://img.freepik.com/free-vector/continuous-integration-abstract-concept-illustration_335657-4849.jpg",
      features: [
        "Automated testing integration",
        "Deployment automation",
        "Version control integration",
        "Build process optimization",
        "Release management"
      ]
    },
    {
      title: "Infrastructure as Code",
      description: "Manage and provision infrastructure through code for consistency and reliability.",
      image: "https://img.freepik.com/free-vector/cloud-services-isometric-composition_1284-55829.jpg",
      features: [
        "Infrastructure automation",
        "Configuration management",
        "Environment consistency",
        "Version-controlled infrastructure",
        "Automated scaling"
      ]
    },
    {
      title: "Cloud Services Management",
      description: "Optimize your cloud infrastructure for performance and cost-efficiency.",
      image: "https://img.freepik.com/free-vector/cloud-computing-security-abstract-concept-illustration_335657-2105.jpg",
      features: [
        "Multi-cloud management",
        "Cost optimization",
        "Security implementation",
        "Performance monitoring",
        "Disaster recovery"
      ]
    }
  ];

  return (
    <div className="flex flex-col items-center pt:0 md:pt-10 pb-20 bg-white shadow-sm" ref={ref}>
      {/* Hero Section */}
      <div
        className="BgDiv relative flex flex-col items-start self-stretch px-20 py-20 font-medium text-center leading-[108%] min-h-[276px] text-zinc-900 max-md:px-5 max-md:max-w-full"
        style={{ 
          height: "60vh",
          backgroundImage: "url('https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        
        <div className="flex flex-col my-12 items-start justify-start gap-4 text-start relative z-10">
          <h1 className="text-3xl my-4 font-bold text-white md:text-white md:text-5xl">
            DevOps Services
          </h1>
          
          <hr className="text-sky-600 w-[140%]" />
        </div>
      </div>

      {/* Overview Section */}
      <div className="mb-20 px-6 md:px-8">
        <h2 className="text-xl font-bold text-orange-600 mb-4 mt-8">OVERVIEW</h2>
        <p className="text-lg text-gray-900 leading-relaxed">
          At Innomatrics, we understand that modern software development demands seamless integration between development and operations. Our DevOps services bridge this gap, implementing automated workflows, continuous integration/deployment pipelines, and robust monitoring solutions. We help organizations adopt DevOps practices that enhance collaboration, speed up delivery, and maintain high reliability standards. Our team brings extensive experience in cloud technologies, containerization, and automation tools to transform your development lifecycle.
        </p>
      </div>

      {/* Offerings Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl text-red-700 font-bold">OUR OFFERINGS</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
          {/* Left Content */}
          <div>
            <div className="space-y-4">
              {offerings.items.map((item) => (
                <div 
                  key={item}
                  className="group relative cursor-pointer"
                  onMouseEnter={() => setHoveredService(item)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <h4 className="text-lg font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                    {item}
                  </h4>
                </div>
              ))}

              <p className="text-gray-600 mt-6">
                {offerings.description}
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={hoveredService ? offerings.images[hoveredService] || offerings.images.default : offerings.images.default}
              alt={hoveredService || "DevOps Services"}
              className="rounded-lg shadow-xl w-full object-cover transition-opacity duration-500"
              style={{ height: '400px' }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-lg">
                {hoveredService ? offerings.descriptions[hoveredService] || offerings.descriptions.default : offerings.descriptions.default}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Infinite Difference Section */}
      <div className="w-full px-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-xl font-bold text-red-500">THE INFINITE DIFFERENCE</h2>
            <h3 className="text-4xl font-bold text-gray-900 mt-4">
              Streamlined Development & <br /> Enhanced Operations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <img 
                src="https://img.freepik.com/free-vector/devops-concept-illustration_114360-8975.jpg"
                alt="DevOps Innovation"
                className="w-full rounded-lg shadow-xl object-cover h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent rounded-lg"></div>
            </div>

            {/* Right side - Features */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl text-red-500 font-semibold mb-4">Automation Excellence</h4>
                <p className="text-gray-700">
                  Our automated pipelines and infrastructure management reduce manual errors and speed up deployment cycles by up to 80%.
                </p>
              </div>

              <div>
                <h4 className="text-2xl text-red-500 font-semibold mb-4">Cloud-Native Expertise</h4>
                <p className="text-gray-700">
                  Leverage our deep knowledge of cloud platforms and containerization to build scalable, resilient applications.
                </p>
              </div>

              <div>
                <h4 className="text-2xl text-red-500 font-semibold mb-4">Continuous Improvement</h4>
                <p className="text-gray-700">
                  Our monitoring and feedback systems ensure continuous optimization of your development pipeline and infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
              Our DevOps Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive DevOps solutions to streamline your development pipeline and enhance operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {services.map((service, index) => (
              <ServicesCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Join Our Journey Section */}
      <div className="w-full bg-gradient-to-r from-blue-50 to-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-red-600">Transform Your Development Pipeline</h2>
              <p className="text-lg text-gray-600">
                Ready to streamline your development process and enhance operational efficiency? Partner with Innomatrics to implement modern DevOps practices that drive innovation and reliability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">Automated CI/CD Pipelines</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">Infrastructure as Code</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">Enhanced Security & Monitoring</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://img.freepik.com/free-vector/devops-team-abstract-concept-vector-illustration_107173-25133.jpg" 
                alt="DevOps Journey" 
                className="relative rounded-3xl w-full h-[400px] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* New Additional Section */}
      <div className="w-full px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold text-red-500">DEVOPS EXCELLENCE</h2>
            <h3 className="text-4xl font-bold text-gray-900 mt-4">
              Streamlined Development & <br/> Continuous Integration
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src="https://img.freepik.com/free-vector/devops-team-abstract-concept-vector-illustration_107173-25133.jpg"
                  alt="Automation Excellence"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xl font-semibold text-red-500 mb-3">Automation Excellence</h4>
              <p className="text-gray-600">
                Implement end-to-end automation for your development pipeline, reducing manual errors and accelerating delivery.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src="https://img.freepik.com/free-vector/cloud-computing-security-abstract-concept-illustration_335657-2105.jpg"
                  alt="Cloud Integration"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xl font-semibold text-red-500 mb-3">Cloud Integration</h4>
              <p className="text-gray-600">
                Seamlessly integrate cloud services with your development workflow for enhanced scalability and reliability.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <img 
                  src="https://img.freepik.com/free-vector/continuous-integration-abstract-concept-illustration_335657-4849.jpg"
                  alt="Continuous Integration"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xl font-semibold text-red-500 mb-3">Continuous Integration</h4>
              <p className="text-gray-600">
                Implement robust CI/CD pipelines that automate testing and deployment for faster, more reliable software delivery.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Rapid Deployment</h4>
                  <p className="text-gray-600">Accelerate your deployment cycles with automated workflows</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Enhanced Security</h4>
                  <p className="text-gray-600">Implement security best practices throughout the pipeline</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Performance Monitoring</h4>
                  <p className="text-gray-600">Real-time monitoring and analytics for optimal performance</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://img.freepik.com/free-vector/devops-concept-illustration_114360-8975.jpg"
                alt="DevOps Process"
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
});

export default DevOps;