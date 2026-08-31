import React, { forwardRef } from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import SectionHeader from "../components/SectionHeader";
import {
  FaCloud,
  FaUsers,
  FaSyncAlt,
  FaDesktop,
  FaMobile,
  FaShoppingCart,
  FaBuilding,
  FaLock,
  FaPlug,
} from "react-icons/fa";

import heroImg from "../../../assets/services_hero/hero_saas_product.png";

import saas1 from "../../../assets/saasServices/saas_1.webp";
import saas2 from "../../../assets/saasServices/saas_2.webp";
import saas4 from "../../../assets/saasServices/saas_4.webp";
import saas5 from "../../../assets/saasServices/saas_5.webp";
import saas6 from "../../../assets/saasServices/saas_6.webp";
import saas8 from "../../../assets/saasServices/saas_8.webp";
import saas9 from "../../../assets/saasServices/saas_9.webp";

import tenantMgmtImg from "../../../assets/webServices/Tenant Management.jpg";
import subSoftwareImg from "../../../assets/webServices/Subscription-Based Software.jpg";
import cloudPlatformImg from "../../../assets/webServices/Cloud-Based Business Platforms.jpg";

const SaaSProduct = forwardRef((props, ref) => {
  const data = {
    breadcrumbTitle: "SaaS Product Development",
    title: "SaaS Product Development Services",
    heroDescription: "Build, scale & automate your modern SaaS business with our powerful development expertise.",
    heroImage: heroImg,
    primaryCTA: "Discuss Your SaaS Vision",
    primaryLink: "/contact",
    overview: {
      title: "Launch Your SaaS Vision with Innomatrics",
      description: "We provide comprehensive SaaS product development services, from MVP to fully scalable enterprise platforms. We focus on multi-tenant architecture, secure subscriptions, and high-performance user experiences."
    },
    services: [
      {
        icon: <FaCloud className="w-8 h-8" />,
        title: "SaaS Application Development",
        description: "End-to-end development of scalable, multi-tenant software-as-a-service platforms.",
        list: ["Multi-tenant architecture", "Microservices", "High availability", "Cloud deployment"],
        image: saas1
      },
      {
        icon: <FaUsers className="w-8 h-8" />,
        title: "Multi-Tenant SaaS",
        description: "Architecture designed to serve multiple customers from a single shared instance.",
        list: ["Data Isolation", "Resource Pooling", "Custom Branding", "Scalability"],
        image: saas2
      },
      {
        icon: <FaSyncAlt className="w-8 h-8" />,
        title: "Subscription-Based Software",
        description: "Software platforms powered by recurring subscription models and billing.",
        list: ["Plan Management", "Trial Periods", "Automated Billing", "Upgrade paths"],
        image: subSoftwareImg
      },
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "SaaS Admin Panels",
        description: "Intuitive dashboards for administrators to monitor platform health and metrics.",
        list: ["Real-time metrics", "Revenue tracking", "System health monitoring", "User support tools"],
        image: saas4
      },
      {
        icon: <FaMobile className="w-8 h-8" />,
        title: "SaaS Mobile Apps",
        description: "Companion mobile applications for your SaaS platform to enable on-the-go access.",
        list: ["Cross-platform sync", "Push notifications", "Offline capabilities", "Biometric security"],
        image: saas5
      },
      {
        icon: <FaShoppingCart className="w-8 h-8" />,
        title: "Payment & Subscription Integration",
        description: "Seamless implementation of recurring billing and payment gateways.",
        list: ["Stripe/PayPal", "Tiered pricing", "Usage-based billing", "Invoice automation"],
        image: saas6
      },
      {
        icon: <FaBuilding className="w-8 h-8" />,
        title: "Tenant Management",
        description: "Robust admin portals for managing organizations and client instances.",
        list: ["Tenant Provisioning", "Usage Analytics", "Data Export", "Account Suspension"],
        image: tenantMgmtImg
      },
      {
        icon: <FaLock className="w-8 h-8" />,
        title: "Role-Based Access",
        description: "Granular security permissions for complex organizational hierarchies.",
        list: ["RBAC", "Custom Permissions", "Audit Logs", "SSO Integration"],
        image: saas8
      },
      {
        icon: <FaPlug className="w-8 h-8" />,
        title: "SaaS API Development",
        description: "Secure and well-documented APIs to allow external integrations with your product.",
        list: ["REST/GraphQL APIs", "Rate limiting", "API keys management", "Developer documentation"],
        image: saas9
      },
      {
        icon: <FaCloud className="w-8 h-8" />,
        title: "Cloud-Based Business Platforms",
        description: "Comprehensive web platforms that digitize entire business operations.",
        list: ["High Availability", "Auto-scaling", "Disaster Recovery", "Global CDN"],
        image: cloudPlatformImg
      }
    ],
    whyUs: [
      { value: "30+", label: "SaaS Platforms Built" },
      { value: "50+", label: "Enterprise Clients" },
      { value: "99.9%", label: "Platform Uptime" },
      { value: "100k+", label: "End Users Supported" }
    ]
  };

  const valueDelivered = [
    {
      title: "Multi-Tenant Architecture",
      desc: "Reduced infrastructure costs by 60% with isolated tenant databases.",
      metric: "60%",
      label: "Cost Savings"
    },
    {
      title: "Scalable Performance",
      desc: "Maintains sub-second response times even with 10,000+ concurrent users.",
      metric: "99%",
      label: "Performance"
    },
    {
      title: "User Onboarding",
      desc: "Increased SaaS trial conversions by 45% with frictionless UX.",
      metric: "45%",
      label: "Conversion Rate"
    },
    {
      title: "Rapid Go-to-Market",
      desc: "Launched MVPs 3x faster using our proprietary SaaS boilerplates.",
      metric: "3x",
      label: "Faster MVP"
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

export default SaaSProduct;
