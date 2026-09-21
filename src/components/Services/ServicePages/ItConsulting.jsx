import React, { forwardRef } from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import SectionHeader from "../components/SectionHeader";
import {
  FaLightbulb,
  FaCogs,
  FaRocket,
  FaDesktop,
  FaCode,
  FaCloud,
  FaChartLine,
  FaSyncAlt,
  FaDatabase,
  FaBriefcase
} from "react-icons/fa";

import heroImgNew from "../../../assets/new_category_images/ItConsulting_hero.jpg";

import businessProcessAutomationImg from "../../../assets/appServices/Business Process Automation.jpg";
import digitalTransformationImg from "../../../assets/appServices/Digital Transformation.jpg";
import itInfrastructureConsultingImg from "../../../assets/appServices/IT Infrastructure Consulting.jpg";
import legacySystemMigrationImg from "../../../assets/appServices/Legacy System Migration.jpg";
import mvpConsultingImg from "../../../assets/appServices/MVP Consulting.jpg";
import productStrategyImg from "../../../assets/appServices/Product Strategy.jpg";
import softwareArchitectureConsultingImg from "../../../assets/appServices/Software Architecture Consulting.jpg";
import technologyConsultingImg from "../../../assets/appServices/Technology Consulting.jpg";
import technologyStackConsultingImg from "../../../assets/appServices/Technology Stack Consulting.jpg";

const ItConsulting = forwardRef((props, ref) => {
  const data = {
    breadcrumbTitle: "IT Consulting",
    title: "IT Consulting & Digital Transformation",
    heroDescription: "Strategic guidance to navigate technological shifts and drive your digital transformation journey.",
    heroImage: heroImgNew,
    primaryCTA: "Discuss Your Strategy",
    primaryLink: "/contact",
    overview: {
      title: "Strategize Your Digital Future",
      description: "We help businesses leverage technology to achieve operational excellence and sustainable growth. From architectural planning to full-scale digital transformation, our consulting services provide actionable roadmaps."
    },
    services: [
      {
        icon: <FaLightbulb className="w-8 h-8" />,
        title: "Technology Consulting",
        description: "Strategic guidance to help you choose the right technologies for your business goals.",
        list: ["Strategic Planning", "Technology Assessment", "Process Optimization", "Digital Transformation"],
        image: technologyConsultingImg
      },
      {
        icon: <FaCogs className="w-8 h-8" />,
        title: "Business Process Automation",
        description: "Identifying and automating repetitive workflows to save time and reduce costs.",
        list: ["Architecture Review", "Vendor Selection", "IT Strategy", "Risk Management"],
        image: businessProcessAutomationImg
      },
      {
        icon: <FaRocket className="w-8 h-8" />,
        title: "Digital Transformation",
        description: "Comprehensive strategies to digitize your operations and modernize your business.",
        list: ["Cloud Strategy", "Migration Planning", "Infrastructure Audit", "Cost Optimization"],
        image: digitalTransformationImg
      },
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "Software Architecture Consulting",
        description: "Designing scalable, secure, and resilient architectures for complex applications.",
        list: ["Cybersecurity Assessment", "Compliance Check", "Security Roadmap", "Threat Modeling"],
        image: softwareArchitectureConsultingImg
      },
      {
        icon: <FaCode className="w-8 h-8" />,
        title: "Technology Stack Consulting",
        description: "Expert advice on selecting the optimal programming languages, frameworks, and databases.",
        list: ["Software Selection", "Make vs Buy Analysis", "ERP Consulting", "CRM Strategy"],
        image: technologyStackConsultingImg
      },
      {
        icon: <FaCloud className="w-8 h-8" />,
        title: "IT Infrastructure Consulting",
        description: "Evaluating and optimizing your server, network, and cloud infrastructure.",
        list: ["Data Strategy", "Analytics Planning", "Business Intelligence", "Data Governance"],
        image: itInfrastructureConsultingImg
      },
      {
        icon: <FaChartLine className="w-8 h-8" />,
        title: "Product Strategy",
        description: "Aligning your software product roadmap with market demands and business objectives.",
        list: ["Agile Coaching", "DevOps Strategy", "Team Structuring", "Delivery Optimization"],
        image: productStrategyImg
      },
      {
        icon: <FaRocket className="w-8 h-8" />,
        title: "MVP Consulting",
        description: "Defining the core features needed to launch your Minimum Viable Product successfully.",
        list: ["IT Service Management", "ITIL Framework", "Helpdesk Optimization", "SLA Definition"],
        image: mvpConsultingImg
      },
      {
        icon: <FaLightbulb className="w-8 h-8" />,
        title: "Startup Technology Consulting",
        description: "Tailored technical guidance for founders and early-stage startups.",
        list: ["Disaster Recovery Plan", "Business Continuity", "Backup Strategy", "Crisis Management"],
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaSyncAlt className="w-8 h-8" />,
        title: "Software Modernization",
        description: "Upgrading and refactoring legacy software to modern standards without downtime.",
        list: ["Enterprise Architecture", "System Integration Plan", "Legacy Modernization", "Tech Debt Reduction"],
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaDatabase className="w-8 h-8" />,
        title: "Legacy System Migration",
        description: "Safely transitioning data and operations from outdated systems to new platforms.",
        list: ["Strategic Planning", "Technology Assessment", "Process Optimization", "Digital Transformation"],
        image: legacySystemMigrationImg
      }
    ],
    technologies: [
      { name: "AWS", icon: <FaCloud /> },
      { name: "Azure", icon: <FaCloud /> },
      { name: "Google Cloud", icon: <FaCloud /> },
      { name: "Microsoft 365", icon: <FaDesktop /> },
      { name: "Salesforce", icon: <FaDatabase /> },
      { name: "SAP", icon: <FaCogs /> },
      { name: "Power BI", icon: <FaChartLine /> },
      { name: "Jira", icon: <FaBriefcase /> },
    ],
    whyUs: [
      { value: "50+", label: "IT Roadmaps Delivered" },
      { value: "50%", label: "IT Cost Reduction" },
      { value: "100%", label: "Project Success" },
      { value: "15+", label: "Senior Architects" }
    ]
  };

  const valueDelivered = [
    {
      title: "Digital Transformation",
      desc: "Increased overall operational efficiency by 45% post-transformation.",
      metric: "45%",
      label: "Efficiency Gain"
    },
    {
      title: "Cost Optimization",
      desc: "Reduced IT infrastructure costs by 30% through cloud migrations.",
      metric: "30%",
      label: "IT Savings"
    },
    {
      title: "Strategic Alignment",
      desc: "Aligned 100% of technology investments with core business goals.",
      metric: "100%",
      label: "Goal Alignment"
    },
    {
      title: "Legacy Modernization",
      desc: "Upgraded legacy systems 2x faster with zero data loss.",
      metric: "2x",
      label: "Modernization Speed"
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

export default ItConsulting;
