import React, { forwardRef } from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import SectionHeader from "../components/SectionHeader";
import {
  FaPaintBrush,
  FaVectorSquare,
  FaBriefcase,
  FaBuilding,
  FaIdCard,
  FaObjectGroup,
} from "react-icons/fa";


const LogoDesign = forwardRef((props, ref) => {
  const data = {
    breadcrumbTitle: "Logo Design",
    title: "Logo Design Services",
    heroDescription: "Transform your brand with our professional logo design services that combine creativity with strategic thinking.",
    heroImage: "https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?cs=srgb&dl=pexels-pixabay-41949.jpg&fm=jpg",
    primaryCTA: "Discuss Your Design",
    primaryLink: "/contact",
    overview: {
      title: "Our Approach to Brand Identity",
      description: "We understand that every business is unique, which is why we take a personalized approach to logo design. Our process begins with a thorough analysis of your business goals, target audience, and brand identity. From there, we work closely with you to develop a customized strategy that aligns with your objectives and exceeds your expectations. From sleek and modern to timeless and elegant, we tailor each design to reflect the essence of your brand."
    },
    services: [
      {
        icon: <FaPaintBrush className="w-8 h-8" />,
        title: "Custom Logo Design",
        description: "We create unique and customized logo designs that perfectly represent your brand's identity and values.",
        list: ["Concept generation", "Custom illustrations", "Color psychology", "Typography selection"],
        image: "https://img.freepik.com/free-vector/gradient-colored-abstract-logo-collection_52683-83016.jpg"
      },
      {
        icon: <FaObjectGroup className="w-8 h-8" />,
        title: "Brand Identity Development",
        description: "Our team develops comprehensive brand identity packages, including logos, color schemes, and typography.",
        list: ["Visual language", "Brand guidelines", "Asset libraries", "Style guides"],
        image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg"
      },
      {
        icon: <FaBuilding className="w-8 h-8" />,
        title: "Rebranding Services",
        description: "Refresh your brand with our rebranding services, giving your business a modern and updated look.",
        list: ["Brand audit", "Modernization", "Consistency check", "Smooth rollout"],
        image: "https://img.freepik.com/free-vector/gradient-abstract-logo-template_23-2149014804.jpg"
      },
      {
        icon: <FaVectorSquare className="w-8 h-8" />,
        title: "Logo Animation",
        description: "Enhance your logo with animation services, making it dynamic and engaging for digital platforms.",
        list: ["Motion graphics", "GIFs & videos", "Web animation", "Intro sequences"],
        image: "https://img.freepik.com/free-vector/motion-graphic-design-concept-illustration_114360-2420.jpg"
      },
      {
        icon: <FaIdCard className="w-8 h-8" />,
        title: "Business Card Design",
        description: "We design professional business cards that incorporate your logo and brand identity, making a strong first impression.",
        list: ["Layout design", "Print preparation", "Material selection", "Creative concepts"],
        image: "https://img.freepik.com/free-vector/gradient-business-card-template_23-2149014921.jpg"
      },
      {
        icon: <FaBriefcase className="w-8 h-8" />,
        title: "Marketing Material Design",
        description: "Our team creates cohesive marketing materials, including brochures, flyers, and banners, featuring your brand elements.",
        list: ["Brochures", "Flyers", "Banners", "Social media assets"],
        image: "https://img.freepik.com/free-vector/gradient-business-branding-template_23-2149014923.jpg"
      }
    ],
    whyUs: [
      { value: "500+", label: "Brands Designed" },
      { value: "100%", label: "Custom Work" },
      { value: "10+", label: "Years Experience" },
      { value: "50+", label: "Industry Awards" }
    ]
  };

  const valueDelivered = [
    {
      title: "Collaborations with Top-Tier Platforms",
      desc: "We have strategic partnerships with leading digital marketing platforms providing us with access to advanced tools, expert resources, and industry knowledge repositories.",
      metric: "1st",
      label: "Class Resources"
    },
    {
      title: "High-Impact Results",
      desc: "Our clients consistently achieve significant results, with typical brand recognition increases between 40%-80%.",
      metric: "40-80%",
      label: "Recognition Boost"
    }
  ];

  return (
    <ServiceTemplate data={data} ref={ref}>
      <div className="section-padding bg-surface border-t border-outline-variant/30">
        <div className="container-custom">
          <SectionHeader eyebrow="The Infinite Difference" title="Creative and effective logo design solutions" />
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

export default LogoDesign;
