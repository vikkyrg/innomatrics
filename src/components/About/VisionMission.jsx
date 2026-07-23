import React, { useEffect } from "react";
import "./About.css";
import NAv from "../Navbar/NAv";
import aboutCorporate from "../../assets/aboutCorporate.jpg";
import mission1 from "../../assets/mission1.jpg";
import mission2 from "../../assets/mission2.jpg";
import mission3 from "../../assets/mission3.jpg";
import mission4 from "../../assets/mission4.jpg";
import ourmission from "../../assets/ourmission.jpeg";
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const VisionMission = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const coreValues = [
    {
      title: "Excellence",
      description:
        "We pursue the highest standards in all our deliverables, ensuring quality that exceeds expectations.",
      icon: (
        <svg
          className="h-8 w-8 text-blue-600"
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
          className="h-8 w-8 text-blue-600"
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
          className="h-8 w-8 text-blue-600"
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
          className="h-8 w-8 text-blue-600"
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
          className="h-8 w-8 text-blue-600"
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
          className="h-8 w-8 text-blue-600"
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
      <NAv />
      {/* Hero Section */}
      <div className="relative w-full bg-[#020A13]">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNiQmckEiog2__5cgK-O9RF4xbDi1-5-MK8NGiTP8f3ZrrxG_4uJ0_UDigd5wiFTMgSHY&usqp=CAU')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.3'
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-7xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our Vision & Mission
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl">
              Guiding principles that drive our innovation and define our commitment to excellence in technology solutions
            </p>
            <div className="w-32 h-0.5 bg-white mt-8"></div>
          </div>
        </div>
      </div>


      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
   

   
  </div>
 
</div>

<div className="mb-20 mt-[-100px] px-6 md:px-8">
  <h2 className="text-xl font-bold text-orange-600 mb-4 mt-8">VISION & MISSION</h2>
  <p className="text-lg text-gray-900 leading-relaxed">
  Our vision is to be a catalyst for digital transformation by providing reliable and future-ready technology solutions. 
  We strive to become a globally recognized brand known for innovation, integrity, and measurable impact in the tech space.
  Our mission is to deliver innovative, scalable, and efficient software that empowers businesses to achieve their full potential 
    with confidence and clarity. We focus on building long-term relationships with our clients by understanding their challenges, 
    aligning with their goals, and offering technology that drives real growth.
  </p>
</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div data-aos="fade-right" className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                </div>
              </div>
              <h2 className="ml-4 text-3xl font-bold text-red-600">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
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
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div data-aos="fade-left" className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <img src={mission1} alt="Our Vision" className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
        <div data-aos="fade-left" className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <img src={mission2} alt="Our Mission" className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div data-aos="fade-right" className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"/>
                  </svg>
                </div>
              </div>
              <h2 className="ml-4 text-3xl font-bold text-red-600">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
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
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        
        </div>

        {/* Image Gallery Section */}
        <div className="py-12">
  <h2 className="text-3xl font-bold text-center text-red-600 mb-12">Milestones of Innovation & Impact</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

    {/* Card 1 */}
    <div data-aos="fade-up" className="relative overflow-hidden rounded-lg shadow-lg group">
      <img src={mission1} alt="Innovation Excellence" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/20 flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-bold mb-2">Innovation Excellence</h3>
        <p className="text-gray-200 text-base group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 translate-y-full opacity-0">
          Pioneering the future with cutting-edge solutions in AI, Machine Learning, Cloud Architecture, and Blockchain development.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div data-aos="fade-up" data-aos-delay="100" className="relative overflow-hidden rounded-lg shadow-lg group">
      <img src={mission2} alt="Digital Leadership" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/20 flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-bold mb-2">Digital Leadership</h3>
        <p className="text-gray-200 text-base group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 translate-y-full opacity-0">
          Empowering enterprises with scalable digital transformation and robust enterprise software systems.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div data-aos="fade-up" data-aos-delay="200" className="relative overflow-hidden rounded-lg shadow-lg group">
      <img src={mission3} alt="Cloud Expertise" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/20 flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-bold mb-2">Cloud Expertise</h3>
        <p className="text-gray-200 text-base group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 translate-y-full opacity-0">
          Designing agile, secure, and future-ready cloud environments through optimized migration and native solutions.
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div data-aos="fade-up" data-aos-delay="300" className="relative overflow-hidden rounded-lg shadow-lg group">
      <img src={mission4} alt="Next-Gen Tech" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/20 flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-bold mb-2">Next-Gen Tech</h3>
        <p className="text-gray-200 text-base group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 translate-y-full opacity-0">
          Exploring tomorrow’s tech — from Quantum Computing and Edge AI to immersive AR/VR environments.
        </p>
      </div>
    </div>

    {/* Card 5 */}
    <div data-aos="fade-up" data-aos-delay="400" className="relative overflow-hidden rounded-lg shadow-lg group">
      <img src={ourmission} alt="Digital Evolution" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/20 flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-bold mb-2">Digital Evolution</h3>
        <p className="text-gray-200 text-base group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 translate-y-full opacity-0">
          Powering businesses with intelligent automation, predictive analytics, and data-driven decision strategies.
        </p>
      </div>
    </div>

    {/* Card 6 */}
    <div data-aos="fade-up" data-aos-delay="500" className="relative overflow-hidden rounded-lg shadow-lg group">
      <img src={mission2} alt="Cybersecurity" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/20 flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-bold mb-2">Cybersecurity Fortification</h3>
        <p className="text-gray-200 text-base group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 translate-y-full opacity-0">
          Building resilient systems with end-to-end security architecture, threat prevention, and compliance-driven frameworks.
        </p>
      </div>
    </div>

  </div>
</div>


        {/* Core Values section */}
        <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-red-600 mb-6">Our Core Values</h2>
    <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
      These values define who we are, what we believe in, and how we operate — both as individuals and as a team.
    </p>

    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      {/* Value Card */}
      <div data-aos="fade-up" className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition duration-300 text-center">
        <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
          </svg>
        </div>
        <h4 className="text-xl font-bold text-red-600 mb-2">Innovation</h4>
        <p className="text-gray-600">We embrace new ideas and continuously push boundaries to deliver future-ready solutions.</p>
      </div>

      <div data-aos="fade-up" data-aos-delay="100" className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition duration-300 text-center">
        <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h4 className="text-xl font-bold text-red-600 mb-2">Excellence</h4>
        <p className="text-gray-600">We strive for excellence in everything we do — delivering high-quality outcomes without compromise.</p>
      </div>

      <div data-aos="fade-up" data-aos-delay="200" className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition duration-300 text-center">
        <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
        </div>
        <h4 className="text-xl font-bold text-red-600 mb-2">Integrity</h4>
        <p className="text-gray-600">We do what's right — even when no one is watching. Transparency and honesty guide our actions.</p>
      </div>

      <div data-aos="fade-up" data-aos-delay="300" className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition duration-300 text-center">
        <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
        </div>
        <h4 className="text-xl font-bold text-red-600 mb-2">Teamwork</h4>
        <p className="text-gray-600">We succeed together — collaborating openly, respecting every voice, and supporting one another.</p>
      </div>

      <div data-aos="fade-up" data-aos-delay="400" className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition duration-300 text-center">
        <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
          </svg>
        </div>
        <h4 className="text-xl font-bold text-red-600 mb-2">Quality</h4>
        <p className="text-gray-600">We are committed to delivering the highest level of quality in our work and services.</p>
      </div>

      <div data-aos="fade-up" data-aos-delay="500" className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition duration-300 text-center">
        <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </div>
        <h4 className="text-xl font-bold text-red-600 mb-2">Customer Focus</h4>
        <p className="text-gray-600">Our clients' success is our success. We listen, understand, and deliver with purpose.</p>
      </div>
    </div>
  </div>
</div>


        {/* CTA Section */}
        <div className="bg-blue-600 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            Join Us on Our Journey
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Whether you're looking for technology solutions or want to join our team, we'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/careers">
              <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                Explore Careers
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-transparent hover:bg-blue-700 text-white font-bold py-3 px-8 border-2 border-white rounded-lg transition-colors duration-300">
                Contact Our Team
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
