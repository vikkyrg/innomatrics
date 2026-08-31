import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { hireDevelopersData } from './hireData';
import { FaCheckCircle, FaUsers, FaClock, FaChartLine, FaShieldAlt, FaCode, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ServiceHero from '../Services/components/ServiceHero';
import SectionHeader from '../Services/components/SectionHeader';
import CTASection from '../Services/components/CTASection';

const HireDeveloperDetail = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const roleData = hireDevelopersData[role];
    if (roleData) {
      setData(roleData);
      
      document.title = roleData.metaTitle || `${roleData.title} | Innomatrics`;
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = roleData.metaDescription || roleData.subtitle;
    } else {
      navigate('/');
    }
  }, [role, navigate]);

  if (!data) return <div className="min-h-screen flex items-center justify-center bg-secondary-50">Loading...</div>;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <ServiceHero 
        breadcrumbTitle="Hire Developers"
        title={data.title}
        description={data.subtitle}
        backgroundImage={data.heroImage || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"}
        primaryCTA="Hire Now"
        secondaryCTA="View Profiles"
        primaryLink="/contact"
        secondaryLink="/portfolio"
      />

      {/* Overview Section */}
      <div className="section-padding border-b border-secondary-200">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <SectionHeader 
                eyebrow="Overview"
                title="Elite Engineering Talent"
                description={data.description}
              />
              <div className="grid grid-cols-2 border-t border-l border-secondary-200 gap-0 mt-8">
                 <div className="bg-white p-6 border-b border-r border-secondary-200">
                    <h4 className="text-4xl font-extrabold text-primary-900 mb-2 font-mono">50+</h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary-500">Projects Delivered</p>
                 </div>
                 <div className="bg-white p-6 border-b border-r border-secondary-200">
                    <h4 className="text-4xl font-extrabold text-primary-900 mb-2 font-mono">98%</h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary-500">Client Retention</p>
                 </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 w-full"
            >
              <div className="bg-primary-900 p-10 relative overflow-hidden rounded-md border border-primary-800">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800 rounded-full blur-3xl opacity-20"></div>
                <h3 className="text-lg font-bold text-primary-300 mb-8 uppercase tracking-widest border-b border-primary-800 pb-4">Why Hire From Us?</h3>
                <ul className="space-y-6 relative z-10">
                  {data.whyUs.map((reason, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="mt-1 mr-4">
                        <FaCheckCircle className="text-primary-400 text-lg" />
                      </div>
                      <span className="text-white font-medium text-lg leading-relaxed">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="section-padding bg-secondary-50 border-b border-secondary-200">
        <div className="container-custom max-w-5xl">
          <SectionHeader 
            eyebrow="Tech Stack"
            title="Core Expertise & Technologies"
            description="We leverage the latest and most robust tech stacks to ensure your project is built for scale, security, and speed."
          />
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {data.skills.map((skill, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white px-6 py-3 border border-secondary-200 rounded-full shadow-sm hover:border-primary-500 hover:text-primary-700 transition-all duration-300"
              >
                <span className="font-semibold text-secondary-800">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Engagement Models */}
      <div className="section-padding bg-white border-b border-secondary-200">
        <div className="container-custom">
          <SectionHeader 
            eyebrow="Partnership"
            title="Flexible Engagement Models"
            description="Choose the working model that perfectly aligns with your project scope, budget, and business needs."
          />
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-secondary-200 mt-12 gap-0"
          >
            {data.engagementModels && data.engagementModels.map((model, index) => {
              const icons = [<FaUsers />, <FaClock />, <FaChartLine />];
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-white p-10 transition-all duration-300 border-b border-r border-secondary-200 hover:bg-secondary-50 group"
                >
                  <div className="w-14 h-14 bg-primary-50 flex items-center justify-center mb-8 rounded-md group-hover:scale-110 transition-transform">
                    <div className="text-xl text-primary-700">
                      {icons[index]}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">{model.title}</h3>
                  <p className="text-sm text-secondary-600 leading-relaxed">{model.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      
      {/* Value Guarantee Section */}
      <div className="section-padding bg-primary-900 text-white border-b border-primary-800">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative overflow-hidden rounded-md border border-primary-800 h-[500px]">
                 <img src={data.guarantee.image || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"} alt={data.guarantee.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-primary-900/60"></div>
                 <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-2xl font-bold text-white italic leading-relaxed">"{data.guarantee.quote}"</p>
                 </div>
              </div>
            </motion.div>
            
            <div className="lg:w-1/2 w-full">
              <SectionHeader 
                eyebrow="Our Guarantee"
                title={data.guarantee.title}
                theme="dark"
              />
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-primary-800 mt-10 gap-0"
              >
                {data.guarantee.points.map((point, index) => {
                  const icons = [<FaShieldAlt />, <FaCode />, <FaCheckCircle />, <FaHeadset />];
                  return (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      className="p-8 border-b border-r border-primary-800 bg-primary-900/50 hover:bg-primary-800 transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary-800 flex items-center justify-center mb-6 rounded-md text-primary-300">
                        {icons[index]}
                      </div>
                      <h4 className="font-bold text-lg text-white mb-3">{point.title}</h4>
                      <p className="text-primary-200 text-sm leading-relaxed">{point.description}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Hiring Process */}
      <div className="section-padding bg-secondary-50 border-b border-secondary-200">
        <div className="container-custom">
          <SectionHeader 
            eyebrow="Workflow"
            title="Simple Hiring Process"
            description="Get started with your new top-tier team member in 3 simple steps."
          />
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 relative mt-16 max-w-5xl mx-auto"
          >
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-[1px] bg-secondary-300 z-0"></div>
            
            {[
              { num: 1, title: "Consultation", desc: "Share your requirements, technical needs, budget, and business goals with our expert strategy team.", highlight: false },
              { num: 2, title: "Interview & Select", desc: "We'll shortlist pre-vetted candidates. You interview them and select the perfect technical and cultural fit.", highlight: true },
              { num: 3, title: "Onboarding", desc: "Seamless integration of the developer into your team, tools, and existing Agile workflows within 48 hours.", highlight: false }
            ].map((step, idx) => (
              <motion.div key={idx} variants={itemVariants} className="text-center relative z-10">
                <div className={`w-20 h-20 mx-auto flex items-center justify-center text-3xl font-mono font-bold mb-8 rounded-full shadow-sm ${step.highlight ? 'bg-primary-900 border border-primary-800 text-white shadow-md' : 'bg-white border border-secondary-200 text-primary-900'}`}>{step.num}</div>
                <h3 className="text-xl font-bold mb-4 text-primary-900">{step.title}</h3>
                <p className="text-sm text-secondary-600 leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <CTASection />
    </div>
  );
};

export default HireDeveloperDetail;
