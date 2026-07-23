import React from 'react';
import { Link } from 'react-router-dom';
import NAv from "../Navbar/NAv";

const Industries = () => {
  const industries = [
    {
      id: 'healthcare',
      title: "HEALTHCARE",
      subtitle: "We revolutionize healthcare delivery through innovative digital solutions",
      image: "https://images.pexels.com/photos/5998472/pexels-photo-5998472.jpeg"
    },
    {
      id: 'banking',
      title: "BANKING",
      subtitle: "We empower the BFSI sector with secure, scalable, and intelligent digital solutions.",
      image: "https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg"
    },
    {
      id: 'ngo',
      title: "NGO ORGANIZATIONS",
      subtitle: "We support NGOs and nonprofit organizations by delivering impactful digital solutions.",
      image: "https://images.pexels.com/photos/6646934/pexels-photo-6646934.jpeg"
    },
    {
      id: 'travel',
      title: "TOURS AND TRAVELS",
      subtitle: "We help tours and travel businesses create immersive digital experiences that attract, engage, and retain customers.",
      image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg"
    },
    {
      id: 'construction',
      title: "CONSTRUCTION FIRMS",
      subtitle: "We empower construction firms with innovative digital solutions that streamline project management",
      image: "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg"
    },
    {
      id: 'security',
      title: "SECURITY",
      subtitle: "We deliver cutting-edge digital solutions tailored for the security industry, enhancing protection.",
      image: "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <NAv />

      {/* Hero Section */}
      <div className="relative w-full bg-black">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5AocHjcxxSmI7XkK2pdNC55VdzKkJjS6QW4OGsLhOYkin71AJL0jN69ULuO_PETJ8dM&usqp=CAU')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.2'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Industries We Serve
            </h1>
            <div className="w-32 h-0.5 bg-white mt-8 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 space-y-8">
          <div className="w-full mx-auto">
            <h4 className="text-3xl text-red-500 font-semibold mb-8 text-left">Industries We Serve</h4>
            <p className="text-gray-700 text-lg leading-relaxed text-left">
              We proudly serve a diverse range of industries with tailored digital marketing strategies designed to maximize results. 
              Our expertise spans across e-commerce, helping brands boost product visibility and drive online sales with precision-targeted campaigns. 
              In the healthcare sector, we build trust and engagement through informative and patient-focused digital communication. 
              Educational institutions and platforms benefit from our enrollment-focused strategies that enhance reach and credibility. 
              For real estate businesses, we generate high-quality leads and improve property exposure with visually impactful campaigns. 
              Financial services and fintech companies rely on our secure and compliant marketing strategies to build customer confidence and promote growth. 
              We also empower startups and tech ventures with growth-driven approaches that accelerate brand awareness and user acquisition.
            </p>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-3xl font-semibold text-red-500 mb-12 text-left">
            Explore Industries
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-8 relative">
                  <h3 className="text-2xl font-bold text-[#FF4500] mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-gray-700 text-lg mb-4">
                    {industry.subtitle}
                  </p>
                  <Link 
                    to={`/industries/${industry.id}`} 
                    className="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Learn More →
                  </Link>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
