import React, { useEffect, useState } from 'react';
import NAv from '../Navbar/NAv';
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
  MdChevronRight,
  MdChevronLeft,
  MdCheckCircle,
  MdRefresh
} from 'react-icons/md';
import {
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle
} from 'react-icons/fa';
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

const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // SEO Meta Tags update
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
  const [openFaq, setOpenFaq] = useState(null);

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

  const techCategories = [
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'ai', label: 'AI & Automation' }
  ];

  const techData = {
    frontend: [
      { name: "React.js", desc: "Component-based library for dynamic, reactive user interfaces.", icon: <SiReact className="text-blue-400 text-4xl" /> },
      { name: "Next.js", desc: "SSR and SSG framework for SEO-friendly, super-fast web apps.", icon: <SiNextdotjs className="text-slate-800 text-4xl" /> },
      { name: "TypeScript", desc: "Typed superset of JavaScript ensuring robust, bug-free codebase.", icon: <SiTypescript className="text-blue-600 text-4xl" /> },
      { name: "Tailwind CSS", desc: "Utility-first CSS framework for rapid and customized design.", icon: <SiTailwindcss className="text-cyan-400 text-4xl" /> }
    ],
    backend: [
      { name: "Node.js", desc: "Fast, scalable event-driven runtime for building solid backends.", icon: <SiNodedotjs className="text-green-500 text-4xl" /> },
      { name: "Python", desc: "Versatile language for high-performance automation & scripting.", icon: <SiPython className="text-yellow-500 text-4xl" /> },
      { name: "PostgreSQL", desc: "Advanced relational database for secure, structured storage.", icon: <SiPostgresql className="text-blue-500 text-4xl" /> },
      { name: "MongoDB", desc: "NoSQL document database for flexible schema-less data structures.", icon: <SiMongodb className="text-green-600 text-4xl" /> }
    ],
    mobile: [
      { name: "React Native", desc: "Build native mobile apps for iOS & Android with a single codebase.", icon: <SiReact className="text-blue-400 text-4xl" /> },
      { name: "Flutter", desc: "Google's UI toolkit for gorgeous, high-performance mobile apps.", icon: <SiFlutter className="text-blue-500 text-4xl" /> }
    ],
    cloud: [
      { name: "AWS", desc: "Reliable cloud platform offering servers, databases & hosting.", icon: <SiAmazonaws className="text-orange-500 text-4xl" /> },
      { name: "Docker", desc: "Containerization platform to build, ship, and run apps consistently.", icon: <SiDocker className="text-blue-500 text-4xl" /> },
      { name: "Kubernetes", desc: "Orchestration system to automate container deployment and scaling.", icon: <SiKubernetes className="text-blue-600 text-4xl" /> }
    ],
    ai: [
      { name: "OpenAI API", desc: "Access cutting-edge LLMs like GPT-4 to power chatbots & search.", icon: <SiOpenai className="text-emerald-500 text-4xl" /> },
      { name: "Machine Learning", desc: "Custom predictive models, anomaly detection & data analytics.", icon: <MdLightbulbOutline className="text-red-500 text-4xl" /> }
    ]
  };

  const faqData = [
    {
      q: "How do you determine the best solution for my business?",
      a: "We start with a thorough discovery phase where our technical architects map your business bottlenecks, scalability needs, and user requirements. This results in a custom solution proposal and technology roadmap."
    },
    {
      q: "What is your typical development methodology?",
      a: "We practice agile development. We divide work into 2-week sprints, conduct weekly client demonstrations, and test everything continuously. You get full visibility through Jira/Trello and direct Slack communication."
    },
    {
      q: "How do you ensure application security and regulatory compliance?",
      a: "Security is built-in. We implement OWASP Top 10 security standards, enforce end-to-end HTTPS/TLS data encryption, apply robust authentication systems (OAuth/JWT), and ensure GDPR/HIPAA compatibility where required."
    },
    {
      q: "Do you offer post-launch maintenance, hosting, and ongoing support?",
      a: "Absolutely. We offer flexible post-launch SLA support plans covering daily database backups, server monitoring, security patching, and proactive feature updates to keep your systems running smoothly 24/7."
    },
    {
      q: "Can you integrate the new solution with our existing legacy systems?",
      a: "Yes. Our engineering team has deep expertise in building API adapters, middle-ware layers, and webhooks to sync modern cloud products with legacy desktop systems or databases, ensuring zero business disruption."
    }
  ];

  const solutionsList = [
    {
      challenge: "Need a High-Converting Website?",
      solution: "Custom Web Development",
      description: "We build SEO-optimized, highly responsive, and blazing-fast web applications designed to convert visitors into loyal customers.",
      icon: <MdWeb className="text-2xl text-blue-500" />,
      link: "/web-development",
      bgColor: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Want to Dominate Mobile?",
      solution: "Mobile App Engineering",
      description: "Scalable, native-feeling Android and iOS mobile applications built with React Native, Flutter, and native frameworks for maximum performance.",
      icon: <MdSmartphone className="text-2xl text-green-500" />,
      link: "/app-development",
      bgColor: "bg-green-50",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Bottlenecked by Manual Tasks?",
      solution: "ERP & Business Automation",
      description: "Custom ERP and CRM solutions engineered to automate data entry, streamline operations, and provide real-time business intelligence.",
      icon: <MdTrendingUp className="text-2xl text-purple-500" />,
      link: "/custom-software",
      bgColor: "bg-purple-50",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Struggling with Lead Gen?",
      solution: "Digital Growth Marketing",
      description: "Data-driven Technical SEO, paid advertising, and inbound marketing strategies guaranteed to increase your digital footprint and ROI.",
      icon: <MdCampaign className="text-2xl text-orange-500" />,
      link: "/digital-marketing",
      bgColor: "bg-orange-50",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Ready to Future-Proof?",
      solution: "AI & Machine Learning",
      description: "Integrate predictive analytics, custom LLM chatbots, and intelligent computer vision into your existing enterprise architecture.",
      icon: <MdLightbulbOutline className="text-2xl text-red-500" />,
      link: "/ai-automation",
      bgColor: "bg-red-50",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Have a Unique Idea?",
      solution: "SaaS Product Development",
      description: "End-to-end software architecture for cloud-native SaaS platforms, from database schema design to frontend deployment.",
      icon: <MdSettingsApplications className="text-2xl text-teal-500" />,
      link: "/saas-product",
      bgColor: "bg-teal-50",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const coreSolutions = [
    { name: "Workflow Automation", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", icon: <MdTrendingUp className="text-5xl mb-4 text-blue-400 group-hover:text-white transition-colors duration-300 relative z-10" /> },
    { name: "Enterprise ERP", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop", icon: <MdSettingsApplications className="text-5xl mb-4 text-blue-400 group-hover:text-white transition-colors duration-300 relative z-10" /> },
    { name: "Cloud Migrations", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop", icon: <MdArchitecture className="text-5xl mb-4 text-blue-400 group-hover:text-white transition-colors duration-300 relative z-10" /> },
    { name: "Cybersecurity", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop", icon: <MdSecurity className="text-5xl mb-4 text-blue-400 group-hover:text-white transition-colors duration-300 relative z-10" /> },
    { name: "B2B SaaS Platforms", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop", icon: <MdWeb className="text-5xl mb-4 text-blue-400 group-hover:text-white transition-colors duration-300 relative z-10" /> },
    { name: "High-Performance APIs", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", icon: <MdSpeed className="text-5xl mb-4 text-blue-400 group-hover:text-white transition-colors duration-300 relative z-10" /> }
  ];

  const testimonials = [
    {
      client: "Sarah Jenkins",
      role: "CTO at TechFlow",
      text: "Innomatrics completely transformed our legacy infrastructure. Their cloud migration strategy was flawless, resulting in a 40% reduction in our monthly AWS costs and significantly improved uptime.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      client: "Marcus Rodriguez",
      role: "Director of Operations, LogiCorp",
      text: "The custom ERP solution they built automated processes that used to take our team days. We've seen a 3x increase in team efficiency. Truly a top-tier engineering partner.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
      client: "Emily Chen",
      role: "Founder, RetailGo",
      text: "From UI/UX design to backend development, Innomatrics delivered our mobile app ahead of schedule. The code quality and attention to detail were exceptional.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NAv />

      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#020617] pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
            Enterprise IT Services
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-300 mb-4 drop-shadow-lg">
            Have a Business Challenge?
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6 tracking-wide">
            We Engineer the Solution.
          </h2>

        </div>
      </div>

      {/* Main Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsList.map((item, index) => (
            <div key={index} className="group bg-white/90 backdrop-blur-lg rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-3 border border-white/50 flex flex-col h-full relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/40 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>

              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.solution}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              </div>

              <div className="p-8 flex-grow flex flex-col justify-between relative z-10 bg-white">
                <div>
                  <h3 className="text-sm font-bold text-blue-600 mb-3 uppercase tracking-widest min-h-[40px] flex items-center">{item.challenge}</h3>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 min-h-[64px] leading-tight group-hover:text-blue-900 transition-colors">{item.solution}</h4>
                  <p className="text-gray-600 mb-8 leading-relaxed">{item.description}</p>
                </div>
                <Link to={item.link} className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors mt-auto group/link">
                  Explore Solution
                  <svg className="w-5 h-5 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Solutions Configurator */}
      <div className="bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#020617] py-20 text-white relative overflow-hidden border-t border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold tracking-wider uppercase mb-3">
              Interactive Solution Finder
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Find Your Tailored IT Solution</h2>
            <p className="text-blue-100/70 max-w-xl mx-auto">
              Answer 3 quick questions and receive a recommended development plan and technology stack.
            </p>
          </div>

          <div className="bg-transparent border border-gray-800 rounded-3xl p-8 md:p-12 relative">
            {/* Step indicators */}
            <div className="flex justify-between items-center mb-8 max-w-md mx-auto">
              {[0, 1, 2, 3].map((stepIdx) => (
                <div key={stepIdx} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${configStep === stepIdx
                    ? 'bg-blue-500 text-white ring-4 ring-blue-500/30 scale-110'
                    : configStep > stepIdx
                      ? 'bg-green-500 text-white'
                      : 'bg-white/20 text-white/60'
                    }`}>
                    {configStep > stepIdx ? <MdCheckCircle className="text-xl" /> : stepIdx + 1}
                  </div>
                  {stepIdx < 3 && (
                    <div className={`h-1 w-12 sm:w-20 transition-all duration-300 mx-2 ${configStep > stepIdx ? 'bg-green-500' : 'bg-white/20'
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
                  <h3 className="text-2xl font-bold mb-6 text-center text-blue-100">Step 1: What is your primary objective?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {configGoals.map((g) => (
                      <button
                        key={g.id}
                        onClick={() => {
                          setConfigGoal(g.id);
                          setConfigStep(1);
                        }}
                        className={`text-left p-6 rounded-2xl border transition-all duration-300 ${configGoal === g.id
                          ? 'bg-blue-600/50 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                          : 'bg-white/5 border-white/15 hover:bg-white/10 hover:border-white/30'
                          }`}
                      >
                        <h4 className="font-bold text-lg text-white mb-1">{g.label}</h4>
                        <p className="text-sm text-blue-200/70">{g.desc}</p>
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
                  <h3 className="text-2xl font-bold mb-6 text-center text-blue-100">Step 2: Which channel or platform is primary?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {configChannels.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          setConfigChannel(c.id);
                          setConfigStep(2);
                        }}
                        className={`text-left p-6 rounded-2xl border transition-all duration-300 ${configChannel === c.id
                          ? 'bg-blue-600/50 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                          : 'bg-white/5 border-white/15 hover:bg-white/10 hover:border-white/30'
                          }`}
                      >
                        <h4 className="font-bold text-lg text-white mb-1">{c.label}</h4>
                        <p className="text-sm text-blue-200/70">{c.desc}</p>
                      </button>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-start">
                    <button
                      onClick={() => setConfigStep(0)}
                      className="px-6 py-2.5 rounded-full border border-white/20 hover:bg-white/10 text-white flex items-center gap-2 transition-all font-semibold"
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
                  <h3 className="text-2xl font-bold mb-6 text-center text-blue-100">Step 3: What is your estimated project timeline?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {configTimelines.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          setConfigTimeline(t.id);
                          setConfigStep(3);
                        }}
                        className={`text-left p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${configTimeline === t.id
                          ? 'bg-blue-600/50 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                          : 'bg-white/5 border-white/15 hover:bg-white/10 hover:border-white/30'
                          }`}
                      >
                        <h4 className="font-bold text-lg text-white mb-2">{t.label}</h4>
                        <p className="text-sm text-blue-200/70">{t.desc}</p>
                      </button>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-start">
                    <button
                      onClick={() => setConfigStep(1)}
                      className="px-6 py-2.5 rounded-full border border-white/20 hover:bg-white/10 text-white flex items-center gap-2 transition-all font-semibold"
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
                  <div className="inline-flex p-4 rounded-full bg-green-500/20 text-green-400 mb-4 border border-green-500/30">
                    <MdCheckCircle className="text-4xl" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-white">Your Tailored Solution</h3>
                  <h4 className="text-xl font-bold text-blue-400 mb-4">{getRecommendation().title}</h4>
                  <p className="text-blue-100/80 mb-6 max-w-2xl mx-auto leading-relaxed">{getRecommendation().desc}</p>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 max-w-lg mx-auto text-left">
                    <div className="mb-4">
                      <span className="text-xs uppercase text-blue-300 font-bold tracking-wider">Recommended Tech Stack:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {getRecommendation().tech.map((t, idx) => (
                          <span key={idx} className="bg-blue-500/20 border border-blue-400/20 text-blue-200 px-3 py-1 rounded-lg text-xs font-semibold">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs uppercase text-blue-300 font-bold tracking-wider">Estimated Timeframe:</span>
                      <p className="text-white font-medium mt-1 text-sm">{getRecommendation().timeframe}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      to={getRecommendation().link}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
                    >
                      Learn More About Solution <MdChevronRight className="text-xl" />
                    </Link>
                    <button
                      onClick={() => {
                        setConfigStep(0);
                        setConfigGoal('');
                        setConfigChannel('');
                        setConfigTimeline('');
                      }}
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <MdRefresh className="text-xl" /> Start Over
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* New SEO Feature Section: Engineering Approach */}
      <div className="bg-white py-20 relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Our Enterprise Software Engineering Approach</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Innomatrics, we do more than just write code. We act as your strategic technical partners, ensuring that every digital product we develop is highly secure, scalable, and optimized for maximum search engine visibility (SEO) and user conversion.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <MdArchitecture className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Scalable Cloud Architecture</h4>
                    <p className="text-gray-600">Built on AWS & Azure to handle millions of concurrent users without downtime.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <MdSecurity className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Military-Grade Security</h4>
                    <p className="text-gray-600">OWASP compliance, end-to-end encryption, and rigorous vulnerability testing.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <MdSpeed className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Core Web Vitals Optimized</h4>
                    <p className="text-gray-600">Lightning-fast load times designed specifically to boost your Google SEO rankings.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-blue-600 transform translate-x-4 translate-y-4 rounded-3xl opacity-20"></div>
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop" alt="Software Engineering Team" className="relative z-10 rounded-3xl shadow-2xl object-cover h-[500px] w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Core Enterprise Solutions List */}
      <div className="bg-gray-50 py-24 relative overflow-hidden">
        <div className="absolute -left-40 top-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute -right-40 bottom-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#07111F] mb-6">Core Business Solutions</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">We provide full-stack capabilities across a wide array of specialized enterprise IT demands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-center">
            {coreSolutions.map((solution, index) => (
              <div key={index} className="group relative rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 cursor-pointer transform hover:-translate-y-2 h-72 flex flex-col items-center justify-center border border-gray-800/20">
                <div className="absolute inset-0 z-0">
                  <img src={solution.image} alt={solution.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/80 to-blue-900/30 group-hover:from-blue-600/90 group-hover:via-blue-600/70 transition-colors duration-500"></div>
                </div>

                <div className="flex flex-col items-center justify-center relative z-10 p-6 transform group-hover:scale-105 transition-transform duration-500">
                  {solution.icon}
                  <h3 className="text-2xl font-bold text-white drop-shadow-md tracking-wide">{solution.name}</h3>
                  <div className="w-10 h-1 bg-blue-500 mt-5 group-hover:w-24 group-hover:bg-white transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Ecosystem Section */}
      <div className="bg-white py-24 relative overflow-hidden border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wider uppercase mb-3">
              Modern Tech Stack
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Specialized Technology Ecosystem</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-lg">
              We leverage modern tools, high-performance engines, and reliable cloud solutions to create durable digital platforms.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {techCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTechTab(cat.id)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 border ${activeTechTab === cat.id
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20'
                  : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-blue-400 hover:bg-white'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techData[activeTechTab].map((tech, index) => (
              <motion.div
                key={`${activeTechTab}-${index}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-6 bg-white border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgb(0,0,0,0.06)] hover:-translate-y-1 hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="p-4 bg-gray-50 rounded-2xl mb-5 group-hover:bg-blue-50 transition-colors duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enterprise Success Metrics */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1500&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-2">99.9%</p>
              <h4 className="font-bold text-lg text-white mb-1">Platform Uptime</h4>
              <p className="text-xs text-blue-200/60">Guaranteed SLAs & redundancy</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-2">40%+</p>
              <h4 className="font-bold text-lg text-white mb-1">Process Efficiency</h4>
              <p className="text-xs text-blue-200/60">Saved by workflow automation</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-4xl md:text-5xl font-extrabold text-emerald-400 mb-2">2.4x</p>
              <h4 className="font-bold text-lg text-white mb-1">Lead Conversion</h4>
              <p className="text-xs text-blue-200/60">Increased via technical SEO/CRO</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-4xl md:text-5xl font-extrabold text-amber-400 mb-2">12+</p>
              <h4 className="font-bold text-lg text-white mb-1">Industries Served</h4>
              <p className="text-xs text-blue-200/60">Successfully digitized platforms</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="bg-gray-50 py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Client Testimonials Section inside FAQs wrapper for flow, or above it */}
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wider uppercase mb-3">
              Testimonials
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">What Our Enterprise Clients Say</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Hear from the technology leaders who have partnered with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 relative hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-blue-500 text-4xl mb-6 opacity-20">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-12 h-12"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                </div>
                <p className="text-gray-700 italic mb-8 leading-relaxed relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.client} className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/20" />
                  <div>
                    <h4 className="font-bold text-gray-900">{t.client}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wider uppercase mb-3">
              FAQ
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-2 text-lg">
              Everything you need to know about our technology solutions and delivery workflow.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:border-blue-200 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-bold text-gray-800 flex items-center gap-3">
                    <FaQuestionCircle className="text-blue-500 text-xl flex-shrink-0" />
                    {faq.q}
                  </span>
                  <span className="p-2 rounded-lg bg-gray-50 text-gray-500 transition-colors">
                    {openFaq === index ? <FaChevronUp className="text-blue-500" /> : <FaChevronDown />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-50 pl-11">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 py-20 overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-extrabold text-white mb-6 drop-shadow-sm">Ready to Build Something Great?</h2>
          <p className="text-blue-100 mb-10 text-xl font-light">
            Tell us about your idea, business challenge, or digital transformation goal.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              to="/contact"
              className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold hover:bg-blue-50 hover:shadow-xl transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-1 flex items-center justify-center"
            >
              Start Your Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="bg-transparent text-white px-10 py-4 rounded-full font-bold border-2 border-white/80 hover:bg-white/10 hover:border-white transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;

