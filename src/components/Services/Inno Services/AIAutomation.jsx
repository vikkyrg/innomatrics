import React, { forwardRef, useEffect, useState } from "react";
import { FaCheckCircle, FaSyncAlt, FaPlug, FaCode, FaDesktop, FaMobile, FaShoppingCart, FaDatabase, FaCloud, FaLock, FaChartLine, FaUsers, FaShieldAlt, FaRocket, FaLightbulb, FaBuilding, FaChartLine as FaChartLineIcon, FaCogs, FaRobot, FaPaintBrush, FaBriefcase, FaReact, FaNodeJs, FaAngular, FaVuejs, FaPhp, FaPython } from "react-icons/fa";
import heroImg from "../../../assets/services_hero/hero_ai_automation.png";

import app from "../../../assets/services_cards/AIAutomation_cs1.jpg";
import app2 from "../../../assets/services_cards/AIAutomation_cs2.jpg";
import w1 from "../../../assets/services_cards/AIAutomation_w1.jpg";
import w2 from "../../../assets/services_cards/AIAutomation_w2.jpg";
import w3 from "../../../assets/services_cards/AIAutomation_w3.jpg";
import w4 from "../../../assets/services_cards/AIAutomation_w4.jpg";
import w5 from "../../../assets/services_cards/AIAutomation_w5.jpg";
import w6 from "../../../assets/services_cards/AIAutomation_w6.jpg";
import introImg from "../../../assets/services_cards/AIAutomation_intro.jpg";
import diffImg from "../../../assets/services_cards/AIAutomation_diff.jpg";


import "./AIAutomation.css";
import { Link } from "react-router-dom";


import { SiMongodb, SiMysql } from "react-icons/si";
import ai1 from "../../../assets/aiAutomationServices/ai_1.webp";
import ai2 from "../../../assets/aiAutomationServices/ai_2.webp";
import ai3 from "../../../assets/aiAutomationServices/ai_3.webp";
import ai4 from "../../../assets/aiAutomationServices/ai_4.webp";
import ai5 from "../../../assets/aiAutomationServices/ai_5.webp";
import ai6 from "../../../assets/aiAutomationServices/ai_6.webp";
import ai7 from "../../../assets/aiAutomationServices/ai_7.webp";
import ai8 from "../../../assets/aiAutomationServices/ai_8.webp";
import ai9 from "../../../assets/aiAutomationServices/ai_9.webp";
import ai10 from "../../../assets/aiAutomationServices/ai_10.webp";
import ai11 from "../../../assets/aiAutomationServices/ai_11.webp";
import ai12 from "../../../assets/aiAutomationServices/ai_12.webp";
import ai13 from "../../../assets/aiAutomationServices/ai_13.webp";
import ai14 from "../../../assets/aiAutomationServices/ai_14.webp";

import aiImageGenImg from "../../../assets/webServices/AI Image Generation Integration.jpg";
import whatsappAiImg from "../../../assets/webServices/whatsapp ai chatbot.jpg";

const ServicesCard = ({ title, description, image }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 m-4 flex-1 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100">
    <img src={image} className="w-full h-32 object-contain mb-4" alt={title} />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AIAutomation = forwardRef((props, ref) => {
  const [hoveredService, setHoveredService] = useState(null);
  const technologies = [
    { name: "Python", icon: <FaCode className="text-blue-600 text-2xl" /> },
    { name: "TensorFlow", icon: <FaCogs className="text-blue-600 text-2xl" /> },
    { name: "PyTorch", icon: <FaCogs className="text-blue-600 text-2xl" /> },
    { name: "OpenAI API", icon: <FaRobot className="text-blue-600 text-2xl" /> },
    { name: "Keras", icon: <FaCode className="text-blue-600 text-2xl" /> },
    { name: "Scikit-Learn", icon: <FaChartLine className="text-blue-600 text-2xl" /> },
    { name: "Pandas", icon: <FaDatabase className="text-blue-600 text-2xl" /> },
    { name: "AWS SageMaker", icon: <FaCloud className="text-blue-600 text-2xl" /> },
  ];

  const services = [
    { title: "AI Chatbot Development", icon: <FaRobot className="text-blue-600 text-2xl" />, description: "Intelligent conversational agents that provide 24/7 customer support and engagement.", features: ["NLP integration", "Multi-channel support", "Seamless handoff", "Analytics dashboard"], image: ai1 },
    { title: "AI Customer Support", icon: <FaCheckCircle className="text-blue-600 text-2xl" />, description: "Automate and enhance customer service with advanced AI assistance.", features: ["24/7 Availability", "Ticket Routing", "Sentiment Analysis", "Knowledge Base Sync"], image: ai2 },
    { title: "WhatsApp AI Chatbot", icon: <FaMobile className="text-blue-600 text-2xl" />, description: "Automated business messaging and customer service directly on WhatsApp.", features: ["Automated replies", "Order tracking", "Broadcast campaigns", "CRM integration"], image: whatsappAiImg },
    { title: "AI Voice Agents", icon: <FaRobot className="text-blue-600 text-2xl" />, description: "Conversational voice AI that can handle inbound and outbound calls.", features: ["Natural Voice", "Call Routing", "Appointment Booking", "Speech-to-Text"], image: ai4 },
    { title: "AI-Powered Business Automation", icon: <FaCogs className="text-blue-600 text-2xl" />, description: "Autonomous AI agents designed to execute complex business workflows independently.", features: ["Task automation", "Decision making", "System integrations", "Continuous learning"], image: ai5 },
    { title: "Generative AI Integration", icon: <FaLightbulb className="text-blue-600 text-2xl" />, description: "Custom solutions leveraging generative AI and large language models.", features: ["Document processing", "Content generation", "Code assistance", "Image creation"], image: ai6 },
    { title: "OpenAI API Integration", icon: <FaCode className="text-blue-600 text-2xl" />, description: "Seamless integration of OpenAI's powerful language models into your applications.", features: ["GPT-4 Access", "Fine-tuning", "Embeddings", "Token Optimization"], image: ai7 },
    { title: "AI Document Processing", icon: <FaDesktop className="text-blue-600 text-2xl" />, description: "Automated data extraction and processing from unstructured documents.", features: ["OCR technology", "Invoice parsing", "Contract analysis", "Data validation"], image: ai8 },
    { title: "AI Content Generation", icon: <FaPaintBrush className="text-blue-600 text-2xl" />, description: "Automate the creation of high-quality written and multimedia content.", features: ["SEO Optimization", "Tone Matching", "Bulk Generation", "Multilingual Support"], image: ai9 },
    { title: "AI Image Generation Integration", icon: <FaSyncAlt className="text-blue-600 text-2xl" />, description: "Integrate powerful AI image generators like DALL-E and Midjourney into your workflow.", features: ["DALL-E API", "Stable Diffusion", "Batch Processing", "Style Transfer"], image: aiImageGenImg },
    { title: "AI Recommendation Systems", icon: <FaChartLine className="text-blue-600 text-2xl" />, description: "Personalized recommendation engines to boost sales and user engagement.", features: ["Collaborative Filtering", "Real-time Processing", "A/B Testing", "Behavior Tracking"], image: ai11 },
    { title: "AI-powered CRM", icon: <FaUsers className="text-blue-600 text-2xl" />, description: "Intelligent customer relationship management with predictive analytics.", features: ["Lead Scoring", "Churn Prediction", "Automated Outreach", "Sales Forecasting"], image: ai12 },
    { title: "AI-powered Analytics", icon: <FaChartLineIcon className="text-blue-600 text-2xl" />, description: "Predictive analytics and business intelligence driven by machine learning.", features: ["Sales forecasting", "Anomaly detection", "Visual dashboards", "Trend Analysis"], image: ai13 },
    { title: "Custom AI Solutions", icon: <FaRocket className="text-blue-600 text-2xl" />, description: "Tailor-made artificial intelligence solutions to solve your unique business challenges.", features: ["Custom Architecture", "Proprietary Models", "Secure Deployment", "Ongoing Training"], image: ai14 }
  ];

  const serviceImages = {
    'default': app2,
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.image }), {})
  };

  const serviceDescriptions = {
    'default': "Automate repetitive work, qualify leads, analyze data, and build intelligent digital experiences with our practical AI solutions.",
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.description }), {})
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50" ref={ref}>
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImg})`,
          }}
        ></div>
        <div className="absolute inset-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mt-16">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-8 text-left">
              AI & Automation Services
            </h1>
            <p className="text-xl text-white max-w-1xl mt-2 text-left">
              Innomatrics Tech helps businesses adopt artificial intelligence through practical, scalable, and business-focused AI solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Paragraph */}
          <div className="mb-20 px-4 md:px-4">
            <h2 className="text-xl font-bold text-orange-600 mb-4">OVERVIEW</h2>
            <p className="text-lg text-gray-900 leading-relaxed">
              At Innomatrics, we understand the pace of today's digital
              transformation. Businesses must rapidly innovate to meet customer
              demands, reduce technical debt, modernize legacy systems, and stay
              ahead with emerging technologies. digital transformation.Businesses must be innovative
              <br />
              Our team brings together deep technical expertise, domain
              knowledge, and hands-on experience to deliver scalable, secure,
              and reliable software solutions. Whether it's full-stack web
              development, custom enterprise applications, or cloud-native
              services — we build with performance, flexibility, and
              future-readiness in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-6">OUR OFFERINGS</h3>
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                {services.map(s => s.title).map((service) => (
                  <div 
                    key={service}
                    onMouseEnter={() => setHoveredService(service.replace('— ', ''))}
                    onMouseLeave={() => setHoveredService(null)}
                    className="group"
                  >
                    <h4 className="text-lg font-semibold text-gray-700 cursor-pointer group-hover:text-red-500 transition-colors duration-300">
                      {service}
                    </h4>
                  </div>
                ))}

                <p className="text-gray-600 mt-6">
                  Leverage digital technologies to fundamentally change how you operate and deliver value to customers. 
                  Embrace digital transformation to enhance your agility, creativity, and decision-making capabilities 
                  while improving growth opportunities.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src={serviceImages[hoveredService || 'default']}
                alt={hoveredService ? `${hoveredService} Services` : "AI & Automation Services"}
                className="rounded-lg shadow-xl w-full object-cover transition-opacity duration-500"
                style={{ height: '500px' }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-lg">
                  {serviceDescriptions[hoveredService || 'default']}
                </p>
              </div>
            </div>
          </div>

          {/* Value Delivered Section */}
          <div className="w-full px-4 py-16 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-xl font-bold text-orange-500 mb-4">VALUE DELIVERED</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-12">
                Engineering excellence with<br />real-world impact
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">AI Task Automation</h4>
                    <p className="text-blue-100 mb-4">
                      Reduces manual labor by 70% using intelligent agents and NLP.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">70%</span>
                      <span className="text-sm">Automation Rate</span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Predictive Accuracy</h4>
                    <p className="text-blue-100 mb-4">
                      Achieved 95% accuracy in forecasting models and data analysis.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">95%</span>
                      <span className="text-sm">Accuracy</span>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Customer Engagement</h4>
                    <p className="text-blue-100 mb-4">
                      Improved support resolution times by 80% via conversational AI.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">80%</span>
                      <span className="text-sm">Faster Resolution</span>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Model Deployment</h4>
                    <p className="text-blue-100 mb-4">
                      Cut AI integration time by 50% using our pre-trained LLM wrappers.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">50%</span>
                      <span className="text-sm">Time to Market</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Stats Section */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600 mt-2">AI Models Deployed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">99%</div>
                  <div className="text-gray-600 mt-2">Model Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">1000+</div>
                  <div className="text-gray-600 mt-2">Automated Workflows</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">20+</div>
                  <div className="text-gray-600 mt-2">AI Engineers</div>
                </div>
              </div>
            </div>
          </div>

          {/* The Infinite Difference Section */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side */}
            <div>
              <h2 className="text-xl font-bold text-orange-500 mb-4">THE INNOMATRICS DIFFERENCE</h2>
              <h3 className="text-4xl font-bold text-gray-800 mb-8">
                Innovative solutions & enhanced business value
              </h3>
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={diffImg}
                  alt="Innomatrics Tech Professional"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Industry Recognition</h2>
                <p className="text-lg text-gray-800">
                  Innomatrics Tech leads the market in applied Artificial Intelligence and LLM integration for modern enterprises.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Digital Innovation</h2>
                <p className="text-lg text-gray-800">
                  Deploying sophisticated machine learning models that run seamlessly across cloud and edge devices.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Technology Assets</h2>
                <p className="text-lg text-gray-800">
                  Utilizing advanced vector databases and fine-tuned models to ensure accurate, hallucination-free AI responses.
                </p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
            {/* Left Image */}
            

            {/* Right Content */}
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-3xl font-bold text-red-600 mb-4">
                Make Your Business Smarter with AI
              </h2>
              <div className="w-24 h-1 bg-blue-600 mb-6"></div>
              <p className="text-xl  text-gray-600">
                Automate repetitive work, qualify leads, analyze data, and build intelligent digital experiences with our practical AI solutions.
              </p>
            </div>
            <div className="w-full mt-16 md:w-1/2">
              <img
                src={introImg}
                alt="Innomatrics Digital Solutions"
                className="w-full h-72 rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
              Our Comprehensive AI & Automation Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <svg
                            className="w-4 h-4 text-blue-600 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Innomatrics */}
          <div className="mb-20 bg-blue-900 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Innomatrics?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-xl">AI Models Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-xl">Model Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-xl">Automated Workflows</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-xl">AI Engineers</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Ready to Automate with AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Let's discuss how Innomatrics Tech can help you achieve your digital
              goals with our expert web development services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-md"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AIAutomation;
