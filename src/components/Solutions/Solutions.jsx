import React, { useEffect } from 'react';
import NAv from '../Navbar/NAv';
import { Link } from 'react-router-dom';
import { 
  MdWeb, 
  MdSmartphone, 
  MdTrendingUp, 
  MdCampaign, 
  MdLightbulbOutline, 
  MdSettingsApplications,
  MdSecurity,
  MdArchitecture,
  MdSpeed
} from 'react-icons/md';

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

  const solutionsList = [
    {
      challenge: "Need a High-Converting Website?",
      solution: "Custom Web Development",
      description: "We build SEO-optimized, highly responsive, and blazing-fast web applications designed to convert visitors into loyal customers.",
      icon: <MdWeb className="text-2xl text-blue-500" />,
      link: "/webdev",
      bgColor: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Want to Dominate Mobile?",
      solution: "Mobile App Engineering",
      description: "Scalable, native-feeling Android and iOS mobile applications built with React Native, Flutter, and native frameworks for maximum performance.",
      icon: <MdSmartphone className="text-2xl text-green-500" />,
      link: "/appdev",
      bgColor: "bg-green-50",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Bottlenecked by Manual Tasks?",
      solution: "ERP & Business Automation",
      description: "Custom ERP and CRM solutions engineered to automate data entry, streamline operations, and provide real-time business intelligence.",
      icon: <MdTrendingUp className="text-2xl text-purple-500" />,
      link: "/customsoftware",
      bgColor: "bg-purple-50",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Struggling with Lead Gen?",
      solution: "Digital Growth Marketing",
      description: "Data-driven Technical SEO, paid advertising, and inbound marketing strategies guaranteed to increase your digital footprint and ROI.",
      icon: <MdCampaign className="text-2xl text-orange-500" />,
      link: "/digitalmarket",
      bgColor: "bg-orange-50",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Ready to Future-Proof?",
      solution: "AI & Machine Learning",
      description: "Integrate predictive analytics, custom LLM chatbots, and intelligent computer vision into your existing enterprise architecture.",
      icon: <MdLightbulbOutline className="text-2xl text-red-500" />,
      link: "/aiautomation",
      bgColor: "bg-red-50",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Have a Unique Idea?",
      solution: "SaaS Product Development",
      description: "End-to-end software architecture for cloud-native SaaS platforms, from database schema design to frontend deployment.",
      icon: <MdSettingsApplications className="text-2xl text-teal-500" />,
      link: "/saasproduct",
      bgColor: "bg-teal-50",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const coreSolutions = [
    { name: "Workflow Automation", icon: <MdTrendingUp className="text-4xl mb-4 text-blue-500 group-hover:text-white transition-colors duration-300" /> },
    { name: "Enterprise ERP", icon: <MdSettingsApplications className="text-4xl mb-4 text-indigo-500 group-hover:text-white transition-colors duration-300" /> },
    { name: "Cloud Migrations", icon: <MdArchitecture className="text-4xl mb-4 text-purple-500 group-hover:text-white transition-colors duration-300" /> },
    { name: "Cybersecurity", icon: <MdSecurity className="text-4xl mb-4 text-pink-500 group-hover:text-white transition-colors duration-300" /> },
    { name: "B2B SaaS Platforms", icon: <MdWeb className="text-4xl mb-4 text-teal-500 group-hover:text-white transition-colors duration-300" /> },
    { name: "High-Performance APIs", icon: <MdSpeed className="text-4xl mb-4 text-orange-500 group-hover:text-white transition-colors duration-300" /> }
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
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-6 leading-relaxed font-light">
            From ideation to deployment, we combine cloud architecture, UX design, Artificial Intelligence, and agile strategy to create scalable software solutions that solve complex problems.
          </p>
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 text-center">
            {coreSolutions.map((solution, index) => (
              <div key={index} className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-transparent hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-700 transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                <div className="flex flex-col items-center justify-center">
                  {solution.icon}
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">{solution.name}</h3>
                </div>
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
