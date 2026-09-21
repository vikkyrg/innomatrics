import React, { forwardRef } from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import SectionHeader from "../components/SectionHeader";
import {
  FaDesktop,
  FaMobile,
  FaCode,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaLock,
  FaChartLine,
  FaUsers,
  FaBuilding,
  FaCogs
} from "react-icons/fa";

import heroImgNew from "../../../assets/new_category_images/MaintenanceSupport_hero.jpg";

import amcPlansImg from "../../../assets/ecommerceServices/AMC Plans.jpg";
import appMaintenanceImg from "../../../assets/ecommerceServices/App Maintenance.jpg";
import backupManagementImg from "../../../assets/ecommerceServices/Backup Management.jpg";
import cloudManagementImg from "../../../assets/ecommerceServices/Cloud Management.jpg";
import managedItSupportImg from "../../../assets/ecommerceServices/Managed IT Support.jpg";
import monthlyTechnicalSupportImg from "../../../assets/ecommerceServices/Monthly Technical Support.jpg";
import performanceOptimizationImg from "../../../assets/ecommerceServices/Performance Optimization.jpg";
import securityMonitoringImg from "../../../assets/ecommerceServices/Security Monitoring.jpg";
import serverManagementImg from "../../../assets/ecommerceServices/Server Management.jpg";
import softwareMaintenanceImg from "../../../assets/ecommerceServices/Software Maintenance.jpg";
import websiteMaintenanceImg from "../../../assets/ecommerceServices/Website Maintenance.jpg";
import wordPressMaintenanceImg from "../../../assets/ecommerceServices/WordPress Maintenance.jpg";

const MaintenanceSupport = forwardRef((props, ref) => {
  const data = {
    breadcrumbTitle: "Maintenance & Support",
    title: "Maintenance & Managed IT Services",
    heroDescription: "Keep your systems running smoothly with our proactive maintenance and support plans.",
    heroImage: heroImgNew,
    primaryCTA: "Get IT Support",
    primaryLink: "/contact",
    overview: {
      title: "Reliable Support for Your Digital Assets",
      description: "Technology requires continuous care to perform at its best. Our managed IT and maintenance services ensure your websites, apps, and servers are always secure, updated, and optimized for peak performance."
    },
    services: [
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "Website Maintenance",
        description: "Ongoing updates, bug fixes, and content management for your web presence.",
        list: ["Regular Updates", "Bug Fixes", "Performance Monitoring", "24/7 Technical Support"],
        image: websiteMaintenanceImg
      },
      {
        icon: <FaMobile className="w-8 h-8" />,
        title: "App Maintenance",
        description: "Regular updates to ensure your mobile app stays compatible with new OS versions.",
        list: ["Security Patches", "Backup Management", "Uptime Guarantee", "Proactive Maintenance"],
        image: appMaintenanceImg
      },
      {
        icon: <FaCode className="w-8 h-8" />,
        title: "Software Maintenance",
        description: "Continuous improvement and bug fixing for your custom enterprise software.",
        list: ["Server Maintenance", "Database Optimization", "Log Rotation", "Resource Scaling"],
        image: softwareMaintenanceImg
      },
      {
        icon: <FaDatabase className="w-8 h-8" />,
        title: "Server Management",
        description: "Proactive server administration, patching, and optimization.",
        list: ["Content Updates", "CMS Management", "Asset Optimization", "Link Checking"],
        image: serverManagementImg
      },
      {
        icon: <FaCloud className="w-8 h-8" />,
        title: "Cloud Management",
        description: "Managing and optimizing your AWS, Azure, or Google Cloud infrastructure.",
        list: ["Code Refactoring", "Dependency Updates", "Technical Debt Reduction", "Framework Upgrades"],
        image: cloudManagementImg
      },
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "WordPress Maintenance",
        description: "Keeping your WordPress core, plugins, and themes secure and up-to-date.",
        list: ["Incident Management", "Ticket Resolution", "Helpdesk Support", "SLA Compliance"],
        image: wordPressMaintenanceImg
      },
      {
        icon: <FaShieldAlt className="w-8 h-8" />,
        title: "Security Monitoring",
        description: "24/7 surveillance to detect and block potential security threats.",
        list: ["Performance Tuning", "Caching Strategies", "CDN Management", "Load Balancing"],
        image: securityMonitoringImg
      },
      {
        icon: <FaLock className="w-8 h-8" />,
        title: "Backup Management",
        description: "Automated, secure data backups and routine restoration testing.",
        list: ["Compliance Monitoring", "Audit Logs", "Access Reviews", "Security Scanning"],
        image: backupManagementImg
      },
      {
        icon: <FaChartLine className="w-8 h-8" />,
        title: "Performance Optimization",
        description: "Continuous tuning to ensure maximum speed and efficiency for your applications.",
        list: ["Disaster Recovery Testing", "Failover Checks", "Data Restoration", "Redundancy Verification"],
        image: performanceOptimizationImg
      },
      {
        icon: <FaUsers className="w-8 h-8" />,
        title: "Monthly Technical Support",
        description: "Dedicated hours of expert technical support available whenever you need it.",
        list: ["User Support", "Training Sessions", "Documentation Updates", "Knowledge Base Management"],
        image: monthlyTechnicalSupportImg
      },
      {
        icon: <FaBuilding className="w-8 h-8" />,
        title: "AMC Plans",
        description: "Annual Maintenance Contracts tailored to your business's specific IT needs.",
        list: ["Regular Updates", "Bug Fixes", "Performance Monitoring", "24/7 Technical Support"],
        image: amcPlansImg
      },
      {
        icon: <FaCogs className="w-8 h-8" />,
        title: "Managed IT Support",
        description: "Comprehensive, outsourced IT department handling all your technological needs.",
        list: ["Security Patches", "Backup Management", "Uptime Guarantee", "Proactive Maintenance"],
        image: managedItSupportImg
      }
    ],
    technologies: [
      { name: "New Relic", icon: <FaChartLine /> },
      { name: "Datadog", icon: <FaChartLine /> },
      { name: "PagerDuty", icon: <FaMobile /> },
      { name: "Zendesk", icon: <FaUsers /> },
      { name: "AWS CloudWatch", icon: <FaCloud /> },
      { name: "Grafana", icon: <FaChartLine /> },
      { name: "Prometheus", icon: <FaDatabase /> },
      { name: "Splunk", icon: <FaCogs /> },
    ],
    whyUs: [
      { value: "24/7", label: "Active Monitoring" },
      { value: "99.9%", label: "SLA Compliance" },
      { value: "15 min", label: "Avg Response Time" },
      { value: "100%", label: "Data Backups" }
    ]
  };

  const valueDelivered = [
    {
      title: "System Uptime",
      desc: "Guaranteed 99.99% uptime with 24/7 proactive server monitoring.",
      metric: "99.99%",
      label: "Guaranteed Uptime"
    },
    {
      title: "Issue Resolution",
      desc: "Resolved 95% of critical IT tickets within the first hour.",
      metric: "<1h",
      label: "Resolution Time"
    },
    {
      title: "Security Patching",
      desc: "Automated 100% of zero-day vulnerability patches instantly.",
      metric: "100%",
      label: "Patch Compliance"
    },
    {
      title: "Performance",
      desc: "Improved legacy app load times by 60% through continuous optimization.",
      metric: "60%",
      label: "Speed Optimization"
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

export default MaintenanceSupport;
