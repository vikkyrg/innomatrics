import React, { useEffect } from "react";
import "./About.css";
import Companyimage from "../../assets/Companyimage.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import NAv from "../Navbar/NAv";

const CompanyOverview = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
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

  const journeyImages = [
    {
      url: "https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-13391.jpg?w=1380",
      title: "Client Partnerships",
      description: "Building lasting relationships with our clients",
    },
    {
      url: "https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15773.jpg?w=1380",
      title: "Strategy Sessions",
      description: "Planning innovative solutions",
    },
    {
      url: "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595847.jpg?semt=ais_hybrid&w=740",
      title: "Technical Excellence",
      description: "Delivering high-quality code",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNV3sSoOuhSAlNPRh3Q4hbccgXQ31Eqi22Gg&s",
      title: "Mobile Innovation",
      description: "Creating seamless mobile experiences",
    },
    {
      url: "https://media.istockphoto.com/id/1867035079/photo/analytics-and-data-management-systems-business-analytics-and-data-management-systems-to-make.jpg?s=612x612&w=0&k=20&c=tFcJnBIWlkPhIumrPtkSJwFRNDMtdVfJ1CYbfUlx5fE=",
      title: "Data Analytics",
      description: "Transforming data into insights",
    },
    {
      url: "https://images.squarespace-cdn.com/content/v1/5a887d31f6576efc0bfaf2ea/1550530665644-ES6C7BAT0WW6AOGH5E9U/strategy-driven-marketing-agency-client-partnership-business-growth-SEO-website-Chicago.jpg?format=2500w",
      title: "Team Collaboration",
      description: "Working together towards excellence",
    },
    {
      url: "https://img.freepik.com/free-photo/close-up-hands-typing-laptop_23-2149346354.jpg?w=1380",
      title: "Development Process",
      description: "Crafting quality solutions",
    },
    {
      url: "https://www.shutterstock.com/image-photo/group-colleagues-engaging-discussion-during-600nw-2461746317.jpg",
      title: "Client Meetings",
      description: "Understanding client needs",
    },
    {
      url: "https://veriday.com/wp-content/uploads/2024/05/ai.jpeg",
      title: "AI Integration",
      description: "Embracing future technologies",
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
            backgroundImage: "url('https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?cs=srgb&dl=pexels-pixabay-41949.jpg&fm=jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.2'
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-7xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Innovating for Tomorrow
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl">
              Driving digital transformation through innovative technology solutions since 2023
            </p>
            <div className="w-32 h-0.5 bg-white mt-8"></div>
          </div>
        </div>
      </div>


      <div className="mb-20 px-6 md:px-8">
  <h2 className="text-xl font-bold text-orange-600 mb-4 mt-8">OVERVIEW</h2>
  <p className="text-lg text-gray-900 leading-relaxed">
    Innomatrics is a technology-driven company focused on delivering innovative, scalable, and customer-centric solutions. With a strong foundation in modern development practices and cloud infrastructure, we empower businesses to transform digitally and stay competitive. Our team specializes in crafting end-to-end software products tailored to meet diverse industry needs, ensuring efficiency, security, and long-term growth.
  </p>
</div>

      {/* About Us Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-[-80px] items-center mb-20">
            <div data-aos="fade-right">
              <img
                src="https://plus.unsplash.com/premium_photo-1661347859297-859b8ae1d7c5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBtZWV0aW5nfGVufDB8fDB8fHww"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6" data-aos="fade-left">
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Innomatrics Technologies is a forward-thinking technology
                company that specializes in delivering innovative digital
                solutions. Founded in 2023 in Bangalore, we've rapidly grown to
                become a trusted partner for businesses seeking digital
                transformation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team of expert developers, designers, and strategists works
                collaboratively to create custom solutions that drive real
                business value. We combine technical expertise with creative
                thinking to solve complex challenges and deliver exceptional
                results.
              </p>
              <p>
                We combine technical expertise with creative thinking to solve
                complex.
              </p>{" "}
            </div>
          </div>

          {/* Our Journey Section */}
          <div className="mb-20">
            <h2
              className="text-4xl font-bold text-center text-red-600 mb-16"
              data-aos="fade-up"
            >
              Our Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {journeyImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Expertise */}
          <div className="mb-20">
            <h2
              className="text-4xl font-bold text-center text-red-600 mb-16"
              data-aos="fade-up"
            >
              Our Expertise
            </h2>

            {/* Web Development Expertise */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6" data-aos="fade-right">
                <h3 className="text-3xl font-bold text-red-600 mb-4">
                  Web Development
                </h3>
                <div className="w-16 h-1 bg-[#FF4500]"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our web development team creates powerful, scalable
                  applications using cutting-edge technologies. We specialize in
                  building responsive, user-friendly websites and web
                  applications that drive business growth.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-[#FF4500] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Custom Web Applications
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-[#FF4500] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Responsive Design
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-[#FF4500] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Performance Optimization
                  </li>
                </ul>
              </div>
              <div data-aos="fade-left">
                <img
                  src="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg"
                  alt="Web Development"
                  className="rounded-lg shadow-2xl w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* Mobile Development Expertise */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div data-aos="fade-right">
                <img
                  src="https://media.istockphoto.com/id/1174690086/photo/software-developer-freelancer-working-at-home.jpg?s=612x612&w=0&k=20&c=loFqul06ggwtkwqSmzZnYfA72Vk7nFQOvDSzAN6YbtQ="
                  alt="Mobile Development"
                  className="rounded-lg shadow-2xl w-full h-[300px] object-cover"
                />
              </div>
              <div className="space-y-6" data-aos="fade-left">
                <h3 className="text-3xl font-bold text-red-600 mb-4">
                  Mobile Development
                </h3>
                <div className="w-16 h-1 bg-[#FF4500]"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We create innovative mobile applications that engage users and
                  deliver exceptional experiences. Our mobile development
                  expertise spans across native and cross-platform solutions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-[#FF4500] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Native iOS & Android Apps
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-[#FF4500] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Cross-platform Solutions
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-[#FF4500] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Mobile UI/UX Design
                  </li>
                </ul>
              </div>
            </div>

            {/* Digital Marketing Expertise */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6" data-aos="fade-right">
                <h3 className="text-3xl font-bold text-red-600 mb-4">
                  Digital Marketing
                </h3>
                <div className="w-16 h-1 bg-[#FF4500]"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our digital marketing strategies help businesses reach their
                  target audience and achieve measurable results. We combine
                  data-driven insights with creative excellence to deliver
                  impactful campaigns.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-[#FF4500] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    SEO Optimization
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-[#FF4500] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Social Media Marketing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-[#FF4500] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Content Strategy
                  </li>
                </ul>
              </div>
              <div data-aos="fade-left">
                <img
                  src="https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94834.jpg?w=1380"
                  alt="Digital Marketing"
                  className="rounded-lg shadow-2xl w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-20" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-center text-red-600 mb-16">
              Our Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="text-4xl font-bold text-[#FF4500] mb-3">
                    {achievement.count}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-red-600 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#FF4500] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#FF5722] transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
