import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../Services/components/SectionHeader';

const Industries = () => {
  const industries = [
    {
      id: 'healthcare',
      title: "HEALTHCARE",
      subtitle: "We revolutionize healthcare delivery through innovative digital solutions",
      image: "https://images.pexels.com/photos/5998472/pexels-photo-5998472.jpeg"
    },
    {
      id: 'banking-finance',
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
      id: 'tours-travel',
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
    },
    {
      id: 'education',
      title: "EDUCATION",
      subtitle: "Empowering educational institutions with digital solutions that enhance learning experiences.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 'manufacturing',
      title: "MANUFACTURING",
      subtitle: "Optimizing manufacturing processes through smart automation and data-driven insights.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 'garments',
      title: "GARMENTS",
      subtitle: "Providing tailored ERP and supply chain software to streamline operations in the garment industry.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 'logistics',
      title: "LOGISTICS",
      subtitle: "Enhancing supply chain visibility with robust logistics solutions designed for speed and reliability.",
      image: "https://images.unsplash.com/photo-1561518776-e76a5e48f731?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 'ecommerce',
      title: "E-COMMERCE",
      subtitle: "Building scalable and user-centric e-commerce platforms that drive sales and market reach.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 'real-estate',
      title: "REAL ESTATE",
      subtitle: "Transforming real estate operations with innovative CRM and property management platforms.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 'restaurants',
      title: "RESTAURANTS",
      subtitle: "Delivering custom POS systems and management dashboards tailored for the food industry.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 'retail',
      title: "RETAIL",
      subtitle: "Empowering retail businesses with omnichannel digital solutions and intelligent inventory management.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 'professional-services',
      title: "PROFESSIONAL SERVICES",
      subtitle: "Equipping professional service providers with digital tools for workflow automation.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 'startups',
      title: "STARTUPS",
      subtitle: "Partnering with startups to rapidly build, launch, and scale innovative digital products.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="relative min-h-[500px] flex items-center bg-primary-900 border-b border-primary-800 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5AocHjcxxSmI7XkK2pdNC55VdzKkJjS6QW4OGsLhOYkin71AJL0jN69ULuO_PETJ8dM&usqp=CAU')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="container-custom relative z-10 py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-block w-fit px-2 py-1 bg-primary-800 text-primary-200 text-xs font-semibold tracking-widest uppercase mb-8 border border-primary-700">
              Domains
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-primary-200 leading-relaxed font-normal">
              Empowering diverse sectors with specialized technology solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center w-full px-4 md:px-[10%]">
            <span className="text-primary-800 font-bold uppercase tracking-widest text-xs mb-4 block">
              Global Reach
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary-900 mb-8 tracking-tight">
              Driving Digital Excellence
            </h2>
            <div className="text-secondary-600">
              <p className="text-lg leading-relaxed mb-6 text-justify">
                We proudly serve a diverse range of industries with tailored digital transformation strategies designed to maximize results. 
                Our expertise spans across e-commerce, helping brands boost product visibility and drive online sales with precision-targeted engineering. 
                In the healthcare sector, we build trust and engagement through secure, patient-focused digital communication platforms.
              </p>
              <p className="text-lg leading-relaxed text-justify">
                Financial services and fintech companies rely on our secure and compliant enterprise architectures to build customer confidence and promote growth. 
                We also empower startups and tech ventures with scalable approaches that accelerate deployment and user acquisition.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="section-padding bg-secondary-50 border-t border-secondary-200">
        <div className="container-custom">
          <SectionHeader 
            eyebrow="Sectors"
            title="Explore Industries"
            description="Our specialized expertise spans across multiple domains."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-secondary-200">
            {industries.map((industry, index) => (
              <Link
                key={index}
                to={`/${industry.id}`}
                className="group relative bg-white border-b border-r border-secondary-200 overflow-hidden flex flex-col h-[450px]"
              >
                <div className="relative h-48 overflow-hidden border-b border-secondary-200">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="p-8 flex flex-col flex-grow bg-white group-hover:bg-secondary-50 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-800 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed mb-6 flex-grow">
                    {industry.subtitle}
                  </p>
                  <span className="text-primary-800 group-hover:text-primary-600 text-xs font-bold uppercase tracking-widest inline-flex items-center mt-auto transition-colors">
                    Learn More 
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
