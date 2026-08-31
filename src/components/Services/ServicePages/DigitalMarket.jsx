import React, { forwardRef } from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import SectionHeader from "../components/SectionHeader";
import {
  FaChartLine,
  FaCode,
  FaMobile,
  FaUsers,
  FaDesktop,
  FaPaintBrush,
  FaBuilding,
  FaRocket,
  FaShieldAlt,
  FaChartLine as FaChartLineIcon
} from "react-icons/fa";

import heroImgNew from "../../../assets/new_category_images/DigitalMarket_hero.jpg";

const DigitalMarket = forwardRef((props, ref) => {
  const data = {
    breadcrumbTitle: "Digital Marketing",
    title: "Digital Marketing Agency",
    heroDescription: "Data-driven strategies and creative campaigns to drive measurable growth and ROI.",
    heroImage: heroImgNew,
    primaryCTA: "Discuss Your Project",
    primaryLink: "/contact",
    overview: {
      title: "Digital efficiency & enhanced marketing value",
      description: "At Innomatrics, we understand the fast-changing landscape of the digital marketplace. To thrive in today's connected world, businesses must leverage data-driven strategies, enhance customer engagement, and optimize their digital platforms. Our team brings together deep expertise in digital technologies, domain knowledge, and hands-on experience to build scalable, measurable marketing solutions."
    },
    services: [
      {
        icon: <FaChartLine className="w-8 h-8" />,
        title: "SEO",
        description: "Boost your organic search rankings and drive targeted traffic to your website.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaChartLineIcon className="w-8 h-8" />,
        title: "Local SEO",
        description: "Dominate local search results and attract customers in your geographical area.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaCode className="w-8 h-8" />,
        title: "Technical SEO",
        description: "Optimize your website's technical foundation for better crawling and indexing.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaChartLine className="w-8 h-8" />,
        title: "Google Ads",
        description: "High-converting pay-per-click campaigns on the Google Search Network.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaMobile className="w-8 h-8" />,
        title: "Meta Ads",
        description: "Targeted advertising campaigns across Facebook, Instagram, and the Meta ecosystem.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaUsers className="w-8 h-8" />,
        title: "Social Media Marketing",
        description: "Strategic marketing campaigns to grow your brand presence on social platforms.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "Social Media Management",
        description: "Comprehensive management of your social profiles, content, and community.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaPaintBrush className="w-8 h-8" />,
        title: "Content Marketing",
        description: "Engaging, high-quality content strategies to educate and convert your audience.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaBuilding className="w-8 h-8" />,
        title: "Google Business Profile Optimization",
        description: "Maximize your visibility on Google Maps and local search results.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaRocket className="w-8 h-8" />,
        title: "Lead Generation",
        description: "Data-driven strategies to capture and nurture high-quality business leads.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaMobile className="w-8 h-8" />,
        title: "WhatsApp Marketing",
        description: "Direct, personalized marketing campaigns delivered straight to WhatsApp.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "Email Marketing",
        description: "Automated email sequences and newsletters to retain customers and drive sales.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaShieldAlt className="w-8 h-8" />,
        title: "Online Reputation Management",
        description: "Monitor, manage, and improve your brand's digital reputation and reviews.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaChartLineIcon className="w-8 h-8" />,
        title: "Conversion Rate Optimization",
        description: "A/B testing and UX improvements to turn more visitors into paying customers.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=600&auto=format&fit=crop"
      }
    ],
    whyUs: [
      { value: "40%", label: "Minimum ROI" },
      { value: "80%", label: "Maximum ROI" },
      { value: "100+", label: "Active Projects" },
      { value: "50+", label: "Marketing Experts" }
    ]
  };

  const valueDelivered = [
    {
      title: "Proven ROI",
      desc: "Our clients consistently achieve significant results, with typical ROI increases between 40%-80%.",
      metric: "40-80%",
      label: "ROI Boost"
    },
    {
      title: "Lead Generation",
      desc: "Targeted strategies that drive high-quality leads and increase conversion rates significantly.",
      metric: "3x",
      label: "More Leads"
    }
  ];

  return (
    <ServiceTemplate data={data} ref={ref}>
      <div className="section-padding bg-surface border-t border-outline-variant/30">
        <div className="container-custom">
          <SectionHeader eyebrow="Value Delivered" title="Digital efficiency & enhanced marketing value" />
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

export default DigitalMarket;
