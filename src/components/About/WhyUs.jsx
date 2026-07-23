import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./About.css";
import NAv from "../Navbar/NAv";

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
      quote:
        "Innomatrics transformed our digital presence with innovative solutions that perfectly aligned with our business goals.",
      author: "Rajesh Kumar",
      role: "CEO, TechVision India",
    },
    {
      quote:
        "Their team's expertise and dedication exceeded our expectations. The attention to detail and timely delivery was impressive.",
      author: "Priya Mehta",
      role: "CTO, Digital Solutions Pvt Ltd",
    },
    {
      quote:
        "Working with Innomatrics has been a game-changer for our business. Their solutions are innovative and future-ready.",
      author: "Amit Sharma",
      role: "Director, CloudTech Systems",
    },
    {
      quote:
        "The level of professionalism and technical expertise at Innomatrics is outstanding. They truly understand Indian market needs.",
      author: "Sunita Patel",
      role: "CEO, GlobalTech India",
    },
    {
      quote:
        "Exceptional service and support. They helped us achieve our digital transformation goals seamlessly.",
      author: "Vikram Singh",
      role: "MD, Innovative Solutions",
    },
    {
      quote:
        "Innomatrics delivered beyond our expectations. The design, functionality, and responsiveness were flawless.",
      author: "Deepika Reddy",
      role: "Head of IT, NexaCorp",
    },
    {
      quote:
        "A reliable tech partner who values long-term collaboration and transparency.",
      author: "Rohan Malhotra",
      role: "Operations Head, Zentech Pvt Ltd",
    },
    {
      quote:
        "Their agile process helped us launch faster. We could easily adapt during the project.",
      author: "Neha Verma",
      role: "Product Manager, QwikLabs",
    },
    {
      quote:
        "Innomatrics provided robust backend systems that scaled effortlessly as our user base grew.",
      author: "Ankit Desai",
      role: "Founder, EduLaunch",
    },
    {
      quote:
        "I appreciate the proactive communication and deep domain knowledge. A great team to work with.",
      author: "Shreya Nair",
      role: "Lead Developer, Vivid Networks",
    },
  ];

  // Add auto-scrolling functionality
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const totalPairs = Math.ceil(testimonials.length / 2);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % totalPairs);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToNext = () => {
    const totalPairs = Math.ceil(testimonials.length / 2);
    setCurrentTestimonial((prev) => (prev + 1) % totalPairs);
  };

  const goToPrev = () => {
    const totalPairs = Math.ceil(testimonials.length / 2);
    setCurrentTestimonial((prev) => (prev - 1 + totalPairs) % totalPairs);
  };

  return (
    <div className="min-h-screen bg-white">
      <NAv />
      {/* Hero Section */}
      <div className="relative w-full bg-[#020A13]">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJdCdjWM6UpiBcv3cMPqTRqrwI6x4w5hugT0kG-yYy2r6RPmi7TBbuXCdNu5cTrB5UuI&usqp=CAU')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.3'
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-7xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Why Choose Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl">
              We combine innovation, expertise, and dedication to deliver exceptional technology solutions that drive your business forward.
            </p>
            <div className="w-32 h-0.5 bg-white mt-8"></div>
          </div>
        </div>
      </div>

      <div className="mb-20 px-6 md:px-8">
  <h2 className="text-xl font-bold text-orange-600 mb-4 mt-8">WHY US</h2>
  <p className="text-lg text-gray-900 leading-relaxed">
    At Innomatrics, we combine deep technical expertise with a commitment to excellence. Our solutions are tailored to your business goals, ensuring maximum impact and value. From user-friendly interfaces to secure backend systems, we deliver products that are both powerful and reliable. With transparent communication, timely delivery, and a client-first mindset, we are a partner you can trust for long-term success.
  </p>
</div>

      {/* Rest of your existing content */}
      <div className="py-20 bg-white ">
        <div className="max-w-7xl mt-[-80px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://t4.ftcdn.net/jpg/02/87/66/91/360_F_287669118_j5dQdApPRxoXuyXMrrGavM7uTydyh1AG.jpg"
                    alt="Our team working"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
                </div>

          {/* Content Section */}
          <div data-aos=" fade-left">
            <h2 className="text-4xl font-bold text-red-600 mb-6">
              Why Choose Our Software Company?
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Choosing the right technology partner is crucial for your success.
              Here’s why companies trust us to power their digital
              transformation:
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✔</span>
                Proven expertise in AI, Web & Mobile App Development
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✔</span>
                Agile and scalable software delivery model
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✔</span>
                Dedicated support & transparent communication
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✔</span>
                Competitive pricing without compromising quality
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
                title: "Technical Expertise",
                description:
                  "Our team of skilled professionals brings years of experience in delivering cutting-edge technology solutions across various industries.",
              },
              {
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
                title: "Innovative Solutions",
                description:
                  "We stay ahead of technology trends to provide innovative solutions that give your business a competitive edge.",
              },
              {
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
                title: "Customer-Centric Approach",
                description:
                  "Your success is our priority. We work closely with you to understand your needs and deliver solutions that exceed expectations.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                  hoveredCard === index ? "shadow-xl" : ""
                }`}
              >
                <div className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 bg-blue-100 rounded-full mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mt-20 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold text-red-600"
                >
                  What Sets Us Apart
                </motion.h2>

                <div className="space-y-6">
                  {[
                    {
                      title: "Proven Track Record",
                      description:
                        "Successfully delivered numerous projects across various industries.",
                    },
                    {
                      title: "Dedicated Support",
                      description:
                        "24/7 support and maintenance for your peace of mind.",
                    },
                    {
                      title: "Quality Assurance",
                      description:
                        "Rigorous testing and quality control processes.",
                    },
                    {
                      title: "Agile Methodology",
                      description:
                        "Flexible approach to adapt to your changing needs.",
                    },
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={featureVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="mt-2 text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Our team working"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-blue-600 rounded-xl p-8 md:p-12 mb-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="text-white">
                  <motion.p
                    className="text-4xl font-bold mb-2"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-blue-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Updated Testimonials Section */}
          {/* Updated Testimonials Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
              What Our Clients Say
            </h2>

            <div className="relative max-w-6xl mx-auto px-4">
              {/* Testimonial Pairs */}
              <div className="overflow-hidden">
                <motion.div
                  className="flex"
                  animate={{
                    x: `-${currentTestimonial * 100}%`,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {[...Array(Math.ceil(testimonials.length / 2))].map(
                    (_, pairIndex) => (
                      <div
                        key={pairIndex}
                        className="w-full flex-shrink-0 px-2"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {testimonials
                            .slice(pairIndex * 2, pairIndex * 2 + 2)
                            .map((testimonial, index) => (
                              <motion.div
                                key={index}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-xl shadow-lg h-full"
                              >
                                <div className="flex flex-col h-full">
                                  <svg
                                    className="h-12 w-12 text-blue-100 mb-4"
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                  </svg>
                                  <p className="text-gray-600 italic text-lg mb-6 flex-grow">
                                    "{testimonial.quote}"
                                  </p>
                                  <div className="flex items-center">
                                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                                      {testimonial.author.charAt(0)}
                                    </div>
                                    <div className="ml-4 text-left">
                                      <p className="font-medium text-gray-900">
                                        {testimonial.author}
                                      </p>
                                      <p className="text-gray-500">
                                        {testimonial.role}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                        </div>
                      </div>
                    )
                  )}
                </motion.div>
              </div>
            </div>
          </div>
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-red-600 mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Let's discuss how we can help your business grow with our
              technology solutions.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
