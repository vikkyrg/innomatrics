import React, { forwardRef } from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import SectionHeader from "../components/SectionHeader";
import {
  FaCode,
  FaDesktop,
  FaDatabase,
  FaCloud,
  FaUsers,
  FaShoppingCart,
  FaChartLine,
  FaBuilding,
  FaHandshake,
  FaIndustry,
  FaMoneyBillWave,
  FaUtensils,
  FaCogs,
  FaTshirt,
  FaTruckLoading,
  FaTruck,
  FaPlane,
  FaTasks
} from "react-icons/fa";

import heroImg from "../../../assets/services_hero/hero_custom_software.png";
import cs1 from "../../../assets/customSoftwareServices/cs_1.webp";
import cs2 from "../../../assets/customSoftwareServices/cs_2.webp";
import cs3 from "../../../assets/customSoftwareServices/cs_3.webp";
import posImg from "../../../assets/webServices/pos.jpg";
import cs5 from "../../../assets/customSoftwareServices/cs_5.webp";
import hospitalImg from "../../../assets/webServices/hospital.jpg";
import cs7 from "../../../assets/customSoftwareServices/cs_7.webp";
import erpImg from "../../../assets/webServices/ERP.jpg";
import cs9 from "../../../assets/customSoftwareServices/cs_9.webp";
import restaurantImg from "../../../assets/webServices/resturent.jpg";
import manufacturingImg from "../../../assets/webServices/manufacturing.jpg";
import cs12 from "../../../assets/customSoftwareServices/cs_12.webp";
import logisticImg from "../../../assets/webServices/logistic.jpg";
import transportImg from "../../../assets/webServices/transport.jpg";
import toursImg from "../../../assets/webServices/tours and travels.jpg";
import projectMgmtImg from "../../../assets/webServices/project management.jpg";

import app from "../../../assets/services_cards/CustomSoftware_cs1.jpg";

const CustomSoftware = forwardRef((props, ref) => {
  const data = {
    breadcrumbTitle: "Custom Software",
    title: "Custom Software Development Services",
    heroDescription: "Innomatrics Tech delivers custom software solutions designed around your unique business workflows, driving efficiency and growth.",
    heroImage: heroImg,
    primaryCTA: "Discuss Your Software",
    primaryLink: "/contact",
    overview: {
      title: "Transform Your Business with Custom Software",
      description: "We build high-performance custom software that delivers exceptional user experiences and measurable business results. Our team brings together deep technical expertise, domain knowledge, and hands-on experience to deliver scalable, secure, and reliable software solutions."
    },
    services: [
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "Custom Business Software",
        description: "Tailored applications designed specifically for your unique operational workflows.",
        list: ["Scalable architecture", "Custom functionality", "Process automation", "API development"],
        image: cs1
      },
      {
        icon: <FaUsers className="w-8 h-8" />,
        title: "HRMS Software",
        description: "Comprehensive human resource management systems to streamline employee lifecycles.",
        list: ["Payroll processing", "Attendance tracking", "Performance management", "Employee portals"],
        image: cs2
      },
      {
        icon: <FaDatabase className="w-8 h-8" />,
        title: "Inventory Management",
        description: "Robust solutions to track stock, manage suppliers, and optimize supply chains.",
        list: ["Real-time tracking", "Barcode scanning", "Automated reordering", "Supplier portals"],
        image: cs3
      },
      {
        icon: <FaShoppingCart className="w-8 h-8" />,
        title: "POS Software",
        description: "Seamless point-of-sale systems for retail and restaurant businesses.",
        list: ["Sales tracking", "Multi-store support", "Customer loyalty", "Receipt generation"],
        image: posImg
      },
      {
        icon: <FaChartLine className="w-8 h-8" />,
        title: "Billing & Accounting",
        description: "Secure software for invoicing, tax compliance, and financial reporting.",
        list: ["Automated invoicing", "GST/Tax compliance", "Expense tracking", "Financial dashboards"],
        image: cs5
      },
      {
        icon: <FaBuilding className="w-8 h-8" />,
        title: "Hospital/School Management",
        description: "Industry-specific management solutions for healthcare and education sectors.",
        list: ["Patient/Student records", "Appointment/Timetable scheduling", "Billing integration", "Parent/Patient portals"],
        image: hospitalImg
      },
      {
        icon: <FaHandshake className="w-8 h-8" />,
        title: "CRM Development",
        description: "Customer Relationship Management systems to boost sales and retention.",
        list: ["Lead management", "Sales pipeline tracking", "Customer analytics", "Email integration"],
        image: cs7
      },
      {
        icon: <FaIndustry className="w-8 h-8" />,
        title: "ERP Development",
        description: "Enterprise Resource Planning software for complete business automation.",
        list: ["Resource tracking", "Financial management", "Supply chain integration", "Workflow automation"],
        image: erpImg
      },
      {
        icon: <FaMoneyBillWave className="w-8 h-8" />,
        title: "Payroll Software",
        description: "Automated payroll processing with built-in tax compliance and reporting.",
        list: ["Automated calculations", "Tax deductions", "Direct deposits", "Payslip generation"],
        image: cs9
      },
      {
        icon: <FaUtensils className="w-8 h-8" />,
        title: "Restaurant Management",
        description: "All-in-one software for orders, kitchen displays, and table management.",
        list: ["Table reservation", "KOT management", "Menu engineering", "Inventory tracking"],
        image: restaurantImg
      },
      {
        icon: <FaCogs className="w-8 h-8" />,
        title: "Manufacturing ERP",
        description: "Specialized ERPs for manufacturing units to manage production lifecycles.",
        list: ["Production planning", "BOM management", "Quality control", "Machine maintenance"],
        image: manufacturingImg
      },
      {
        icon: <FaTshirt className="w-8 h-8" />,
        title: "Garment ERP",
        description: "Tailored ERP systems for the textile and garment manufacturing industry.",
        list: ["Dyeing management", "Stitching tracking", "Fabric inventory", "Export documentation"],
        image: cs12
      },
      {
        icon: <FaTruckLoading className="w-8 h-8" />,
        title: "Logistics Management",
        description: "End-to-end logistics software for supply chain visibility and tracking.",
        list: ["Fleet tracking", "Route optimization", "Warehouse management", "Dispatch scheduling"],
        image: logisticImg
      },
      {
        icon: <FaTruck className="w-8 h-8" />,
        title: "Transport Management",
        description: "Comprehensive transportation software for fleet and driver management.",
        list: ["Vehicle maintenance", "Fuel tracking", "Driver logs", "Trip management"],
        image: transportImg
      },
      {
        icon: <FaPlane className="w-8 h-8" />,
        title: "Tours & Travels Software",
        description: "Booking and itinerary management tools for travel agencies and operators.",
        list: ["Itinerary builder", "Booking engine", "Agent portals", "Expense tracking"],
        image: toursImg
      },
      {
        icon: <FaTasks className="w-8 h-8" />,
        title: "Project Management Software",
        description: "Agile project tracking and team collaboration software.",
        list: ["Task assignment", "Time tracking", "Gantt charts", "Document sharing"],
        image: projectMgmtImg
      }
    ],
    technologies: [
      { name: "Python", icon: <FaCode /> },
      { name: "Java", icon: <FaCode /> },
      { name: "C#/.NET", icon: <FaDesktop /> },
      { name: "React", icon: <FaCode /> },
      { name: "Node.js", icon: <FaCode /> },
      { name: "PostgreSQL", icon: <FaDatabase /> },
      { name: "Docker", icon: <FaCloud /> },
      { name: "AWS", icon: <FaCloud /> },
    ],
    whyUs: [
      { value: "5+", label: "Years in Custom Dev" },
      { value: "200+", label: "Software Delivered" },
      { value: "100%", label: "Source Code Ownership" },
      { value: "50+", label: "Enterprise Clients" }
    ]
  };

  const caseStudies = [
    { title: "Logistics Management System", description: "Built a custom ERP handling 10,000+ daily shipments", result: "Improved delivery times by 25%", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" },
    { title: "Hospital Management Platform", description: "Developed a secure portal for patient records and billing", result: "Reduced administrative overhead by 40%", image: app }
  ];

  const valueDelivered = [
    {
      title: "Tailored Architecture",
      desc: "Reduces operating costs by 40% through custom-built automation.",
      metric: "40%",
      label: "Cost Reduction"
    },
    {
      title: "High Availability",
      desc: "Achieved 99.9% uptime with robust backend infrastructures.",
      metric: "99.9%",
      label: "Uptime"
    },
    {
      title: "Workflow Efficiency",
      desc: "Improved employee productivity by 85% with intuitive internal tools.",
      metric: "85%",
      label: "Productivity"
    },
    {
      title: "Rapid Deployment",
      desc: "Reduced deployment cycles by 60% using Agile methodologies.",
      metric: "60%",
      label: "Faster Delivery"
    }
  ];

  return (
    <ServiceTemplate data={data} ref={ref}>
      <div className="section-padding bg-surface border-t border-outline-variant/30">
        <div className="container-custom">
          <SectionHeader eyebrow="Success Stories" title="Case Studies" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-secondary-50 border border-outline-variant/60 rounded-md overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col group">
                <div className="relative h-64 overflow-hidden">
                  <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-primary-900 from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{caseStudy.title}</h3>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-on-surface-variant flex-1 mb-6 text-lg">{caseStudy.description}</p>
                  <div className="bg-primary-container text-on-primary-container px-6 py-4 rounded-md border border-primary/20">
                    <strong className="block text-sm uppercase tracking-wider mb-1 opacity-80">Result</strong>
                    <span className="font-semibold text-lg">{caseStudy.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

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

export default CustomSoftware;
