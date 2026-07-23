import React, { useState, useEffect, useRef } from "react";
import { FiMapPin, FiBriefcase, FiClock, FiDollarSign, FiX } from "react-icons/fi";
import { FiChevronLeft, FiChevronRight, FiCheck } from "react-icons/fi";
import careerBg from "../../assets/careerBg.jpg";
import emailjs from "@emailjs/browser";
import ashok from "../../assets/profile.jpeg"


// Initialize EmailJS with your public key
emailjs.init("6VY09sJt6V10-gvtv");

const staticJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-Time",
    experience: "2+ years",
    salary: "$60,000 - $80,000",
    description: "Work on exciting frontend projects using React.",
    requirements: ["React.js", "CSS", "Responsive Design"],
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "Remote",
    type: "Part-Time",
    experience: "3+ years",
    salary: "$40/hr",
    description:
      "Maintain and scale backend systems using Node.js and MongoDB.",
    requirements: ["Node.js", "MongoDB", "REST APIs"],
  },
];

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
    quote: "What I love most are the coworkers and the freedom to ideate. There are endless opportunities where one can make an impact. The leadership's approach to innovation is truly inspiring.",
    name: "Ashok Bonga",
    role: "App Developer",
    image: ashok // <- updated path
  },
  {
    id: 3,
    quote: "The collaborative environment at Innomatrics fosters creativity and growth. Every day brings new challenges and opportunities to learn from talented professionals.",
    name: "Rakesh SG",
    role: "Product Manager",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvdRorUCLbX8qiYq5deN8s955LjOSbSY6ARZwxFs3onTXCgjcegoL7wo1d10qV2K4XrS8&usqp=CAU"
  },
  {
    id: 4,
    quote: "Working with Innomatrics has transformed our digital presence. Their team's expertise in web development and dedication to quality is exceptional.",
    name: "Sathish G",
    role: "App Developer",
    image: "https://avatars.githubusercontent.com/u/124010734?v=4"
  },
  {
    id: 5,
    quote: "The level of professionalism and technical expertise at Innomatrics is outstanding. They've consistently delivered innovative solutions that exceed our expectations.",
    name: "Pramesh prami",
    role: "Manager",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsQM2TMQmLbfWyqQJTjkkYjdRdOtoON5ODg&s"
  }
];

const careerHighlights = [
  {
    id: 1,
    title: "Software Development",
    jobTitle: "Software Engineer",
    description: "Build next-generation applications and solutions that transform industries. Join our team of innovative developers working on cutting-edge technologies.",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
  },
  {
    id: 2,
    title: "Data Science",
    jobTitle: "Data Scientist",
    description: "Turn data into insights. Work with big data and advanced analytics to solve complex business challenges and drive decision-making.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "Cloud Architecture",
    jobTitle: "Cloud Architect",
    description: "Design and implement scalable cloud solutions. Help organizations modernize their infrastructure and embrace digital transformation.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    jobTitle: "ML Engineer",
    description: "Develop intelligent systems and algorithms. Be at the forefront of AI innovation and create solutions that learn and adapt.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
  },
  {
    id: 5,
    title: "Cybersecurity",
    jobTitle: "Security Engineer",
    description: "Protect digital assets and infrastructure. Build robust security systems and ensure data privacy in an increasingly connected world.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(staticJobs[0]);
  const [currentValueSlide, setCurrentValueSlide] = useState(0);
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const [isFirstScroll, setIsFirstScroll] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: ""
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Testimonial transition effect
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 700);
    }, 4000);

    return () => clearInterval(testimonialInterval);
  }, []);

  // Auto-scrolling for career highlights
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const content = container.querySelector('.scroll-content');
    const items = content.children;
    const clonedItems = Array.from(items).map(item => item.cloneNode(true));
    clonedItems.forEach(item => content.appendChild(item));

    let scrollInterval;
    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        const cardWidth = 400;
        const gap = 24;
        const scrollAmount = cardWidth + gap;
        
        if (container.scrollLeft >= (items.length * scrollAmount) - 1) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollAmount;
        }
      }, 3000);
    };

    startScrolling();

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, []);

  const valueSlides = [
    {
      title: "Join Innomatrics Tech Family",
      subtitle: "EXPERIENCE INFINITE POSSIBILITIES",
      description: "At Innomatrics Tech, we believe in nurturing talent and fostering growth. Our team members are our greatest asset, and we're committed to creating an environment where innovation thrives. From comprehensive onboarding programs to continuous learning opportunities, we ensure every member of our team has the tools and support they need to excel in their career journey.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
    },
    {
      title: "Innovation at Innomatrics",
      subtitle: "DRIVE THE FUTURE OF TECHNOLOGY",
      description: "Innomatrics Tech is at the forefront of technological innovation. Our teams work on cutting-edge projects in web development, mobile applications, AI/ML, and cloud solutions. We encourage creative thinking and provide a platform where your ideas can transform into impactful solutions. Join us in building next-generation digital experiences that make a difference.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
    },
    {
      title: "Growth & Development",
      subtitle: "BUILD YOUR FUTURE WITH US",
      description: "At Innomatrics Tech, your growth is our priority. We offer comprehensive training programs, mentorship opportunities, and a clear career progression path. Our collaborative environment encourages knowledge sharing, and we invest in the latest tools and technologies to keep our team at the cutting edge of digital innovation. Join us to transform your potential into excellence.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send email to HR
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
          message: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Role Applied For: ${formData.role}
Experience: ${formData.experience}
          `
        },
        "6VY09sJt6V10-gvtv"
      );

      console.log("EmailJS Response:", response);

      if (response.status === 200) {
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          role: "",
          experience: ""
        });
        
        // Show success popup
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

  // Navigation functions
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextValueSlide = () => {
    setCurrentValueSlide((prev) => (prev + 1) % valueSlides.length);
  };

  const prevValueSlide = () => {
    setCurrentValueSlide((prev) => 
      prev === 0 ? valueSlides.length - 1 : prev - 1
    );
  };

  const getTransformValue = (index) => {
    if (currentTestimonial === testimonials.length - 1 && index === 0) {
      return 100;
    }
    if (currentTestimonial === 0 && index === testimonials.length - 1) {
      return -100;
    }
    return (index - currentTestimonial) * 100;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${careerBg})`,
            filter: "brightness(0.6)",
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Innomatrics Tech Careers
          </h1>
          <p className="text-lg text-white opacity-90 mb-6">
            Join our global team and shape the future with us.
          </p>
          
        </div>
      </div>

      {/* 2-Column Section */}
      <div className="bg-[#f8f8ff] py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-6 leading-tight">
              The work we do <br />
              impacts the world, <br />
              and the future
            </h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition inline-flex items-center"
            >
              Explore Jobs
              <span className="ml-2 text-xl">›</span>
            </button>
          </div>
          <div>
            <div className="bg-[#143b82] text-white font-semibold text-lg px-4 py-2 inline-block mb-4 rounded-sm shadow">
              Software Engineer
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Give your career an edge at Innomatrics Tech with a dynamic work environment and a global culture of innovation. At Innomatrics, we take pride in fostering a workplace where passion drives progress. Our commitment to excellence is reflected in our diverse, inclusive, and collaborative teams — all working toward a shared vision of delivering impactful, high-quality solutions consistently.
            </p>
          </div>
        </div>
      </div>

      {/* Value Slides Section */}
      <div className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <p className="text-orange-500 font-semibold mb-4">{valueSlides[currentValueSlide].subtitle}</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                {valueSlides[currentValueSlide].title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {valueSlides[currentValueSlide].description}
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={prevValueSlide}
                  className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors group"
                >
                  <FiChevronLeft className="w-6 h-6 text-orange-500 group-hover:text-white" />
                </button>
                <button
                  onClick={nextValueSlide}
                  className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors group"
                >
                  <FiChevronRight className="w-6 h-6 text-orange-500 group-hover:text-white" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg">
                {valueSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentValueSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {valueSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentValueSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentValueSlide ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Highlights Section */}
      <div className="bg-white py-12">
        <div className="max-w-full mx-auto px-4">
          <div 
            ref={containerRef}
            className="overflow-hidden"
          >
            <div className="scroll-content flex gap-6 transition-all duration-1000 ease-in-out">
              {careerHighlights.map((highlight) => (
                <div
                  key={highlight.id}
                  className="flex-shrink-0 w-[400px]"
                >
                  <div className="bg-[#f8f8ff] rounded-lg border border-gray-100 h-full shadow-lg">
                    <div className="relative h-48">
                      <img 
                        src={highlight.image} 
                        alt={highlight.title}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-blue-900/20"></div>
                    </div>
                    <div className="p-6">
                      <div className="bg-[#143b82] text-white font-semibold text-lg px-4 py-2 inline-block mb-4 rounded-sm shadow">
                        {highlight.jobTitle}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-700 text-base leading-relaxed mb-6">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Discover Universe Section */}
      <div className="bg-[#00235B] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="py-16 px-4">
            <h2 className="text-4xl font-bold mb-12">Discover the Innomatrics Tech Universe</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Abstract Image */}
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3"
                  alt="Abstract Technology"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Side - Testimonial Slider */}
              <div className="relative bg-[#143b82] p-8 rounded-lg h-[400px]">
                <div className="h-full relative overflow-hidden">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        transform: `translateX(${getTransformValue(index)}%)`,
                        transition: isTransitioning ? 'transform 0.7s ease-in-out' : 'none',
                        opacity: Math.abs(getTransformValue(index)) <= 100 ? 1 : 0,
                        pointerEvents: index === currentTestimonial ? 'auto' : 'none'
                      }}
                    >
                      <div className="h-full flex flex-col">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 mr-4 flex-shrink-0">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-semibold text-xl truncate">{testimonial.name}</h4>
                            <p className="text-blue-200 truncate">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-xl leading-relaxed line-clamp-4">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {/* Left Box */}
              <div className="bg-[#143b82] p-6 rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3"
                  alt="Business Meeting"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-white">Business Excellence</h3>
                <p className="text-blue-200">Driving innovation and excellence in every project we undertake.</p>
              </div>

              {/* Right Box - CSR */}
              <div className="bg-[#143b82] p-6 rounded-lg relative group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3"
                  alt="CSR Activities"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white">Learn more about our CSR →</h3>
                    <p className="text-blue-200">Making a positive impact in our communities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Resume Section */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="City Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto py-24 px-4">
          <div className="max-w-lg ml-auto bg-white rounded-lg p-8 shadow-xl">
            <div className="text-[#FF5733] font-medium mb-2">JOIN OUR TEAM</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Can't find your job?<br />
              Don't worry!
            </h2>
            <p className="text-gray-600 mb-8">
              Our team will reach out to you when we have the opening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="inline-flex items-center px-6 py-3 bg-[#FF5733] text-white font-medium rounded-lg hover:bg-[#E64A2E] transition-colors"
                onClick={() => setIsModalOpen(true)}
              >
                Submit Application
                <FiChevronRight className="ml-2 w-5 h-5" />
              </button>
              <a 
                href="https://in.indeed.com/cmp/Innomatrics-Technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#2557A7] text-white font-medium rounded-lg hover:bg-[#1E4B8F] transition-colors"
              >
                Apply Now
                
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full mx-4 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiCheck className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Application Received!</h3>
            <p className="text-gray-600 mb-4">
              Thank you for your interest. Our HR team will contact you soon for further process.
            </p>
            <p className="text-sm text-gray-500">
              Please check your email for confirmation.
            </p>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {isModalOpen && !showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto p-5">
            
            {/* Header */}
            <div className="flex justify-between items-center border-b border-red-500 pb-3 mb-4">
              <h2 className="text-xl font-semibold text-red-600">Fill this form</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-red-500 hover:text-red-700"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form 
              onSubmit={handleSubmit} 
              className="space-y-4"
            >
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-red-600 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-red-500 text-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-red-600 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-red-500 text-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-red-600 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-3 py-2 border border-red-500 text-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter 10-digit phone number"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-red-600 mb-1">Role You're Applying For</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-red-500 text-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter the position you're applying for"
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-red-600 mb-1">Years of Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-red-500 text-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your years of experience"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition disabled:bg-red-400 font-medium"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;