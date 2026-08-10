const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/Services/Inno Services/WebDev.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const newServicesString = `,
    {
      icon: <FaBuilding className="w-8 h-8 text-blue-600" />,
      title: "Corporate Website Development",
      description: "Professional, scalable, and secure websites tailored for large-scale corporate enterprises.",
      features: ["Brand integration", "Scalable architecture", "Enterprise security", "Content management", "Analytics integration"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-blue-600" />,
      title: "Business Website Development",
      description: "Conversion-focused websites designed to generate leads and grow your business footprint.",
      features: ["Lead generation", "Mobile responsive", "SEO optimized", "Fast loading", "CRM integration"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <FaCode className="w-8 h-8 text-blue-600" />,
      title: "WordPress Development",
      description: "Custom WordPress themes and plugins for dynamic, easy-to-manage content platforms.",
      features: ["Custom themes", "Plugin development", "Performance tuning", "Security hardening", "Migration services"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <FaPhp className="w-8 h-8 text-blue-600" />,
      title: "Custom PHP Development",
      description: "Robust back-end systems and web applications built using advanced PHP frameworks.",
      features: ["MVC architecture", "RESTful APIs", "Database optimization", "Legacy system upgrades", "Secure coding"],
      image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <FaReact className="w-8 h-8 text-blue-600" />,
      title: "React.js Development",
      description: "High-performance, interactive single-page applications built with React.",
      features: ["SPAs", "Component reusability", "State management", "Fast rendering", "Interactive UIs"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <FaReact className="w-8 h-8 text-blue-600" />,
      title: "Next.js Development",
      description: "SEO-friendly, server-side rendered React applications using Next.js.",
      features: ["Server-Side Rendering", "Static Site Generation", "API Routes", "SEO optimization", "Fast performance"],
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <FaPhp className="w-8 h-8 text-blue-600" />,
      title: "Laravel Development",
      description: "Elegant and scalable web applications powered by the Laravel PHP framework.",
      features: ["Eloquent ORM", "Blade templating", "Authentication setup", "API integration", "Automated testing"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <FaNodeJs className="w-8 h-8 text-blue-600" />,
      title: "Node.js Development",
      description: "Fast, scalable, and real-time backend services using Node.js.",
      features: ["Real-time apps", "Microservices", "REST APIs", "Socket.io", "High concurrency"],
      image: "https://images.unsplash.com/photo-1526040652367-ac003a0475b2?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <FaShoppingCart className="w-8 h-8 text-blue-600" />,
      title: "E-Commerce Website Development",
      description: "Custom online stores that provide seamless shopping experiences and secure checkouts.",
      features: ["Shopping cart", "Payment gateways", "Product management", "Order tracking", "Mobile commerce"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <FaShoppingCart className="w-8 h-8 text-blue-600" />,
      title: "Multi-Vendor E-Commerce",
      description: "Robust marketplace platforms allowing multiple vendors to sell their products in one place.",
      features: ["Vendor dashboards", "Commission management", "Storefronts", "Unified checkout", "Admin panel"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <FaDesktop className="w-8 h-8 text-blue-600" />,
      title: "Booking & Reservation Websites",
      description: "Streamlined booking systems for hotels, events, clinics, and service providers.",
      features: ["Calendar integration", "Availability checks", "Online payments", "Automated reminders", "User profiles"],
      image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <FaUsers className="w-8 h-8 text-blue-600" />,
      title: "Portal Development",
      description: "Secure web portals for B2B, B2C, patient, or employee management.",
      features: ["Role-based access", "Data visualization", "Secure login", "Document management", "Internal communication"],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <FaDesktop className="w-8 h-8 text-blue-600" />,
      title: "Landing Page Development",
      description: "High-converting, visually striking landing pages for campaigns and product launches.",
      features: ["A/B testing", "Call-to-action optimization", "Analytics setup", "Fast loading", "Mobile responsiveness"],
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <FaSyncAlt className="w-8 h-8 text-blue-600" />,
      title: "Website Redesign",
      description: "Modernize your existing website with improved UI/UX and better performance.",
      features: ["UI/UX overhaul", "Performance improvements", "Content migration", "Responsive design", "SEO retention"],
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: <FaCogs className="w-8 h-8 text-blue-600" />,
      title: "Website Maintenance",
      description: "Ongoing support, security updates, and performance optimization for your web assets.",
      features: ["Security patches", "Uptime monitoring", "Content updates", "Bug fixing", "Monthly reports"],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop",
    }
  ];`;

// Let's use a regex to reliably find the end of the services array
const endOfServicesRegex = /image:\s*w6,\s*},\s*\];/;

if (endOfServicesRegex.test(content)) {
  content = content.replace(endOfServicesRegex, 'image: w6,\n    }' + newServicesString);
  console.log("Services array extended successfully.");
} else {
  console.log("Could not find the end of services array using regex!");
}

// Now remove the Specialized Expertise block we added previously
const expertiseStart = content.indexOf('{/* Specialized Services List */}');
const expertiseEnd = content.indexOf('{/* Why Choose Innomatrics */}');

if (expertiseStart !== -1 && expertiseEnd !== -1 && expertiseStart < expertiseEnd) {
  content = content.substring(0, expertiseStart).trimEnd() + '\n\n          ' + content.substring(expertiseEnd);
  console.log("Removed old specialized expertise list.");
} else {
  console.log("Could not find Specialized Expertise section to remove!");
}

fs.writeFileSync(filePath, content, 'utf8');
