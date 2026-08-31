import React, { forwardRef } from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import SectionHeader from "../components/SectionHeader";
import {
  FaShareAlt,
  FaBullhorn,
  FaUsers,
  FaChartLine,
  FaVideo
} from "react-icons/fa";

const SocialMedia = forwardRef((props, ref) => {
  const data = {
    breadcrumbTitle: "Social Media",
    title: "Social Media Marketing",
    heroDescription: "Transform your social media presence with our comprehensive marketing solutions that combine creativity with data-driven strategies.",
    heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHF8R4FeIgC5Gv4UCmZC9rkROOWZSEdbfq_HV2PrNsxYvZtuDqqJfE9xMvngIghwLjKLs&usqp=CAU",
    primaryCTA: "Start Your Campaign",
    primaryLink: "/contact",
    overview: {
      title: "Strategic Social Media Solutions",
      description: "At Innomatrics, we understand the growing power of social media in shaping brand presence and driving customer engagement. In today's fast-paced digital world, businesses must leverage platforms like Instagram, Facebook, LinkedIn, and X to connect with their audiences authentically. Our expert team crafts targeted social media strategies that boost visibility, increase interaction, and deliver measurable business impact through creative content and data-driven campaigns."
    },
    services: [
      {
        icon: <FaShareAlt className="w-8 h-8" />,
        title: "Social Media Strategy",
        description: "We develop comprehensive social media strategies that align with your business goals and target audience.",
        list: ["Competitor analysis", "Platform strategies", "Audience targeting", "Campaign planning"],
        image: "https://img.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148434510.jpg"
      },
      {
        icon: <FaVideo className="w-8 h-8" />,
        title: "Content Creation",
        description: "Our creative team produces engaging, brand-aligned content that resonates with your audience.",
        list: ["Custom graphics", "Copywriting", "Video production", "Content calendar"],
        image: "https://img.freepik.com/free-vector/content-marketing-concept-illustration_114360-7972.jpg"
      },
      {
        icon: <FaUsers className="w-8 h-8" />,
        title: "Platform Management",
        description: "We manage your presence across all major social media platforms to maintain consistent engagement.",
        list: ["Profile optimization", "Regular posting", "Comment moderation", "Crisis management"],
        image: "https://img.freepik.com/free-vector/social-media-concept-illustration_114360-7572.jpg"
      },
      {
        icon: <FaBullhorn className="w-8 h-8" />,
        title: "Social Media Advertising",
        description: "Strategic paid social campaigns that drive conversions and maximize your ROI.",
        list: ["Ad strategy", "Audience targeting", "A/B testing", "Budget optimization"],
        image: "https://img.freepik.com/free-vector/digital-marketing-concept-illustration_114360-7493.jpg"
      },
      {
        icon: <FaUsers className="w-8 h-8" />,
        title: "Influencer Marketing",
        description: "Connect with relevant influencers to amplify your brand's reach and credibility.",
        list: ["Influencer identification", "Partnership management", "Campaign coordination", "ROI measurement"],
        image: "https://img.freepik.com/free-vector/influencer-concept-illustration_114360-679.jpg"
      },
      {
        icon: <FaChartLine className="w-8 h-8" />,
        title: "Analytics & Reporting",
        description: "Comprehensive analytics and insights to measure and improve your social media performance.",
        list: ["Real-time tracking", "Custom dashboards", "Competitor analysis", "Strategy optimization"],
        image: "https://img.freepik.com/free-vector/data-analysis-concept-illustration_114360-8013.jpg"
      }
    ],
    whyUs: [
      { value: "150%", label: "Avg. Engagement Boost" },
      { value: "50+", label: "Platforms Mastered" },
      { value: "5M+", label: "Ad Spend Managed" },
      { value: "99%", label: "Client Retention" }
    ]
  };

  const valueDelivered = [
    {
      title: "Data-Driven Approach",
      desc: "We leverage advanced analytics and insights to optimize your social media strategy and maximize engagement.",
      metric: "150%",
      label: "Engagement"
    },
    {
      title: "Proven Results",
      desc: "Our social media campaigns consistently deliver measurable results for brand awareness and lead generation.",
      metric: "5x",
      label: "ROI"
    }
  ];

  return (
    <ServiceTemplate data={data} ref={ref}>
      <div className="section-padding bg-surface border-t border-outline-variant/30">
        <div className="container-custom">
          <SectionHeader eyebrow="The Infinite Difference" title="Strategic social media solutions for measurable growth" />
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

export default SocialMedia;
