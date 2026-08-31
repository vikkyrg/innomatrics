import React, { forwardRef } from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import SectionHeader from "../components/SectionHeader";
import {
  FaPlug,
  FaSyncAlt,
  FaShoppingCart,
  FaLock,
  FaMobile,
  FaDesktop,
  FaRocket,
  FaBuilding,
  FaUsers,
  FaCogs,
  FaChartLine,
  FaShieldAlt,
  FaDatabase,
  FaCloud,
  FaCode,
} from "react-icons/fa";

import heroImgNew from "../../../assets/new_category_images/ApiIntegration_hero.jpg";

import restApiDevelopmentImg from "../../../assets/webServices/REST API Development.jpg";
import apiIntegrationImg from "../../../assets/webServices/API Integration.jpg";
import paymentGatewayIntegrationImg from "../../../assets/webServices/Payment Gateway Integration.jpg";
import razorpayIntegrationImg from "../../../assets/webServices/Razorpay Integration.jpg";
import whatsappApiImg from "../../../assets/webServices/WhatsApp API.jpg";
import smsGatewayImg from "../../../assets/webServices/SMS Gateway.jpg";
import emailApiImg from "../../../assets/webServices/Email API.jpg";
import shippingApiImg from "../../../assets/webServices/transport.jpg";
import busBookingApiImg from "../../../assets/webServices/Bus Booking API.jpg";
import hotelBookingApiImg from "../../../assets/webServices/Hotel Booking API.jpg";
import accountingSoftwareIntegrationImg from "../../../assets/webServices/Accounting Software Integration.jpg";
import governmentEnterpriseApiIntegrationImg from "../../../assets/webServices/GovernmentEnterprise API Integration.jpg";

const ApiIntegration = forwardRef((props, ref) => {
  const data = {
    breadcrumbTitle: "API & Third-Party Integration",
    title: "API & Third-Party Integration",
    heroDescription: "Seamlessly connect your systems and third-party tools to streamline data flow and operations.",
    heroImage: heroImgNew,
    primaryCTA: "Discuss Your APIs",
    primaryLink: "/contact",
    overview: {
      title: "Connect and Automate Your Systems",
      description: "We build secure, high-performance APIs and integrate third-party services to ensure your software ecosystem communicates flawlessly. From payment gateways to complex ERP integrations, we connect the tools you rely on."
    },
    services: [
      {
        icon: <FaPlug className="w-8 h-8" />,
        title: "REST API Development",
        description: "Custom, secure, and scalable RESTful APIs to power your applications.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: restApiDevelopmentImg
      },
      {
        icon: <FaSyncAlt className="w-8 h-8" />,
        title: "API Integration",
        description: "Seamless integration of third-party APIs into your existing software ecosystem.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: apiIntegrationImg
      },
      {
        icon: <FaShoppingCart className="w-8 h-8" />,
        title: "Payment Gateway Integration",
        description: "Secure connections to global payment processors like Stripe, PayPal, and Razorpay.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: paymentGatewayIntegrationImg
      },
      {
        icon: <FaLock className="w-8 h-8" />,
        title: "Razorpay Integration",
        description: "Specialized implementation of Razorpay for seamless Indian payment processing.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: razorpayIntegrationImg
      },
      {
        icon: <FaMobile className="w-8 h-8" />,
        title: "WhatsApp API",
        description: "Automate messaging, notifications, and customer support directly through WhatsApp.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: whatsappApiImg
      },
      {
        icon: <FaMobile className="w-8 h-8" />,
        title: "SMS Gateway",
        description: "Integrate robust SMS delivery systems for OTPs, alerts, and marketing.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: smsGatewayImg
      },
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "Email API",
        description: "Reliable transactional and marketing email integrations using SendGrid, AWS SES, etc.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: emailApiImg
      },
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "Google Maps Integration",
        description: "Embed interactive maps, geolocation, and routing capabilities into your apps.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaRocket className="w-8 h-8" />,
        title: "Shipping API",
        description: "Automate logistics with direct integrations to major shipping carriers.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: shippingApiImg
      },
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "Bus Booking API",
        description: "Connect with bus aggregators to enable seamless ticket booking on your platform.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: busBookingApiImg
      },
      {
        icon: <FaBuilding className="w-8 h-8" />,
        title: "Hotel Booking API",
        description: "Integrate global hotel inventory and reservation systems directly into your app.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: hotelBookingApiImg
      },
      {
        icon: <FaUsers className="w-8 h-8" />,
        title: "CRM Integration",
        description: "Sync your software with leading CRMs like Salesforce, HubSpot, and Zoho.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaCogs className="w-8 h-8" />,
        title: "ERP Integration",
        description: "Connect your front-end systems with complex backend Enterprise Resource Planning software.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaChartLine className="w-8 h-8" />,
        title: "Accounting Software Integration",
        description: "Automate financial data flow with Tally, QuickBooks, or Xero integrations.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: accountingSoftwareIntegrationImg
      },
      {
        icon: <FaShieldAlt className="w-8 h-8" />,
        title: "Government/Enterprise API Integration",
        description: "Secure integration with official enterprise or government digital infrastructure.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: governmentEnterpriseApiIntegrationImg
      }
    ],
    technologies: [
      { name: "REST APIs", icon: <FaCode /> },
      { name: "GraphQL", icon: <FaDatabase /> },
      { name: "SOAP", icon: <FaCode /> },
      { name: "Postman", icon: <FaDesktop /> },
      { name: "Swagger", icon: <FaCode /> },
      { name: "Node.js", icon: <FaCogs /> },
      { name: "MuleSoft", icon: <FaCloud /> },
      { name: "OAuth 2.0", icon: <FaLock /> },
    ],
    whyUs: [
      { value: "100+", label: "Enterprise APIs Built" },
      { value: "200+", label: "Systems Integrated" },
      { value: "99.9%", label: "Success Rate" },
      { value: "50+", label: "Third-party APIs" }
    ]
  };

  const valueDelivered = [
    {
      title: "System Sync",
      desc: "Reduced data silos by 100%, syncing CRM, ERP, and web apps instantly.",
      metric: "100%",
      label: "Data Sync"
    },
    {
      title: "API Performance",
      desc: "Optimized endpoint latency down to sub-50 milliseconds.",
      metric: "<50ms",
      label: "API Latency"
    },
    {
      title: "Automation",
      desc: "Automated 80% of manual data entry tasks via direct API connections.",
      metric: "80%",
      label: "Manual Work Saved"
    },
    {
      title: "Uptime",
      desc: "Maintained 99.99% availability on high-throughput microservices.",
      metric: "99.99%",
      label: "API Uptime"
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

export default ApiIntegration;
