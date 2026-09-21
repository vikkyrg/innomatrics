import React, { forwardRef } from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import SectionHeader from "../components/SectionHeader";
import {
  FaDesktop,
  FaCogs,
  FaMobile,
  FaPlug,
  FaChartLine,
  FaSyncAlt,
  FaUsers,
  FaRobot,
  FaCode,
  FaDatabase,
  FaBriefcase,
  FaCloud
} from "react-icons/fa";

import heroImgNew from "../../../assets/new_category_images/QaTesting_hero.jpg";

import apiTestingImg from "../../../assets/aiAutomationServices/API Testing.jpg";
import crossBrowserTestingImg from "../../../assets/aiAutomationServices/Cross-Browser Testing.jpg";
import functionalTestingImg from "../../../assets/aiAutomationServices/Functional Testing.jpg";
import mobileAppTestingImg from "../../../assets/aiAutomationServices/Mobile App Testing.jpg";
import performanceTestingImg from "../../../assets/aiAutomationServices/Performance Testing.jpg";
import qaAutomationImg from "../../../assets/aiAutomationServices/QA Automation.jpg";
import webApplicationTestingImg from "../../../assets/aiAutomationServices/Web Application Testing.jpg";
import manualTestingImg from "../../../assets/aiAutomationServices/7962d274d5aa35cdd41a073854e12d72.jpg";

const QaTesting = forwardRef((props, ref) => {
  const data = {
    breadcrumbTitle: "Software Testing & QA",
    title: "Software Testing & QA Services",
    heroDescription: "Ensure your software is reliable, scalable, and bug-free with our rigorous testing processes.",
    heroImage: heroImgNew,
    primaryCTA: "Discuss Your QA Needs",
    primaryLink: "/contact",
    overview: {
      title: "Deliver Flawless Software Experiences",
      description: "Our comprehensive Quality Assurance and software testing services ensure your applications perform flawlessly under any condition. We combine automated testing frameworks with meticulous manual review to guarantee a bug-free launch."
    },
    services: [
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "Manual Testing",
        description: "Thorough, human-driven exploratory testing to ensure perfect user experiences.",
        list: ["Automated Testing", "Manual Inspection", "Bug Tracking", "Performance Optimization"],
        image: manualTestingImg
      },
      {
        icon: <FaCogs className="w-8 h-8" />,
        title: "Functional Testing",
        description: "Rigorous verification that all software features operate exactly as intended.",
        list: ["Regression Testing", "Security Testing", "Usability Checks", "Test Automation"],
        image: functionalTestingImg
      },
      {
        icon: <FaMobile className="w-8 h-8" />,
        title: "Mobile App Testing",
        description: "Comprehensive testing across iOS and Android devices for flawless mobile performance.",
        list: ["Functional Testing", "Unit Tests", "Integration Testing", "System Verification"],
        image: mobileAppTestingImg
      },
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "Web Application Testing",
        description: "Ensuring web applications are secure, fast, and function correctly on all devices.",
        list: ["Load Testing", "Stress Analysis", "Scalability Testing", "Spike Testing"],
        image: webApplicationTestingImg
      },
      {
        icon: <FaPlug className="w-8 h-8" />,
        title: "API Testing",
        description: "Validating the functionality, reliability, and security of your backend APIs.",
        list: ["Mobile App QA", "Device Compatibility", "OS Version Testing", "Network Simulation"],
        image: apiTestingImg
      },
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "Cross-Browser Testing",
        description: "Guaranteeing a consistent experience across Chrome, Safari, Firefox, and Edge.",
        list: ["Cross-Browser Testing", "Responsive Checks", "UI Validation", "Layout Verification"],
        image: crossBrowserTestingImg
      },
      {
        icon: <FaChartLine className="w-8 h-8" />,
        title: "Performance Testing",
        description: "Load and stress testing to ensure your software can handle high traffic volumes.",
        list: ["API Testing", "Endpoint Verification", "Payload Validation", "Response Time Checks"],
        image: performanceTestingImg
      },
      {
        icon: <FaSyncAlt className="w-8 h-8" />,
        title: "Regression Testing",
        description: "Automated and manual checks to ensure new updates don't break existing features.",
        list: ["Acceptance Testing", "User Scenarios", "Business Logic Checks", "End-to-End Testing"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaUsers className="w-8 h-8" />,
        title: "User Acceptance Testing",
        description: "Final phase testing conducted from the perspective of the end-user.",
        list: ["Accessibility Testing", "Screen Reader Checks", "Keyboard Navigation", "Contrast Ratios"],
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaRobot className="w-8 h-8" />,
        title: "QA Automation",
        description: "Building robust automated test suites to speed up delivery and reduce human error.",
        list: ["Test Case Design", "Test Planning", "Defect Management", "Quality Metrics"],
        image: qaAutomationImg
      }
    ],
    technologies: [
      { name: "Selenium", icon: <FaCogs /> },
      { name: "Cypress", icon: <FaDesktop /> },
      { name: "JUnit", icon: <FaCode /> },
      { name: "Jest", icon: <FaCode /> },
      { name: "Appium", icon: <FaMobile /> },
      { name: "Postman", icon: <FaDatabase /> },
      { name: "Jira", icon: <FaBriefcase /> },
      { name: "Jenkins", icon: <FaCloud /> },
    ],
    whyUs: [
      { value: "10k+", label: "Test Cases Written" },
      { value: "0", label: "Critical Escapes" },
      { value: "100%", label: "Pipeline Automation" },
      { value: "20+", label: "QA Engineers" }
    ]
  };

  const valueDelivered = [
    {
      title: "Bug Reduction",
      desc: "Caught 99% of critical bugs before production via automated pipelines.",
      metric: "99%",
      label: "Bugs Caught"
    },
    {
      title: "Release Velocity",
      desc: "Sped up deployment cycles by 3x using CI/CD test automation.",
      metric: "3x",
      label: "Faster Releases"
    },
    {
      title: "Test Coverage",
      desc: "Achieved 95%+ code coverage on complex enterprise applications.",
      metric: "95%",
      label: "Code Coverage"
    },
    {
      title: "Performance",
      desc: "Identified and fixed memory leaks, boosting app speed by 40%.",
      metric: "40%",
      label: "Speed Boost"
    }
  ];

  return (
    <ServiceTemplate data={data} ref={ref}>
      <div className="section-padding bg-surface border-t border-outline-variant/30">
        <div className="container-custom">
          <SectionHeader eyebrow="Value Delivered" title="Engineering excellence with real-world impact" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valueDelivered.map((item, index) => (
              <div key={index} className="bg-primary text-on-primary rounded-md p-8 relative overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-105 duration-500"></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-primary-fixed-dim mb-6">{item.desc}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-extrabold">{item.metric}</span>
                    <span className="text-sm font-medium tracking-wide uppercase">{item.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServiceTemplate>
  );
});

export default QaTesting;
