import React, { forwardRef } from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import SectionHeader from "../components/SectionHeader";
import {
  FaMobile,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPaintBrush,
  FaDesktop,
  FaCloud,
  FaUsers,
  FaBuilding,
  FaBriefcase,
  FaCode,
  FaDatabase
} from "react-icons/fa";

import heroImgNew from "../../../assets/new_category_images/DedicatedTeam_hero.jpg";

import hireFlutterDeveloperImg from "../../../assets/digitalMarketing/Hire Flutter Developer.jpg";
import hireReactDeveloperImg from "../../../assets/digitalMarketing/Hire React Developer.jpg";
import hireNodejsDeveloperImg from "../../../assets/digitalMarketing/Hire Node.js Developer.jpg";
import hirePhpLaravelDeveloperImg from "../../../assets/digitalMarketing/Hire PHPLaravel Developer.jpg";
import hireUiUxDesignerImg from "../../../assets/digitalMarketing/Hire UIUX Designer.jpg";
import hireQaTesterImg from "../../../assets/digitalMarketing/Hire QA Tester.jpg";
import hireDevOpsEngineerImg from "../../../assets/digitalMarketing/Hire DevOps Engineer.jpg";
import dedicatedProjectManagerImg from "../../../assets/digitalMarketing/Dedicated Project Manager.jpg";
import fullDevelopmentTeamImg from "../../../assets/digitalMarketing/Full Development Team.jpg";

const DedicatedTeam = forwardRef((props, ref) => {
  const data = {
    breadcrumbTitle: "Dedicated Team",
    title: "Dedicated Development Team Services",
    heroDescription: "Hire expert developers and teams to scale your project delivery quickly and efficiently.",
    heroImage: heroImgNew,
    primaryCTA: "Hire Your Team",
    primaryLink: "/contact",
    overview: {
      title: "Scale Your Tech Team Instantly",
      description: "Our dedicated development team model allows you to hire highly skilled, pre-vetted developers who work exclusively on your projects. Overcome talent shortages and accelerate your time-to-market."
    },
    services: [
      {
        icon: <FaMobile className="w-8 h-8" />,
        title: "Hire Flutter Developer",
        description: "Expert Flutter developers for high-performance, cross-platform mobile apps.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: hireFlutterDeveloperImg
      },
      {
        icon: <FaReact className="w-8 h-8" />,
        title: "Hire React Developer",
        description: "Skilled frontend engineers specializing in dynamic, interactive React applications.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: hireReactDeveloperImg
      },
      {
        icon: <FaNodeJs className="w-8 h-8" />,
        title: "Hire Node.js Developer",
        description: "Backend specialists for scalable, high-speed API and server-side development.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: hireNodejsDeveloperImg
      },
      {
        icon: <FaPhp className="w-8 h-8" />,
        title: "Hire PHP/Laravel Developer",
        description: "Experienced PHP developers for robust web applications and custom eCommerce.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: hirePhpLaravelDeveloperImg
      },
      {
        icon: <FaPaintBrush className="w-8 h-8" />,
        title: "Hire UI/UX Designer",
        description: "Creative designers dedicated to crafting stunning, user-centric digital interfaces.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: hireUiUxDesignerImg
      },
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "Hire QA Tester",
        description: "Meticulous quality assurance engineers to ensure bug-free software delivery.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: hireQaTesterImg
      },
      {
        icon: <FaCloud className="w-8 h-8" />,
        title: "Hire DevOps Engineer",
        description: "Infrastructure experts to manage cloud deployments, CI/CD, and server scaling.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: hireDevOpsEngineerImg
      },
      {
        icon: <FaUsers className="w-8 h-8" />,
        title: "Dedicated Project Manager",
        description: "Experienced leaders to oversee your team, manage timelines, and ensure delivery.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: dedicatedProjectManagerImg
      },
      {
        icon: <FaBuilding className="w-8 h-8" />,
        title: "Full Development Team",
        description: "A complete, managed squad of developers, designers, and managers for your project.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: fullDevelopmentTeamImg
      }
    ],
    technologies: [
      { name: "Jira", icon: <FaBriefcase /> },
      { name: "Slack", icon: <FaUsers /> },
      { name: "GitHub", icon: <FaCode /> },
      { name: "GitLab", icon: <FaCode /> },
      { name: "Trello", icon: <FaDesktop /> },
      { name: "Confluence", icon: <FaDatabase /> },
      { name: "Zoom", icon: <FaUsers /> },
      { name: "Figma", icon: <FaPaintBrush /> },
    ],
    whyUs: [
      { value: "100+", label: "Engineers Available" },
      { value: "Top 1%", label: "Vetted Talent" },
      { value: "0", label: "Recruitment Fees" },
      { value: "24/7", label: "Timezone Overlap" }
    ]
  };

  const valueDelivered = [
    {
      title: "Team Scaling",
      desc: "Scaled engineering teams by 300% within just 2 weeks of engagement.",
      metric: "2 Wks",
      label: "Onboarding Time"
    },
    {
      title: "Cost Efficiency",
      desc: "Reduced in-house hiring and overhead costs by up to 50%.",
      metric: "50%",
      label: "Cost Reduction"
    },
    {
      title: "Retention Rate",
      desc: "Maintained a 98% developer retention rate across long-term projects.",
      metric: "98%",
      label: "Developer Retention"
    },
    {
      title: "Delivery Speed",
      desc: "Accelerated product roadmaps by 40% with dedicated focus.",
      metric: "40%",
      label: "Faster Roadmaps"
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

export default DedicatedTeam;
