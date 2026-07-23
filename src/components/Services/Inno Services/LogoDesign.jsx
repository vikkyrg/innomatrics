import React, { forwardRef, useState } from "react";
import app from "../../../assets/brandDesign3.jpg";
import app2 from "../../../assets/brandDesign.jpg";
import approach from "../../../assets/brandDesign2.jpg";
import "./LogoDesign.css";
import l1 from "../../../assets/digitalMarketing/d1.avif";
import l2 from "../../../assets/digitalMarketing/d2.jpg";
import l3 from "../../../assets/digitalMarketing/d3.avif";
import l4 from "../../../assets/digitalMarketing/d4.avif";
import l5 from "../../../assets/digitalMarketing/d5.png";
import l6 from "../../../assets/digitalMarketing/d6.webp";
import { Link } from "react-router-dom";

const ServicesCard = ({ image, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
    <div className="relative h-48">
      <img src={image} className="w-full h-full object-cover" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const LogoDesign = forwardRef((props, ref) => {
  const [hoveredService, setHoveredService] = useState(null);

  const offerings = {
    items: [
      "Custom Logo Design",
      "Brand Identity Design",
      "Logo Animation",
      "Vector Logo Creation",
      "Logo Redesign",
      "Corporate Identity Package",
    ],
    description:
      "At Innomatrics, we create distinctive and memorable logos that capture your brand's essence. From concept to completion, we focus on delivering designs that make a lasting impression.",
    images: {
      default:
        "https://img.freepik.com/free-vector/abstract-logo-geometric-design_23-2148809279.jpg",
      "Custom Logo Design":
        "https://img.freepik.com/free-vector/gradient-colored-abstract-logo-collection_52683-83016.jpg",
      "Brand Identity Design":
        "https://img.freepik.com/free-vector/gradient-brand-design-elements_23-2149260904.jpg",
      "Logo Animation":
        "https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg",
      "Vector Logo Creation":
        "https://img.freepik.com/free-vector/abstract-geometric-logo-design_23-2148898789.jpg",
      "Logo Redesign":
        "https://img.freepik.com/free-vector/abstract-logo-collection-gradient_52683-84386.jpg",
      "Corporate Identity Package":
        "https://img.freepik.com/free-vector/gradient-business-logo-collection_52683-84321.jpg",
    },
    descriptions: {
      default:
        "Transform your brand with our professional logo design services that combine creativity with strategic thinking.",
      "Custom Logo Design":
        "Create a unique and memorable identity with our custom logo design service that perfectly represents your brand values.",
      "Brand Identity Design":
        "Develop a complete visual language for your brand with cohesive design elements that work across all platforms.",
      "Logo Animation":
        "Bring your logo to life with smooth, professional animations perfect for digital platforms and video content.",
      "Vector Logo Creation":
        "Get scalable, high-quality vector logos that maintain perfect clarity at any size for all your branding needs.",
      "Logo Redesign":
        "Refresh and modernize your existing logo while maintaining brand recognition and core values.",
      "Corporate Identity Package":
        "Receive a comprehensive branding package including logo variations, business cards, letterheads, and brand guidelines.",
    },
  };

  const services = [
    {
      title: "Custom Logo Design",
      description:
        "We create unique and customized logo designs that perfectly represent your brand's identity and values.",
      image:
        "https://img.freepik.com/free-vector/gradient-colored-abstract-logo-collection_52683-83016.jpg",
    },
    {
      title: "Brand Identity Development",
      description:
        "Our team develops comprehensive brand identity packages, including logos, color schemes, and typography.",
      image:
        "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",
    },
    {
      title: "Rebranding Services",
      description:
        "Refresh your brand with our rebranding services, giving your business a modern and updated look.",
      image:
        "https://img.freepik.com/free-vector/gradient-abstract-logo-template_23-2149014804.jpg",
    },
    {
      title: "Logo Animation",
      description:
        "Enhance your logo with animation services, making it dynamic and engaging for digital platforms.",
      image:
        "https://img.freepik.com/free-vector/motion-graphic-design-concept-illustration_114360-2420.jpg",
    },
    {
      title: "Business Card Design",
      description:
        "We design professional business cards that incorporate your logo and brand identity, making a strong first impression.",
      image:
        "https://img.freepik.com/free-vector/gradient-business-card-template_23-2149014921.jpg",
    },
    {
      title: "Marketing Material Design",
      description:
        "Our team creates cohesive marketing materials, including brochures, flyers, and banners, featuring your logo and brand elements.",
      image:
        "https://img.freepik.com/free-vector/gradient-business-branding-template_23-2149014923.jpg",
    },
  ];

  return (
    <div
      className="flex flex-col items-center pt:0 md:pt-10 pb-20 bg-white shadow-sm"
      ref={ref}
    >
      <div
        id="LogoDiv"
        className="BgDiv relative flex flex-col items-start self-stretch px-20 py-20 font-medium text-center leading-[108%] min-h-[276px] text-zinc-900 max-md:px-5 max-md:max-w-full"
        style={{
          height: "60vh",
          backgroundImage:
            "url('https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?cs=srgb&dl=pexels-pixabay-41949.jpg&fm=jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="flex flex-col my-12 items-start justify-start gap-4 text-start relative z-10">
          <h1 className="text-3xl my-4 font-bold text-white md:text-white md:text-5xl">
            Logo Design Services
          </h1>

          <hr className="text-sky-600 w-[140%] " />
        </div>
      </div>

      <div className="mb-20 px-6 md:px-8">
        <h2 className="text-xl font-bold text-orange-600 mb-4 mt-8">
          OVERVIEW
        </h2>
        <p className="text-lg text-gray-900 leading-relaxed">
          At Innomatrics, we understand the fast-changing landscape of the
          digital marketplace. To thrive in today's connected world, businesses
          must leverage data-driven strategies, enhance customer engagement, and
          optimize their digital platforms. Our team brings together deep
          expertise in digital technologies, domain knowledge, and hands-on
          experience to build scalable, measurable marketing solutions. Our team
          brings together deep expertise in digital technologies, domain
          knowledge, and hands-on experience to build scalable, measurable
          marketing solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl text-red-700 font-bold" >OUR OFFERING</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="space-y-4">
              {offerings.items.map((item) => (
                <div
                  key={item}
                  className="group relative cursor-pointer"
                  onMouseEnter={() => setHoveredService(item)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <h4 className="text-lg font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                    {item}
                  </h4>
                </div>
              ))}

              <p className="text-gray-600 mt-6">{offerings.description}</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={
                hoveredService
                  ? offerings.images[hoveredService] || offerings.images.default
                  : offerings.images.default
              }
              alt={hoveredService || "Logo Design Services"}
              className="rounded-lg shadow-xl w-full object-cover transition-opacity duration-500"
              style={{ height: "400px" }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-lg">
                {hoveredService
                  ? offerings.descriptions[hoveredService] ||
                    offerings.descriptions.default
                  : offerings.descriptions.default}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-xl font-bold text-red-500">THE INFINITE DIFFERENCE</h2>
            <h3 className="text-4xl font-bold text-gray-900 mt-4">
            We focus on providing creative <br /> and effective logo design solutions.
              
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Hexagonal Image */}
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Digital Marketing Innovation"
                className="w-full rounded-lg shadow-xl object-cover h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent rounded-lg"></div>
            </div>

            {/* Right side - Features */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl text-red-500 font-semibold mb-4">Collaborations with Top-Tier Platforms</h4>
                <p className="text-gray-700">
                  We have strategic partnerships with leading digital marketing platforms providing us with access to advanced tools, expert resources, and industry knowledge repositories.
                </p>
              </div>

              <div>
                <h4 className="text-2xl text-red-500 font-semibold mb-4">Powerful & Cost-Effective Marketing Solutions</h4>
                <p className="text-gray-700">
                  Leverage our comprehensive suite of marketing automation tools based on common use cases to optimize your digital presence while keeping costs minimal.
                </p>
              </div>

              <div>
                <h4 className="text-2xl text-red-500 font-semibold mb-4">High-Impact Results with Tangible Savings</h4>
                <p className="text-gray-700">
                  Our clients consistently achieve significant results, with typical cost savings between 40%-80% through our optimized digital marketing strategies.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-[90vw]">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-[44%]">
            {/* Section Heading */}
            <h2 className="text-3xl font-bold text-red-600 mb-2">
              Logo Design
            </h2>

            {/* Tagline */}
            <p className="text-base text-neutral-500 mb-4">
              We focus on providing creative and effective logo design
              solutions.
            </p>

            {/* Main Paragraph */}
            <p className="text-lg text-gray-900 leading-relaxed">
              Innomatrics Tech excels in the art of logo design, where
              creativity meets brand identity. With a keen eye for detail and a
              passion for innovation, we craft iconic logos that resonate with
              your audience. Our team collaborates closely with you to
              understand your vision and values, translating them into visually
              striking symbols that leave a lasting impression. From sleek and
              modern to timeless and elegant, we tailor each design to reflect
              the essence of your brand. Trust Innomatrics Technologies to
              elevate your identity with logo designs that truly stand out in
              the digital realm.
            </p>
          </div>

          <div className="flex w-full md:w-[56%]">
            <img
              loading="lazy"
              src={app}
              className="w-full h-auto aspect-w-16 aspect-h-10"
              style={{ borderRadius: "5%", boxShadow: "gray 3px 10px 10px" }}
              alt="Logo Design"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-[65vw]">
        <div className="flex flex-col md:flex-row gap-20 -mx-12 md:-mx-36">
          <div className="flex w-full md:w-1/2">
            <img
              loading="lazy"
              src={approach}
              className="w-full  h-[300px] rounded-lg shadow-lg"
              alt="Our Approach"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <div className="text-justify mb-8">
              <h1 className="text-3xl font-bold text-red-600">Our Approach</h1>
              <p className="mt-4 text-gray-600">
                We understand that every business is unique, which is why we
                take a personalized approach to logo design. Our process begins
                with a thorough analysis of your business goals, target
                audience, and brand identity. From there, we work closely with
                you to develop a customized strategy that aligns with your
                objectives and exceeds your expectations. From sleek and modern
                to timeless and elegant, we tailor each design to reflect the
                essence of your brand. Trust Innomatrics Technologies to elevate
                your identity with logo designs that truly stand out in the
                digital realm.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Hover-based Offerings Section */}

      {/* Services Section */}
      <div className="w-full px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
              Services We Offer
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive branding and logo design solutions to establish your
              unique identity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {services.map((service, index) => (
              <ServicesCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Join Our Journey Section */}
      <div className="w-full bg-gradient-to-r from-blue-50 to-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-red-600">
                Join Us On The Journey Of Brand Excellence
              </h2>
              <p className="text-lg text-gray-600">
                Ready to transform your brand identity with a stunning logo
                design? Partner with Innomatrics to create memorable, impactful,
                and timeless brand identities that resonate with your audience
                and stand out in the market.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
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
                  <p className="text-gray-700">
                    Professional and Creative Design Team
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">Quick Turnaround Time</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
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
                  </div>
                  <p className="text-gray-700">100% Satisfaction Guarantee</p>
                </div>
              </div>
              <div className="pt-6">
                <Link to="/contact">
                  <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                    Start Your Design Journey
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform rotate-3"></div>
              <img
                src={app2}
                alt="Brand Design Journey"
                className="relative rounded-3xl w-full h-[400px] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default LogoDesign;
