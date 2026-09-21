import React, { forwardRef } from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import SectionHeader from "../components/SectionHeader";
import {
  FaPaintBrush,
  FaDesktop,
  FaMobile,
  FaChartLine,
  FaCloud,
  FaCogs,
  FaUsers,
  FaCode,
  FaLightbulb
} from "react-icons/fa";

import heroImgNew from "../../../assets/new_category_images/UiUxDesign_hero.jpg";

import wireframingImg from "../../../assets/webServices/Wireframing.jpg";
import websiteUiDesignImg from "../../../assets/webServices/Website UI Design.jpg";
import uiuxDesignImg from "../../../assets/webServices/UIUX Design.jpg";
import saasProductDesignImg from "../../../assets/webServices/SaaS Product Design.jpg";
import mobileAppUiDesignImg from "../../../assets/webServices/Mobile App UI Design.jpg";
import figmaPrototypingImg from "../../../assets/webServices/Figma Prototyping.jpg";
import dashboardDesignImg from "../../../assets/webServices/Dashboard Design.jpg";
import brandingVisualIdentityImg from "../../../assets/webServices/Branding & Visual Identity.jpg";
import designSystemDevelopmentImg from "../../../assets/webServices/Website Security.jpg";

const UiUxDesign = forwardRef((props, ref) => {
  const data = {
    breadcrumbTitle: "UI/UX Design",
    title: "UI/UX & Product Design Services",
    heroDescription: "Engaging, intuitive, and high-conversion design services for web and mobile platforms.",
    heroImage: heroImgNew,
    primaryCTA: "Discuss Your Project",
    primaryLink: "/contact",
    overview: {
      title: "Design That Drives User Engagement",
      description: "We craft beautiful, user-centric interfaces that not only look stunning but also enhance usability and drive conversions. Our design process ensures your product is intuitive, accessible, and aligned with your brand identity."
    },
    services: [
      {
        icon: <FaPaintBrush className="w-8 h-8" />,
        title: "UI/UX Design",
        description: "User-centric interfaces that combine stunning aesthetics with seamless usability.",
        list: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
        image: uiuxDesignImg
      },
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "Website UI Design",
        description: "Beautiful, responsive website designs that captivate and convert visitors.",
        list: ["Visual Design", "Interaction Design", "Information Architecture", "Design Systems"],
        image: websiteUiDesignImg
      },
      {
        icon: <FaMobile className="w-8 h-8" />,
        title: "Mobile App UI Design",
        description: "Intuitive mobile application interfaces optimized for iOS and Android.",
        list: ["UI Mockups", "Responsive Layouts", "Typography Selection", "Color Theory"],
        image: mobileAppUiDesignImg
      },
      {
        icon: <FaChartLine className="w-8 h-8" />,
        title: "Dashboard Design",
        description: "Clear, functional, and visually appealing admin panels and data dashboards.",
        list: ["User Personas", "Journey Mapping", "A/B Testing", "Feedback Analysis"],
        image: dashboardDesignImg
      },
      {
        icon: <FaCloud className="w-8 h-8" />,
        title: "SaaS Product Design",
        description: "End-to-end product design for scalable Software-as-a-Service platforms.",
        list: ["Mobile App Design", "Web Interface Design", "Dashboard Creation", "SaaS Platform UX"],
        image: saasProductDesignImg
      },
      {
        icon: <FaCogs className="w-8 h-8" />,
        title: "Design System Development",
        description: "Comprehensive component libraries and style guides for consistent branding.",
        list: ["Microinteractions", "Animation Design", "State Transitions", "Feedback Indicators"],
        image: designSystemDevelopmentImg
      },
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "Figma Prototyping",
        description: "Interactive, high-fidelity prototypes to visualize and test your product before coding.",
        list: ["Accessibility Compliance", "WCAG Standards", "Inclusive Design", "Screen Reader Support"],
        image: figmaPrototypingImg
      },
      {
        icon: <FaUsers className="w-8 h-8" />,
        title: "UX Research",
        description: "In-depth user research, testing, and persona development to inform design decisions.",
        list: ["Heuristic Evaluation", "Expert Review", "Competitive Analysis", "Design Audits"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaCode className="w-8 h-8" />,
        title: "Wireframing",
        description: "Structural blueprints that define the layout and flow of your digital product.",
        list: ["Iconography", "Custom Illustrations", "Asset Generation", "Style Guides"],
        image: wireframingImg
      },
      {
        icon: <FaLightbulb className="w-8 h-8" />,
        title: "Branding & Visual Identity",
        description: "Cohesive brand identities, including logos, typography, and color palettes.",
        list: ["Clickable Prototypes", "Figma Design", "Adobe XD", "Sketch Files"],
        image: brandingVisualIdentityImg
      }
    ],
    whyUs: [
      { value: "300+", label: "Screens Designed" },
      { value: "99%", label: "User Satisfaction" },
      { value: "100%", label: "Figma Handoffs" },
      { value: "15+", label: "UX Researchers" }
    ]
  };

  const valueDelivered = [
    {
      title: "User Retention",
      desc: "Increased app retention rates by 60% through intuitive UX redesigns.",
      metric: "60%",
      label: "Retention Boost"
    },
    {
      title: "Task Completion",
      desc: "Improved user task completion speed by 40% with streamlined flows.",
      metric: "40%",
      label: "Faster Workflows"
    },
    {
      title: "Brand Engagement",
      desc: "Boosted user interaction times by 85% with modern aesthetics.",
      metric: "85%",
      label: "Engagement"
    },
    {
      title: "Design Handoff",
      desc: "Accelerated development by 50% using comprehensive Design Systems.",
      metric: "50%",
      label: "Dev Speedup"
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

export default UiUxDesign;
