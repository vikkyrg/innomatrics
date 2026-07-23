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