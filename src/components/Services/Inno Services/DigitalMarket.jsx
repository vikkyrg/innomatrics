import React, { forwardRef, useState } from "react";
import app from "../../../assets/digitalMarkt.webp";
import app2 from "../../../assets/digitalMarkt2.webp";
import approach from "../../../assets/digitalMarktApproach.webp";
import { Link } from "react-router-dom";
import "./DigitalMarket.css";

const ServicesCard = ({ title, description, image, icon }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl">
    <div className="relative">
      <img src={image} className="w-full h-48 object-cover" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const DigitalMarketing = forwardRef((props, ref) => {
  const [hoveredService, setHoveredService] = useState(null);

  const offerings = {
    items: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Conversion Rate Optimization (CRO)"
    ],
    description: "At Innomatrics, we help businesses grow their online presence with data-driven strategies and creative campaigns. From SEO to social media and paid ads, we focus on driving measurable results.",
    images: {
      default: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "Search Engine Optimization (SEO)": "https://w0.peakpx.com/wallpaper/1018/455/HD-wallpaper-search-engine-optimization-seo-marketing.jpg",
      "Pay-Per-Click (PPC) Advertising": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "Social Media Marketing": "https://img.freepik.com/premium-photo/social-media-icons-logos-with-3d-space-rocket-digital-social-media-marketing-background_125322-391.jpg",
      "Content Marketing": "https://community.nasscom.in/sites/default/files/media/images/Content%20marketing.jpg",
      "Email Marketing": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "Conversion Rate Optimization (CRO)": "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    descriptions: {
      default: "At Innomatrics, we help businesses grow their online presence with data-driven strategies and creative campaigns.",
      "Search Engine Optimization (SEO)": "Boost your organic visibility and drive qualified traffic with our comprehensive SEO strategies.",
      "Pay-Per-Click (PPC) Advertising": "Get immediate results with targeted advertising campaigns that deliver measurable ROI.",
      "Social Media Marketing": "Engage your audience and build brand loyalty through strategic social media campaigns.",
      "Content Marketing": "Tell your brand story with compelling content that attracts and converts your target audience.",
      "Email Marketing": "Nurture leads and drive conversions with personalized email marketing campaigns.",
      "Conversion Rate Optimization (CRO)": "Turn more visitors into customers with data-driven optimization strategies."
    }
  };

  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Increase your website's visibility and rank higher in search engine results pages (SERPs) with our comprehensive SEO services, including keyword research, on-page optimization, link building, and content creation.",
      image: "https://img.freepik.com/premium-photo/person-manage-search-engine-optimization-seo-digital-marketing-with-social-media-content_34141-1030.jpg",
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Drive targeted traffic to your website and generate leads or sales with our expertly managed PPC campaigns on platforms like Google Ads, Bing Ads, and social media advertising.",
      image: "https://media.designrush.com/articles/608361/conversions/12-Best-PPC-platforms-in-2024-(2)-details_mobile.jpg",
    },
    {
      title: "Social Media Marketing",
      description: "Build brand awareness, engage with your audience, and drive conversions through strategic social media marketing campaigns on platforms such as Facebook, Instagram, Twitter, LinkedIn, and more.",
      image: "https://img.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148434510.jpg",
    },
    {
      title: "Content Marketing",
      description: "Create valuable and relevant content that attracts, educates, and converts your audience, including blog posts, articles, infographics, videos, and more.",
      image: "https://img.freepik.com/free-vector/content-marketing-concept-illustration_114360-7972.jpg",
    },
    {
      title: "Email Marketing",
      description: "Nurture leads and drive customer loyalty with personalized and targeted email marketing campaigns that deliver the right message to the right audience at the right time.",
      image: "https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg",
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      description: "Optimize your website and marketing campaigns to improve conversion rates and maximize the return on your investment (ROI).",
      image: "https://img.freepik.com/free-vector/conversion-rate-optimization-concept-illustration_114360-8723.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center pt:0 md:pt-10 pb-20 bg-white shadow-sm" ref={ref}>
      {/* Hero Section */}
      <div
        id="DigitalDiv" className="BgDiv relative flex flex-col items-start self-stretch px-20 py-20 font-medium text-center leading-[108%] min-h-[276px] text-zinc-900 max-md:px-5 max-md:max-w-full"
        style={{ 
          height: "60vh",
          backgroundImage: "url('https://images.unsplash.com/photo-1634176866089-b633f4aec882?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="flex flex-col my-12 items-start justify-start gap-4 text-start relative z-10">
          <h1 className="text-3xl my-4 font-bold text-white md:text-white md:text-5xl">
            Digital Marketing
          </h1>
          
          <hr className="text-sky-600 w-[140%] " />
        </div>
      </div>

      {/* Overview Section */}
      <div className="mb-20 px-6 md:px-8">
        <h2 className="text-xl font-bold text-orange-600 mb-4 mt-8">OVERVIEW</h2>
        <p className="text-lg text-gray-900 leading-relaxed">
          At Innomatrics, we understand the fast-changing landscape of the digital marketplace. To thrive in today's connected world, businesses must leverage data-driven strategies, enhance customer engagement, and optimize their digital platforms. Our team brings together deep expertise in digital technologies, domain knowledge, and hands-on experience to build scalable, measurable marketing solutions.
        </p>
      </div>

      {/* Offerings Section with Hover Effect */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-6">OUR OFFERINGS</h3>
            <div className="space-y-4">
              {offerings.items.map((item) => (
                <div 
                  key={item}
                  className="group relative"
                  onMouseEnter={() => setHoveredService(item)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <h4 className="text-lg font-semibold text-gray-900 cursor-pointer group-hover:text-red-600 transition-colors duration-300">
                    {item}
                  </h4>
                </div>
              ))}

              <p className="text-gray-600 mt-6">
                {offerings.description}
              </p>
            </div>
          </div>

          

          {/* Right Image */}
          <div className="relative">
            <img
              src={hoveredService ? offerings.images[hoveredService] || offerings.images.default : offerings.images.default}
              alt={hoveredService || "Our Digital Marketing Offerings"}
              className="rounded-lg shadow-xl w-full object-cover transition-opacity duration-500"
              style={{ height: '400px' }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-lg">
                {hoveredService ? offerings.descriptions[hoveredService] || offerings.descriptions.default : offerings.descriptions.default}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-xl font-bold text-red-500">THE INFINITE DIFFERENCE</h2>
            <h3 className="text-4xl font-bold text-gray-900 mt-4">
              Digital efficiency & enhanced marketing value
              
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Hexagonal Image */}
            <div className="relative">
              <img 
                src="https://img.freepik.com/free-photo/colleagues-giving-fist-bump_53876-15018.jpg?semt=ais_hybrid&w=740"
                alt="Digital Marketing Innovation"
                className="w-full rounded-lg shadow-xl object-cover h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent rounded-lg"></div>
            </div>

            {/* Right side - Features */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl text-red-500 font-semibold mb-4">Partnerships with Leading Platforms</h4>
                <p className="text-gray-700">
                  We have strategic partnerships with leading digital marketing platforms providing us with access to advanced tools, expert resources, and industry knowledge repositories.
                </p>
              </div>

              <div>
                <h4 className="text-2xl text-red-500 font-semibold mb-4">Advanced Marketing Tools</h4>
                <p className="text-gray-700">
                  Leverage our comprehensive suite of marketing automation tools based on common use cases to optimize your digital presence while keeping costs minimal.
                </p>
              </div>

              <div>
                <h4 className="text-2xl text-red-500 font-semibold mb-4">Proven ROI</h4>
                <p className="text-gray-700">
                  Our clients consistently achieve significant results, with typical cost savings between 40%-80% through our optimized digital marketing strategies.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-red-500">40%</div>
                  <div className="text-sm text-gray-600">Minimum ROI</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-red-500">80%</div>
                  <div className="text-sm text-gray-600">Maximum ROI</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-red-500">100+</div>
                  <div className="text-sm text-gray-600">Active Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
              Services We Offer
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions to help your business grow online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {services.map((service, index) => (
              <ServicesCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Join Our Journey Section */}
      <div className="w-full bg-gradient-to-r from-blue-50 to-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-red-600">Join Us On The Digital Marketing Journey</h2>
              <p className="text-lg text-gray-600">
                Ready to take your digital presence to the next level? Partner with Innomatrics for comprehensive digital marketing solutions that drive real results and sustainable growth for your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">Data-Driven Marketing Strategies</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">Measurable ROI and Growth</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">Dedicated Marketing Experts</p>
                </div>
              </div>
              
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform rotate-3"></div>
              <img 
                src={app} 
                alt="Digital Marketing Journey" 
                className="relative rounded-3xl w-full h-[400px] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* New Digital Innovation Section */}
     
    </div>
  );
});

export default DigitalMarketing;