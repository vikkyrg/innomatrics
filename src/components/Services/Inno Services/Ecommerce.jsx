import React, { forwardRef, useEffect, useState } from "react";
import { FaCheckCircle, FaSyncAlt, FaPlug, FaCode, FaDesktop, FaMobile, FaShoppingCart, FaDatabase, FaCloud, FaLock, FaChartLine, FaUsers, FaShieldAlt, FaRocket, FaLightbulb, FaBuilding, FaChartLine as FaChartLineIcon, FaCogs, FaRobot, FaPaintBrush, FaBriefcase, FaReact, FaNodeJs, FaAngular, FaVuejs, FaPhp, FaPython } from "react-icons/fa";
import heroImg from "../../../assets/services_hero/hero_ecommerce.png";

import app from "../../../assets/services_cards/Ecommerce_cs1.jpg";
import app2 from "../../../assets/services_cards/Ecommerce_cs2.jpg";
import w1 from "../../../assets/services_cards/Ecommerce_w1.jpg";
import w2 from "../../../assets/services_cards/Ecommerce_w2.jpg";
import w3 from "../../../assets/services_cards/Ecommerce_w3.jpg";
import w4 from "../../../assets/services_cards/Ecommerce_w4.jpg";
import w5 from "../../../assets/services_cards/Ecommerce_w5.jpg";
import w6 from "../../../assets/services_cards/Ecommerce_w6.jpg";
import introImg from "../../../assets/services_cards/Ecommerce_intro.jpg";
import diffImg from "../../../assets/services_cards/Ecommerce_diff.jpg";


import "./Ecommerce.css";
import { Link } from "react-router-dom";


import { SiMongodb, SiMysql } from "react-icons/si";
import ec1 from "../../../assets/ecommerceServices/ec_1.webp";
import ec2 from "../../../assets/ecommerceServices/ec_2.webp";
import ec3 from "../../../assets/ecommerceServices/ec_3.webp";
import ec4 from "../../../assets/ecommerceServices/ec_4.webp";
import ec5 from "../../../assets/ecommerceServices/ec_5.webp";
import ec6 from "../../../assets/ecommerceServices/ec_6.webp";
import ec7 from "../../../assets/ecommerceServices/ec_7.webp";
import ec8 from "../../../assets/ecommerceServices/ec_8.webp";
import ec9 from "../../../assets/ecommerceServices/ec_9.webp";
import ec10 from "../../../assets/ecommerceServices/ec_10.webp";
import ec11 from "../../../assets/ecommerceServices/ec_11.webp";
import ec12 from "../../../assets/ecommerceServices/ec_12.webp";
import ec13 from "../../../assets/ecommerceServices/ec_13.webp";

import b2bImg from "../../../assets/webServices/B2B E-Commerce.jpg";
import b2cImg from "../../../assets/webServices/B2C E-Commerce.jpg";
import d2cImg from "../../../assets/webServices/D2C E-Commerce.jpg";
import deliveryImg from "../../../assets/webServices/Delivery Integration.jpg";
import ecWebImg from "../../../assets/webServices/E-Commerce Website.jpg";
import vendorImg from "../../../assets/webServices/Multi-Vendor Marketplace.jpg";
import paymentImg from "../../../assets/webServices/Payment Gateway Integration.jpg";

import inventoryImg from "../../../assets/webServices/Inventory Integration.jpg";

const ServicesCard = ({ title, description, image }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 m-4 flex-1 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100">
    <img src={image} className="w-full h-32 object-contain mb-4" alt={title} />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Ecommerce = forwardRef((props, ref) => {
  const [hoveredService, setHoveredService] = useState(null);
  const technologies = [
    { name: "Shopify", icon: <FaShoppingCart className="text-blue-600 text-2xl" /> },
    { name: "WooCommerce", icon: <FaShoppingCart className="text-blue-600 text-2xl" /> },
    { name: "Magento", icon: <FaShoppingCart className="text-blue-600 text-2xl" /> },
    { name: "Stripe", icon: <FaCode className="text-blue-600 text-2xl" /> },
    { name: "PayPal", icon: <FaCode className="text-blue-600 text-2xl" /> },
    { name: "React", icon: <FaDesktop className="text-blue-600 text-2xl" /> },
    { name: "Node.js", icon: <FaCode className="text-blue-600 text-2xl" /> },
    { name: "Redis", icon: <FaDatabase className="text-blue-600 text-2xl" /> },
  ];

  const services = [
    { title: "E-Commerce Website", icon: <FaShoppingCart className="text-blue-600 text-2xl" />, description: "Bespoke online stores tailored to your brand with advanced product catalogs.", features: ["Custom UI/UX", "Product filtering", "Cart optimization", "Mobile responsiveness"], image: ecWebImg },
    { title: "Multi-Vendor Marketplace", icon: <FaUsers className="text-blue-600 text-2xl" />, description: "Complex platforms allowing multiple sellers to manage their own products and sales.", features: ["Vendor dashboards", "Commission management", "Seller payouts", "Product moderation"], image: vendorImg },
    { title: "B2B E-Commerce", icon: <FaBuilding className="text-blue-600 text-2xl" />, description: "Specialized commerce platforms tailored for wholesale business-to-business operations.", features: ["Bulk pricing", "Quote requests", "Account hierarchies", "Re-ordering logic"], image: b2bImg },
    { title: "B2C E-Commerce", icon: <FaShoppingCart className="text-blue-600 text-2xl" />, description: "Direct-to-consumer retail platforms optimized for maximum conversion and speed.", features: ["Personalization", "Loyalty Programs", "Abandoned Cart Recovery", "Social Proof"], image: b2cImg },
    { title: "D2C E-Commerce", icon: <FaRocket className="text-blue-600 text-2xl" />, description: "Direct-to-consumer platforms for modern brands bypassing traditional retail channels.", features: ["Brand storytelling", "Subscription boxes", "Influencer tracking", "Omnichannel sync"], image: d2cImg },
    { title: "Mobile Commerce Apps", icon: <FaMobile className="text-blue-600 text-2xl" />, description: "Dedicated mobile shopping apps for iOS and Android to boost customer retention.", features: ["Push notifications", "One-click checkout", "Wishlists", "App analytics"], image: ec6 },
    { title: "Shopify Development", icon: <FaCode className="text-blue-600 text-2xl" />, description: "Custom theme development and app integration for the Shopify ecosystem.", features: ["Liquid templating", "Custom storefronts", "App development", "Store migration"], image: ec7 },
    { title: "WooCommerce Development", icon: <FaPlug className="text-blue-600 text-2xl" />, description: "Powerful WordPress-based e-commerce solutions with complete ownership.", features: ["Plugin development", "Custom themes", "Performance tuning", "Headless WP"], image: ec8 },
    { title: "Custom E-Commerce", icon: <FaDesktop className="text-blue-600 text-2xl" />, description: "Fully bespoke e-commerce architectures built from scratch for unique requirements.", features: ["Microservices", "React/Node.js stack", "Elastic search", "Custom workflows"], image: ec9 },
    { title: "Payment Gateway Integration", icon: <FaLock className="text-blue-600 text-2xl" />, description: "Secure integration of multiple payment processors for smooth transactions.", features: ["Razorpay/Stripe", "Multi-currency", "EMI/BNPL options", "Fraud detection"], image: paymentImg },
    { title: "Delivery Integration", icon: <FaSyncAlt className="text-blue-600 text-2xl" />, description: "Automated logistics and shipping carrier integration for seamless fulfillment.", features: ["Real-time rates", "Label generation", "Tracking portals", "Return management"], image: deliveryImg },
    { title: "Inventory Integration", icon: <FaDatabase className="text-blue-600 text-2xl" />, description: "Connecting your storefront with ERP and inventory management systems.", features: ["Real-time sync", "Multi-warehouse", "Shipping APIs", "Order tracking"], image: inventoryImg },
    { title: "Marketplace Admin Panel", icon: <FaChartLine className="text-blue-600 text-2xl" />, description: "Comprehensive back-office dashboards to manage the entire marketplace ecosystem.", features: ["Sales reports", "Vendor verification", "Dispute resolution", "Marketing tools"], image: ec13 }
  ];

  const serviceImages = {
    'default': app2,
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.image }), {})
  };

  const serviceDescriptions = {
    'default': "We build high-converting, lightning-fast eCommerce stores and multi-vendor marketplaces that drive massive sales.",
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
              E-Commerce Development Services
            </h1>
            <p className="text-xl text-white max-w-1xl mt-2 text-left">
              Build robust online stores and multi-vendor marketplaces with seamless shopping experiences.
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
                alt={hoveredService ? `${hoveredService} Services` : "E-Commerce Development Services"}
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
                    <h4 className="text-xl font-semibold mb-4">Conversion Optimization</h4>
                    <p className="text-blue-100 mb-4">
                      Increased average order value and checkout conversions by 35%.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">35%</span>
                      <span className="text-sm">Conversion Boost</span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">High-Traffic Ready</h4>
                    <p className="text-blue-100 mb-4">
                      Handled 10,000+ orders per minute during peak flash sales securely.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">10k</span>
                      <span className="text-sm">Peak Orders/Min</span>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Cart Abandonment</h4>
                    <p className="text-blue-100 mb-4">
                      Reduced cart abandonment by 40% through streamlined UX.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">40%</span>
                      <span className="text-sm">Less Abandonment</span>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/20 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-semibold mb-4">Inventory Sync</h4>
                    <p className="text-blue-100 mb-4">
                      Real-time multi-channel inventory synchronization with 0 lag.
                    </p>
                    <div className="flex items-center gap-2 text-blue-200">
                      <span className="text-3xl font-bold">0ms</span>
                      <span className="text-sm">Sync Delay</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Stats Section */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">100+</div>
                  <div className="text-gray-600 mt-2">Stores Launched</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">100+</div>
                  <div className="text-gray-600 mt-2">E-commerce Platforms Built</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600 mt-2">Payment Gateways</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">99%</div>
                  <div className="text-gray-600 mt-2">Cart Success Rate</div>
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
                  Innomatrics Tech specializes in high-conversion, scalable multi-vendor and B2B eCommerce architectures.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Digital Innovation</h2>
                <p className="text-lg text-gray-800">
                  Creating seamless omni-channel shopping experiences across web, mobile apps, and social platforms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-orange-500 mb-4">Technology Assets</h2>
                <p className="text-lg text-gray-800">
                  Integrating advanced payment gateways, headless commerce engines, and real-time inventory systems.
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
                Accelerate Your Online Sales
              </h2>
              <div className="w-24 h-1 bg-blue-600 mb-6"></div>
              <p className="text-xl  text-gray-600">
                From custom storefronts to complex B2B platforms, Innomatrics Tech delivers end-to-end e-commerce solutions designed for high conversion, maximum security, and rapid scalability.
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
              Our Comprehensive E-Commerce Development Services
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
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-xl">Stores Launched</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-xl">E-commerce Platforms Built</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-xl">Payment Gateways</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-xl">Cart Success Rate</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Ready to Boost Your Sales?
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

export default Ecommerce;
