import React, { forwardRef, useEffect } from "react";
import { motion } from "framer-motion";
import aboutMe from "../../assets/aboutMe.jpeg";
import OurVision from "../Home/components/OurVision/OurVision";
import OurMission from "../Home/components/OurMission/OurMission";
import innovation from "../../assets/mission1.jpg";
import digiTransform from "../../assets/mission2.jpg";
import quality from "../../assets/mission3.jpg";
import ClientsCarousel from "../common/ClientsLogo/ClientsCarousel";
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
import aboutCorporate from '../../assets/aboutCorporate.jpg'

const About = forwardRef((props, ref) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const clientLogos = [
    {
      image: c1,
    },
    {
      image: c2,
    },
    {
      image: c3,
    },
    {
      image: c4,
    },
    {
      image: c5,
    },
    {
      image: c6,
    },
    {
      image: c7,
    },
    {
      image: c8,
    },
    {
      image: c9,
    },
    {
      image: c10,
    },
    {
      image: c11,
    },
  ];
  return (
    <>
      <section className="relative min-h-[500px] flex items-center bg-primary-900 border-b border-primary-800" ref={ref}>
        <div className="absolute inset-0 bg-primary-900 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
        </div>
        <div className="container-custom relative z-10 py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-block w-fit px-2 py-1 bg-primary-800 text-primary-200 text-xs font-semibold tracking-widest uppercase mb-8 border border-primary-700">
              Corporate Overview
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-primary-200 leading-relaxed font-normal">
              Driving digital transformation through innovative technology solutions. We engineer the future of enterprise software.
            </p>
          </div>
        </div>
      </section>

      <div className="section-padding bg-secondary-50 border-b border-secondary-200">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <span className="text-primary-800 font-bold uppercase tracking-widest text-xs mb-4 block">
                The Foundation
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary-900 tracking-tight leading-tight mb-8">
                Welcome to Innomatrics Technologies
              </h2>
              <div className="space-y-6">
                <p className="text-base text-secondary-600 leading-relaxed font-normal">
                  Founded on the belief that technology has the power to revolutionize
                  businesses, Innomatrics Technologies emerged as a brainchild of
                  visionary minds dedicated to driving meaningful change in the
                  digital landscape. Since our inception, we have been on a mission to
                  empower businesses of all sizes to thrive in the digital age.
                </p>
                <p className="text-base text-secondary-600 leading-relaxed font-normal">
                  We understand the unique challenges of the digital sphere and
                  provide tailored solutions to meet your specific needs and
                  objectives. Whether you're a startup or an established enterprise,
                  our team of experts is dedicated to guiding you every step of the
                  way.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 group cursor-pointer">
              <div className="relative border border-secondary-200 bg-white p-2 overflow-hidden">
                <img
                  src={aboutMe}
                  alt="About Us"
                  className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission integrated from Home */}
      <div className="section-padding bg-white border-b border-secondary-200">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-primary-800 font-bold uppercase tracking-widest text-xs mb-4 block">
              Core Tenets
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary-900 mb-6 tracking-tight">
              Our Vision & Mission
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-5xl mx-auto border border-secondary-200">
            <div>
              <OurVision />
            </div>
            <div>
              <OurMission />
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-secondary-50 border-b border-secondary-200">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2 group cursor-pointer">
              <div className="relative border border-secondary-200 bg-white p-2 overflow-hidden">
                <img
                  src={aboutCorporate}
                  alt="Corporate Diversity"
 className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-primary-800 font-bold uppercase tracking-widest text-xs mb-4 block">
                Diversity, Equity & Inclusion
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary-900 tracking-tight leading-tight mb-8">
                Fostering Collaboration
              </h2>
              <div className="space-y-6">
                <p className="text-base text-secondary-600 leading-relaxed font-normal">
                  At Innomatrics Technologies, we firmly believe that diversity,
                  equity, and inclusion serve as vital catalysts for fostering
                  collaboration and nurturing creativity. As a functionally operating
                  company, we acknowledge the paramount importance of amplifying every
                  voice and recognize the myriad ways in which diverse teams propel
                  innovation.
                </p>
                <p className="text-base text-secondary-600 leading-relaxed font-normal">
                  Our mission is to cultivate a supportive and inclusive workplace
                  environment where the exchange of diverse ideas, perspectives, and
                  experiences isn't just accepted but actively encouraged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-secondary-200 py-16">
        <div className="container-custom">
          <p className="text-center text-xs font-bold text-secondary-500 tracking-[0.2em] uppercase mb-8">
            ALLIANCES & PARTNERS
          </p>
          <div className="max-w-6xl mx-auto">
            <ClientsCarousel clientLogos={clientLogos} />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="section-padding bg-secondary-50 border-b border-secondary-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Sticky Header */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32">
                <span className="text-primary-800 font-bold uppercase tracking-widest text-xs mb-4 block">Our Leadership</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary-900 tracking-tight leading-tight mb-6">Built by <br/>Visionaries.</h2>
                <p className="text-lg leading-relaxed text-secondary-600 font-normal">
                  Our diverse team of experts brings together years of experience in technology, design, and digital transformation.
                </p>
              </div>
            </div>

            {/* Scrolling Team List */}
            <div className="lg:col-span-8 flex flex-col border-t border-l border-secondary-200 gap-0">
              {[ 
                {
                  name: "John Smith", role: "Chief Technology Officer",
                  desc: "15+ years of experience in software architecture and development. Expert in cloud solutions and enterprise applications. John has led engineering teams at Fortune 500 companies before bringing his expertise to Innomatrics.",
                  img: innovation
                },
                {
                  name: "Sarah Johnson", role: "Creative Director",
                  desc: "10+ years in UI/UX design. Passionate about creating intuitive and engaging user experiences. Sarah believes that enterprise software should be as beautiful and usable as the best consumer applications.",
                  img: digiTransform
                },
                {
                  name: "Michael Chen", role: "Digital Strategy Lead",
                  desc: "12+ years in digital strategy and marketing. Expertise in SEO, content strategy, and market positioning. Michael ensures that every product we build successfully reaches and resonates with its target audience.",
                  img: quality
                }
              ].map((member, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col md:flex-row bg-white border-b border-r border-secondary-200 hover:bg-secondary-50 transition-colors duration-300 group"
                >
                  <div className="md:w-2/5 border-b md:border-b-0 md:border-r border-secondary-200 overflow-hidden">
 <img className="w-full h-full object-cover min-h-[250px] transition-all duration-500 group-hover:scale-105" src={member.img} alt={member.name} />
                  </div>
                  <div className="md:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-secondary-900 mb-1">{member.name}</h3>
                    <p className="text-primary-800 text-xs font-bold uppercase tracking-widest mb-6">{member.role}</p>
                    <p className="text-secondary-600 leading-relaxed">
                      {member.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="section-padding bg-primary-900 border-b border-primary-950 relative overflow-hidden">
        {/* Subtle grid background to look technical */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/3">
              <span className="inline-block px-2 py-1 bg-primary-800 text-primary-200 text-xs font-semibold tracking-widest uppercase mb-6 border border-primary-700">
                Our Impact
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">Delivering Results Worldwide.</h2>
              <p className="text-primary-200 leading-relaxed">Numbers that speak to our commitment, scale, and ability to deliver consistently across the globe.</p>
            </div>
            
            <div className="lg:w-2/3 w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-primary-800 bg-primary-900/50 gap-0">
                <div className="p-8 lg:p-10 text-center border-b border-r border-primary-800 flex flex-col justify-center">
                  <dd className="text-4xl lg:text-5xl font-bold tracking-tight text-white font-mono mb-2">500<span className="text-primary-500">+</span></dd>
                  <dt className="text-xs font-bold uppercase tracking-widest text-primary-400">Projects</dt>
                </div>
                <div className="p-8 lg:p-10 text-center border-b border-r border-primary-800 flex flex-col justify-center">
                  <dd className="text-4xl lg:text-5xl font-bold tracking-tight text-white font-mono mb-2">200<span className="text-primary-500">+</span></dd>
                  <dt className="text-xs font-bold uppercase tracking-widest text-primary-400">Clients</dt>
                </div>
                <div className="p-8 lg:p-10 text-center border-b border-r border-primary-800 flex flex-col justify-center">
                  <dd className="text-4xl lg:text-5xl font-bold tracking-tight text-white font-mono mb-2">50<span className="text-primary-500">+</span></dd>
                  <dt className="text-xs font-bold uppercase tracking-widest text-primary-400">Team</dt>
                </div>
                <div className="p-8 lg:p-10 text-center border-b border-r border-primary-800 flex flex-col justify-center">
                  <dd className="text-4xl lg:text-5xl font-bold tracking-tight text-white font-mono mb-2">5<span className="text-primary-500">+</span></dd>
                  <dt className="text-xs font-bold uppercase tracking-widest text-primary-400">Years</dt>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default About;
