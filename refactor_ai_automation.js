const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/AIAutomation.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const newServices = `const services = [
    { title: "AI Chatbot Development", icon: <FaRobot className="text-blue-600 text-2xl" />, description: "Intelligent conversational agents that provide 24/7 customer support and engagement.", features: ["NLP integration", "Multi-channel support", "Seamless handoff", "Analytics dashboard"], image: w1 },
    { title: "AI Customer Support", icon: <FaCheckCircle className="text-blue-600 text-2xl" />, description: "Automate and enhance customer service with advanced AI assistance.", features: ["24/7 Availability", "Ticket Routing", "Sentiment Analysis", "Knowledge Base Sync"], image: w2 },
    { title: "WhatsApp AI Chatbot", icon: <FaMobile className="text-blue-600 text-2xl" />, description: "Automated business messaging and customer service directly on WhatsApp.", features: ["Automated replies", "Order tracking", "Broadcast campaigns", "CRM integration"], image: w3 },
    { title: "AI Voice Agents", icon: <FaRobot className="text-blue-600 text-2xl" />, description: "Conversational voice AI that can handle inbound and outbound calls.", features: ["Natural Voice", "Call Routing", "Appointment Booking", "Speech-to-Text"], image: w4 },
    { title: "AI-Powered Business Automation", icon: <FaCogs className="text-blue-600 text-2xl" />, description: "Autonomous AI agents designed to execute complex business workflows independently.", features: ["Task automation", "Decision making", "System integrations", "Continuous learning"], image: w5 },
    { title: "Generative AI Integration", icon: <FaLightbulb className="text-blue-600 text-2xl" />, description: "Custom solutions leveraging generative AI and large language models.", features: ["Document processing", "Content generation", "Code assistance", "Image creation"], image: w6 },
    { title: "OpenAI API Integration", icon: <FaCode className="text-blue-600 text-2xl" />, description: "Seamless integration of OpenAI's powerful language models into your applications.", features: ["GPT-4 Access", "Fine-tuning", "Embeddings", "Token Optimization"], image: w1 },
    { title: "AI Document Processing", icon: <FaDesktop className="text-blue-600 text-2xl" />, description: "Automated data extraction and processing from unstructured documents.", features: ["OCR technology", "Invoice parsing", "Contract analysis", "Data validation"], image: w2 },
    { title: "AI Content Generation", icon: <FaPaintBrush className="text-blue-600 text-2xl" />, description: "Automate the creation of high-quality written and multimedia content.", features: ["SEO Optimization", "Tone Matching", "Bulk Generation", "Multilingual Support"], image: w3 },
    { title: "AI Image Generation Integration", icon: <FaSyncAlt className="text-blue-600 text-2xl" />, description: "Integrate powerful AI image generators like DALL-E and Midjourney into your workflow.", features: ["DALL-E API", "Stable Diffusion", "Batch Processing", "Style Transfer"], image: w4 },
    { title: "AI Recommendation Systems", icon: <FaChartLine className="text-blue-600 text-2xl" />, description: "Personalized recommendation engines to boost sales and user engagement.", features: ["Collaborative Filtering", "Real-time Processing", "A/B Testing", "Behavior Tracking"], image: w5 },
    { title: "AI-powered CRM", icon: <FaUsers className="text-blue-600 text-2xl" />, description: "Intelligent customer relationship management with predictive analytics.", features: ["Lead Scoring", "Churn Prediction", "Automated Outreach", "Sales Forecasting"], image: w6 },
    { title: "AI-powered Analytics", icon: <FaChartLineIcon className="text-blue-600 text-2xl" />, description: "Predictive analytics and business intelligence driven by machine learning.", features: ["Sales forecasting", "Anomaly detection", "Visual dashboards", "Trend Analysis"], image: w1 },
    { title: "Custom AI Solutions", icon: <FaRocket className="text-blue-600 text-2xl" />, description: "Tailor-made artificial intelligence solutions to solve your unique business challenges.", features: ["Custom Architecture", "Proprietary Models", "Secure Deployment", "Ongoing Training"], image: w2 }
  ];

  const serviceImages = {
    'default': app2,
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.image }), {})
  };

  const serviceDescriptions = {
    'default': "Automate repetitive work, qualify leads, analyze data, and build intelligent digital experiences with our practical AI solutions.",
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.description }), {})
  };`;

const servicesRegex = /const services = \[\s*\{[\s\S]*?\};\s*const serviceDescriptions = \{[\s\S]*?\};/m;
if (servicesRegex.test(content)) {
  content = content.replace(servicesRegex, newServices);
} else {
  console.log("Could not find the services definition block!");
}

const ourOfferingsRegex = /<h3 className="text-2xl font-bold text-red-500 mb-6">OUR OFFERINGS<\/h3>\s*<div className="space-y-4">[\s\S]*?<\/div>\s*<\/div>\s*\{\/\* Right Image \*\/\}/m;
const newOurOfferings = `<h3 className="text-2xl font-bold text-red-500 mb-6">OUR OFFERINGS</h3>
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

            {/* Right Image */}`;

if (ourOfferingsRegex.test(content)) {
  content = content.replace(ourOfferingsRegex, newOurOfferings);
} else {
  console.log("Could not find OUR OFFERINGS block");
}

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("AIAutomation refactored successfully!");
