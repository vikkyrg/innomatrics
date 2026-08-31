import React, { useEffect } from "react";
import mission1 from "../../assets/mission1.jpg";
import mission2 from "../../assets/mission2.jpg";
import mission3 from "../../assets/mission3.jpg";
import mission4 from "../../assets/mission4.jpg";
import ourmission from "../../assets/ourmission.jpeg";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceHero from "../Services/components/ServiceHero";
import CTASection from "../Services/components/CTASection";

const VisionMission = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      title: "Excellence",
      description:
        "We pursue the highest standards in all our deliverables, ensuring quality that exceeds expectations.",
      icon: (
        <svg
          className="h-8 w-8 text-primary-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      examples: [
        "ISO 9001 certified quality processes",
        "98% client satisfaction rate",
        "Rigorous testing protocols",
      ],
    },
    {
      title: "Innovation",
      description:
        "We embrace emerging technologies and creative thinking to deliver groundbreaking solutions.",
      icon: (
        <svg
          className="h-8 w-8 text-primary-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      examples: [
        "15% of revenue invested in R&D",
        "Dedicated innovation lab",
        "Regular tech hackathons",
      ],
    },
    {
      title: "Integrity",
      description:
        "We conduct business with honesty, transparency, and ethical practices.",
      icon: (
        <svg
          className="h-8 w-8 text-primary-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      examples: [
        "Transparent pricing models",
        "Ethical data practices",
        "Client confidentiality guarantee",
      ],
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and partnership to achieve extraordinary results.",
      icon: (
        <svg
          className="h-8 w-8 text-primary-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      examples: [
        "Cross-functional project teams",
        "Client co-creation workshops",
        "Strategic partner ecosystem",
      ],
    },
    {
      title: "Customer Focus",
      description:
        "We measure our success by our clients' success and satisfaction.",
      icon: (
        <svg
          className="h-8 w-8 text-primary-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      examples: [
        "Dedicated account managers",
        "Quarterly business reviews",
        "Customized solution approach",
      ],
    },
    {
      title: "Sustainability",
      description:
        "We develop solutions that create long-term value for businesses and communities.",
      icon: (
        <svg
          className="h-8 w-8 text-primary-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      examples: [
        "Green computing initiatives",
        "Social impact projects",
        "Sustainable business practices",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <ServiceHero 
        breadcrumbTitle="Vision & Mission"
        title="Our Vision & Mission"
        description="Guiding principles that drive our innovation and define our commitment to excellence in technology solutions."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
        primaryCTA="Meet the Team"
        primaryLink="/about"
      />


      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-20 text-center max-w-4xl mx-auto">
            <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Vision & Mission</span>
            <p className="text-xl text-secondary-700 leading-relaxed">
              Our vision is to be a catalyst for digital transformation by providing reliable and future-ready technology solutions.
              We strive to become a globally recognized brand known for innovation, integrity, and measurable impact in the tech space.
              Our mission is to deliver innovative, scalable, and efficient software that empowers businesses to achieve their full potential
              with confidence and clarity. We focus on building long-term relationships with our clients by understanding their challenges,
              aligning with their goals, and offering technology that drives real growth.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom pb-20">
        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-24 items-center">
          <div data-aos="fade-right" className="w-full lg:w-1/2 space-y-6">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 bg-primary-100">
                  <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <h2 className="ml-4 text-3xl font-bold text-secondary-900">Our Vision</h2>
            </div>
            <p className="text-lg text-secondary-600 leading-relaxed">
              To be the most trusted global partner for digital transformation, recognized for pioneering technology solutions that redefine industries and create sustainable value for businesses worldwide.
            </p>
            <div className="space-y-4">
              {[
                "Leading digital transformation across 25+ countries by 2025",
                "Developing AI solutions that impact 1 million+ businesses",
                "Setting the global standard for ethical technology practices",
                "Creating an ecosystem where technology drives meaningful human progress",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-secondary-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div data-aos="fade-left" className="w-full lg:w-1/2 relative h-[400px] overflow-hidden shadow-card group">
            <img src={mission1} alt="Our Vision" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-secondary-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 mb-24 items-center">
          <div data-aos="fade-left" className="w-full lg:w-1/2 space-y-6">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 bg-primary-100">
                  <svg className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                  </svg>
                </div>
              </div>
              <h2 className="ml-4 text-3xl font-bold text-secondary-900">Our Mission</h2>
            </div>
            <p className="text-lg text-secondary-600 leading-relaxed">
              To empower organizations of all sizes with transformative technology solutions that drive measurable business outcomes, through a combination of deep expertise, innovative thinking, and unwavering commitment to our clients' success.
            </p>
            <div className="space-y-4">
              {[
                "Deliver tailored solutions that address unique business challenges",
                "Combine technical excellence with strategic business insight",
                "Foster long-term partnerships built on trust and results",
                "Make advanced technology accessible and impactful for all",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-secondary-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div data-aos="fade-right" className="w-full lg:w-1/2 relative h-[400px] overflow-hidden shadow-card group">
            <img src={mission2} alt="Our Mission" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-secondary-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-12">Milestones of Innovation & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-secondary-200 mb-20 gap-0">

            {/* Card 1 */}
            <div data-aos="fade-up" className="relative overflow-hidden group">
              <img src={mission1} alt="Innovation Excellence" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-primary-900 from-black/90 via-black/70 to-black/20 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Innovation Excellence</h3>
                <p className="text-gray-200 text-base group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 translate-y-full opacity-0">
                  Pioneering the future with cutting-edge solutions in AI, Machine Learning, Cloud Architecture, and Blockchain development.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div data-aos="fade-up" data-aos-delay="100" className="relative overflow-hidden group">
              <img src={mission2} alt="Digital Leadership" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-primary-900 from-black/90 via-black/70 to-black/20 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Digital Leadership</h3>
                <p className="text-gray-200 text-base group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 translate-y-full opacity-0">
                  Empowering enterprises with scalable digital transformation and robust enterprise software systems.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div data-aos="fade-up" data-aos-delay="200" className="relative overflow-hidden group">
              <img src={mission3} alt="Cloud Expertise" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-primary-900 from-black/90 via-black/70 to-black/20 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Cloud Expertise</h3>
                <p className="text-gray-200 text-base group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 translate-y-full opacity-0">
                  Designing agile, secure, and future-ready cloud environments through optimized migration and native solutions.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div data-aos="fade-up" data-aos-delay="300" className="relative overflow-hidden group">
              <img src={mission4} alt="Next-Gen Tech" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-primary-900 from-black/90 via-black/70 to-black/20 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Next-Gen Tech</h3>
                <p className="text-gray-200 text-base group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 translate-y-full opacity-0">
                  Exploring tomorrow’s tech — from Quantum Computing and Edge AI to immersive AR/VR environments.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div data-aos="fade-up" data-aos-delay="400" className="relative overflow-hidden group">
              <img src={ourmission} alt="Digital Evolution" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-primary-900 from-black/90 via-black/70 to-black/20 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Digital Evolution</h3>
                <p className="text-gray-200 text-base group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 translate-y-full opacity-0">
                  Powering businesses with intelligent automation, predictive analytics, and data-driven decision strategies.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div data-aos="fade-up" data-aos-delay="500" className="relative overflow-hidden group">
              <img src={mission2} alt="Cybersecurity" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-primary-900 from-black/90 via-black/70 to-black/20 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Cybersecurity Fortification</h3>
                <p className="text-gray-200 text-base group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 translate-y-full opacity-0">
                  Building resilient systems with end-to-end security architecture, threat prevention, and compliance-driven frameworks.
                </p>
              </div>
            </div>

        </div>
      </div>
    </div>

      {/* Core Values section */}
      <div className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Principles</span>
            <h2>Our Core Values</h2>
            <p className="text-lg text-secondary-600 text-center max-w-2xl mx-auto mt-4">
              These values define who we are, what we believe in, and how we operate — both as individuals and as a team.
            </p>
          </div>

          <div className="grid border-t border-l border-secondary-200 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {coreValues.map((value, index) => (
              <motion.div 
                key={index}
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                className="card text-center relative overflow-hidden group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-primary-50 p-4 inline-block mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-secondary-900 mb-3">{value.title}</h4>
                <p className="text-secondary-600 leading-relaxed mb-6">{value.description}</p>
                <ul className="text-sm text-secondary-500 space-y-2">
                  {value.examples.map((ex, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
                      {ex}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default VisionMission;
