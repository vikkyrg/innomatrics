import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MdWeb,
  MdSmartphone,
  MdTrendingUp,
  MdCampaign,
  MdLightbulbOutline,
  MdSettingsApplications,
  MdSecurity,
  MdArchitecture,
  MdSpeed,
  
  MdChevronLeft,
  MdCheckCircle,
  MdRefresh
} from 'react-icons/md';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiFlutter,
  SiOpenai
} from 'react-icons/si';

import ServiceHero from '../Services/components/ServiceHero';
import SectionHeader from '../Services/components/SectionHeader';
import CTASection from '../Services/components/CTASection';
import FAQ from '../Services/components/FAQ';

const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Enterprise IT Solutions & Custom Software Development | Innomatrics";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Innomatrics provides world-class digital solutions including custom software development, mobile apps, ERP automation, AI integrations, and digital marketing to scale your enterprise.";
  }, []);

  const [configStep, setConfigStep] = useState(0);
  const [configGoal, setConfigGoal] = useState('');
  const [configChannel, setConfigChannel] = useState('');
  const [configTimeline, setConfigTimeline] = useState('');

  const [activeTechTab, setActiveTechTab] = useState('frontend');

  const configGoals = [
    { id: 'product', label: 'Build Customer-Facing Product', desc: 'Create a new web or mobile app for your users' },
    { id: 'automation', label: 'Automate Business Processes', desc: 'Streamline workflows and eliminate manual tasks' },
    { id: 'cloud', label: 'Scale Infrastructure & Security', desc: 'Migrate to cloud, optimize DevOps & secure data' },
    { id: 'marketing', label: 'Grow Digital Presence', desc: 'Increase lead generation and digital marketing ROI' }
  ];

  const configChannels = [
    { id: 'web', label: 'Web Platform', desc: 'Optimized for desktop & mobile browsers' },
    { id: 'mobile', label: 'Mobile Application', desc: 'Native apps for iOS & Android app stores' },
    { id: 'cross', label: 'Multi-Channel Platform', desc: 'Integrated web and mobile experience' },
    { id: 'backend', label: 'Backend / Core Systems', desc: 'Robust APIs, databases & business logic' }
  ];

  const configTimelines = [
    { id: 'fast', label: 'Rapid Prototype (< 1 month)', desc: 'Deliver an MVP to validate your concept quickly' },
    { id: 'medium', label: 'Standard Build (1-3 months)', desc: 'Complete development with robust features' },
    { id: 'strategic', label: 'Strategic Rollout (3-6+ months)', desc: 'Complex, highly customized enterprise systems' }
  ];

  const getRecommendation = () => {
    if (configGoal === 'marketing') {
      return {
        title: "Digital Growth Marketing",
        desc: "Based on your goal to grow your digital presence, we recommend a data-driven Digital Growth Marketing strategy including Technical SEO, paid campaigns, and analytics optimization.",
        tech: ["SEO/SEM", "Google Analytics", "HubSpot", "Meta Ads", "A/B Testing"],
        timeframe: "1-2 months setup, ongoing optimization",
        link: "/digital-marketing"
      };
    }
    if (configGoal === 'cloud') {
      return {
        title: "Cloud Infrastructure & DevOps Solutions",
        desc: "Based on your need to scale infrastructure, we recommend our Cloud Migration and DevOps automation services to ensure 99.9% uptime and high security.",
        tech: ["AWS / Azure", "Docker", "Kubernetes", "Terraform", "CI/CD Pipelines"],
        timeframe: "2-4 months strategic deployment",
        link: "/cloud-and-devops"
      };
    }
    if (configGoal === 'automation') {
      return {
        title: "ERP & Business Automation",
        desc: "To eliminate manual bottlenecks, we recommend a custom ERP or automated CRM system designed specifically to streamline your team's daily workflows.",
        tech: ["Node.js", "PostgreSQL / MongoDB", "React / Next.js", "Python Automation", "Tailwind CSS"],
        timeframe: configTimeline === 'fast' ? "1-2 months MVP" : "3-5 months complete system",
        link: "/custom-software"
      };
    }
    if (configChannel === 'mobile') {
      return {
        title: "Mobile App Engineering",
        desc: "To launch your new mobile product, we recommend a hybrid mobile application built with React Native or Flutter, maximizing reach on both iOS and Android.",
        tech: ["React Native", "Flutter", "Firebase", "Node.js API", "Push Notifications"],
        timeframe: configTimeline === 'fast' ? "2 months MVP" : "4-6 months full release",
        link: "/app-development"
      };
    }
    if (configChannel === 'web') {
      return {
        title: "Custom Web Development",
        desc: "To build your customer-facing web platform, we recommend a high-performance Next.js or React frontend integrated with a robust backend.",
        tech: ["React.js", "Next.js", "Node.js / Express", "Tailwind CSS", "Vercel / AWS"],
        timeframe: configTimeline === 'fast' ? "1 month MVP" : "2-3 months detailed build",
        link: "/web-development"
      };
    }
    return {
      title: "SaaS Product Development",
      desc: "For a cross-platform or API-driven SaaS product, we recommend a modern microservices architecture with a responsive web portal and flexible database layer.",
      tech: ["Next.js", "Node.js / Express", "MongoDB / PostgreSQL", "Docker", "AWS / Cloudflare"],
      timeframe: "3-6 months end-to-end development",
      link: "/saas-product"
    };
  };

  

  const techData = {
    frontend: [
      { name: "React.js", desc: "Component-based library for dynamic, reactive user interfaces.", icon: <SiReact className="text-primary-400 text-4xl" /> },
      { name: "Next.js", desc: "SSR and SSG framework for SEO-friendly, super-fast web apps.", icon: <SiNextdotjs className="text-secondary-800 text-4xl" /> },
      { name: "TypeScript", desc: "Typed superset of JavaScript ensuring robust, bug-free codebase.", icon: <SiTypescript className="text-primary-800 text-4xl" /> },
      { name: "Tailwind CSS", desc: "Utility-first CSS framework for rapid and customized design.", icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> }
    ],
    backend: [
      { name: "Node.js", desc: "Fast, scalable event-driven runtime for building solid backends.", icon: <SiNodedotjs className="text-green-500 text-4xl" /> },
      { name: "Python", desc: "Versatile language for high-performance automation & scripting.", icon: <SiPython className="text-yellow-500 text-4xl" /> },
      { name: "PostgreSQL", desc: "Advanced relational database for secure, structured storage.", icon: <SiPostgresql className="text-primary-600 text-4xl" /> },
      { name: "MongoDB", desc: "NoSQL document database for flexible schema-less data structures.", icon: <SiMongodb className="text-green-600 text-4xl" /> }
    ],
    mobile: [
      { name: "React Native", desc: "Build native mobile apps for iOS & Android with a single codebase.", icon: <SiReact className="text-primary-400 text-4xl" /> },
      { name: "Flutter", desc: "Google's UI toolkit for gorgeous, high-performance mobile apps.", icon: <SiFlutter className="text-primary-600 text-4xl" /> }
    ],
    cloud: [
      { name: "AWS", desc: "Reliable cloud platform offering servers, databases & hosting.", icon: <SiAmazonaws className="text-orange-500 text-4xl" /> },
      { name: "Docker", desc: "Containerization platform to build, ship, and run apps consistently.", icon: <SiDocker className="text-primary-600 text-4xl" /> },
      { name: "Kubernetes", desc: "Orchestration system to automate container deployment and scaling.", icon: <SiKubernetes className="text-primary-800 text-4xl" /> }
    ],
    ai: [
      { name: "OpenAI API", desc: "Access cutting-edge LLMs like GPT-4 to power chatbots & search.", icon: <SiOpenai className="text-emerald-500 text-4xl" /> },
      { name: "Machine Learning", desc: "Custom predictive models, anomaly detection & data analytics.", icon: <MdLightbulbOutline className="text-primary-800 uppercase tracking-widest text-xs font-bold text-4xl" /> }
    ]
  };

  const faqData = [
    {
      question: "How do you determine the best solution for my business?",
      answer: "We start with a thorough discovery phase where our technical architects map your business bottlenecks, scalability needs, and user requirements. This results in a custom solution proposal and technology roadmap."
    },
    {
      question: "What is your typical development methodology?",
      answer: "We practice agile development. We divide work into 2-week sprints, conduct weekly client demonstrations, and test everything continuously. You get full visibility through Jira/Trello and direct Slack communication."
    },
    {
      question: "How do you ensure application security and regulatory compliance?",
      answer: "Security is built-in. We implement OWASP Top 10 security standards, enforce end-to-end HTTPS/TLS data encryption, apply robust authentication systems (OAuth/JWT), and ensure GDPR/HIPAA compatibility where required."
    },
    {
      question: "Do you offer post-launch maintenance, hosting, and ongoing support?",
      answer: "Absolutely. We offer flexible post-launch SLA support plans covering daily database backups, server monitoring, security patching, and proactive feature updates to keep your systems running smoothly 24/7."
    },
    {
      question: "Can you integrate the new solution with our existing legacy systems?",
      answer: "Yes. Our engineering team has deep expertise in building API adapters, middle-ware layers, and webhooks to sync modern cloud products with legacy desktop systems or databases, ensuring zero business disruption."
    }
  ];

  const solutionsList = [
    {
      challenge: "Need a High-Converting Website?",
      solution: "Custom Web Development",
      description: "We build SEO-optimized, highly responsive, and blazing-fast web applications designed to convert visitors into loyal customers.",
      icon: <MdWeb className="text-2xl text-primary-600" />,
      link: "/web-development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Want to Dominate Mobile?",
      solution: "Mobile App Engineering",
      description: "Scalable, native-feeling Android and iOS mobile applications built with React Native, Flutter, and native frameworks for maximum performance.",
      icon: <MdSmartphone className="text-2xl text-green-500" />,
      link: "/app-development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Bottlenecked by Manual Tasks?",
      solution: "ERP & Business Automation",
      description: "Custom ERP and CRM solutions engineered to automate data entry, streamline operations, and provide real-time business intelligence.",
      icon: <MdTrendingUp className="text-2xl text-purple-500" />,
      link: "/custom-software",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Struggling with Lead Gen?",
      solution: "Digital Growth Marketing",
      description: "Data-driven Technical SEO, paid advertising, and inbound marketing strategies guaranteed to increase your digital footprint and ROI.",
      icon: <MdCampaign className="text-2xl text-orange-500" />,
      link: "/digital-marketing",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Ready to Future-Proof?",
      solution: "AI & Machine Learning",
      description: "Integrate predictive analytics, custom LLM chatbots, and intelligent computer vision into your existing enterprise architecture.",
      icon: <MdLightbulbOutline className="text-2xl text-primary-800 uppercase tracking-widest text-xs font-bold" />,
      link: "/ai-automation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Have a Unique Idea?",
      solution: "SaaS Product Development",
      description: "End-to-end software architecture for cloud-native SaaS platforms, from database schema design to frontend deployment.",
      icon: <MdSettingsApplications className="text-2xl text-teal-500" />,
      link: "/saas-product",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const coreSolutions = [
    { name: "Workflow Automation", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", icon: <MdTrendingUp className="text-5xl mb-4 text-primary-400 group-hover:text-white transition-colors duration-300 relative z-10" /> },
    { name: "Enterprise ERP", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop", icon: <MdSettingsApplications className="text-5xl mb-4 text-primary-400 group-hover:text-white transition-colors duration-300 relative z-10" /> },
    { name: "Cloud Migrations", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop", icon: <MdArchitecture className="text-5xl mb-4 text-primary-400 group-hover:text-white transition-colors duration-300 relative z-10" /> },
    { name: "Cybersecurity", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop", icon: <MdSecurity className="text-5xl mb-4 text-primary-400 group-hover:text-white transition-colors duration-300 relative z-10" /> },
    { name: "B2B SaaS Platforms", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop", icon: <MdWeb className="text-5xl mb-4 text-primary-400 group-hover:text-white transition-colors duration-300 relative z-10" /> },
    { name: "High-Performance APIs", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", icon: <MdSpeed className="text-5xl mb-4 text-primary-400 group-hover:text-white transition-colors duration-300 relative z-10" /> }
  ];

  

  return (
    <div className="bg-white font-sans">
      
      {/* Hero Section */}
      <ServiceHero 
        breadcrumbTitle="Solutions"
        title="Have a Business Challenge? We Engineer the Solution."
        description="We provide world-class digital solutions including custom software development, mobile apps, ERP automation, AI integrations, and digital marketing to scale your enterprise."
        backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop"
        primaryCTA="Find Your Solution"
        secondaryCTA="View Services"
        primaryLink="#configurator"
        secondaryLink="/services"
      />

      {/* Main Solutions Grid */}
      <div className="section-padding bg-secondary-50 border-b border-secondary-200">
        <div className="container-custom">
          
          <SectionHeader 
            eyebrow="Capabilities"
            title="Tailored IT Solutions"
            description="We solve complex business problems with cutting-edge technology and intelligent design."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-secondary-200 gap-0 mt-12">
            {solutionsList.map((item, index) => (
              <div key={index} className="group bg-white border-b border-r border-secondary-200 overflow-hidden transition-all duration-500 flex flex-col h-full relative">
                
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.solution}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary-900/60 group-hover:bg-primary-900/40 transition-colors"></div>
                </div>

                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-primary-800 mb-3 uppercase tracking-widest">{item.challenge}</h3>
                    <h4 className="text-2xl font-bold text-primary-900 mb-4 leading-tight group-hover:text-primary-700 transition-colors">{item.solution}</h4>
                    <p className="text-secondary-600 mb-8 leading-relaxed text-sm">{item.description}</p>
                  </div>
                  <Link to={item.link} className="inline-flex items-center text-primary-800 font-bold hover:text-primary-600 transition-colors mt-auto group/link text-sm uppercase tracking-wider">
                    Explore Solution
                    <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Solutions Configurator */}
      <div className="bg-primary-900 py-24 text-white relative overflow-hidden" id="configurator">
        <div className="container-custom relative z-10">
          <SectionHeader 
            eyebrow="Interactive Finder"
            title="Find Your Tailored IT Solution"
            description="Answer 3 quick questions and receive a recommended development plan and technology stack."
            theme="dark"
          />

          <div className="bg-primary-800/50 border border-primary-700 p-8 md:p-12 relative mt-12 max-w-4xl mx-auto rounded-md">
            {/* Step indicators */}
            <div className="flex justify-between items-center mb-12 max-w-md mx-auto">
              {[0, 1, 2, 3].map((stepIdx) => (
                <div key={stepIdx} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${configStep === stepIdx
                    ? 'bg-primary-500 text-white ring-4 ring-primary-500/30'
                    : configStep > stepIdx
                      ? 'bg-green-500 text-white'
                      : 'bg-primary-900 border border-primary-700 text-primary-300'
                    }`}>
                    {configStep > stepIdx ? <MdCheckCircle className="text-xl" /> : stepIdx + 1}
                  </div>
                  {stepIdx < 3 && (
                    <div className={`h-1 w-12 sm:w-20 transition-all duration-300 mx-2 ${configStep > stepIdx ? 'bg-green-500' : 'bg-primary-800'
                      }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Question Screen */}
            <AnimatePresence mode="wait">
              {configStep === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-8 text-center text-white">Step 1: What is your primary objective?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {configGoals.map((g) => (
                      <button
                        key={g.id}
                        onClick={() => {
                          setConfigGoal(g.id);
                          setConfigStep(1);
                        }}
                        className={`text-left p-6 border rounded-md transition-all duration-300 ${configGoal === g.id
                          ? 'bg-primary-700 border-primary-400 '
                          : 'bg-primary-900 border-primary-800 hover:bg-primary-800 hover:border-primary-600'
                          }`}
                      >
                        <h4 className="font-bold text-lg text-white mb-1">{g.label}</h4>
                        <p className="text-sm text-primary-200">{g.desc}</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {configStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-8 text-center text-white">Step 2: Which channel or platform is primary?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {configChannels.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          setConfigChannel(c.id);
                          setConfigStep(2);
                        }}
                        className={`text-left p-6 border rounded-md transition-all duration-300 ${configChannel === c.id
                          ? 'bg-primary-700 border-primary-400 '
                          : 'bg-primary-900 border-primary-800 hover:bg-primary-800 hover:border-primary-600'
                          }`}
                      >
                        <h4 className="font-bold text-lg text-white mb-1">{c.label}</h4>
                        <p className="text-sm text-primary-200">{c.desc}</p>
                      </button>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-start">
                    <button
                      onClick={() => setConfigStep(0)}
                      className="px-6 py-2.5 border border-primary-600 hover:bg-primary-800 text-white flex items-center gap-2 transition-all font-semibold rounded-md"
                    >
                      <MdChevronLeft className="text-xl" /> Back
                    </button>
                  </div>
                </motion.div>
              )}

              {configStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-8 text-center text-white">Step 3: What is your estimated project timeline?</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {configTimelines.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          setConfigTimeline(t.id);
                          setConfigStep(3);
                        }}
                        className={`text-left p-6 border rounded-md transition-all duration-300 flex flex-col justify-between ${configTimeline === t.id
                          ? 'bg-primary-700 border-primary-400 '
                          : 'bg-primary-900 border-primary-800 hover:bg-primary-800 hover:border-primary-600'
                          }`}
                      >
                        <h4 className="font-bold text-lg text-white mb-2">{t.label}</h4>
                        <p className="text-sm text-primary-200">{t.desc}</p>
                      </button>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-start">
                    <button
                      onClick={() => setConfigStep(1)}
                      className="px-6 py-2.5 border border-primary-600 hover:bg-primary-800 text-white flex items-center gap-2 transition-all font-semibold rounded-md"
                    >
                      <MdChevronLeft className="text-xl" /> Back
                    </button>
                  </div>
                </motion.div>
              )}

              {configStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 bg-green-500/20 text-green-400 mb-6 rounded-full border border-green-500/50">
                    <MdCheckCircle className="text-4xl" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-white">Your Tailored Solution</h3>
                  <h4 className="text-xl font-bold text-primary-400 mb-4">{getRecommendation().title}</h4>
                  <p className="text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">{getRecommendation().desc}</p>

                  <div className="bg-primary-900 border border-primary-700 p-6 mb-8 max-w-lg mx-auto text-left rounded-md">
                    <div className="mb-6">
                      <span className="text-xs uppercase text-primary-300 font-bold tracking-wider">Recommended Tech Stack:</span>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {getRecommendation().tech.map((t, idx) => (
                          <span key={idx} className="bg-primary-800 border border-primary-600 text-white px-3 py-1 text-xs font-semibold rounded-md">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs uppercase text-primary-300 font-bold tracking-wider">Estimated Timeframe:</span>
                      <p className="text-white font-medium mt-2 text-sm">{getRecommendation().timeframe}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      to={getRecommendation().link}
                      className="btn-primary"
                    >
                      Learn More About Solution
                    </Link>
                    <button
                      onClick={() => {
                        setConfigStep(0);
                        setConfigGoal('');
                        setConfigChannel('');
                        setConfigTimeline('');
                      }}
                      className="btn-outline border-white text-white hover:bg-white/10"
                    >
                      <MdRefresh className="text-xl mr-2" /> Start Over
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Engineering Approach */}
      <div className="section-padding bg-white border-b border-secondary-200">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <SectionHeader 
                eyebrow="Methodology"
                title="Our Enterprise Engineering Approach"
                description="At Innomatrics, we act as your strategic technical partners, ensuring that every digital product we develop is highly secure, scalable, and optimized for maximum search engine visibility and user conversion."
              />
              <ul className="space-y-6 mt-8">
                <li className="flex items-start">
                  <div className="bg-secondary-50 p-3 mr-4 rounded-md text-primary-700">
                    <MdArchitecture className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900 text-lg">Scalable Cloud Architecture</h4>
                    <p className="text-secondary-600 text-sm mt-1">Built on AWS & Azure to handle millions of concurrent users without downtime.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary-50 p-3 mr-4 rounded-md text-primary-700">
                    <MdSecurity className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900 text-lg">Military-Grade Security</h4>
                    <p className="text-secondary-600 text-sm mt-1">OWASP compliance, end-to-end encryption, and rigorous vulnerability testing.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary-50 p-3 mr-4 rounded-md text-primary-700">
                    <MdSpeed className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-900 text-lg">Core Web Vitals Optimized</h4>
                    <p className="text-secondary-600 text-sm mt-1">Lightning-fast load times designed specifically to boost your Google SEO rankings.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-md overflow-hidden shadow-sm border border-secondary-200 h-[500px]">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop" alt="Software Engineering" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Enterprise Solutions List */}
      <div className="section-padding bg-secondary-50 border-b border-secondary-200">
        <div className="container-custom">
          
          <SectionHeader 
            eyebrow="Expertise"
            title="Core Business Solutions"
            description="We provide full-stack capabilities across a wide array of specialized enterprise IT demands."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-secondary-200 gap-0 mt-12">
            {coreSolutions.map((solution, index) => (
              <div key={index} className="group relative overflow-hidden transition-all duration-500 cursor-pointer border-b border-r border-secondary-200 h-72 flex flex-col items-center justify-center bg-white">
                <div className="absolute inset-0 z-0">
                  <img src={solution.image} alt={solution.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-0 group-hover:opacity-40" />
                  <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/80 transition-colors duration-500"></div>
                </div>

                <div className="flex flex-col items-center justify-center relative z-10 p-6">
                  {solution.icon}
                  <h3 className="text-xl font-bold text-primary-900 group-hover:text-white transition-colors">{solution.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ faqs={faqData} />

      {/* CTA Section */}
      <CTASection />

    </div>
  );
};

export default Solutions;
