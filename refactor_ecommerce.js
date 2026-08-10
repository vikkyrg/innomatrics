const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/Ecommerce.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const newServices = `const services = [
    { title: "E-Commerce Website", icon: <FaShoppingCart className="text-blue-600 text-2xl" />, description: "Bespoke online stores tailored to your brand with advanced product catalogs.", features: ["Custom UI/UX", "Product filtering", "Cart optimization", "Mobile responsiveness"], image: w1 },
    { title: "Multi-Vendor Marketplace", icon: <FaUsers className="text-blue-600 text-2xl" />, description: "Complex platforms allowing multiple sellers to manage their own products and sales.", features: ["Vendor dashboards", "Commission management", "Seller payouts", "Product moderation"], image: w2 },
    { title: "B2B E-Commerce", icon: <FaBuilding className="text-blue-600 text-2xl" />, description: "Specialized commerce platforms tailored for wholesale business-to-business operations.", features: ["Bulk pricing", "Quote requests", "Account hierarchies", "Re-ordering logic"], image: w3 },
    { title: "B2C E-Commerce", icon: <FaShoppingCart className="text-blue-600 text-2xl" />, description: "Direct-to-consumer retail platforms optimized for maximum conversion and speed.", features: ["Personalization", "Loyalty Programs", "Abandoned Cart Recovery", "Social Proof"], image: w4 },
    { title: "D2C E-Commerce", icon: <FaRocket className="text-blue-600 text-2xl" />, description: "Direct-to-consumer platforms for modern brands bypassing traditional retail channels.", features: ["Brand storytelling", "Subscription boxes", "Influencer tracking", "Omnichannel sync"], image: w5 },
    { title: "Mobile Commerce Apps", icon: <FaMobile className="text-blue-600 text-2xl" />, description: "Dedicated mobile shopping apps for iOS and Android to boost customer retention.", features: ["Push notifications", "One-click checkout", "Wishlists", "App analytics"], image: w6 },
    { title: "Shopify Development", icon: <FaCode className="text-blue-600 text-2xl" />, description: "Custom theme development and app integration for the Shopify ecosystem.", features: ["Liquid templating", "Custom storefronts", "App development", "Store migration"], image: w1 },
    { title: "WooCommerce Development", icon: <FaPlug className="text-blue-600 text-2xl" />, description: "Powerful WordPress-based e-commerce solutions with complete ownership.", features: ["Plugin development", "Custom themes", "Performance tuning", "Headless WP"], image: w2 },
    { title: "Custom E-Commerce", icon: <FaDesktop className="text-blue-600 text-2xl" />, description: "Fully bespoke e-commerce architectures built from scratch for unique requirements.", features: ["Microservices", "React/Node.js stack", "Elastic search", "Custom workflows"], image: w3 },
    { title: "Payment Gateway Integration", icon: <FaLock className="text-blue-600 text-2xl" />, description: "Secure integration of multiple payment processors for smooth transactions.", features: ["Razorpay/Stripe", "Multi-currency", "EMI/BNPL options", "Fraud detection"], image: w4 },
    { title: "Delivery Integration", icon: <FaSyncAlt className="text-blue-600 text-2xl" />, description: "Automated logistics and shipping carrier integration for seamless fulfillment.", features: ["Real-time rates", "Label generation", "Tracking portals", "Return management"], image: w5 },
    { title: "Inventory Integration", icon: <FaDatabase className="text-blue-600 text-2xl" />, description: "Connecting your storefront with ERP and inventory management systems.", features: ["Real-time sync", "Multi-warehouse", "Shipping APIs", "Order tracking"], image: w6 },
    { title: "Marketplace Admin Panel", icon: <FaChartLine className="text-blue-600 text-2xl" />, description: "Comprehensive back-office dashboards to manage the entire marketplace ecosystem.", features: ["Sales reports", "Vendor verification", "Dispute resolution", "Marketing tools"], image: w1 }
  ];

  const serviceImages = {
    'default': app2,
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.image }), {})
  };

  const serviceDescriptions = {
    'default': "We build high-converting, lightning-fast eCommerce stores and multi-vendor marketplaces that drive massive sales.",
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
console.log("Ecommerce refactored successfully!");
