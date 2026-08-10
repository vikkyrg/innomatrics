const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/WebDev.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const regex = /const services = \[[\s\S]*?title: "Web Security Solutions",[\s\S]*?description:[\s\S]*?"Comprehensive security measures to protect your web assets.",[\s\S]*?image: ws1,\s*\},/i;

const correctStart = `const services = [
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
    },`;

content = content.replace(regex, correctStart);

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Syntax error fixed and Web Security image swapped!");
