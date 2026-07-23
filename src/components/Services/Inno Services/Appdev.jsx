import React, { forwardRef, useEffect, useState } from "react";
import app from "../../../assets/AppDev.jpg";
import app2 from "../../../assets/app2.jpg";
import approach from "../../../assets/approach.jpg";
import a1 from "../../../assets/appServices/strategicPlanApp.jpg";
import a2 from "../../../assets/appServices/usercentric.webp";
import a3 from "../../../assets/appServices/customDev.jpg";
import a4 from "../../../assets/appServices/crossPlatform.png";
import a5 from "../../../assets/appServices/qualityTest.png";
import a6 from "../../../assets/appdev11.jpeg";
import D1 from "../../../assets/D1.webp";
import D2 from "../../../assets/D2.jpg";
import D3 from "../../../assets/D31.jpg";
import D4 from "../../../assets/uidesign.png";
import D5 from "../../../assets/cloud1.png";
import D6 from "../../../assets/end.jpg";
import B6 from "../../../assets/angle.png";

import "./Appdev.css";
import { Link } from "react-router-dom";
import {
  FaAndroid,
  FaApple,
  FaMobile,
  FaCode,
  FaRocket,
  FaCogs,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaLayerGroup,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const AppDev = forwardRef((props, ref) => {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeTab, setActiveTab] = useState("technology");

  // Technology Offerings
  const techOfferings = {
    title: "Technology Offerings",
    items: [
      "Custom Mobile App Development",
      "Cross-Platform & Hybrid App Solutions",
      "Enterprise Mobility & Scalable Architecture",
      "UI/UX Design Tailored for Mobile Users",
      "— Mechanical Engineering & Prototyping",
      "Cloud-Integrated App Development",
      "End-to-End App Development & Support",
    ],
    description:
      "Development of mechanical systems and product design with improved ROI and faster time to market.",
    images: {
      default: D1,
      "Custom Mobile App Development": D1,
      "Cross-Platform & Hybrid App Solutions": D2,
      "Enterprise Mobility & Scalable Architecture": D3,
      "UI/UX Design Tailored for Mobile Users": D4,
      "Cloud-Integrated App Development": D5,
      "End-to-End App Development & Support": D6,
    },
    descriptions: {
      default:
        "Development of mechanical systems and product design with improved ROI and faster time to market.",
      "Platform Engineering":
        "Comprehensive platform engineering services to build scalable and robust technology foundations.",
      "Verification Testing":
        "Rigorous testing methodologies to ensure product quality and reliability.",
      "Product Lifecycle Management":
        "End-to-end management of your product from conception to retirement.",
      "Product Development":
        "Innovative product development solutions tailored to your business needs.",
      "Mechanical Engineering & Prototyping":
        "Advanced mechanical engineering services with rapid prototyping capabilities.",
      "Embedded Engineering":
        "Expert embedded systems development for IoT and connected devices.",
      "Intelligence of Things":
        "Smart solutions leveraging IoT technologies for data-driven insights.",
      "Systems & Hardware Engineering":
        "Complete systems and hardware engineering services.",
      "Enterprise Content Management":
        "Sophisticated content management solutions for large organizations.",
    },
  };

  // Business Offerings
  const bizOfferings = {
    title: "Business Offerings",
    items: [
      "Custom Software for Modern Enterprises",
      "Scalable Digital Product Development Solutions",
      "Cloud-Native and DevOps Expertise",
      "Secure, Agile App Development Services",
      "Transforming Ideas Into Digital Solutions",
    ],
    description:
      "Maximize the profitability of your product portfolio through a holistic review and assessment based on years of industry experience and proven best practices. Our approach centers around key levers including Value Analysis / Value Engineering (VAVE), alternative sourcing, modularization, design optimization and alternative approaches.",
    images: {
      default: a2,
      "Custom Software for Modern Enterprises": a3,
      "Scalable Digital Product Development Solutions": a4,
      "Cloud-Native and DevOps Expertise": a5,
      "Secure, Agile App Development Services": B6,
      "Transforming Ideas Into Digital Solutions": app,
    },
    descriptions: {
      default:
        "Maximize the profitability of your product portfolio through a holistic review and assessment based on years of industry experience and proven best practices.",
      "Asset Value Realization":
        "Strategies to maximize the value of your existing assets and investments.",
      "Legacy Product Management":
        "Modern approaches to managing and extending legacy product lines.",
      "Supplier Rationalization and Consolidation":
        "Optimizing your supplier base for efficiency and cost savings.",
      "Center of Excellence Creation":
        "Establishing centers of excellence to drive innovation and best practices.",
      "Profitability Improvement for Products":
        "Comprehensive approaches to enhance product profitability through various levers.",
    },
  };

  const currentOfferings =
    activeTab === "technology" ? techOfferings : bizOfferings;

  const platforms = [
    {
      icon: <FaAndroid className="w-12 h-12 text-green-500" />,
      name: "Android Development",
      description:
        "Native and cross-platform solutions for the world's most popular mobile OS",
      technologies: ["Kotlin", "Java", "Flutter", "React Native"],
      features: [
        "Material Design implementation",
        "Google Play Store optimization",
        "Android Enterprise support",
        "Background services integration",
      ],
    },
    {
      icon: <FaApple className="w-12 h-12 text-gray-600" />,
      name: "iOS Development",
      description: "Elegant and powerful applications for Apple's ecosystem",
      technologies: ["Swift", "SwiftUI", "Flutter", "React Native"],
      features: [
        "Human Interface Guidelines compliance",
        "App Store optimization",
        "Apple Pay integration",
        "ARKit for augmented reality",
      ],
    },
    {
      icon: <FaMobile className="w-12 h-12 text-blue-500" />,
      name: "Cross-Platform",
      description: "Build once, deploy everywhere with modern frameworks",
      technologies: ["React Native", "Flutter", "Xamarin", "Ionic"],
      features: [
        "80% code reuse across platforms",
        "Native-like performance",
        "Consistent UI across devices",
        "Faster time-to-market",
      ],
    },
  ];

  const services = [
    {
      icon: <FaCode className="w-8 h-8 text-blue-600" />,
      title: "Custom App Development",
      description:
        "Tailored mobile solutions designed to meet your specific business needs and user requirements",
      features: [
        "Native app development (iOS & Android)",
        "Cross-platform solutions (React Native, Flutter)",
        "UI/UX design following latest trends",
        "Secure backend integration",
        "Third-party API development",
      ],
      image: a3,
    },
    {
      icon: <FaRocket className="w-8 h-8 text-blue-600" />,
      title: "App Modernization",
      description:
        "Transform your legacy applications into modern, scalable solutions with enhanced features",
      features: [
        "Code refactoring and optimization",
        "Performance benchmarking",
        "UI/UX redesign for modern standards",
        "Technology stack upgrade",
        "Cloud migration (AWS, Azure, GCP)",
      ],
      image: a2,
    },
    {
      icon: <FaCogs className="w-8 h-8 text-blue-600" />,
      title: "Enterprise Mobility",
      description:
        "Secure and scalable enterprise mobile solutions for workforce productivity",
      features: [
        "Enterprise app integration (ERP, CRM)",
        "Mobile device management (MDM)",
        "End-to-end encrypted data handling",
        "Offline-first capabilities",
        "Advanced analytics integration",
      ],
      image: a1,
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-blue-600" />,
      title: "App Maintenance",
      description:
        "Comprehensive support and maintenance services to keep your app performing optimally",
      features: [
        "Regular OS compatibility updates",
        "Bug fixes and performance tuning",
        "Real-time crash monitoring",
        "Security patches and vulnerability fixes",
        "Feature enhancements and upgrades",
      ],
      image: a6,
    },
    {
      icon: <FaUsers className="w-8 h-8 text-blue-600" />,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that drive engagement and user satisfaction",
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Motion design and micro-interactions",
        "Accessibility compliance (WCAG)",
        "Usability testing and iteration",
      ],
      image: a4,
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-blue-600" />,
      title: "App Analytics",
      description:
        "Data-driven insights to optimize performance and user experience",
      features: [
        "User behavior tracking",
        "Conversion funnel analysis",
        "Performance monitoring",
        "A/B testing framework",
        "Custom reporting dashboards",
      ],
      image: a5,
    },
  ];

  const developmentProcess = [
    {
      number: "1",
      title: "Discovery & Strategy",
      description:
        "Comprehensive analysis to define your app's vision, goals, and technical requirements",
      activities: [
        "Business requirement workshops",
        "Market research & competitor analysis",
        "Technical feasibility assessment",
        "Project roadmap creation",
      ],
      icon: <FaLightbulb className="text-blue-600 w-6 h-6" />,
    },
    {
      number: "2",
      title: "Design & Prototyping",
      description:
        "Creating intuitive and engaging user experiences with pixel-perfect designs",
      activities: [
        "User flows & journey mapping",
        "Wireframing & UI mockups",
        "Interactive prototyping",
        "Design system development",
      ],
      icon: <FaLayerGroup className="text-blue-600 w-6 h-6" />,
    },
    {
      number: "3",
      title: "Development",
      description:
        "Building your app with clean, efficient code following industry best practices",
      activities: [
        "Agile sprints with bi-weekly demos",
        "Frontend & backend development",
        "API integration & testing",
        "Continuous integration/delivery",
      ],
      icon: <FaCode className="text-blue-600 w-6 h-6" />,
    },
    {
      number: "4",
      title: "Testing & QA",
      description:
        "Rigorous testing to ensure your app is performant, secure, and bug-free",
      activities: [
        "Functional testing",
        "Performance optimization",
        "Security testing",
        "User acceptance testing",
      ],
      icon: <FaCheckCircle className="text-blue-600 w-6 h-6" />,
    },
  ];

  const caseStudies = [
    {
      title: "Healthcare Telemedicine App",
      description:
        "Developed a HIPAA-compliant telehealth platform serving 50,000+ patients",
      result: "Reduced patient wait times by 75%",
      image: app,
    },
    {
      title: "Retail E-Commerce App",
      description:
        "Built a scalable mobile shopping platform with AR product visualization",
      result: "Increased conversions by 40%",
      image: app2,
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50" ref={ref}>
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1224273124/vector/3d-abstract-concept-world-or-earth-internationalization-and-globalization.jpg?s=612x612&w=0&k=20&c=_F_dEzH9_4QXnLxwwTNReBiUwARHSuEPGlj1UeScbXI=')",
          }}
        ></div>
        <div className="absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-8 text-left">
              Mobile App Development Services
            </h1>
            <p className="text-xl text-white max-w-1xl mt-1 text-left">
              Transform your ideas into powerful, user-friendly mobile
              applications that deliver real value
            </p>
          </div>
        </div>
      </div>

      <div className="mb-20 px-6 md:px-8">
        <h2 className="text-xl font-bold text-orange-600 mb-4 mt-8">
          OVERVIEW
        </h2>
        <p className="text-lg text-gray-900 leading-relaxed">
          At Innomatrics, we understand the rapid evolution of the mobile-first
          world. Businesses must innovate quickly to launch impactful apps,
          reduce time-to-market, and stay competitive with emerging
          technologies. Mobile app development demands agility and continuous
          innovation.
          <br />
          Our team brings together deep expertise in native and cross-platform
          technologies, domain knowledge, and hands-on experience to build
          scalable, secure, and user-centric mobile applications. Whether it's
          iOS, Android, or hybrid solutions — we develop with performance,
          flexibility, and future-readiness in mind.
        </p>
      </div>

      {/* Offerings Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`py-2 px-4 font-medium text-sm focus:outline-none ${
              activeTab === "technology"
                ? "text-blue-600 border-b-2 border-red-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => {
              setActiveTab("technology");
              setHoveredService(null);
            }}
          >
            Technology Offerings
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm focus:outline-none ${
              activeTab === "business"
                ? "text-red-400 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => {
              setActiveTab("business");
              setHoveredService(null);
            }}
          >
            Business Offerings
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-6">
              OUR OFFERINGS
            </h3>
            <div className="space-y-4">
              {currentOfferings.items.map((item) => (
                <div
                  key={item}
                  className="group relative"
                  onMouseEnter={() => setHoveredService(item.replace("— ", ""))}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <h4 className="text-lg font-semibold text-gray-600 cursor-pointer group-hover:text-red-400 transition-colors duration-300">
                    {item}
                  </h4>
                </div>
              ))}

              <p className="text-gray-600 mt-6">
                {currentOfferings.description}
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={
                hoveredService
                  ? currentOfferings.images[hoveredService] ||
                    currentOfferings.images.default
                  : currentOfferings.images.default
              }
              alt={hoveredService || currentOfferings.title}
              className="rounded-lg shadow-xl w-full object-cover transition-opacity duration-500"
              style={{ height: "500px" }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-lg">
                {hoveredService
                  ? currentOfferings.descriptions[hoveredService] ||
                    currentOfferings.descriptions.default
                  : currentOfferings.descriptions.default}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Value Section */}

      {/* New Technology Innovation Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-400 mb-4 text-center md:text-left md:ml-[-700px]">
            TECHNOLOGY INNOVATION
          </h1> 
          <p className="text-2xl text-gray-700 text-center md:text-left md:ml-[-700px]">
            Pioneering solution for tomorrow's challanges
          </p>
        
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Box 1 */}
          <div className="bg-blue-900 rounded-lg p-6 text-white relative overflow-hidden transform transition-transform hover:scale-105">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800/50 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-blue-300 mb-3">
                Cloud Innovation
              </h3>
              <p className="text-sm mb-4">
                "Implemented cloud-native architecture reducing deployment time
                by 75% and improving scalability for enterprise applications."
              </p>
              <p className="text-blue-200 text-sm">
                Cloud Architecture Team Lead
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-700/30 rounded-full blur-xl"></div>
          </div>

          {/* Box 2 */}
          <div className="bg-blue-900 rounded-lg p-6 text-white relative overflow-hidden transform transition-transform hover:scale-105">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800/50 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-blue-300 mb-3">
                AI Integration
              </h3>
              <p className="text-sm mb-4">
                "Developed ML-powered analytics platform processing 1M+ data
                points daily with 99.9% accuracy in predictive modeling."
              </p>
              <div className="text-blue-400 hover:text-blue-300 cursor-pointer inline-flex items-center">
                Learn More <span className="ml-2">→</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-700/30 rounded-full blur-xl"></div>
          </div>

          {/* Box 3 */}
          <div className="bg-blue-900 rounded-lg p-6 text-white relative overflow-hidden transform transition-transform hover:scale-105">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800/50 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-blue-300 mb-3">
                DevOps Excellence
              </h3>
              <p className="text-sm mb-4">
                "Automated deployment pipeline with continuous monitoring and
                self-healing capabilities for critical infrastructure."
              </p>
              <p className="text-blue-200 text-sm">
                Infrastructure & Operations
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-700/30 rounded-full blur-xl"></div>
          </div>

          {/* Box 4 */}
          <div className="bg-blue-900 rounded-lg p-6 text-white relative overflow-hidden transform transition-transform hover:scale-105">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800/50 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-blue-300 mb-3">
                Security First
              </h3>
              <p className="text-sm mb-4">
                "Enhanced system security with zero-trust architecture
                implementation, reducing security incidents by 90%."
              </p>
              <p className="text-blue-200 text-sm">Cybersecurity Director</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-700/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Rest of your existing sections... */}
      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12">
          {/* Left: Text Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-red-600 mb-4 text-center md:text-left md:ml-[-50px]">
              Transform Your Business with Mobile Technology
            </h2>
            <div className="w-24 h-1 bg-blue-600 mb-6 mx-auto md:mx-0 md:ml-[-50px]"></div>
            <p className="text-xl text-gray-700 text-center md:text-left md:ml-[-50px]">
              At Innomatrics Tech, we specialize in creating high-performance
              mobile applications that deliver exceptional user experiences and
              measurable business results. With over 10 years of experience, our
              team of certified developers builds apps that are scalable,
              secure, and tailored to your specific industry needs.
              enterprise systems, we combine design thinking with
              powerful technology to deliver high-performance platforms tailored
              to your industry.
            </p>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038906.jpg?semt=ais_hybrid&w=740"
              alt="Mobile App Development"
              className="w-full rounded-lg shadow-lg max-w-[600px]"
            />
          </div>
        </div>

        <div className="flex mt-10 flex-col md:flex-row items-start gap-12">
          {/* Left: Larger Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://images.shiksha.com/mediadata/images/articles/1511182566phpUYd3Dx.jpeg"
              alt="Digital Solutions"
              className="w-full max-w-2xl rounded-2xl shadow-2xl mt-6"
            />
          </div>

          {/* Right: Bigger Content */}
          <div className="w-full md:w-1/2 ">
            <h2 className="text-4xl mt-5 font-semibold text-red-600 mb-6 leading-tight">
              Build Scalable
            </h2>
            <div className="w-28 h-1 bg-blue-600 mb-6 "></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Innomatrics helps you bring your ideas to life with custom-built
              software solutions that are fast, secure, and scalable. From
              mobile apps to enterprise systems, we combine design thinking with
              powerful technology to deliver high-performance platforms tailored
              to your industry. Let's build the future — together.
              enterprise systems, we combine design thinking with
              powerful technology to deliver high-performance platforms tailored
              to your industry. Let's build the future — together.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-20 mt-10">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
            Comprehensive App Development Services
          </h2>
          <div className="w-28 h-1 bg-red-600 mb-6 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
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

        {/* Platforms Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
            Our Platform Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{platform.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                  {platform.name}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {platform.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <svg
                          className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0"
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

        {/* Development Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
            Our Proven Development Methodology
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {developmentProcess.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image Side */}
                  <div className="md:w-1/2">
                    <img
                      src={
                        index === 0
                          ? "https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg"
                          : index === 1
                          ? "https://img.freepik.com/free-vector/website-designer-concept-illustration_114360-4146.jpg"
                          : index === 2
                          ? "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
                          : "https://img.freepik.com/free-vector/qa-engineers-concept-illustration_114360-1534.jpg"
                      }
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Side */}
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-bold">
                          {step.number}
                        </span>
                      </div>
                      <div className="flex items-center">
                        {step.icon}
                        <h3 className="text-xl font-bold text-gray-900 ml-2">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.activities.map((activity, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600"
                        >
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
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
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
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg inline-block font-medium">
                    <span className="font-bold">Result:</span>{" "}
                    {caseStudy.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Innomatrics */}
        <div className="mb-20 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Innomatrics Tech?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-xl">Years in Mobile Development</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-xl">Successful App Launches</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">40+</div>
              <div className="text-xl">Certified Developers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-xl">Client Satisfaction Rating</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss how Innomatrics Tech can help you create an app that
            delights users and grows your business.
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
  );
});

export default AppDev;
