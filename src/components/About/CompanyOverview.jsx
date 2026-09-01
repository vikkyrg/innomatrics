import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ServiceHero from "../Services/components/ServiceHero";
import CTASection from "../Services/components/CTASection";

const CompanyOverview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const achievements = [
    {
      title: "Projects Delivered",
      count: "500+",
      description: "Successful project completions across various industries",
    },
    {
      title: "Client Satisfaction",
      count: "98%",
      description: "Positive feedback from our valued clients",
    },
    {
      title: "Team Members",
      count: "150+",
      description: "Skilled professionals working together",
    },
    {
      title: "Global Presence",
      count: "10+",
      description: "Countries where we've delivered solutions",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <ServiceHero 
        breadcrumbTitle="Company Overview"
        title="Innovating for Tomorrow"
        description="Driving digital transformation through innovative technology solutions since 2023. We empower businesses to transform digitally and stay competitive."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
        primaryCTA="Explore Our Services"
        primaryLink="/services"
      />

      <div className="section-padding bg-white">
        <div className="container-custom">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center w-full px-4 md:px-8 lg:px-12"
          >
            <span className="text-primary-800 font-bold uppercase tracking-widest text-xs mb-4 block">Overview</span>
            <p className="text-xl text-secondary-600 leading-relaxed font-normal mb-6 text-justify">
              Innomatrics is a technology-driven company focused on delivering innovative, scalable, and customer-centric solutions. With a strong foundation in modern development practices and cloud infrastructure, we empower businesses to transform digitally and stay competitive. Our team specializes in crafting end-to-end software products tailored to meet diverse industry needs, ensuring efficiency, security, and long-term growth.
            </p>
            <p className="text-xl text-secondary-600 leading-relaxed font-normal text-justify">
              We leverage deep industry expertise to bridge the gap between complex business logic and state-of-the-art technological capabilities. Our agile methodology, commitment to enterprise-grade security architecture, and rigorous quality assurance processes ensure that every solution we deliver is robust and designed to scale seamlessly. By partnering with us, you gain a dedicated team of experts committed to turning visionary concepts into tangible digital realities that accelerate your business outcomes.
            </p>
          </motion.div>

          {/* About Us Section */}
          <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative overflow-hidden border border-secondary-200 group">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661347859297-859b8ae1d7c5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBtZWV0aW5nfGVufDB8fDB8fHww"
 className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 "
                  alt="Business Meeting"
                />
                <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 space-y-6"
            >
              <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary-900 tracking-tight leading-tight mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed font-normal">
                Innomatrics Technologies is a forward-thinking technology
                company that specializes in delivering innovative digital
                solutions. Founded in 2023 in Bangalore, we've rapidly grown to
                become a trusted partner for businesses seeking digital
                transformation.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed font-normal">
                Our team of expert developers, designers, and strategists works
                collaboratively to create custom solutions that drive real
                business value. We combine technical expertise with creative
                thinking to solve complex challenges and deliver exceptional
                results.
              </p>
            </motion.div>
          </div>

          {/* Our Expertise */}
          <div className="mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary-800 font-bold uppercase tracking-widest text-xs mb-4 block">Core Capabilities</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-secondary-900 tracking-tight">Our Expertise</h2>
            </motion.div>

            {/* Web Development Expertise */}
            <div className="flex flex-col md:flex-row gap-12 items-center mb-24 border border-secondary-200">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 space-y-6 p-10 lg:p-14 border-b md:border-b-0 md:border-r border-secondary-200 bg-secondary-50"
              >
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  Web Development
                </h3>
                <p className="text-lg text-secondary-600 leading-relaxed font-normal">
                  Our web development team creates powerful, scalable
                  applications using cutting-edge technologies. We specialize in
                  building responsive, user-friendly websites and web
                  applications that drive business growth.
                </p>
                <ul className="space-y-4 mt-8">
                  {[
                    "Custom Web Applications",
                    "Responsive Design",
                    "Performance Optimization"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-secondary-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary-700"></div>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 p-0 h-[400px]"
              >
                <div className="relative overflow-hidden group h-full">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg"
                    alt="Web Development"
 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 "
                  />
                  <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </motion.div>
            </div>

            {/* Mobile Development Expertise */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center mb-24 border border-secondary-200">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 space-y-6 p-10 lg:p-14 border-b md:border-b-0 md:border-l border-secondary-200 bg-secondary-50"
              >
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  Mobile Development
                </h3>
                <p className="text-lg text-secondary-600 leading-relaxed font-normal">
                  We create innovative mobile applications that engage users and
                  deliver exceptional experiences. Our mobile development
                  expertise spans across native and cross-platform solutions.
                </p>
                <ul className="space-y-4 mt-8">
                  {[
                    "Native iOS & Android Apps",
                    "Cross-platform Solutions",
                    "Mobile UI/UX Design"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-secondary-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary-700"></div>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 p-0 h-[400px]"
              >
                <div className="relative overflow-hidden group h-full">
                  <img
                    src="https://media.istockphoto.com/id/1174690086/photo/software-developer-freelancer-working-at-home.jpg?s=612x612&w=0&k=20&c=loFqul06ggwtkwqSmzZnYfA72Vk7nFQOvDSzAN6YbtQ="
                    alt="Mobile Development"
 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 "
                  />
                  <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </motion.div>
            </div>

            {/* Digital Marketing Expertise */}
            <div className="flex flex-col md:flex-row gap-12 items-center mb-12 border border-secondary-200">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 space-y-6 p-10 lg:p-14 border-b md:border-b-0 md:border-r border-secondary-200 bg-secondary-50"
              >
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  Digital Marketing
                </h3>
                <p className="text-lg text-secondary-600 leading-relaxed font-normal">
                  Our digital marketing strategies help businesses reach their
                  target audience and achieve measurable results. We combine
                  data-driven insights with creative excellence to deliver
                  impactful campaigns.
                </p>
                <ul className="space-y-4 mt-8">
                  {[
                    "SEO Optimization",
                    "Social Media Marketing",
                    "Content Strategy"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-secondary-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary-700"></div>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 p-0 h-[400px]"
              >
                <div className="relative overflow-hidden group h-full">
                  <img
                    src="https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94834.jpg?w=1380"
                    alt="Digital Marketing"
 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 "
                  />
                  <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="section-padding bg-secondary-900">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-400 font-bold uppercase tracking-widest text-xs mb-4 block">Our Impact</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">Our Achievements</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-secondary-700 gap-0">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-12 bg-secondary-900 border-b border-r border-secondary-700 hover:bg-secondary-800 transition-colors duration-300 group"
              >
                <div className="text-5xl font-mono font-bold text-white mb-6 group-hover:text-primary-400 transition-colors">
                  {achievement.count}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {achievement.title}
                </h3>
                <p className="text-secondary-400 text-sm leading-relaxed font-medium">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <CTASection />
    </div>
  );
};

export default CompanyOverview;
