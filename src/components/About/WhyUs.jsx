import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import NAv from "../Navbar/NAv";
import ServiceHero from "../Services/components/ServiceHero";
import SectionHeader from "../Services/components/SectionHeader";
import CTASection from "../Services/components/CTASection";

const WhyUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "200+", label: "Satisfied Clients" },
    { value: "24/7", label: "Support Available" },
    { value: "5+", label: "Years Experience" },
  ];

  const testimonials = [
    {
      quote: "Innomatrics transformed our digital presence with innovative solutions that perfectly aligned with our business goals.",
      author: "Rajesh Kumar",
      role: "CEO, TechVision India",
    },
    {
      quote: "Their team's expertise and dedication exceeded our expectations. The attention to detail and timely delivery was impressive.",
      author: "Priya Mehta",
      role: "CTO, Digital Solutions Pvt Ltd",
    },
    {
      quote: "Working with Innomatrics has been a game-changer for our business. Their solutions are innovative and future-ready.",
      author: "Amit Sharma",
      role: "Director, CloudTech Systems",
    },
    {
      quote: "The level of professionalism and technical expertise at Innomatrics is outstanding. They truly understand Indian market needs.",
      author: "Sunita Patel",
      role: "CEO, GlobalTech India",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const totalPairs = Math.ceil(testimonials.length / 2);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % totalPairs);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-white">
      <NAv />
      
      <ServiceHero 
        breadcrumbTitle="Why Choose Us"
        title="Why Choose Us"
        description="We combine innovation, expertise, and dedication to deliver exceptional technology solutions that drive your business forward."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
      />

      <div className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader 
            eyebrow="Why Us"
            title="A Partner You Can Trust"
            description="At Innomatrics, we combine deep technical expertise with a commitment to excellence. Our solutions are tailored to your business goals, ensuring maximum impact and value. From user-friendly interfaces to secure backend systems, we deliver products that are both powerful and reliable. With transparent communication, timely delivery, and a client-first mindset, we are a partner you can trust for long-term success."
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group cursor-pointer">
            <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                alt="Our team working"
 className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary-900 opacity-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Why Choose Our Software Company?
              </h3>
              <p className="text-secondary-600 text-lg mb-8 leading-relaxed">
                Choosing the right technology partner is crucial for your success.
                Here's why companies trust us to power their digital transformation:
              </p>
              <ul className="space-y-6 text-secondary-700">
                {[
                  "Proven expertise in AI, Web & Mobile App Development",
                  "Agile and scalable software delivery model",
                  "Dedicated support & transparent communication",
                  "Competitive pricing without compromising quality"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-800 font-bold mr-3 mt-1 text-sm tracking-wider">{(idx + 1).toString().padStart(2, '0')}.</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-secondary-50 border-t border-b border-secondary-200">
        <div className="container-custom">
          <SectionHeader 
            eyebrow="Our Strengths"
            title="What Sets Us Apart"
            description="We go beyond just writing code. We deliver comprehensive solutions that transform your business operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-secondary-200 mt-12">
            {[
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "Technical Expertise",
                description: "Our team of skilled professionals brings years of experience in delivering cutting-edge technology solutions across various industries.",
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Innovative Solutions",
                description: "We stay ahead of technology trends to provide innovative solutions that give your business a competitive edge.",
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Customer-Centric",
                description: "Your success is our priority. We work closely with you to understand your needs and deliver solutions that exceed expectations.",
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                className="bg-white border-b border-r border-secondary-200 p-10 flex flex-col h-full hover:bg-secondary-50 transition-colors duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center text-primary-800 mb-6 border border-secondary-200">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">{item.title}</h3>
                <p className="text-secondary-600 flex-grow text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-secondary-700">
            {stats.map((stat, index) => (
              <div key={index} className="px-4">
                <motion.div
                  className="text-4xl md:text-5xl font-extrabold mb-2 font-mono"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-primary-300 text-sm tracking-wider uppercase font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader 
            eyebrow="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it. Hear from the businesses we've helped transform."
          />

          <div className="max-w-6xl mx-auto mt-12 overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentTestimonial * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {[...Array(Math.ceil(testimonials.length / 2))].map((_, pairIndex) => (
                <div key={pairIndex} className="w-full flex-shrink-0 px-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-l border-secondary-200">
                    {testimonials.slice(pairIndex * 2, pairIndex * 2 + 2).map((testimonial, index) => (
                      <div key={index} className="bg-white p-10 border-b border-r border-secondary-200 flex flex-col h-full hover:bg-secondary-50 transition-colors duration-300">
                        <svg className="h-10 w-10 text-primary-200 mb-6" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="text-secondary-700 text-lg mb-8 flex-grow leading-relaxed italic">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center pt-6 border-t border-secondary-200">
                          <div className="h-12 w-12 border border-secondary-300 flex items-center justify-center text-primary-800 font-bold bg-white">
                            {testimonial.author.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <p className="font-bold text-secondary-900">{testimonial.author}</p>
                            <p className="text-secondary-500 text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
};

export default WhyUs;
