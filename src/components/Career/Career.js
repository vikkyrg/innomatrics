import React, { useState, useEffect } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiCheck } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import ServiceHero from "../Services/components/ServiceHero";
import SectionHeader from "../Services/components/SectionHeader";
import CTASection from "../Services/components/CTASection";
import JoinOurTeam from "./JoinOurTeam";

import ashok from "../../assets/profile.jpeg";
import dev1 from "../../assets/dev1.jpeg";
import dev2 from "../../assets/dev2.jpeg";

emailjs.init("6VY09sJt6V10-gvtv");

const testimonials = [
  {
    id: 1,
    quote: "Working with a team that encourages innovation and values every contribution has been a rewarding journey. I'm proud to be part of an organization where growth and collaboration are at the core.",
    name: "Dashrath yadav",
    role: "Web Developer",
    image: "https://avatars.githubusercontent.com/u/118556564?v=4"
  },
  {
    id: 2,
    quote: "What I love most are the coworkers and the freedom to ideate. There are endless opportunities where one can make an impact.",
    name: "Ashok Bonga",
    role: "App Developer",
    image: ashok
  },
  {
    id: 3,
    quote: "The collaborative environment at Innomatrics fosters creativity and growth. Every day brings new challenges and opportunities.",
    name: "Rakesh SG",
    role: "Product Manager",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvdRorUCLbX8qiYq5deN8s955LjOSbSY6ARZwxFs3onTXCgjcegoL7wo1d10qV2K4XrS8&usqp=CAU"
  },
  {
    id: 6,
    quote: "Joining Innomatrics Tech has been a fantastic experience. The team spirit and dedication to delivering top-notch web applications is unmatched.",
    name: "Moula Hussain",
    role: "Web Developer",
    image: dev1
  },
  {
    id: 7,
    quote: "Building scalable web solutions here is both challenging and rewarding. I appreciate the continuous learning opportunities provided by the company.",
    name: "Janarthanan",
    role: "Web Developer",
    image: dev2
  }
];

const careerHighlights = [
  {
    id: 1,
    title: "Software Development",
    jobTitle: "Software Engineer",
    description: "Build next-generation applications and solutions that transform industries. Join our team of innovative developers.",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Data Science",
    jobTitle: "Data Scientist",
    description: "Turn data into insights. Work with big data and advanced analytics to solve complex business challenges.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Cloud Architecture",
    jobTitle: "Cloud Architect",
    description: "Design and implement scalable cloud solutions. Help organizations modernize their infrastructure.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop"
  }
];

const valueSlides = [
  {
    title: "Join Innomatrics Tech Family",
    subtitle: "EXPERIENCE INFINITE POSSIBILITIES",
    description: "At Innomatrics Tech, we believe in nurturing talent and fostering growth. Our team members are our greatest asset, and we're committed to creating an environment where innovation thrives.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1074&auto=format&fit=crop"
  },
  {
    title: "Innovation at Innomatrics",
    subtitle: "DRIVE THE FUTURE OF TECHNOLOGY",
    description: "Innomatrics Tech is at the forefront of technological innovation. Our teams work on cutting-edge projects in web development, mobile applications, AI/ML, and cloud solutions.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1074&auto=format&fit=crop"
  },
  {
    title: "Growth & Development",
    subtitle: "BUILD YOUR FUTURE WITH US",
    description: "At Innomatrics Tech, your growth is our priority. We offer comprehensive training programs, mentorship opportunities, and a clear career progression path.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1074&auto=format&fit=crop"
  }
];

const Career = () => {
  const [currentValueSlide, setCurrentValueSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Testimonial auto-rotation
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialInterval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await emailjs.send(
        "service_jrw5k1p",
        "template_bi8brd5",
        {
          to_name: "HR Team",
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          role: formData.role,
          experience: formData.experience,
          message: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nRole: ${formData.role}\nExperience: ${formData.experience}`
        },
        "6VY09sJt6V10-gvtv"
      );

      if (response.status === 200) {
        setFormData({ name: "", email: "", phone: "", role: "", experience: "" });
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowSuccessPopup(false);
          setIsModalOpen(false);
        }, 3000);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Error sending application. Please try again or contact support.");
    } finally {
      setLoading(false);
    }
  };

  const nextValueSlide = () => setCurrentValueSlide((prev) => (prev + 1) % valueSlides.length);
  const prevValueSlide = () => setCurrentValueSlide((prev) => (prev === 0 ? valueSlides.length - 1 : prev - 1));

  // Smooth-scroll to the Join Our Team / application section (no route change)
  const scrollToJobApplication = () => {
    document.getElementById("job-application")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <ServiceHero 
        breadcrumbTitle="Careers"
        title="Shape the Future of Technology"
        description="Join our global team of visionaries. Give your career an edge with a dynamic work environment and a culture of continuous innovation."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
        primaryCTA="Submit Application"
        onPrimaryClick={scrollToJobApplication}
        secondaryCTA={null}
      />

      {/* Intro Section */}
      <div className="section-padding bg-white border-b border-secondary-200">
        <div className="container-custom">
          <div className="w-full px-4 md:px-8 lg:px-12">
            <span className="text-primary-800 font-bold uppercase tracking-widest text-xs mb-4 block">
              Life at Innomatrics
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary-900 mb-8 tracking-tight">
              The work we do impacts the world, and the future.
            </h2>
            <div className="prose prose-lg text-secondary-600 max-w-none">
              <p className="leading-relaxed text-justify">
                At Innomatrics, we take pride in fostering a workplace where passion drives progress. Our commitment to excellence is reflected in our diverse, inclusive, and collaborative teams — all working toward a shared vision of delivering impactful, high-quality solutions consistently.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Value Slides Section */}
      <div className="section-padding bg-secondary-50 border-b border-secondary-200">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative z-10">
              <p className="text-primary-800 font-bold uppercase tracking-widest text-xs mb-4">
                {valueSlides[currentValueSlide].subtitle}
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-secondary-900 mb-6">
                {valueSlides[currentValueSlide].title}
              </h2>
              <p className="text-secondary-600 text-lg leading-relaxed mb-10 min-h-[120px]">
                {valueSlides[currentValueSlide].description}
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={prevValueSlide}
                  className="w-12 h-12 rounded-full border border-secondary-300 flex items-center justify-center hover:bg-primary-900 hover:text-white hover:border-primary-900 transition-all text-secondary-600"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextValueSlide}
                  className="w-12 h-12 rounded-full border border-secondary-300 flex items-center justify-center hover:bg-primary-900 hover:text-white hover:border-primary-900 transition-all text-secondary-600"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] overflow-hidden border border-secondary-200 bg-secondary-100 shadow-sm">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentValueSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    src={valueSlides[currentValueSlide].image}
                    alt={valueSlides[currentValueSlide].title}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-primary-900/10 mix-blend-overlay"></div>
              </div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {valueSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentValueSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentValueSlide ? 'bg-primary-600 scale-125' : 'bg-white/50 hover:bg-white'}`}
                  />
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Career Highlights / Departments */}
      <div className="section-padding bg-white border-b border-secondary-200" id="openings">
        <div className="container-custom">
          <SectionHeader 
            eyebrow="Departments"
            title="Explore Opportunities"
            description="Join our team of innovative developers working on cutting-edge technologies across multiple disciplines."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-secondary-200 mt-12">
            {careerHighlights.map((highlight, i) => (
              <motion.div
                key={highlight.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-white border-b border-r border-secondary-200 overflow-hidden flex flex-col h-[450px]"
              >
                <div className="relative h-48 overflow-hidden border-b border-secondary-200">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
 className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow bg-white group-hover:bg-secondary-50 transition-colors duration-300">
                  <div className="bg-primary-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 inline-flex w-fit mb-4">
                    {highlight.jobTitle}
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-800 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed flex-grow">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="section-padding bg-primary-900 text-white border-b border-primary-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-2 py-1 bg-primary-800 text-primary-200 text-xs font-bold tracking-widest uppercase mb-8 border border-primary-700">
              Employee Voices
            </span>
            
            <div className="relative min-h-[250px] flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <p className="text-2xl md:text-3xl leading-relaxed font-medium mb-10 text-primary-50">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div className="flex items-center justify-center">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary-500 mr-4"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-lg text-white">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-primary-300 text-sm">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center space-x-2 mt-12">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentTestimonial ? 'bg-white w-6' : 'bg-primary-700 hover:bg-primary-500'}`}
                />
              ))}
            </div>
            
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />

      {/* Join Our Team CTA (immediately before the footer) */}
      <JoinOurTeam />

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-secondary-900/80 px-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white p-10 max-w-sm w-full text-center border border-secondary-200 shadow-2xl"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiCheck className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Application Received</h3>
              <p className="text-secondary-600 text-sm leading-relaxed mb-6">
                Thank you for your interest. Our HR team will review your application and contact you soon.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Application Form Modal */}
      <AnimatePresence>
        {isModalOpen && !showSuccessPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-secondary-900/80 px-4 py-6"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto border border-secondary-200 shadow-2xl"
            >
              <div className="flex justify-between items-center border-b border-secondary-200 p-6 bg-secondary-50">
                <h2 className="text-lg font-bold text-secondary-900 uppercase tracking-widest">Submit Application</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-secondary-500 hover:text-secondary-900 transition-colors"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-secondary-700 uppercase tracking-widest mb-2">Full Name</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleInputChange} required
                      className="w-full border border-secondary-200 bg-secondary-50 px-4 py-3 text-secondary-900 focus:outline-none focus:border-primary-600 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-secondary-700 uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleInputChange} required
                      className="w-full border border-secondary-200 bg-secondary-50 px-4 py-3 text-secondary-900 focus:outline-none focus:border-primary-600 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-secondary-700 uppercase tracking-widest mb-2">Phone</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required pattern="[0-9]{10}"
                      className="w-full border border-secondary-200 bg-secondary-50 px-4 py-3 text-secondary-900 focus:outline-none focus:border-primary-600 transition-colors"
                      placeholder="10 digit number"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-secondary-700 uppercase tracking-widest mb-2">Role Applying For</label>
                    <input
                      type="text" name="role" value={formData.role} onChange={handleInputChange} required
                      className="w-full border border-secondary-200 bg-secondary-50 px-4 py-3 text-secondary-900 focus:outline-none focus:border-primary-600 transition-colors"
                      placeholder="e.g. Frontend Developer"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-secondary-700 uppercase tracking-widest mb-2">Years of Experience</label>
                    <input
                      type="text" name="experience" value={formData.experience} onChange={handleInputChange} required
                      className="w-full border border-secondary-200 bg-secondary-50 px-4 py-3 text-secondary-900 focus:outline-none focus:border-primary-600 transition-colors"
                      placeholder="e.g. 3 Years"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full font-bold uppercase tracking-widest text-sm py-4 mt-8 transition-colors ${loading ? 'bg-secondary-200 text-secondary-500 cursor-not-allowed' : 'bg-primary-900 text-white hover:bg-primary-800'}`}
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Career;