const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/SaaSProduct.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const newServices = `const services = [
    { title: "SaaS Application Development", icon: <FaCloud className="text-blue-600 text-2xl" />, description: "End-to-end development of scalable, multi-tenant software-as-a-service platforms.", features: ["Multi-tenant architecture", "Microservices", "High availability", "Cloud deployment"], image: w1 },
    { title: "Multi-Tenant SaaS", icon: <FaUsers className="text-blue-600 text-2xl" />, description: "Architecture designed to serve multiple customers from a single shared instance.", features: ["Data Isolation", "Resource Pooling", "Custom Branding", "Scalability"], image: w2 },
    { title: "Subscription-Based Software", icon: <FaSyncAlt className="text-blue-600 text-2xl" />, description: "Software platforms powered by recurring subscription models and billing.", features: ["Plan Management", "Trial Periods", "Automated Billing", "Upgrade paths"], image: w3 },
    { title: "SaaS Admin Panels", icon: <FaDesktop className="text-blue-600 text-2xl" />, description: "Intuitive dashboards for administrators to monitor platform health and metrics.", features: ["Real-time metrics", "Revenue tracking", "System health monitoring", "User support tools"], image: w4 },
    { title: "SaaS Mobile Apps", icon: <FaMobile className="text-blue-600 text-2xl" />, description: "Companion mobile applications for your SaaS platform to enable on-the-go access.", features: ["Cross-platform sync", "Push notifications", "Offline capabilities", "Biometric security"], image: w5 },
    { title: "Payment & Subscription Integration", icon: <FaShoppingCart className="text-blue-600 text-2xl" />, description: "Seamless implementation of recurring billing and payment gateways.", features: ["Stripe/PayPal", "Tiered pricing", "Usage-based billing", "Invoice automation"], image: w6 },
    { title: "Tenant Management", icon: <FaBuilding className="text-blue-600 text-2xl" />, description: "Robust admin portals for managing organizations and client instances.", features: ["Tenant Provisioning", "Usage Analytics", "Data Export", "Account Suspension"], image: w1 },
    { title: "Role-Based Access", icon: <FaLock className="text-blue-600 text-2xl" />, description: "Granular security permissions for complex organizational hierarchies.", features: ["RBAC", "Custom Permissions", "Audit Logs", "SSO Integration"], image: w2 },
    { title: "SaaS API Development", icon: <FaPlug className="text-blue-600 text-2xl" />, description: "Secure and well-documented APIs to allow external integrations with your product.", features: ["REST/GraphQL APIs", "Rate limiting", "API keys management", "Developer documentation"], image: w3 },
    { title: "Cloud-Based Business Platforms", icon: <FaCloud className="text-blue-600 text-2xl" />, description: "Comprehensive web platforms that digitize entire business operations.", features: ["High Availability", "Auto-scaling", "Disaster Recovery", "Global CDN"], image: w4 }
  ];

  const serviceImages = {
    'default': app2,
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.image }), {})
  };

  const serviceDescriptions = {
    'default': "We build scalable, secure, and highly-performant SaaS platforms designed to handle thousands of concurrent users.",
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
console.log("SaaSProduct refactored successfully!");
