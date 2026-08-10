import React, { forwardRef, useEffect, useState } from "react";
import app from "../../../assets/webDevelopment.jpg";
import app2 from "../../../assets/app3.png";
import w1 from "../../../assets/webServices/w1.jpg";
import w2 from "../../../assets/webServices/w2.jpg";
import w3 from "../../../assets/webServices/w3.jpg";
import w4 from "../../../assets/webServices/w4.webp";
import w5 from "../../../assets/webServices/w5.jpg";
import w6 from "../../../assets/webServices/w6.jpg";
import w7 from "../../../assets/webServices/w7.jpg";
import w8 from "../../../assets/webServices/w8.jpg";
import w9 from "../../../assets/webServices/w9.jpg";
import w10 from "../../../assets/webServices/w10.jpg";
import w11 from "../../../assets/webServices/w11.jpg";
import w12 from "../../../assets/webServices/w12.jpg";
import w13 from "../../../assets/webServices/w13.jpg";
import w14 from "../../../assets/webServices/w14.jpg";
import w15 from "../../../assets/webServices/w15.jpg";
import w16 from "../../../assets/webServices/w16.jpg";
import w17 from "../../../assets/webServices/w17.jpg";
import w18 from "../../../assets/webServices/w18.jpg";
import { FaCheckCircle, FaSyncAlt, FaPlug } from "react-icons/fa";
import "./WebDev.css";
import { Link } from "react-router-dom";
import {
  FaCode, FaDesktop, FaMobile, FaShoppingCart, FaDatabase, FaCloud,
  FaLock, FaChartLine, FaUsers, FaShieldAlt, FaRocket, FaLightbulb,
  FaBuilding, FaCogs, FaStore, FaCalendarAlt, FaBullseye, FaPaintBrush, FaTools
} from "react-icons/fa";
import {
  FaReact, FaNodeJs, FaAngular, FaVuejs, FaPhp, FaPython
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiNextdotjs, SiLaravel, SiWordpress } from "react-icons/si";
import ws1 from "../../../assets/appServices/customDev.jpg";
import ws2 from "../../../assets/appServices/strategicPlanApp.jpg";
import ws3 from "../../../assets/appServices/flat-cms-web-template_23-2148825194.avif";
import ws4 from "../../../assets/logoDesService/l1.jpg";
import ws5 from "../../../assets/logoDesService/l2.avif";
import ws6 from "../../../assets/logoDesService/l3.avif";
import ws7 from "../../../assets/logoDesService/l4.jpg";
import ws8 from "../../../assets/logoDesService/l5.avif";
import ws9 from "../../../assets/appServices/online-shopping-concept-landing-page_23-2148253518.avif";
import ws10 from "../../../assets/appServices/usercentric.webp";
import ws11 from "../../../assets/appServices/crossPlatform.png";
import ws12 from "../../../assets/digitalMarketing/d1.jpg";
import ws13 from "../../../assets/digitalMarketing/d3.avif";
import ws14 from "../../../assets/appServices/maintainenece.jpg";
import ws15 from "../../../assets/appServices/qualityTest.png";


const ServicesCard = ({ title, description, image, imageComponent }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 m-4 flex-1 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100 flex flex-col">
    {imageComponent ? (
      <div className="w-full h-40 mb-6 rounded-xl flex items-center justify-center overflow-hidden shadow-inner relative group">
        {imageComponent}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    ) : (
      <img src={image} className="w-full h-40 object-cover rounded-xl mb-6" alt={title} />
    )}
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const WebDev = forwardRef((props, ref) => {
  const [hoveredService, setHoveredService] = useState(null);
  const technologies = [
    { name: "React", icon: <FaReact className="text-blue-600 text-2xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-blue-600 text-2xl" /> },
    { name: "Angular", icon: <FaAngular className="text-blue-600 text-2xl" /> },
    { name: "Vue.js", icon: <FaVuejs className="text-blue-600 text-2xl" /> },
    { name: "PHP/Laravel", icon: <FaPhp className="text-blue-600 text-2xl" /> },
    { name: "Python/Django", icon: <FaPython className="text-blue-600 text-2xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-blue-600 text-2xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600 text-2xl" /> },
  ];

  const services = [
    {
      icon: <FaDesktop className="w-8 h-8 text-blue-600" />,
      title: "Custom Web Application Development",
      description:
        "Tailored web solutions built from scratch to meet your unique business requirements.",
      features: [
        "Scalable architecture",
        "Custom functionality",
        "Third-party integrations",
        "API development",
        "Performance optimization",
      ],
      image: w1,
    },
    {
      icon: <FaShoppingCart className="w-8 h-8 text-blue-600" />,
      title: "E-Commerce Development",
      description:
        "Robust online stores with seamless shopping experiences and secure payment processing.",
      features: [
        "Shopping cart development",
        "Payment gateway integration",
        "Inventory management",
        "Order processing system",
        "Customer account management",
      ],
      image: w2,
    },
    {
      icon: <FaDatabase className="w-8 h-8 text-blue-600" />,
      title: "Enterprise Solutions",
      description:
        "Large-scale web applications for enterprise-level business operations.",
      features: [
        "ERP systems",
        "CRM integration",
        "Business process automation",
        "Data analytics",
        "Reporting tools",
      ],
      image: w3,
    },
    {
      icon: <FaCloud className="w-8 h-8 text-blue-600" />,
      title: "Cloud Solutions",
      description:
        "Cloud-based web applications with high availability and scalability.",
      features: [
        "AWS/Azure integration",
        "Cloud deployment",
        "Load balancing",
        "Auto-scaling",
        "Disaster recovery",
      ],
      image: w4,
    },
    {
      icon: <FaUsers className="w-8 h-8 text-blue-600" />,
      title: "CMS Development",
      description:
        "Custom content management systems for easy website management.",
      features: [
        "WordPress customization",
        "Headless CMS solutions",
        "Custom admin panels",
        "Multi-user access control",
        "SEO-friendly architecture",
      ],
      image: w5,
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-blue-600" />,
      title: "Web Security Solutions",
      description:
        "Comprehensive security measures to protect your web assets.",
      features: [
        "SSL implementation",
        "Firewall configuration",
        "DDoS protection",
        "Security audits",
        "Compliance consulting",
      ],
      image: ws1,
    },
    {
      icon: <FaBuilding className="w-8 h-8 text-blue-600" />,
      title: "Corporate Website Development",
      description: "Professional, scalable, and secure websites tailored for large-scale corporate enterprises.",
      features: ["Brand integration", "Scalable architecture", "Enterprise security", "Content management", "Analytics integration"],
      image: w6,
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-blue-600" />,
      title: "Business Website Development",
      description: "Conversion-focused websites designed to generate leads and grow your business footprint.",
      features: ["Lead generation", "Mobile responsive", "SEO optimized", "Fast loading", "CRM integration"],
      image: w7,
    },
    {
      icon: <FaCode className="w-8 h-8 text-blue-600" />,
      title: "WordPress Development",
      description: "Custom WordPress themes and plugins for dynamic, easy-to-manage content platforms.",
      features: ["Custom themes", "Plugin development", "Performance tuning", "Security hardening", "Migration services"],
      image: w8,
    },
    {
      icon: <FaPhp className="w-8 h-8 text-blue-600" />,
      title: "Custom PHP Development",
      description: "Robust back-end systems and web applications built using advanced PHP frameworks.",
      features: ["MVC architecture", "RESTful APIs", "Database optimization", "Legacy system upgrades", "Secure coding"],
      image: w9,
    },
    {
      icon: <FaReact className="w-8 h-8 text-blue-600" />,
      title: "React.js Development",
      description: "High-performance, interactive single-page applications built with React.",
      features: ["SPAs", "Component reusability", "State management", "Fast rendering", "Interactive UIs"],
      image: w10,
    },
    {
      icon: <FaReact className="w-8 h-8 text-blue-600" />,
      title: "Next.js Development",
      description: "SEO-friendly, server-side rendered React applications using Next.js.",
      features: ["Server-Side Rendering", "Static Site Generation", "API Routes", "SEO optimization", "Fast performance"],
      image: w11,
    },
    {
      icon: <FaPhp className="w-8 h-8 text-blue-600" />,
      title: "Laravel Development",
      description: "Elegant and scalable web applications powered by the Laravel PHP framework.",
      features: ["Eloquent ORM", "Blade templating", "Authentication setup", "API integration", "Automated testing"],
      image: w12,
    },
    {
      icon: <FaNodeJs className="w-8 h-8 text-blue-600" />,
      title: "Node.js Development",
      description: "Fast, scalable, and real-time backend services using Node.js.",
      features: ["Real-time apps", "Microservices", "REST APIs", "Socket.io", "High concurrency"],
      image: w13,
    },
    {
      icon: <FaShoppingCart className="w-8 h-8 text-blue-600" />,
      title: "E-Commerce Website Development",
      description: "Custom online stores that provide seamless shopping experiences and secure checkouts.",
      features: ["Shopping cart", "Payment gateways", "Product management", "Order tracking", "Mobile commerce"],
      image: w14,
    },
    {
      icon: <FaShoppingCart className="w-8 h-8 text-blue-600" />,
      title: "Multi-Vendor E-Commerce",
      description: "Robust marketplace platforms allowing multiple vendors to sell their products in one place.",
      features: ["Vendor dashboards", "Commission management", "Storefronts", "Unified checkout", "Admin panel"],
      image: w15,
    },
    {
      icon: <FaDesktop className="w-8 h-8 text-blue-600" />,
      title: "Booking & Reservation Websites",
      description: "Streamlined booking systems for hotels, events, clinics, and service providers.",
      features: ["Calendar integration", "Availability checks", "Online payments", "Automated reminders", "User profiles"],
      image: w16,
    },
    {
      icon: <FaUsers className="w-8 h-8 text-blue-600" />,
      title: "Portal Development",
      description: "Secure web portals for B2B, B2C, patient, or employee management.",
      features: ["Role-based access", "Data visualization", "Secure login", "Document management", "Internal communication"],
      image: w17,
    },
    {
      icon: <FaDesktop className="w-8 h-8 text-blue-600" />,
      title: "Landing Page Development",
      description: "High-converting, visually striking landing pages for campaigns and product launches.",
      features: ["A/B testing", "Call-to-action optimization", "Analytics setup", "Fast loading", "Mobile responsiveness"],
      image: w18,
    },
    {
      icon: <FaSyncAlt className="w-8 h-8 text-blue-600" />,
      title: "Website Redesign",
      description: "Modernize your existing website with improved UI/UX and better performance.",
      features: ["UI/UX overhaul", "Performance improvements", "Content migration", "Responsive design", "SEO retention"],
      image: ws14,
    },
    {
      icon: <FaCogs className="w-8 h-8 text-blue-600" />,
      title: "Website Maintenance",
      description: "Ongoing support, security updates, and performance optimization for your web assets.",
      features: ["Security patches", "Uptime monitoring", "Content updates", "Bug fixing", "Monthly reports"],
      image: ws15,
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description:
        "We begin by thoroughly understanding your business needs, target audience, and project goals through our comprehensive discovery process.",
      icon: <FaLightbulb className="text-blue-600 w-6 h-6" />,
    },
    {
      number: "02",
      title: "Planning & Architecture",
      description:
        "Our team designs the technical architecture and creates a detailed project roadmap with milestones and deliverables.",
      icon: <FaChartLine className="text-blue-600 w-6 h-6" />,
    },
    {
      number: "03",
      title: "UI/UX Design",
      description:
        "We craft intuitive user interfaces and engaging user experiences that drive conversions and user satisfaction.",
      icon: <FaDesktop className="text-blue-600 w-6 h-6" />,
    },
    {
      number: "04",
      title: "Development",
      description:
        "We implement the solution using modern technologies and best practices in web development with clean, maintainable code.",
      icon: <FaCode className="text-blue-600 w-6 h-6" />,
    },
    {
      number: "05",
      title: "Testing & QA",
      description:
        "Rigorous testing ensures your application is bug-free, secure, and performs optimally across all devices and browsers.",
      icon: <FaShieldAlt className="text-blue-600 w-6 h-6" />,
    },
    {
      number: "06",
      title: "Deployment & Support",
      description:
        "We handle the deployment process and provide ongoing support and maintenance to keep your application running smoothly.",
      icon: <FaRocket className="text-blue-600 w-6 h-6" />,
    },
  ];

  // Map service titles to their corresponding images
  const serviceImages = {
    'default': app2,
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.image }), {})
  };

  const serviceDescriptions = {
    'default': "Reduce the time it takes for business ideas to become reality in production applications. We'll help you define, design, enhance, develop and maintain applications to meet your specific business requirements.",
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.description }), {})
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50" ref={ref}>
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://t4.ftcdn.net/jpg/04/66/61/61/360_F_466616169_GOalqLI5SpJj7E6mwEAkhFEw5JO8Ezps.jpg')",
          }}
        ></div>
        <div className="absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mt-16">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-8 text-left">
              Web Development Services
            </h1>
            <p className="text-xl text-white max-w-1xl mt-2 text-left">
              Innomatrics Tech delivers cutting-edge web solutions that drive business growth and digital transformation.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Paragraph */}
          <div className="mb-20 px-4 md:px-4">
            <h2 className="text-xl font-bold text-orange-600 mb-4">OVERVIEW</h2>
            <p className="text-lg text-gray-900 leading-relaxed">
              At Innomatrics, we understand the pace of today's digital
              transformation. Businesses must rapidly innovate to meet customer
              demands, reduce technical debt, modernize legacy systems, and stay
              ahead with emerging technologies. digital transformation.Businesses must be innovative
              <br />
              Our team brings together deep technical expertise, domain
              knowledge, and hands-on experience to deliver scalable, secure,
              and reliable software solutions. Whether it's full-stack web
              development, custom enterprise applications, or cloud-native
              services — we build with performance, flexibility, and
              future-readiness in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-6">OUR OFFERINGS</h3>
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                {services.map(s => s.title).map((service) => (
                  <div 
                    key={service}
                    onMouseEnter={() => setHoveredService(service)}
                    onMouseLeave={() => setHoveredService(null)}
                    className="group"
                  >
                    <h4 className="text-lg font-semibold text-gray-700 cursor-pointer group-hover:text-red-500 transition-colors duration-300">
                      {service}
                    </h4>
                  </div>
                ))}

                <p className="text-gray-600 mt-6">
                  Leverage digital technologies to fundamentally change how you operate and deliver value to customers. 
                  Embrace digital transformation to enhance your agility, creativity, and decision-making capabilities 
                  while improving growth opportunities.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src={serviceImages[hoveredService || 'default']}
                alt={hoveredService ? `${hoveredService} Services` : "Web Development Services"}
                className="rounded-lg shadow-xl w-full object-cover transition-opacity duration-500"
                style={{ height: '500px' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-lg">
                  {serviceDescriptions[hoveredService || 'default']}
                </p>
              </div>
            </div>
          </div>

          {/* Value Delivered Section */}
          <div className="w-full px-4 py-16 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-xl font-bold text-orange-500 mb-4">VALUE DELIVERED</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-12">
                Engineering excellence with<br />real-world impact
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Tech's Custom Software Solution</h4>
                    <p className="text-blue-100 mb-4">
                      Reduces Operating Costs by 40% through automation and streamlined workflows, improving efficiency across departments.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">40%</span>
                      <span className="text-sm">Cost Reduction</span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Technical Expertise</h4>
                    <p className="text-blue-100 mb-4">
                      Achieved 99.9% uptime and significant performance improvements through optimized architecture and robust monitoring.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">99.9%</span>
                      <span className="text-sm">Uptime</span>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Enhanced User Experience</h4>
                    <p className="text-blue-100 mb-4">
                      Improved user satisfaction by 85% with intuitive interfaces and faster page load times across all devices.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">85%</span>
                      <span className="text-sm">User Satisfaction</span>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Accelerated Development</h4>
                    <p className="text-blue-100 mb-4">
                      Reduced development time by 60% using our proven frameworks and automated testing procedures.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">60%</span>
                      <span className="text-sm">Faster Delivery</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Stats Section */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">100+</div>
                  <div className="text-gray-600 mt-2">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">95%</div>
                  <div className="text-gray-600 mt-2">Client Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600 mt-2">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600 mt-2">Expert Developers</div>
                </div>
              </div>
            </div>
          </div>

          {/* The Infinite Difference Section */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side */}
            <div>
              <h2 className="text-xl font-bold text-orange-500 mb-4">THE INNOMATRICS DIFFERENCE</h2>
              <h3 className="text-4xl font-bold text-gray-800 mb-8">
                Innovative solutions & enhanced business value
              </h3>
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                  alt="Innomatrics Tech Professional"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Industry Recognition</h2>
                <p className="text-lg text-gray-800">
                  Innomatrics Tech is recognized as an emerging leader in Next-Generation Software Development and Enterprise Solutions, delivering cutting-edge technology services since 2023.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Digital Innovation</h2>
                <p className="text-lg text-gray-800">
                  Creating sophisticated applications with cross-platform compatibility to deliver seamless user experiences across all devices - web, mobile, and desktop, ensuring accessibility anywhere, anytime
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Technology Assets</h2>
                <p className="text-lg text-gray-800">
                  Innomatrics Tech maintains a comprehensive suite of proprietary tools, frameworks, and accelerators to optimize development efficiency and ensure robust, scalable solutions
                </p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
            {/* Left Image */}
            

            {/* Right Content */}
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-red-600 mb-4">
                Transform Your Digital Presence with Innomatrics
              </h2>
              <div className="w-24 h-1 bg-blue-600 mb-6"></div>
              <p className="text-xl  text-gray-600">
                At Innomatrics Tech, we specialize in building high-performance web
                applications that deliver exceptional user experiences and measurable
                business results. With over a decade of experience, our team of certified
                developers creates solutions that are scalable, secure, and tailored to
                your specific needs.
              </p>
            </div>
            <div className="w-full mt-16 md:w-1/2">
              <img
                src="https://www.shutterstock.com/image-photo/online-presence-concept-digital-channels-600nw-2442404275.jpg"
                alt="Innomatrics Digital Solutions"
                className="w-full h-72 rounded-lg shadow-md"
              />
            </div>
          </div>

                            
          {/* Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
              Our Comprehensive Web Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
                >
                  {service.imageComponent ? (
                    <div className="w-full h-48 flex items-center justify-center overflow-hidden relative group">
                      {service.imageComponent}
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  ) : (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <svg
                            className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Why Choose Innomatrics */}
          <div className="mb-20 bg-blue-900 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Innomatrics?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-xl">Years in Web Development</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-xl">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-xl">Certified Developers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-xl">Client Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Ready to Build Your Web Solution?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Let's discuss how Innomatrics Tech can help you achieve your digital
              goals with our expert web development services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-md"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default WebDev;