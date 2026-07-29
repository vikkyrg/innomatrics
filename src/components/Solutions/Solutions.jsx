import React from 'react';
import NAv from '../Navbar/NAv';
import { Link } from 'react-router-dom';
import { 
  MdWeb, 
  MdSmartphone, 
  MdTrendingUp, 
  MdCampaign, 
  MdLightbulbOutline, 
  MdSettingsApplications 
} from 'react-icons/md';

const Solutions = () => {
  const solutionsList = [
    {
      challenge: "Need a Business Website?",
      solution: "Website Development",
      description: "High-performance websites and web applications designed for growth.",
      icon: <MdWeb className="text-2xl text-blue-500" />,
      link: "/webdev",
      bgColor: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Need a Mobile App?",
      solution: "Mobile App Development",
      description: "Scalable Android and iOS mobile applications for your business.",
      icon: <MdSmartphone className="text-2xl text-green-500" />,
      link: "/appdev",
      bgColor: "bg-green-50",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Need to Automate Your Business?",
      solution: "ERP & Business Automation",
      description: "Integrated ERP and CRM solutions to simplify operations and improve visibility.",
      icon: <MdTrendingUp className="text-2xl text-purple-500" />,
      link: "/customsoftware",
      bgColor: "bg-purple-50",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Need More Customers?",
      solution: "Digital Marketing & Lead Generation",
      description: "SEO, paid advertising, social media, and proven lead generation strategies.",
      icon: <MdCampaign className="text-2xl text-orange-500" />,
      link: "/digitalmarket",
      bgColor: "bg-orange-50",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Need AI for Your Business?",
      solution: "AI & Automation",
      description: "Intelligent automation, AI agents, chatbots, and generative AI solutions.",
      icon: <MdLightbulbOutline className="text-2xl text-red-500" />,
      link: "/aiautomation",
      bgColor: "bg-red-50",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop"
    },
    {
      challenge: "Need a Custom Software Product?",
      solution: "SaaS & Custom Software",
      description: "Business-specific software designed around your workflows.",
      icon: <MdSettingsApplications className="text-2xl text-teal-500" />,
      link: "/saasproduct",
      bgColor: "bg-teal-50",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const coreSolutions = [
    { name: "Business Automation", icon: <MdTrendingUp className="text-4xl mb-4 text-blue-500 group-hover:text-white transition-colors duration-300" /> },
    { name: "ERP Solutions", icon: <MdSettingsApplications className="text-4xl mb-4 text-indigo-500 group-hover:text-white transition-colors duration-300" /> },
    { name: "CRM Solutions", icon: <MdCampaign className="text-4xl mb-4 text-purple-500 group-hover:text-white transition-colors duration-300" /> },
    { name: "Industry Solutions", icon: <MdLightbulbOutline className="text-4xl mb-4 text-pink-500 group-hover:text-white transition-colors duration-300" /> },
    { name: "SaaS Products", icon: <MdWeb className="text-4xl mb-4 text-teal-500 group-hover:text-white transition-colors duration-300" /> },
    { name: "On-Demand Apps", icon: <MdSmartphone className="text-4xl mb-4 text-orange-500 group-hover:text-white transition-colors duration-300" /> }
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
            Tailored For Growth
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-300 mb-4 drop-shadow-lg">
            Have a Business Challenge?
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6 tracking-wide">
            We Have a Digital Solution.
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto mb-6 leading-relaxed font-light">
            From idea to deployment, we combine technology, design, AI, and business strategy to create digital solutions that solve real problems.
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

      {/* Core Enterprise Solutions List */}
      <div className="bg-gray-50 py-24 relative overflow-hidden">
        <div className="absolute -left-40 top-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute -right-40 bottom-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#07111F] mb-6">Core Business Solutions</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
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
