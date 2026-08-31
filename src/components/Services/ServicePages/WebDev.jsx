import React, { forwardRef, useEffect } from "react";
import {
  FaDesktop, FaShoppingCart, FaDatabase, FaCloud,
  FaUsers, FaShieldAlt
} from "react-icons/fa";
import {
  FaReact, FaNodeJs, FaAngular, FaVuejs, FaPhp, FaPython
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiNextdotjs, SiLaravel, SiWordpress } from "react-icons/si";

// Components
import ServiceHero from "../components/ServiceHero";
import SectionHeader from "../components/SectionHeader";
import FeatureGrid from "../components/FeatureGrid";
import TechStack from "../components/TechStack";
import ProcessTimeline from "../components/ProcessTimeline";
import CTASection from "../components/CTASection";

// Data
import ws1 from "../../../assets/appServices/customDev.jpg";

const WebDev = forwardRef((props, ref) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const services = [
    {
      icon: <FaDesktop className="w-8 h-8" />,
      title: "Custom Web Application Development",
      description: "Tailored web solutions built from scratch to meet your unique business requirements.",
      list: ["Scalable architecture", "Custom functionality", "Third-party integrations", "API development"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
    },
    {
      icon: <FaShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Development",
      description: "Robust online stores with seamless shopping experiences and secure payment processing.",
      list: ["Shopping cart development", "Payment gateway integration", "Inventory management"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop",
    },
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: "Enterprise Solutions",
      description: "Large-scale web applications for enterprise-level business operations.",
      list: ["ERP systems", "CRM integration", "Business process automation"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    },
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Cloud-based web applications with high availability and scalability.",
      list: ["AWS/Azure integration", "Cloud deployment", "Load balancing", "Auto-scaling"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "CMS Development",
      description: "Custom content management systems for easy website management.",
      list: ["WordPress customization", "Headless CMS solutions", "Custom admin panels"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Web Security Solutions",
      description: "Comprehensive security measures to protect your web assets.",
      list: ["SSL implementation", "Firewall configuration", "DDoS protection"],
      image: ws1,
    }
  ];

  const technologies = [
    { name: "React.js", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Angular", icon: <FaAngular /> },
    { name: "Vue.js", icon: <FaVuejs /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Laravel", icon: <SiLaravel /> },
    { name: "Python", icon: <FaPython /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "AWS", icon: <FaCloud /> },
    { name: "WordPress", icon: <SiWordpress /> }
  ];

  const processSteps = [
    {
      title: "Discovery & Planning",
      description: "We analyze your business requirements, target audience, and competitors to create a comprehensive project roadmap.",
      deliverables: ["Requirements Document", "Project Timeline", "Technical Architecture"]
    },
    {
      title: "UI/UX Design",
      description: "Our designers create intuitive, engaging interfaces focusing on user journey and conversion optimization.",
      deliverables: ["Wireframes", "High-fidelity Prototypes", "Design System"]
    },
    {
      title: "Development & Integration",
      description: "Agile development sprints to build your solution, ensuring scalable architecture and clean code practices.",
      deliverables: ["Frontend App", "Backend Services", "API Integrations"]
    },
    {
      title: "Testing & QA",
      description: "Rigorous testing across devices and browsers to ensure security, performance, and reliability.",
      deliverables: ["QA Report", "Performance Metrics", "Security Audit"]
    },
    {
      title: "Deployment & Support",
      description: "Smooth deployment to production and ongoing maintenance to keep your application running flawlessly.",
      deliverables: ["Live Application", "Documentation", "Support SLA"]
    }
  ];

  return (
    <div className="bg-white" ref={ref}>
      <ServiceHero 
        breadcrumbTitle="Web Development"
        title="Web Development Services"
        description="Innomatrics Tech delivers cutting-edge web solutions that drive business growth and digital transformation."
        backgroundImage="https://t4.ftcdn.net/jpg/04/66/61/61/360_F_466616169_GOalqLI5SpJj7E6mwEAkhFEw5JO8Ezps.jpg"
      />

      <div className="section-padding">
        <div className="container-custom">
          <SectionHeader 
            eyebrow="Overview"
            title="Transform Your Digital Presence"
            description="At Innomatrics Tech, we specialize in building high-performance web applications that deliver exceptional user experiences and measurable business results. With over a decade of experience, our team of certified developers creates solutions that are scalable, secure, and tailored to your specific needs."
          />
        </div>
      </div>

      <div className="section-padding bg-secondary-50">
        <div className="container-custom">
          <SectionHeader 
            eyebrow="Capabilities"
            title="Our Comprehensive Web Services"
            description="Leverage digital technologies to fundamentally change how you operate and deliver value to customers."
          />
          <FeatureGrid features={services} columns={3} />
        </div>
      </div>

      <ProcessTimeline steps={processSteps} />

      <TechStack technologies={technologies} />

      <div className="section-padding bg-secondary-50 border-b border-secondary-200">
        <div className="container-custom max-w-5xl">
          <SectionHeader 
            eyebrow="Why Us"
            title="Engineering excellence with real-world impact"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-secondary-200">
            <div className="text-center p-8 bg-white border-b border-r border-secondary-200">
              <div className="text-4xl font-extrabold text-primary-900 mb-2 font-mono">5+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-secondary-500">Years in Web Development</div>
            </div>
            <div className="text-center p-8 bg-white border-b border-r border-secondary-200">
              <div className="text-4xl font-extrabold text-primary-900 mb-2 font-mono">150+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-secondary-500">Successful Projects</div>
            </div>
            <div className="text-center p-8 bg-white border-b border-r border-secondary-200">
              <div className="text-4xl font-extrabold text-primary-900 mb-2 font-mono">50+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-secondary-500">Certified Developers</div>
            </div>
            <div className="text-center p-8 bg-white border-b border-r border-secondary-200">
              <div className="text-4xl font-extrabold text-primary-900 mb-2 font-mono">98%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-secondary-500">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
});

export default WebDev;
