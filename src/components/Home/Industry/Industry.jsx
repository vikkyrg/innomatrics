import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdLocalHospital,
  MdAccountBalance,
  MdApartment,
  MdDirectionsCar,
  MdBusiness,
  MdLock
} from 'react-icons/md';

const Industry = () => {
  const [activeIndustry, setActiveIndustry] = useState('banking');

  const industries = [
    {
      id: 'healthcare',
      icon: <MdLocalHospital className="text-2xl" />,
      title: "Healthcare",
      description: "Revolutionizing healthcare delivery through innovative digital solutions that enhance patient care, streamline operations, and improve healthcare outcomes for a better tomorrow.",
      image: "https://www.shutterstock.com/image-vector/bfsi-banking-financial-services-insurance-600nw-2133334589.jpg"
    },
    {
      id: 'banking',
      icon: <MdAccountBalance className="text-2xl" />,
      title: "Banking, Financial Services & Insurance",
      description: "Pioneering transformative shifts in the financial landscape by harnessing the collective expertise of our seasoned professionals in banking, financial services, insurance, and payments, to craft innovative solutions that redefine industry standards and empower individuals and businesses to thrive in an ever-evolving economic ecosystem.",
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    {
      id: 'ngo',
      icon: <MdApartment className="text-2xl" />,
      title: "NGO Organizations",
      description: "Dedicatedly empowering communities and catalyzing meaningful change through concerted efforts that prioritize inclusivity, collaboration, and sustainable practices, thereby fostering a brighter, more equitable future for all.",
      image: "https://t3.ftcdn.net/jpg/02/36/95/44/360_F_236954427_7l75FyrRb19rvnTCyJdNNcYpXokXkEPi.jpg"
    },
    {
      id: 'tours',
      icon: <MdDirectionsCar className="text-2xl" />,
      title: "Tours And Travels",
      description: "Transforming travel experiences through cutting-edge technology solutions that streamline bookings, enhance customer experiences, and revolutionize the way people explore the world.",
      image: "https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg"
    },
    {
      id: 'construction',
      icon: <MdBusiness className="text-2xl" />,
      title: "Construction Firms",
      description: "Building the future through innovative digital solutions that optimize project management, enhance collaboration, and drive efficiency in construction operations.",
      image: "https://info.engineering.vanderbilt.edu/hubfs/AdobeStock_222740403-1.jpeg"
    },
    {
      id: 'security',
      icon: <MdLock className="text-2xl" />,
      title: "Security",
      description: "Protecting digital assets and infrastructure with state-of-the-art security solutions that ensure peace of mind in an increasingly connected world.",
      image: "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ="
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00235B] mb-8">
          Industries we have collaborated with
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left side menu */}
          <div className="lg:w-1/4">
            <div>
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  className={`flex items-center gap-2 py-2 px-3 cursor-pointer transition-all duration-300 hover:bg-gray-50 ${activeIndustry === industry.id
                      ? 'border-l-4 border-[#FF4500] bg-gray-50'
                      : 'border-l-4 border-transparent'
                    }`}
                  onMouseEnter={() => setActiveIndustry(industry.id)}
                >
                  <span className="text-[#0096FF]">{industry.icon}</span>
                  <h3 className="text-base font-medium text-gray-800">{industry.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right side content */}
          <div className="lg:w-3/4">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className={`transition-opacity duration-300 ${activeIndustry === industry.id ? 'block opacity-100' : 'hidden opacity-0'
                  }`}
              >
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                  {/* Content Section */}
                  <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold text-[#FF4500] mb-4">
                      {industry.title}
                    </h2>
                    <p className="text-gray-700 text-base mb-6">
                      {industry.description}
                    </p>
                    <Link
                      to={`/industries/${industry.id}`}
                      className="inline-block px-5 py-2 bg-[#FF4500] text-white font-medium rounded hover:bg-[#FF5722] transition-colors duration-300"
                    >
                      Learn More
                    </Link>
                  </div>

                  {/* Image Section */}
                  <div className="lg:w-1/2">
                    <div className="relative h-[320px] rounded-lg overflow-hidden shadow">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
