import React, { forwardRef } from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import SectionHeader from "../components/SectionHeader";
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
  FaCheckCircle
} from "react-icons/fa";

import a1 from "../../../assets/appServices/strategicPlanApp.jpg";
import a2 from "../../../assets/appServices/usercentric.webp";
import a3 from "../../../assets/appServices/customDev.jpg";
import a4 from "../../../assets/appServices/crossPlatform.png";
import a5 from "../../../assets/appServices/qualityTest.png";
import a6 from "../../../assets/appdev11.jpeg";

const AppDev = forwardRef((props, ref) => {
  const data = {
    breadcrumbTitle: "App Development",
    title: "Mobile App Development Services",
    heroDescription: "Transform your ideas into powerful, user-friendly mobile applications that deliver real value",
    heroImage: "https://media.istockphoto.com/id/1224273124/vector/3d-abstract-concept-world-or-earth-internationalization-and-globalization.jpg?s=612x612&w=0&k=20&c=_F_dEzH9_4QXnLxwwTNReBiUwARHSuEPGlj1UeScbXI=",
    primaryCTA: "Discuss Your Project",
    primaryLink: "/contact",
    overview: {
      title: "Transform Your Business with Mobile Technology",
      description: "At Innomatrics Tech, we specialize in creating high-performance mobile applications that deliver exceptional user experiences and measurable business results. Our team brings together deep expertise in native and cross-platform technologies to build scalable, secure, and user-centric mobile applications."
    },
    services: [
      {
        icon: <FaCode className="w-8 h-8" />,
        title: "Custom App Development",
        description: "Tailored mobile solutions designed to meet your specific business needs and user requirements",
        list: ["Native app development (iOS & Android)", "Cross-platform solutions", "UI/UX design following latest trends", "Secure backend integration", "Third-party API development"],
        image: a3
      },
      {
        icon: <FaRocket className="w-8 h-8" />,
        title: "App Modernization",
        description: "Transform your legacy applications into modern, scalable solutions with enhanced features",
        list: ["Code refactoring and optimization", "Performance benchmarking", "UI/UX redesign for modern standards", "Technology stack upgrade", "Cloud migration"],
        image: a2
      },
      {
        icon: <FaCogs className="w-8 h-8" />,
        title: "Enterprise Mobility",
        description: "Secure and scalable enterprise mobile solutions for workforce productivity",
        list: ["Enterprise app integration", "Mobile device management", "End-to-end encrypted data handling", "Offline-first capabilities"],
        image: a1
      },
      {
        icon: <FaShieldAlt className="w-8 h-8" />,
        title: "App Maintenance",
        description: "Comprehensive support and maintenance services to keep your app performing optimally",
        list: ["Regular OS compatibility updates", "Bug fixes and performance tuning", "Real-time crash monitoring", "Security patches"],
        image: a6
      },
      {
        icon: <FaUsers className="w-8 h-8" />,
        title: "UI/UX Design",
        description: "Beautiful, intuitive interfaces that drive engagement and user satisfaction",
        list: ["User research and persona development", "Wireframing and prototyping", "Motion design and micro-interactions", "Accessibility compliance"],
        image: a4
      },
      {
        icon: <FaChartLine className="w-8 h-8" />,
        title: "App Analytics",
        description: "Data-driven insights to optimize performance and user experience",
        list: ["User behavior tracking", "Conversion funnel analysis", "Performance monitoring", "A/B testing framework"],
        image: a5
      }
    ],
    processSteps: [
      {
        title: "Discovery & Strategy",
        description: "Comprehensive analysis to define your app's vision, goals, and technical requirements",
        deliverables: ["Business requirement workshops", "Market research", "Technical feasibility assessment", "Project roadmap"]
      },
      {
        title: "Design & Prototyping",
        description: "Creating intuitive and engaging user experiences with pixel-perfect designs",
        deliverables: ["User flows", "Wireframing & UI mockups", "Interactive prototyping", "Design system"]
      },
      {
        title: "Development",
        description: "Building your app with clean, efficient code following industry best practices",
        deliverables: ["Agile sprints", "Frontend & backend development", "API integration", "CI/CD"]
      },
      {
        title: "Testing & QA",
        description: "Rigorous testing to ensure your app is performant, secure, and bug-free",
        deliverables: ["Functional testing", "Performance optimization", "Security testing", "UAT"]
      }
    ],
    whyUs: [
      { value: "3+", label: "Years in Mobile Development" },
      { value: "100+", label: "Successful App Launches" },
      { value: "40+", label: "Certified Developers" },
      { value: "4.9/5", label: "Client Satisfaction Rating" }
    ]
  };

  const platforms = [
    {
      icon: <FaAndroid className="w-12 h-12 text-primary" />,
      name: "Android Development",
      description: "Native and cross-platform solutions for the world's most popular mobile OS",
      technologies: ["Kotlin", "Java", "Flutter", "React Native"],
      features: ["Material Design implementation", "Google Play Store optimization", "Android Enterprise support", "Background services integration"]
    },
    {
      icon: <FaApple className="w-12 h-12 text-primary" />,
      name: "iOS Development",
      description: "Elegant and powerful applications for Apple's ecosystem",
      technologies: ["Swift", "SwiftUI", "Flutter", "React Native"],
      features: ["Human Interface Guidelines compliance", "App Store optimization", "Apple Pay integration", "ARKit for augmented reality"]
    },
    {
      icon: <FaMobile className="w-12 h-12 text-primary" />,
      name: "Cross-Platform",
      description: "Build once, deploy everywhere with modern frameworks",
      technologies: ["React Native", "Flutter", "Xamarin", "Ionic"],
      features: ["80% code reuse across platforms", "Native-like performance", "Consistent UI across devices", "Faster time-to-market"]
    }
  ];

  return (
    <ServiceTemplate data={data} ref={ref}>
      <div className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader eyebrow="Platforms" title="Our Platform Expertise" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-secondary-50 border border-outline-variant/60 rounded-md p-8 hover:shadow-md transition-all duration-300">
                <div className="flex justify-center mb-6">{platform.icon}</div>
                <h3 className="text-xl font-bold text-on-surface text-center mb-4">{platform.name}</h3>
                <p className="text-on-surface-variant text-center mb-6">{platform.description}</p>
                <div className="mb-6 border-t border-outline-variant/30 pt-4">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-primary mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {platform.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full text-xs font-medium border border-outline-variant/50">{tech}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-primary mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-on-surface-variant">
                        <FaCheckCircle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServiceTemplate>
  );
});

export default AppDev;
