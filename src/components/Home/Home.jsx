import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import Industry from "./components/Industry/Industry";

import c1 from "../../assets/portfolioLogo/MRItow.jpg";
import c2 from "../../assets/portfolioLogo/RoyalKing.jpg";
import c3 from "../../assets/portfolioLogo/chanconst.jpg";
import c4 from "../../assets/portfolioLogo/dstudio.jpg";
import c5 from "../../assets/portfolioLogo/goldkey.jpg";
import c6 from "../../assets/portfolioLogo/infinitytravels.jpg";
import c7 from "../../assets/portfolioLogo/ngo.jpg";
import c8 from "../../assets/portfolioLogo/osprezt.jpg";
import c9 from "../../assets/portfolioLogo/skb.jpg";
import c10 from "../../assets/portfolioLogo/thriupathiTours.jpg";
import c11 from "../../assets/portfolioLogo/vklights.jpg";

import ImageCardContainer from "../Services/components/Carousel/ImageCardContainer";
import OurVision from "./components/OurVision/OurVision";
import OurMission from "./components/OurMission/OurMission";
import ClientsCarousel from "../common/ClientsLogo/ClientsCarousel";
import Join from "./components/JoinTeam/Join";
import CountRise from "./components/CountRise/CountRise";
import WhatsappFloatingIcon from "./WhatsappFloatingIcon";
import AnimatedSectionBackground from "../common/AnimatedSectionBackground";

const Home = forwardRef((props, ref) => {
  const clientLogos = [
    { image: c1 }, { image: c2 }, { image: c3 }, { image: c4 },
    { image: c5 }, { image: c6 }, { image: c7 }, { image: c8 },
    { image: c9 }, { image: c10 }, { image: c11 },
  ];

  return (
    <div ref={ref} className="overflow-hidden bg-white">
      {/* 1. Hero Section */}
      <HeroSlider />

      {/* 2. Trust Bar (Clients) */}
      <motion.div 
        className="bg-secondary-50 border-b border-secondary-200 py-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom relative z-10">
          <p className="text-center text-xs font-bold text-secondary-500 tracking-[0.2em] uppercase mb-8">
            Trusted by innovative enterprises worldwide
          </p>
          <div className="max-w-6xl mx-auto">
            <ClientsCarousel clientLogos={clientLogos} />
          </div>
        </div>
      </motion.div>

      {/* 3. Value Proposition */}
      <div 
        className="section-padding border-b border-black/40 relative bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px] z-0"></div>
        <AnimatedSectionBackground variant="default" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left: Sticky Header */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <span className="text-primary-400 font-bold uppercase tracking-widest text-xs mb-4 block">
                  Why Innomatrics
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                  Engineered for<br/>Enterprise Scale.
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed font-normal mb-8 max-w-md">
                  We bring together deep industry expertise, technological innovation, and an unwavering dedication to delivering exceptional business outcomes for global enterprises.
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 text-primary-400 font-bold uppercase tracking-widest text-sm hover:text-primary-300 transition-colors">
                  Read our story
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </div>
            </div>

            {/* Right: Vertical Features list */}
            <div className="lg:col-span-7">
              <div className="flex flex-col border-t border-white/10">
                
                {/* Feature 1 */}
                <motion.div 
                  className="py-12 border-b border-white/10 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                    <div className="text-4xl font-extrabold text-white/30 group-hover:text-primary-400 transition-colors font-mono">01</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">World-Class Talent</h3>
                      <p className="text-gray-300 leading-relaxed font-normal text-lg">
                        Our global team consists of highly skilled engineers, designers, and strategists with years of experience delivering scalable enterprise solutions. We don't just write code; we build architectures designed to last.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Feature 2 */}
                <motion.div 
                  className="py-12 border-b border-white/10 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                    <div className="text-4xl font-extrabold text-white/30 group-hover:text-primary-400 transition-colors font-mono">02</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Uncompromising Quality</h3>
                      <p className="text-gray-300 leading-relaxed font-normal text-lg">
                        We implement rigorous engineering standards and continuous testing protocols to ensure flawless performance and enterprise-grade security. Every deployment is hardened and battle-tested.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Feature 3 */}
                <motion.div 
                  className="py-12 border-b border-white/10 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                    <div className="text-4xl font-extrabold text-white/30 group-hover:text-primary-400 transition-colors font-mono">03</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Rapid Delivery</h3>
                      <p className="text-gray-300 leading-relaxed font-normal text-lg">
                        Leveraging agile methodologies, we accelerate time-to-market without compromising on architecture, scalability, or code quality. Move fast and build robustly.
                      </p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 4. Capabilities Section */}
      <motion.div 
        className="section-padding bg-secondary-50 border-t border-secondary-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-800 font-bold uppercase tracking-widest text-xs mb-4 block">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary-900 mb-6 tracking-tight">
              End-to-End Digital Solutions
            </h2>
            <p className="text-lg md:text-xl text-secondary-600 leading-relaxed">
              We engineer scalable platforms and robust digital ecosystems designed to accelerate enterprise growth and modernization.
            </p>
          </motion.div>
        </div>
        <ImageCardContainer />
      </motion.div>

      {/* 5. Industry Section */}
      <Industry />

      {/* 6. Impact / Stats Section */}
      <CountRise />

      {/* 7. Corporate Overview (Vision/Mission) */}
      <div 
        className="section-padding relative bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px] z-0"></div>
        <AnimatedSectionBackground variant="industries" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-primary-400 font-bold uppercase tracking-widest text-xs mb-4 block">
              Corporate Overview
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Our Purpose & Direction
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-5xl mx-auto shadow-2xl rounded-2xl overflow-hidden">
            <div>
              <OurVision />
            </div>
            <div>
              <OurMission />
            </div>
          </div>
        </div>
      </div>

      {/* 8. Careers / Join */}
      <Join />

      {/* WhatsApp Floating Icon */}
      <WhatsappFloatingIcon />
    </div>
  );
});

export default Home;
