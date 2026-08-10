// import React, { useState, useEffect, forwardRef } from "react";
// import c1 from "../../assets/AppDev.jpg";
// import c2 from "../../assets/webDesign.jpg";
// import c3 from "../../assets/webDevelopment.jpg";
// import c4 from "../../assets/digitalMarkt.webp";
// import c5 from "../../assets/brandDesign.jpg";
// import c6 from "../../assets/socialMedia.jpg";
// import "./Services.css";
// // import { Carousel } from "flowbite-react";
// import ImageCardContainer from "./Carousel/ImageCardContainer";
// import { Link } from "react-router-dom";
// import app from "../../assets/serviceBg2.jpg";

// // import image from '../../assets/image1.jpg'

// const Services = forwardRef((props,ref) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMoving, setIsMoving] = useState(true);

//   const images = [c1, c2, c3, c4, c5, c6];

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (isMoving) {
//         handleNext();
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [currentIndex, isMoving]);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, []);

//   return (
//     <>
//       <div className="Services" ref={ref}>
//         <div
//           className="BgDiv relative flex flex-col items-start self-stretch px-20 py-20 font-medium text-center leading-[108%] min-h-[276px] text-zinc-900 max-md:px-5 max-md:max-w-full"
//           style={{ marginTop: "0.2px", height: "60vh" }}
//         >
          
//           <div className="flex flex-col my-12 items-start justify-start gap-4 text-start">
//             <h1 className="text-3xl font-bold text-zinc-900 md:text-white md:text-5xl">
//               Services
//             </h1>
            
            
//             <hr className="text-sky-600 w-[140%] " />
//           </div>
//           <div className="relative justify-center -my-10 space-x-2">
//             <button className="text-white 
//               bg-zinc-700 focus:ring-4 
//               focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
//               text-center dark:bg-blue-600 dark:focus:ring-blue-800
//               hover:bg-white hover:text-black hover:transform hover:scale-105
//               hover:shadow-lg transition duration-300 ease-in-out">
//               Start a project together
//             </button>
//             <button className="text-zinc-700 
//               bg-white focus:ring-4 
//               focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
//               text-center dark:bg-red-500 dark:focus:ring-blue-400
//               hover:bg-zinc-800 hover:text-white hover:transform hover:scale-105
//               hover:shadow-lg transition duration-300 ease-in-out">
//               Read More
//             </button>
//           </div>
//         </div>

//         <div>
//           <div className="bg-gray-100 py-12">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="lg:text-start">
//                 <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
//                   Overview
//                 </h2>
//                 <p className="mt-2 leading-8 text-2xl font-extrabold font-serif text-gray-900 sm:text-3xl">
//                   With today's fast-changing IT landscape, you must quickly
//                   build new applications to meet consumer demands, reduce tech
//                   debt, support legacy systems, and adopt new technologies –
//                   quite a balancing act.
//                 </p>
//               </div>
//               <div className="mt-10">
//                 <p className="text-lg leading-8 text-gray-700">
//                   We combine technical expertise, domain knowledge and practical
//                   know-how to support your application development and
//                   integration requirements, with a clear focus on scalability,
//                   extensibility, reliability and most importantly driving
//                   meaningful business outcomes.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Detailed Services Section */}
//         <div className="bg-white py-16">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="text-center">
//       <h2 className="text-3xl font-extrabold text-gray-900">Our Comprehensive Services</h2>
//       <p className="mt-4 text-lg text-gray-500">End-to-end app development solutions</p>
//     </div>

//     <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//       {/* Web Development */}
//       <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300">
//         <h3 className="text-2xl font-bold text-gray-900">Web Development</h3>
//         <div className="mt-2 flex flex-wrap items-center text-sm text-gray-500">
//           <span className="px-2 py-1 mx-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">React</span>
//           <span className="px-2 py-1 mx-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Angular</span>
//           <span className="px-2 py-1 mx-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">Vue.js</span>
//           <span className="px-2 py-1 mx-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">Node.js</span>
//         </div>
//         <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-500 text-base">
//           <li>Custom web applications</li>
//           <li>PWA (Progressive Web Apps)</li>
//           <li>E-commerce platforms</li>
//           <li>CMS development</li>
//           <li>API integration</li>
//         </ul>
//       </div>

//       {/* Mobile App Development */}
//       <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300">
//         <h3 className="text-2xl font-bold text-gray-900">Mobile App Development</h3>
//         <div className="mt-2 flex flex-wrap items-center text-sm text-gray-500">
//           <span className="px-2 py-1 mx-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">React Native</span>
//           <span className="px-2 py-1 mx-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">Flutter</span>
//           <span className="px-2 py-1 mx-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">iOS</span>
//           <span className="px-2 py-1 mx-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Android</span>
//         </div>
//         <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-500 text-base">
//           <li>Native & cross-platform apps</li>
//           <li>UI/UX design</li>
//           <li>Maintenance & support</li>
//           <li>Performance optimization</li>
//         </ul>
//       </div>

//       {/* Digital Marketing */}
//       <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300">
//         <h3 className="text-2xl font-bold text-gray-900">Digital Marketing</h3>
//         <div className="mt-2 flex flex-wrap items-center text-sm text-gray-500">
//           <span className="px-2 py-1 mx-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">SEO</span>
//           <span className="px-2 py-1 mx-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Social Media</span>
//           <span className="px-2 py-1 mx-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Content</span>
//           <span className="px-2 py-1 mx-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">PPC</span>
//         </div>
//         <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-500 text-base">
//           <li>SEO & SEM strategies</li>
//           <li>Social media campaigns</li>
//           <li>Content creation</li>
//           <li>Email marketing</li>
//         </ul>
//       </div>

//       {/* UI/UX Design */}
//       <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300">
//         <h3 className="text-2xl font-bold text-gray-900">UI/UX Design</h3>
//         <div className="mt-2 flex flex-wrap items-center text-sm text-gray-500">
//           <span className="px-2 py-1 mx-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Figma</span>
//           <span className="px-2 py-1 mx-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">Adobe XD</span>
//           <span className="px-2 py-1 mx-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">Sketch</span>
//         </div>
//         <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-500 text-base">
//           <li>User Interface design</li>
//           <li>Wireframes & prototyping</li>
//           <li>Design systems</li>
//           <li>Responsive UX</li>
//         </ul>
//       </div>

//       {/* Cloud Services */}
//       <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300">
//         <h3 className="text-2xl font-bold text-gray-900">Cloud Services</h3>
//         <div className="mt-2 flex flex-wrap items-center text-sm text-gray-500">
//           <span className="px-2 py-1 mx-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">AWS</span>
//           <span className="px-2 py-1 mx-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Azure</span>
//           <span className="px-2 py-1 mx-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">Google Cloud</span>
//         </div>
//         <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-500 text-base">
//           <li>Cloud infrastructure setup</li>
//           <li>Scalable hosting</li>
//           <li>DevOps & CI/CD pipelines</li>
//           <li>Serverless architecture</li>
//         </ul>
//       </div>

//       {/* Software Testing */}
//       <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300">
//         <h3 className="text-2xl font-bold text-gray-900">Software Testing</h3>
//         <div className="mt-2 flex flex-wrap items-center text-sm text-gray-500">
//           <span className="px-2 py-1 mx-1 bg-pink-100 text-pink-800 text-xs font-medium rounded-full">Selenium</span>
//           <span className="px-2 py-1 mx-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">JUnit</span>
//           <span className="px-2 py-1 mx-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">Manual</span>
//         </div>
//         <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-500 text-base">
//           <li>Automated testing</li>
//           <li>Manual & exploratory testing</li>
//           <li>Load & performance testing</li>
//           <li>Bug reporting & QA</li>
//         </ul>
//       </div>

//     </div>
//   </div>
// </div>




//         <ImageCardContainer />
//       </div>
//     </>
//   );
// })

// export default Services;

import React, { useEffect, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaRobot, FaCloud, FaShoppingCart, FaShieldAlt, FaPaintBrush, FaPlug, FaCheckCircle, FaBriefcase, FaUsers, FaCogs, FaDesktop, FaMobile, FaChartLine } from 'react-icons/fa';

const ALL_SERVICES = [
  { path: '/web-development', title: 'Web Development', icon: FaDesktop, description: 'Modern, responsive websites and web applications.' },
  { path: '/app-development', title: 'Mobile App Development', icon: FaMobile, description: 'Android, iOS and cross-platform applications.' },
  { path: '/custom-software', title: 'Custom Software', icon: FaCode, description: 'Business software built around your workflow.' },
  { path: '/ai-automation', title: 'AI & Automation', icon: FaRobot, description: 'Intelligent automation, AI agents and chatbots.' },
  { path: '/saas-product', title: 'SaaS Product Development', icon: FaCloud, description: 'Scalable cloud-based SaaS solutions.' },
  { path: '/e-commerce', title: 'E-Commerce Solutions', icon: FaShoppingCart, description: 'Online stores and multi-vendor marketplaces.' },
  { path: '/cloud-and-devops', title: 'Cloud & DevOps', icon: FaCloud, description: 'Secure, scalable infrastructure deployment.' },
  { path: '/cybersecurity', title: 'Cybersecurity', icon: FaShieldAlt, description: 'Data protection and security audits.' },
  { path: '/digital-marketing', title: 'Digital Marketing', icon: FaChartLine, description: 'SEO, Google Ads and lead generation.' },
  { path: '/ui-ux-design', title: 'UI/UX Design', icon: FaPaintBrush, description: 'Engaging user interfaces and experiences.' },
  { path: '/api-integration', title: 'API Integration', icon: FaPlug, description: 'Seamless third-party system connections.' },
  { path: '/qa-testing', title: 'Software Testing & QA', icon: FaCheckCircle, description: 'Automated and manual testing services.' },
  { path: '/it-consulting', title: 'IT Consulting', icon: FaBriefcase, description: 'Digital transformation strategy and guidance.' },
  { path: '/dedicated-team', title: 'Dedicated Team', icon: FaUsers, description: 'Hire expert developers for your projects.' },
  { path: '/maintenance-support', title: 'Maintenance & Support', icon: FaCogs, description: 'Ongoing IT management and support.' },
  { path: '/logo-design', title: 'Logo Design', icon: FaPaintBrush, description: 'Professional brand identity creation.' },
  { path: '/social-media', title: 'Social Media Marketing', icon: FaUsers, description: 'Social media strategy and management.' },
];

const Services = forwardRef((props, ref) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={ref} className="bg-gray-50 min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Everything You Need to Go Digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link 
                key={index} 
                to={service.path}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="p-4 bg-blue-50 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <span className="text-blue-600 font-medium inline-flex items-center group">
                  Explore Service 
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default Services;
