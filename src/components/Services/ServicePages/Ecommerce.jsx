import React, { forwardRef } from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import SectionHeader from "../components/SectionHeader";
import {
  FaShoppingCart,
  FaUsers,
  FaBuilding,
  FaRocket,
  FaMobile,
  FaCode,
  FaPlug,
  FaDesktop,
  FaLock,
  FaSyncAlt,
  FaDatabase,
  FaChartLine,
} from "react-icons/fa";
import heroImg from "../../../assets/services_hero/hero_ecommerce.png";
import b2bImg from "../../../assets/webServices/B2B E-Commerce.jpg";
import b2cImg from "../../../assets/webServices/B2C E-Commerce.jpg";
import d2cImg from "../../../assets/webServices/D2C E-Commerce.jpg";
import deliveryImg from "../../../assets/webServices/Delivery Integration.jpg";
import ecWebImg from "../../../assets/webServices/E-Commerce Website.jpg";
import vendorImg from "../../../assets/webServices/Multi-Vendor Marketplace.jpg";
import paymentImg from "../../../assets/webServices/Payment Gateway Integration.jpg";
import inventoryImg from "../../../assets/webServices/Inventory Integration.jpg";
import ec6 from "../../../assets/ecommerceServices/ec_6.webp";
import ec7 from "../../../assets/ecommerceServices/ec_7.webp";
import ec8 from "../../../assets/ecommerceServices/ec_8.webp";
import ec9 from "../../../assets/ecommerceServices/ec_9.webp";
import ec13 from "../../../assets/ecommerceServices/ec_13.webp";

const Ecommerce = forwardRef((props, ref) => {
  const data = {
    breadcrumbTitle: "E-Commerce",
    title: "E-Commerce Development Services",
    heroDescription: "Build robust online stores and multi-vendor marketplaces with seamless shopping experiences.",
    heroImage: heroImg,
    primaryCTA: "Discuss Your Project",
    primaryLink: "/contact",
    overview: {
      title: "Accelerate Your Online Sales",
      description: "From custom storefronts to complex B2B platforms, Innomatrics Tech delivers end-to-end e-commerce solutions designed for high conversion, maximum security, and rapid scalability. We build high-converting, lightning-fast eCommerce stores and multi-vendor marketplaces that drive massive sales."
    },
    services: [
      {
        icon: <FaShoppingCart className="w-8 h-8" />,
        title: "E-Commerce Website",
        description: "Bespoke online stores tailored to your brand with advanced product catalogs.",
        list: ["Custom UI/UX", "Product filtering", "Cart optimization", "Mobile responsiveness"],
        image: ecWebImg
      },
      {
        icon: <FaUsers className="w-8 h-8" />,
        title: "Multi-Vendor Marketplace",
        description: "Complex platforms allowing multiple sellers to manage their own products and sales.",
        list: ["Vendor dashboards", "Commission management", "Seller payouts", "Product moderation"],
        image: vendorImg
      },
      {
        icon: <FaBuilding className="w-8 h-8" />,
        title: "B2B E-Commerce",
        description: "Specialized commerce platforms tailored for wholesale business-to-business operations.",
        list: ["Bulk pricing", "Quote requests", "Account hierarchies", "Re-ordering logic"],
        image: b2bImg
      },
      {
        icon: <FaShoppingCart className="w-8 h-8" />,
        title: "B2C E-Commerce",
        description: "Direct-to-consumer retail platforms optimized for maximum conversion and speed.",
        list: ["Personalization", "Loyalty Programs", "Abandoned Cart Recovery", "Social Proof"],
        image: b2cImg
      },
      {
        icon: <FaRocket className="w-8 h-8" />,
        title: "D2C E-Commerce",
        description: "Direct-to-consumer platforms for modern brands bypassing traditional retail channels.",
        list: ["Brand storytelling", "Subscription boxes", "Influencer tracking", "Omnichannel sync"],
        image: d2cImg
      },
      {
        icon: <FaMobile className="w-8 h-8" />,
        title: "Mobile Commerce Apps",
        description: "Dedicated mobile shopping apps for iOS and Android to boost customer retention.",
        list: ["Push notifications", "One-click checkout", "Wishlists", "App analytics"],
        image: ec6
      },
      {
        icon: <FaCode className="w-8 h-8" />,
        title: "Shopify Development",
        description: "Custom theme development and app integration for the Shopify ecosystem.",
        list: ["Liquid templating", "Custom storefronts", "App development", "Store migration"],
        image: ec7
      },
      {
        icon: <FaPlug className="w-8 h-8" />,
        title: "WooCommerce Development",
        description: "Powerful WordPress-based e-commerce solutions with complete ownership.",
        list: ["Plugin development", "Custom themes", "Performance tuning", "Headless WP"],
        image: ec8
      },
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "Custom E-Commerce",
        description: "Fully bespoke e-commerce architectures built from scratch for unique requirements.",
        list: ["Microservices", "React/Node.js stack", "Elastic search", "Custom workflows"],
        image: ec9
      },
      {
        icon: <FaLock className="w-8 h-8" />,
        title: "Payment Gateway Integration",
        description: "Secure integration of multiple payment processors for smooth transactions.",
        list: ["Razorpay/Stripe", "Multi-currency", "EMI/BNPL options", "Fraud detection"],
        image: paymentImg
      },
      {
        icon: <FaSyncAlt className="w-8 h-8" />,
        title: "Delivery Integration",
        description: "Automated logistics and shipping carrier integration for seamless fulfillment.",
        list: ["Real-time rates", "Label generation", "Tracking portals", "Return management"],
        image: deliveryImg
      },
      {
        icon: <FaDatabase className="w-8 h-8" />,
        title: "Inventory Integration",
        description: "Connecting your storefront with ERP and inventory management systems.",
        list: ["Real-time sync", "Multi-warehouse", "Shipping APIs", "Order tracking"],
        image: inventoryImg
      },
      {
        icon: <FaChartLine className="w-8 h-8" />,
        title: "Marketplace Admin Panel",
        description: "Comprehensive back-office dashboards to manage the entire marketplace ecosystem.",
        list: ["Sales reports", "Vendor verification", "Dispute resolution", "Marketing tools"],
        image: ec13
      }
    ],
    technologies: [
      { name: "Shopify", icon: <FaShoppingCart /> },
      { name: "WooCommerce", icon: <FaShoppingCart /> },
      { name: "Magento", icon: <FaShoppingCart /> },
      { name: "Stripe", icon: <FaCode /> },
      { name: "PayPal", icon: <FaCode /> },
      { name: "React", icon: <FaDesktop /> },
      { name: "Node.js", icon: <FaCode /> },
      { name: "Redis", icon: <FaDatabase /> },
    ],
    whyUs: [
      { value: "100+", label: "Stores Launched" },
      { value: "100+", label: "Platforms Built" },
      { value: "50+", label: "Payment Gateways" },
      { value: "99%", label: "Cart Success Rate" }
    ]
  };

  const valueDelivered = [
    {
      title: "Conversion Optimization",
      desc: "Increased average order value and checkout conversions by 35%.",
      metric: "35%",
      label: "Conversion Boost"
    },
    {
      title: "High-Traffic Ready",
      desc: "Handled 10,000+ orders per minute during peak flash sales securely.",
      metric: "10k",
      label: "Peak Orders/Min"
    },
    {
      title: "Cart Abandonment",
      desc: "Reduced cart abandonment by 40% through streamlined UX.",
      metric: "40%",
      label: "Less Abandonment"
    },
    {
      title: "Inventory Sync",
      desc: "Real-time multi-channel inventory synchronization with 0 lag.",
      metric: "0ms",
      label: "Sync Delay"
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

export default Ecommerce;
