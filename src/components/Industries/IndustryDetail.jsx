import React from 'react';
import { useParams, Link } from 'react-router-dom';

const IndustryDetail = () => {
  const { industry } = useParams();

  const industryData = {
    healthcare: {
      title: "Healthcare Software Solutions",
      heroImage: "https://burst.shopifycdn.com/photos/doctor-reaches-towards-shelf.jpg?width=1000&format=pjpg&exif=0&iptc=0",
      description: "Transform healthcare delivery with our innovative digital solutions. We help healthcare providers streamline operations, enhance patient care, and improve medical outcomes through cutting-edge technology.",
      features: [
        "Electronic Health Records (EHR)",
        "Telemedicine Solutions",
        "Hospital Management Systems",
        "Medical Billing Software",
        "Patient Portal Development"
      ],
      benefits: [
        {
          title: "Enhanced Patient Care",
          description: "Improve patient outcomes with streamlined workflows and better data management"
        },
        {
          title: "Reduced Operational Costs",
          description: "Automate routine tasks and optimize resource allocation"
        },
        {
          title: "Better Data Security",
          description: "Ensure HIPAA compliance and protect sensitive patient information"
        },
        {
          title: "Improved Accessibility",
          description: "Enable remote healthcare delivery and patient monitoring"
        }
      ],
      caseStudies: [
        {
          title: "Major Hospital Chain",
          challenge: "Managing patient records across multiple locations",
          solution: "Implemented integrated EHR system",
          result: "50% reduction in administrative time"
        },
        {
          title: "Private Clinic Network",
          challenge: "Patient appointment scheduling issues",
          solution: "Custom telemedicine platform",
          result: "30% increase in patient satisfaction"
        }
      ]
    },
    banking: {
      title: "Banking & Financial Services Solutions",
      heroImage: "https://www.shutterstock.com/image-photo/bfsi-banking-financial-services-insurance-600nw-2433179231.jpg",
      description: "Empower your financial institution with secure, scalable, and intelligent digital solutions. We help banks and financial organizations drive innovation while maintaining the highest security standards.",
      features: [
        "Digital Banking Platforms",
        "Payment Gateway Integration",
        "Mobile Banking Apps",
        "Fraud Detection Systems",
        "Financial Analytics Tools"
      ],
      benefits: [
        {
          title: "Enhanced Security",
          description: "State-of-the-art security measures to protect financial data"
        },
        {
          title: "Digital Transformation",
          description: "Modernize banking operations with cutting-edge technology"
        },
        {
          title: "Customer Experience",
          description: "Deliver seamless banking experience across all channels"
        },
        {
          title: "Real-time Analytics",
          description: "Make data-driven decisions with advanced analytics"
        }
      ],
      caseStudies: [
        {
          title: "Regional Bank",
          challenge: "Outdated mobile banking platform",
          solution: "Modern mobile banking app development",
          result: "200% increase in mobile transactions"
        },
        {
          title: "Credit Union",
          challenge: "Manual loan processing",
          solution: "Automated loan management system",
          result: "75% faster loan processing"
        }
      ]
    },
    ngo: {
      title: "NGO Management Solutions",
      heroImage: "https://www.shutterstock.com/image-vector/nongovernmental-organization-ngo-vector-illustration-260nw-1811798761.jpg",
      description: "Support your nonprofit mission with our specialized NGO software solutions. We help organizations maximize their social impact through efficient digital tools and platforms.",
      features: [
        "Donor Management Systems",
        "Project Tracking Tools",
        "Volunteer Management",
        "Fund Management",
        "Impact Reporting Solutions"
      ],
      benefits: [
        {
          title: "Improved Donor Relations",
          description: "Better donor engagement and retention through effective management"
        },
        {
          title: "Efficient Operations",
          description: "Streamline administrative tasks and project management"
        },
        {
          title: "Enhanced Transparency",
          description: "Clear reporting and tracking of funds and impact"
        },
        {
          title: "Greater Impact",
          description: "Maximize social impact through data-driven decisions"
        }
      ],
      caseStudies: [
        {
          title: "International NGO",
          challenge: "Tracking multiple global projects",
          solution: "Centralized project management system",
          result: "40% improvement in project efficiency"
        },
        {
          title: "Local Nonprofit",
          challenge: "Donor engagement and retention",
          solution: "Integrated donor management platform",
          result: "35% increase in recurring donations"
        }
      ]
    },
    travel: {
      title: "Tours & Travel Solutions",
      heroImage: "https://divyatourstravels.in/public/img/jk.jpg",
      description: "Revolutionize travel experiences with our comprehensive digital solutions. We help travel businesses create seamless, engaging platforms that delight customers at every touchpoint.",
      features: [
        "Booking Management Systems",
        "Travel Planning Platforms",
        "Tour Package Management",
        "Customer Experience Tools",
        "Travel Analytics Solutions"
      ],
      benefits: [
        {
          title: "Streamlined Bookings",
          description: "Efficient booking and reservation management"
        },
        {
          title: "Enhanced Customer Experience",
          description: "Personalized travel planning and recommendations"
        },
        {
          title: "Operational Efficiency",
          description: "Automated workflows and resource management"
        },
        {
          title: "Data-Driven Insights",
          description: "Better business decisions through analytics"
        }
      ],
      caseStudies: [
        {
          title: "Travel Agency",
          challenge: "Manual booking processes",
          solution: "Digital booking platform",
          result: "60% reduction in booking time"
        },
        {
          title: "Tour Operator",
          challenge: "Package management complexity",
          solution: "Tour management system",
          result: "45% increase in package sales"
        }
      ]
    },
    construction: {
      title: "Construction Management Solutions",
      heroImage: "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww",
      description: "Streamline construction operations with our innovative digital solutions. We help construction firms optimize project management, resource allocation, and site operations.",
      features: [
        "Project Management Tools",
        "Resource Planning Systems",
        "Site Safety Monitoring",
        "Document Management",
        "Construction Analytics"
      ],
      benefits: [
        {
          title: "Project Efficiency",
          description: "Better project planning and execution"
        },
        {
          title: "Resource Optimization",
          description: "Improved resource allocation and utilization"
        },
        {
          title: "Enhanced Safety",
          description: "Better safety monitoring and compliance"
        },
        {
          title: "Cost Control",
          description: "Improved budget management and cost tracking"
        }
      ],
      caseStudies: [
        {
          title: "Construction Company",
          challenge: "Project delays and cost overruns",
          solution: "Integrated project management system",
          result: "25% reduction in project delays"
        },
        {
          title: "Building Contractor",
          challenge: "Resource management issues",
          solution: "Resource planning platform",
          result: "30% improvement in resource utilization"
        }
      ]
    },
    security: {
      title: "Security Solutions",
      heroImage: "https://t4.ftcdn.net/jpg/04/72/18/19/360_F_472181971_ZCXWPAgsA2Yp6kEUhkSQDLvLvGuLhZxW.jpg",
      description: "Enhance security operations with our advanced digital solutions. We provide cutting-edge software to help security firms maintain safety and compliance while improving operational efficiency.",
      features: [
        "Security Management Systems",
        "Surveillance Integration",
        "Access Control Solutions",
        "Incident Management Tools",
        "Security Analytics Platform"
      ],
      benefits: [
        {
          title: "Enhanced Security",
          description: "Improved monitoring and threat detection"
        },
        {
          title: "Quick Response",
          description: "Faster incident response and resolution"
        },
        {
          title: "Better Compliance",
          description: "Ensure regulatory compliance and reporting"
        },
        {
          title: "Operational Efficiency",
          description: "Streamlined security operations and management"
        }
      ],
      caseStudies: [
        {
          title: "Security Firm",
          challenge: "Multiple site monitoring",
          solution: "Integrated security management platform",
          result: "40% improvement in incident response time"
        },
        {
          title: "Corporate Security",
          challenge: "Access control management",
          solution: "Advanced access control system",
          result: "50% reduction in security breaches"
        }
      ]
    },
    education: {
      title: "Education Technology Solutions",
      heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop",
      description: "Empowering educational institutions with digital solutions that enhance learning experiences, streamline administration, and foster global collaboration.",
      features: [
        "Learning Management Systems (LMS)",
        "Student Information Systems",
        "E-learning Platforms",
        "Virtual Classroom Solutions",
        "Educational Analytics"
      ],
      benefits: [
        {
          title: "Enhanced Learning",
          description: "Interactive and personalized learning experiences for students."
        },
        {
          title: "Streamlined Administration",
          description: "Automate administrative tasks and student records management."
        },
        {
          title: "Remote Access",
          description: "Enable learning from anywhere at any time."
        },
        {
          title: "Data-Driven Insights",
          description: "Track student progress and optimize teaching methods."
        }
      ],
      caseStudies: []
    },
    manufacturing: {
      title: "Manufacturing Software Solutions",
      heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop",
      description: "Optimizing manufacturing processes through smart automation, ERP integration, and data-driven insights to improve efficiency and output.",
      features: [
        "Manufacturing ERP Systems",
        "Production Planning Tools",
        "Inventory Management",
        "Quality Control Systems",
        "Supply Chain Automation"
      ],
      benefits: [
        {
          title: "Increased Efficiency",
          description: "Streamline production workflows and reduce downtime."
        },
        {
          title: "Inventory Optimization",
          description: "Maintain optimal stock levels and reduce waste."
        },
        {
          title: "Quality Assurance",
          description: "Ensure consistent product quality with automated checks."
        },
        {
          title: "Cost Reduction",
          description: "Lower operational costs through resource optimization."
        }
      ],
      caseStudies: []
    },
    garments: {
      title: "Garment Industry Solutions",
      heroImage: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2000&auto=format&fit=crop",
      description: "Providing tailored ERP and supply chain management software to streamline operations, inventory, and sales in the garment industry.",
      features: [
        "Garment ERP Systems",
        "Inventory Tracking",
        "Order Management",
        "Vendor Management",
        "Retail POS Integration"
      ],
      benefits: [
        {
          title: "Seamless Operations",
          description: "Connect design, production, and retail seamlessly."
        },
        {
          title: "Real-time Tracking",
          description: "Track raw materials and finished goods in real-time."
        },
        {
          title: "Faster Time-to-Market",
          description: "Accelerate production cycles with better coordination."
        },
        {
          title: "Enhanced Profitability",
          description: "Optimize costs and maximize profit margins."
        }
      ],
      caseStudies: []
    },
    logistics: {
      title: "Logistics & Supply Chain Solutions",
      heroImage: "https://images.unsplash.com/photo-1561518776-e76a5e48f731?q=80&w=2000&auto=format&fit=crop",
      description: "Enhancing supply chain visibility and fleet management with robust logistics solutions designed for speed, accuracy, and reliability.",
      features: [
        "Fleet Management Systems",
        "Warehouse Management (WMS)",
        "Route Optimization",
        "Real-time Tracking",
        "Freight Management"
      ],
      benefits: [
        {
          title: "Improved Visibility",
          description: "End-to-end visibility of your supply chain."
        },
        {
          title: "Cost Savings",
          description: "Reduce fuel consumption and operational costs."
        },
        {
          title: "Faster Deliveries",
          description: "Optimize routes for quicker turnaround times."
        },
        {
          title: "Customer Satisfaction",
          description: "Provide accurate tracking and timely deliveries."
        }
      ],
      caseStudies: []
    },
    ecommerce: {
      title: "E-Commerce Solutions",
      heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",
      description: "Building scalable, secure, and user-centric e-commerce platforms that drive sales, improve customer retention, and expand market reach.",
      features: [
        "Custom E-commerce Platforms",
        "Multi-vendor Marketplaces",
        "Payment Gateway Integration",
        "Inventory Synchronization",
        "Mobile Commerce Apps"
      ],
      benefits: [
        {
          title: "Global Reach",
          description: "Expand your business beyond geographical boundaries."
        },
        {
          title: "Increased Sales",
          description: "Drive conversions with user-friendly interfaces."
        },
        {
          title: "Customer Insights",
          description: "Understand buying behaviors through analytics."
        },
        {
          title: "Seamless Management",
          description: "Manage products, orders, and customers easily."
        }
      ],
      caseStudies: []
    },
    "real-estate": {
      title: "Real Estate Software Solutions",
      heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop",
      description: "Transforming real estate operations with innovative CRM, property management, and lead generation platforms.",
      features: [
        "Property Management Systems",
        "Real Estate CRM",
        "Virtual Tours Integration",
        "Lead Generation Portals",
        "Tenant Management"
      ],
      benefits: [
        {
          title: "Efficient Management",
          description: "Streamline property and tenant management."
        },
        {
          title: "Better Lead Conversion",
          description: "Capture and nurture leads effectively."
        },
        {
          title: "Enhanced Client Experience",
          description: "Offer virtual tours and easy property search."
        },
        {
          title: "Automated Workflows",
          description: "Reduce manual paperwork and administrative tasks."
        }
      ],
      caseStudies: []
    },
    restaurants: {
      title: "Restaurant Management Solutions",
      heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop",
      description: "Delivering custom POS systems, online ordering platforms, and management dashboards tailored for the food and beverage industry.",
      features: [
        "Restaurant POS Systems",
        "Online Ordering Platforms",
        "Table Management",
        "Inventory Tracking",
        "Customer Loyalty Programs"
      ],
      benefits: [
        {
          title: "Faster Service",
          description: "Speed up ordering and billing processes."
        },
        {
          title: "Increased Revenue",
          description: "Boost sales with online ordering and delivery."
        },
        {
          title: "Better Inventory Control",
          description: "Reduce food waste and track stock levels."
        },
        {
          title: "Enhanced Customer Loyalty",
          description: "Reward repeat customers and improve retention."
        }
      ],
      caseStudies: []
    },
    retail: {
      title: "Retail Technology Solutions",
      heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop",
      description: "Empowering retail businesses with omnichannel digital solutions, intelligent inventory management, and seamless customer experiences.",
      features: [
        "Omnichannel Retail Platforms",
        "Retail POS Integration",
        "Inventory Management",
        "Customer Relationship Management",
        "Retail Analytics"
      ],
      benefits: [
        {
          title: "Unified Experience",
          description: "Connect in-store and online shopping seamlessly."
        },
        {
          title: "Inventory Accuracy",
          description: "Maintain accurate stock counts across channels."
        },
        {
          title: "Personalized Marketing",
          description: "Target customers based on purchase history."
        },
        {
          title: "Data-Driven Decisions",
          description: "Analyze sales trends and customer preferences."
        }
      ],
      caseStudies: []
    },
    "professional-services": {
      title: "Professional Services Solutions",
      heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop",
      description: "Equipping professional service providers with digital tools for appointment scheduling, client management, and workflow automation.",
      features: [
        "Client Management Portals",
        "Appointment Scheduling",
        "Billing and Invoicing",
        "Document Management",
        "Workflow Automation"
      ],
      benefits: [
        {
          title: "Improved Client Relations",
          description: "Offer seamless communication and service delivery."
        },
        {
          title: "Time Savings",
          description: "Automate scheduling and administrative tasks."
        },
        {
          title: "Streamlined Billing",
          description: "Ensure accurate and timely invoicing."
        },
        {
          title: "Secure Data",
          description: "Protect client information with secure document management."
        }
      ],
      caseStudies: []
    },
    startups: {
      title: "Startup Technology Solutions",
      heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop",
      description: "Partnering with startups to rapidly build, launch, and scale innovative digital products and platforms.",
      features: [
        "MVP Development",
        "Scalable Architecture",
        "Agile Product Development",
        "Cloud Infrastructure Setup",
        "Growth Marketing Tech"
      ],
      benefits: [
        {
          title: "Faster Time-to-Market",
          description: "Launch your product quickly and efficiently."
        },
        {
          title: "Scalability",
          description: "Build on architecture that grows with your business."
        },
        {
          title: "Cost-Effective",
          description: "Optimize resources for maximum impact."
        },
        {
          title: "Expert Guidance",
          description: "Leverage technical expertise for product success."
        }
      ],
      caseStudies: []
    }
  };

  const currentIndustry = industryData[industry?.toLowerCase()] || industryData.healthcare;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={currentIndustry.heroImage}
          alt={currentIndustry.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{currentIndustry.title}</h1>
            <p className="text-xl max-w-3xl mx-auto px-4">
              {currentIndustry.description}
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features & Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentIndustry.features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{feature}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentIndustry.benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
     

      {/* Call to Action Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 mb-8">
            Let's discuss how our solutions can help you achieve your business goals.
          </p>
          <div className="space-x-4">
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/quote"
              className="inline-block bg-transparent text-white px-8 py-3 rounded-md font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetail; 