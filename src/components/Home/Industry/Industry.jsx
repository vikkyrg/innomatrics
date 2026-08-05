import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdLocalHospital,
  MdAccountBalance,
  MdApartment,
  MdDirectionsCar,
  MdBusiness,
  MdLock,
  MdSchool,
  MdBuild,
  MdLocalMall,
  MdLocalShipping,
  MdShoppingCart,
  MdHome,
  MdRestaurant,
  MdStore,
  MdWork,
  MdFlightTakeoff,
  MdChevronRight,
  MdCheckCircle,
  MdPublic,
  MdCalendarToday,
  MdSecurity,
  MdSupportAgent,
  MdPeople,
  MdWorkOutline,
  MdStars,
  MdSentimentSatisfiedAlt,
  MdArrowForward
} from 'react-icons/md';

const Industry = () => {
  const [activeIndustry, setActiveIndustry] = useState('professional-services');

  const genericSolutions = [
    "Custom Software Development",
    "Cloud Infrastructure Setup",
    "API Development & Integration",
    "Data Analytics & Reporting",
    "Mobile App Development",
    "Web Application Development",
    "UI/UX Design Services",
    "Quality Assurance & Testing",
    "DevOps & CI/CD Pipelines",
    "24/7 Maintenance & Support"
  ];

  const genericFeatures = [
    { icon: <MdPublic />, title: "Global Reach", desc: "Expand your business worldwide" },
    { icon: <MdCalendarToday />, title: "Smart Operations", desc: "Real-time management" },
    { icon: <MdSecurity />, title: "Secure Data", desc: "100% secure infrastructure" },
    { icon: <MdSupportAgent />, title: "24/7 Support", desc: "Round-the-clock assistance" },
  ];

  const toursSolutions = [
    "Online Booking Systems",
    "Driver & Fleet Management",
    "Hotel & Flight API Integration",
    "GPS Tracking Solutions",
    "Tour Package Management",
    "Mobile Applications (iOS/Android)",
    "Payment Gateway Integration",
    "Customer Support System",
    "Travel CRM Solutions",
    "Admin Dashboard & Analytics"
  ];

  const toursFeatures = [
    { icon: <MdPublic />, title: "Global Reach", desc: "Expand your business worldwide" },
    { icon: <MdCalendarToday />, title: "Smart Booking", desc: "Real-time booking & management" },
    { icon: <MdSecurity />, title: "Secure Payments", desc: "100% secure payment gateway" },
    { icon: <MdSupportAgent />, title: "24/7 Support", desc: "Round-the-clock customer support" },
  ];

  const industries = [
    {
      id: 'healthcare',
      icon: <MdLocalHospital />,
      title: "Healthcare",
      description: "Revolutionizing healthcare delivery through innovative digital solutions that enhance patient care, streamline operations, and improve healthcare outcomes for a better tomorrow.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      solutions: [
        "Electronic Health Records (EHR)", "Telemedicine Platforms", "Hospital Management Systems", 
        "Medical Billing Software", "Patient Portals & Apps", "Health Data Analytics", 
        "IoT Medical Device Integration", "Pharmacy Management", "AI in Diagnostics", "Compliance & HIPAA Solutions"
      ],
      features: [
        { icon: <MdPeople />, title: "Patient-Centric", desc: "Enhance patient experience" },
        { icon: <MdCalendarToday />, title: "Smart Scheduling", desc: "Automated appointments" },
        { icon: <MdSecurity />, title: "HIPAA Compliant", desc: "100% secure data" },
        { icon: <MdSupportAgent />, title: "24/7 Care Support", desc: "Always available" }
      ]
    },
    {
      id: 'banking',
      icon: <MdAccountBalance />,
      title: "Banking & Finance",
      description: "Pioneering transformative shifts in the financial landscape by harnessing the collective expertise of our seasoned professionals in banking, financial services, insurance, and payments.",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      solutions: [
        "Core Banking Systems", "Mobile Banking Apps", "Fintech Solutions", 
        "Payment Gateways", "Fraud Detection Systems", "Blockchain & Crypto", 
        "Wealth Management", "Loan Origination Software", "Robo-Advisors", "Regulatory Compliance"
      ],
      features: [
        { icon: <MdPublic />, title: "Global Transfers", desc: "Seamless international reach" },
        { icon: <MdSecurity />, title: "Bank-Grade Security", desc: "Top-tier data protection" },
        { icon: <MdStars />, title: "High Performance", desc: "Lightning fast processing" },
        { icon: <MdSupportAgent />, title: "24/7 Assistance", desc: "Round-the-clock support" }
      ]
    },
    {
      id: 'education',
      icon: <MdSchool />,
      title: "Education",
      description: "Empowering educational institutions with digital solutions that enhance learning experiences, streamline administration, and foster global collaboration.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      solutions: [
        "Learning Management Systems", "E-Learning Platforms", "Student Information Systems", 
        "Virtual Classrooms", "Online Assessment Tools", "Educational Apps", 
        "Campus Management", "Alumni Portals", "AI Tutors", "Course Authoring Tools"
      ],
      features: [
        { icon: <MdPeople />, title: "Interactive Learning", desc: "Engaging digital classrooms" },
        { icon: <MdCalendarToday />, title: "Class Scheduling", desc: "Smart timetable management" },
        { icon: <MdSecurity />, title: "Data Privacy", desc: "Protecting student info" },
        { icon: <MdStars />, title: "Better Outcomes", desc: "Data-driven insights" }
      ]
    },
    {
      id: 'tours',
      icon: <MdFlightTakeoff />,
      title: "Tours & Travels",
      description: "Transforming travel experiences through cutting-edge technology solutions that streamline bookings, enhance customer experiences, and revolutionize the way people explore the world.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      solutions: toursSolutions,
      features: toursFeatures
    },
    {
      id: 'construction',
      icon: <MdBusiness />,
      title: "Construction",
      description: "Building the future through innovative digital solutions that optimize project management, enhance collaboration, and drive efficiency in construction operations.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      solutions: [
        "Project Management Software", "BIM Integration", "Resource Scheduling", 
        "Site Tracking Apps", "Contractor Portals", "Equipment Management", 
        "Cost Estimating Tools", "Drone Data Analytics", "Safety Compliance", "Supply Chain Tracking"
      ],
      features: [
        { icon: <MdWorkOutline />, title: "Project Control", desc: "End-to-end visibility" },
        { icon: <MdCalendarToday />, title: "On-Time Delivery", desc: "Strict timeline tracking" },
        { icon: <MdSecurity />, title: "Site Safety", desc: "Compliance & monitoring" },
        { icon: <MdPeople />, title: "Team Collaboration", desc: "Unified communication" }
      ]
    },
    {
      id: 'manufacturing',
      icon: <MdBuild />,
      title: "Manufacturing",
      description: "Optimizing manufacturing processes through smart automation, ERP integration, and data-driven insights to improve efficiency and output.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      solutions: [
        "ERP Systems", "IoT & Smart Factory", "Supply Chain Management", 
        "Production Planning", "Quality Control Software", "Inventory Management", 
        "Predictive Maintenance", "Industrial Automation", "Warehouse Management", "Order Fulfillment"
      ],
      features: [
        { icon: <MdStars />, title: "High Efficiency", desc: "Optimized production" },
        { icon: <MdCalendarToday />, title: "Real-Time Tracking", desc: "Live operational data" },
        { icon: <MdSecurity />, title: "Robust Infrastructure", desc: "Secure OT systems" },
        { icon: <MdPublic />, title: "Global Supply", desc: "Worldwide logistics sync" }
      ]
    },
    {
      id: 'logistics',
      icon: <MdLocalShipping />,
      title: "Logistics",
      description: "Enhancing supply chain visibility and fleet management with robust logistics solutions designed for speed, accuracy, and reliability.",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      solutions: [
        "Fleet Management", "Route Optimization", "Freight Forwarding Software", 
        "Warehouse Management", "Last Mile Delivery Apps", "Transport Management System", 
        "Supply Chain Visibility", "Inventory Tracking", "Customs Brokerage", "3PL Software"
      ],
      features: [
        { icon: <MdPublic />, title: "Global Reach", desc: "International forwarding" },
        { icon: <MdCalendarToday />, title: "Fast Delivery", desc: "Optimized routing" },
        { icon: <MdSecurity />, title: "Secure Transit", desc: "Real-time monitoring" },
        { icon: <MdSupportAgent />, title: "24/7 Tracking", desc: "Always know where it is" }
      ]
    },
    {
      id: 'ecommerce',
      icon: <MdShoppingCart />,
      title: "E-Commerce",
      description: "Building scalable, secure, and user-centric e-commerce platforms that drive sales, improve customer retention, and expand market reach.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      solutions: [
        "B2B/B2C Marketplaces", "Custom Storefronts", "Shopping Cart Integration", 
        "Payment Processing", "Order Management Systems", "PIM Software", 
        "Omnichannel Retail", "Marketing Automation", "Recommendation Engines", "Customer Loyalty Programs"
      ],
      features: [
        { icon: <MdPublic />, title: "Global Sales", desc: "Sell across borders" },
        { icon: <MdCalendarToday />, title: "Fast Checkout", desc: "Frictionless buying" },
        { icon: <MdSecurity />, title: "Secure Payments", desc: "PCI-DSS compliant" },
        { icon: <MdSupportAgent />, title: "24/7 Support", desc: "Help when they need it" }
      ]
    },
    {
      id: 'real-estate',
      icon: <MdHome />,
      title: "Real Estate",
      description: "Transforming real estate operations with innovative CRM, property management, and lead generation platforms.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      solutions: [
        "Property Management Software", "Real Estate CRM", "IDX/MLS Integration", 
        "Virtual Tours (AR/VR)", "Tenant Portals", "Lead Generation Platforms", 
        "Lease Management", "Smart Home Integration", "Facility Management", "Real Estate Analytics"
      ],
      features: [
        { icon: <MdPeople />, title: "Client Focus", desc: "Better tenant relations" },
        { icon: <MdCalendarToday />, title: "Easy Bookings", desc: "Automated viewings" },
        { icon: <MdSecurity />, title: "Secure Contracts", desc: "Digital lease signing" },
        { icon: <MdStars />, title: "Premium Listings", desc: "High-quality showcases" }
      ]
    },
    {
      id: 'restaurants',
      icon: <MdRestaurant />,
      title: "Restaurants",
      description: "Delivering custom POS systems, online ordering platforms, and management dashboards tailored for the food and beverage industry.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      solutions: [
        "Custom POS Systems", "Online Ordering Platforms", "Table Reservation Systems", 
        "Kitchen Display Systems", "Inventory Management", "Restaurant CRM", 
        "Food Delivery Apps", "Menu Management", "Employee Scheduling", "Loyalty Programs"
      ],
      features: [
        { icon: <MdPeople />, title: "Happy Customers", desc: "Enhanced dining experience" },
        { icon: <MdCalendarToday />, title: "Easy Reservations", desc: "Smart table management" },
        { icon: <MdSecurity />, title: "Secure Payments", desc: "Contactless options" },
        { icon: <MdStars />, title: "Top Quality", desc: "Streamlined kitchen ops" }
      ]
    },

    {
      id: 'professional-services',
      icon: <MdWork />,
      title: "Professional Services",
      description: "Equipping professional service providers with digital tools for appointment scheduling, client management, and workflow automation.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      solutions: [
        "Client Portals", "Practice Management", "Time & Billing Software", 
        "Document Management", "Workflow Automation", "CRM for Consultants", 
        "Project Collaboration", "Proposal Software", "Resource Allocation", "Business Intelligence"
      ],
      features: [
        { icon: <MdWorkOutline />, title: "Streamlined Work", desc: "Efficient operations" },
        { icon: <MdCalendarToday />, title: "Smart Scheduling", desc: "Automated booking" },
        { icon: <MdSecurity />, title: "Data Protection", desc: "Confidentiality assured" },
        { icon: <MdSupportAgent />, title: "Dedicated Support", desc: "Premium client care" }
      ]
    },
    {
      id: 'startups',
      icon: <MdFlightTakeoff />,
      title: "Startups",
      description: "Partnering with startups to rapidly build, launch, and scale innovative digital products and platforms.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      solutions: [
        "MVP Development", "SaaS Product Development", "Mobile App Creation", 
        "Cloud Architecture", "UI/UX Design", "Growth Hacking Tools", 
        "API Development", "Scalable Infrastructure", "Investor Pitch Platforms", "Agile Product Management"
      ],
      features: [
        { icon: <MdStars />, title: "Rapid Scaling", desc: "Built for high growth" },
        { icon: <MdCalendarToday />, title: "Fast Go-to-Market", desc: "Agile delivery" },
        { icon: <MdSecurity />, title: "Secure Base", desc: "Enterprise-grade foundations" },
        { icon: <MdPeople />, title: "User Centric", desc: "Design thinking approach" }
      ]
    }
  ];

  return (
    <div className="bg-[#f4f7fe] py-16 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-blue-600"></div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Industries We Empower</span>
            <div className="h-[2px] w-12 bg-blue-600"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Digital Solutions for Every Industry
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            We help businesses across 20+ industries accelerate growth, improve efficiency, and deliver exceptional customer experiences.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar */}
          <div className="lg:w-[280px] flex-shrink-0">
            <div className="flex flex-col gap-3 pr-3">
              {industries.map(industry => (
                <div 
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`flex items-center justify-between px-5 py-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeIndustry === industry.id 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-2xl ${activeIndustry === industry.id ? 'text-white' : 'text-blue-500'}`}>
                      {industry.icon}
                    </span>
                    <span className="font-semibold text-[15px]">{industry.title}</span>
                  </div>
                  {activeIndustry === industry.id && <MdChevronRight className="text-2xl" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-grow flex flex-col">
            {industries.map(industry => (
              <div 
                key={industry.id}
                className={`bg-white rounded-3xl p-8 shadow-xl transition-all duration-500 h-full flex flex-col ${
                  activeIndustry === industry.id ? 'flex opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-4'
                }`}
              >
                <div className="flex flex-col xl:flex-row gap-10 h-full">
                  
                  {/* Left Half (Text/Solutions) */}
                  <div className="xl:w-1/2 flex flex-col justify-center py-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-[2px] w-6 bg-blue-600"></div>
                      <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Industry Solutions</span>
                    </div>
                    <h3 className="text-4xl font-extrabold text-gray-900 mb-4">{industry.title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-[15px]">
                      {industry.description}
                    </p>

                    <h4 className="text-xl font-bold text-gray-900 mb-5">Solutions We Deliver</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mb-10">
                      {(industry.solutions || genericSolutions).map((sol, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <MdCheckCircle className="text-blue-600 text-xl flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm font-medium">{sol}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col items-start gap-4 w-full md:w-[320px]">
                      <Link 
                        to={`/industries/${industry.id}`} 
                        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg w-full"
                      >
                        Explore {industry.title.split(' ')[0]} Solutions <MdArrowForward />
                      </Link>
                      <button className="bg-white border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors shadow-sm w-full">
                        Request Demo
                      </button>
                    </div>
                  </div>

                  {/* Right Half (Image and features) */}
                  <div className="xl:w-1/2 relative mt-8 xl:mt-0 flex flex-col h-full">
                    <div className="flex-grow w-full rounded-2xl overflow-hidden shadow-lg relative min-h-[400px]">
                      <img src={industry.image} alt={industry.title} className="w-full h-full object-cover absolute inset-0" />
                    </div>
                    
                    {/* Floating Features Box */}
                    <div className="absolute -bottom-6 xl:bottom-6 left-4 right-4 bg-white rounded-xl shadow-2xl p-4 xl:p-5 border border-gray-50">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-gray-100">
                        {(industry.features || genericFeatures).map((feat, idx) => (
                          <div key={idx} className="px-2 text-center flex flex-col items-center justify-start">
                            <div className="text-blue-600 text-2xl mb-2">
                              {feat.icon}
                            </div>
                            <h5 className="text-gray-900 font-bold text-[13px] mb-1 leading-tight">{feat.title}</h5>
                            <p className="text-gray-500 text-[11px] leading-tight px-1">{feat.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 border border-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x divide-gray-100">
            
            <div className="flex items-center gap-5 lg:justify-center px-4">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <MdPeople className="text-3xl text-blue-600" />
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-gray-900">20+</h4>
                <p className="text-[13px] font-bold text-gray-800 uppercase tracking-wide mt-1">Industries Served</p>
                <p className="text-xs text-gray-500 mt-0.5">Diverse domain expertise</p>
              </div>
            </div>

            <div className="flex items-center gap-5 lg:justify-center px-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <MdWorkOutline className="text-3xl text-emerald-500" />
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-emerald-500">150+</h4>
                <p className="text-[13px] font-bold text-gray-800 uppercase tracking-wide mt-1">Projects Delivered</p>
                <p className="text-xs text-gray-500 mt-0.5">Successful solutions delivered</p>
              </div>
            </div>

            <div className="flex items-center gap-5 lg:justify-center px-4">
              <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0">
                <MdStars className="text-3xl text-purple-500" />
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-purple-500">12+</h4>
                <p className="text-[13px] font-bold text-gray-800 uppercase tracking-wide mt-1">Years of Experience</p>
                <p className="text-xs text-gray-500 mt-0.5">Delivering excellence</p>
              </div>
            </div>

            <div className="flex items-center gap-5 lg:justify-center px-4">
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                <MdSentimentSatisfiedAlt className="text-3xl text-orange-500" />
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-orange-500">98%</h4>
                <p className="text-[13px] font-bold text-gray-800 uppercase tracking-wide mt-1">Client Satisfaction</p>
                <p className="text-xs text-gray-500 mt-0.5">Happy clients worldwide</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Industry;
