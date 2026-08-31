import React, { forwardRef } from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import SectionHeader from "../components/SectionHeader";
import {
  FaCheckCircle,
  FaSyncAlt,
  FaCode,
  FaDesktop,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaChartLine,
  FaUsers,
  FaRocket,
  FaLightbulb,
  FaCogs,
  FaRobot,
  FaPaintBrush,
} from "react-icons/fa";

import heroImg from "../../../assets/services_hero/hero_ai_automation.png";
import ai1 from "../../../assets/aiAutomationServices/ai_1.webp";
import ai2 from "../../../assets/aiAutomationServices/ai_2.webp";
import ai4 from "../../../assets/aiAutomationServices/ai_4.webp";
import ai5 from "../../../assets/aiAutomationServices/ai_5.webp";
import ai6 from "../../../assets/aiAutomationServices/ai_6.webp";
import ai7 from "../../../assets/aiAutomationServices/ai_7.webp";
import ai8 from "../../../assets/aiAutomationServices/ai_8.webp";
import ai9 from "../../../assets/aiAutomationServices/ai_9.webp";
import ai11 from "../../../assets/aiAutomationServices/ai_11.webp";
import ai12 from "../../../assets/aiAutomationServices/ai_12.webp";
import ai13 from "../../../assets/aiAutomationServices/ai_13.webp";
import ai14 from "../../../assets/aiAutomationServices/ai_14.webp";
import aiImageGenImg from "../../../assets/webServices/AI Image Generation Integration.jpg";
import whatsappAiImg from "../../../assets/webServices/whatsapp ai chatbot.jpg";

const AIAutomation = forwardRef((props, ref) => {
  const data = {
    breadcrumbTitle: "AI & Automation",
    title: "AI & Automation Services",
    heroDescription: "Innomatrics Tech helps businesses adopt artificial intelligence through practical, scalable, and business-focused AI solutions.",
    heroImage: heroImg,
    primaryCTA: "Discuss Your AI Strategy",
    primaryLink: "/contact",
    overview: {
      title: "Make Your Business Smarter with AI",
      description: "Automate repetitive work, qualify leads, analyze data, and build intelligent digital experiences with our practical AI solutions. Our team brings together deep technical expertise, domain knowledge, and hands-on experience to deliver scalable, secure, and reliable software solutions."
    },
    services: [
      {
        icon: <FaRobot className="w-8 h-8" />,
        title: "AI Chatbot Development",
        description: "Intelligent conversational agents that provide 24/7 customer support and engagement.",
        list: ["NLP integration", "Multi-channel support", "Seamless handoff", "Analytics dashboard"],
        image: ai1
      },
      {
        icon: <FaCheckCircle className="w-8 h-8" />,
        title: "AI Customer Support",
        description: "Automate and enhance customer service with advanced AI assistance.",
        list: ["24/7 Availability", "Ticket Routing", "Sentiment Analysis", "Knowledge Base Sync"],
        image: ai2
      },
      {
        icon: <FaMobile className="w-8 h-8" />,
        title: "WhatsApp AI Chatbot",
        description: "Automated business messaging and customer service directly on WhatsApp.",
        list: ["Automated replies", "Order tracking", "Broadcast campaigns", "CRM integration"],
        image: whatsappAiImg
      },
      {
        icon: <FaRobot className="w-8 h-8" />,
        title: "AI Voice Agents",
        description: "Conversational voice AI that can handle inbound and outbound calls.",
        list: ["Natural Voice", "Call Routing", "Appointment Booking", "Speech-to-Text"],
        image: ai4
      },
      {
        icon: <FaCogs className="w-8 h-8" />,
        title: "AI-Powered Business Automation",
        description: "Autonomous AI agents designed to execute complex business workflows independently.",
        list: ["Task automation", "Decision making", "System integrations", "Continuous learning"],
        image: ai5
      },
      {
        icon: <FaLightbulb className="w-8 h-8" />,
        title: "Generative AI Integration",
        description: "Custom solutions leveraging generative AI and large language models.",
        list: ["Document processing", "Content generation", "Code assistance", "Image creation"],
        image: ai6
      },
      {
        icon: <FaCode className="w-8 h-8" />,
        title: "OpenAI API Integration",
        description: "Seamless integration of OpenAI's powerful language models into your applications.",
        list: ["GPT-4 Access", "Fine-tuning", "Embeddings", "Token Optimization"],
        image: ai7
      },
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "AI Document Processing",
        description: "Automated data extraction and processing from unstructured documents.",
        list: ["OCR technology", "Invoice parsing", "Contract analysis", "Data validation"],
        image: ai8
      },
      {
        icon: <FaPaintBrush className="w-8 h-8" />,
        title: "AI Content Generation",
        description: "Automate the creation of high-quality written and multimedia content.",
        list: ["SEO Optimization", "Tone Matching", "Bulk Generation", "Multilingual Support"],
        image: ai9
      },
      {
        icon: <FaSyncAlt className="w-8 h-8" />,
        title: "AI Image Generation Integration",
        description: "Integrate powerful AI image generators like DALL-E and Midjourney into your workflow.",
        list: ["DALL-E API", "Stable Diffusion", "Batch Processing", "Style Transfer"],
        image: aiImageGenImg
      },
      {
        icon: <FaChartLine className="w-8 h-8" />,
        title: "AI Recommendation Systems",
        description: "Personalized recommendation engines to boost sales and user engagement.",
        list: ["Collaborative Filtering", "Real-time Processing", "A/B Testing", "Behavior Tracking"],
        image: ai11
      },
      {
        icon: <FaUsers className="w-8 h-8" />,
        title: "AI-powered CRM",
        description: "Intelligent customer relationship management with predictive analytics.",
        list: ["Lead Scoring", "Churn Prediction", "Automated Outreach", "Sales Forecasting"],
        image: ai12
      },
      {
        icon: <FaChartLine className="w-8 h-8" />,
        title: "AI-powered Analytics",
        description: "Predictive analytics and business intelligence driven by machine learning.",
        list: ["Sales forecasting", "Anomaly detection", "Visual dashboards", "Trend Analysis"],
        image: ai13
      },
      {
        icon: <FaRocket className="w-8 h-8" />,
        title: "Custom AI Solutions",
        description: "Tailor-made artificial intelligence solutions to solve your unique business challenges.",
        list: ["Custom Architecture", "Proprietary Models", "Secure Deployment", "Ongoing Training"],
        image: ai14
      }
    ],
    technologies: [
      { name: "Python", icon: <FaCode /> },
      { name: "TensorFlow", icon: <FaCogs /> },
      { name: "PyTorch", icon: <FaCogs /> },
      { name: "OpenAI API", icon: <FaRobot /> },
      { name: "Keras", icon: <FaCode /> },
      { name: "Scikit-Learn", icon: <FaChartLine /> },
      { name: "Pandas", icon: <FaDatabase /> },
      { name: "AWS SageMaker", icon: <FaCloud /> },
    ],
    whyUs: [
      { value: "50+", label: "AI Models Deployed" },
      { value: "99%", label: "Model Uptime" },
      { value: "1000+", label: "Automated Workflows" },
      { value: "20+", label: "AI Engineers" }
    ]
  };

  const valueDelivered = [
    {
      title: "AI Task Automation",
      desc: "Reduces manual labor by 70% using intelligent agents and NLP.",
      metric: "70%",
      label: "Automation Rate"
    },
    {
      title: "Predictive Accuracy",
      desc: "Achieved 95% accuracy in forecasting models and data analysis.",
      metric: "95%",
      label: "Accuracy"
    },
    {
      title: "Customer Engagement",
      desc: "Improved support resolution times by 80% via conversational AI.",
      metric: "80%",
      label: "Faster Resolution"
    },
    {
      title: "Model Deployment",
      desc: "Cut AI integration time by 50% using our pre-trained LLM wrappers.",
      metric: "50%",
      label: "Time to Market"
    }
  ];

  return (
    <ServiceTemplate data={data} ref={ref}>
      <div className="section-padding bg-surface border-t border-outline-variant/30">
        <div className="container-custom">
          <SectionHeader eyebrow="Value Delivered" title="Engineering excellence with real-world impact" />
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

export default AIAutomation;
