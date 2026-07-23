import React, { forwardRef, useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import HeroSlider from "./HeroSlider/HeroSlider";
import Industry from "./Industry/Industry";

import c1 from "../../assets/portfolioLogo/MRItow.jpg";
import test from "../../assets/portfolio/test.png";
import c2 from "../../assets/portfolioLogo/RoyalKing.jpg";
import c3 from "../../assets/portfolioLogo/chanconst.jpg";
import c4 from "../../assets/portfolioLogo/dstudio.jpg";
import c5 from "../../assets/portfolioLogo/goldkey.jpg";
import c6 from "../../assets/portfolioLogo/infinitytravels.jpg";
import c7 from "../../assets/portfolioLogo/ngo.jpg";
import c8 from "../../assets/portfolioLogo/osprezt.jpg";
import c9 from "../../assets/portfolioLogo/skb.jpg";
import c10 from "../../assets/portfolioLogo/thriupathiTours.jpg";
import c11 from "../../assets/portfolioLogo/vklights.jpg";

// import { Carousel } from "flowbite-react";
import ImageCardContainer from "../Services/Carousel/ImageCardContainer";
import OurVision from "./Our Vision/OurVision";
import OurMission from "./Our Mission/OurMission";
import ClientsCard from "../ClientsLogo/ClientsCard";
import ClientsCarousel from "../ClientsLogo/ClientsCarousel";
import Join from "./JoinTeam/Join";
import CountRise from "./CountRise/CountRise";
import Blog from "./Blog/Blog";
import WhatsappFloatingIcon from "./WhatsappFloatingIcon";


const Home = forwardRef((props, ref) => {
  const clientLogos = [
    {
      image: c1,
    },
    {
      image: c2,
    },
    {
      image: c3,
    },
    {
      image: c4,
    },
    {
      image: c5,
    },
    {
      image: c6,
    },
    {
      image: c7,
    },
    {
      image: c8,
    },
    {
      image: c9,
    },
    {
      image: c10,
    },
    {
      image: c11,
    },
  ];

  const [isAnimating, setIsAnimating] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prevState) => !prevState); // Toggle animation state
    }, 1000); // Adjust the delay according to your preference (in milliseconds)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once on mount
  return (
    <div ref={ref} className="overflow-hidden">
      <HeroSlider />

      {/* Why Choose Us Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Innomatrics Technologies?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We bring together expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden rounded-lg shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Expert Team"
                        className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>
                  <h3 className="mt-8 text-lg font-bold text-[#00235B]  tracking-tight">Expert Team</h3>
                  <p className="mt-5 text-base text-gray-600 font-medium leading-relaxed">
                    Our team consists of highly skilled professionals with years of experience in delivering cutting-edge solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden rounded-lg shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Quality Assurance"
                        className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>
                  <h3 className="mt-8 text-lg font-bold text-[#00235B]  tracking-tight">Quality Assurance</h3>


                  <p className="mt-5 text-base text-gray-600 font-medium leading-relaxed">
                    We follow rigorous quality control processes to ensure the highest standards in every project we deliver.
                  </p>

                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden rounded-lg shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Timely Delivery"
                        className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>
                  <h3 className="mt-8 text-lg font-bold text-[#00235B]  tracking-tight">Timely Delivery</h3>
                  <p className="mt-5 text-base text-gray-600 font-medium leading-relaxed">
                    We understand the importance of time and ensure project completion within agreed timelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Section */}
      <Industry />

      {/* Remove Industry section */}
      <div className="ServicesMission">
        <div className="p-8 ">
          <h2 className="text-4xl text-white text-center">Our Services</h2>

          <ImageCardContainer />
        </div>

        <div style={{ padding: "4%" }} className="flex flex-col sm:flex-row">
          <div style={{ flex: 1, marginRight: "2%" }}>
            <OurVision />
          </div>
          <div style={{ flex: 1 }}>
            <OurMission />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <Join />

        <CountRise />
      </div>
      <div className="ServicesMission flex flex-col items-center px-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="text-3xl md:text-4xl font-bold text-center my-12 text-white mb-12">
          Our Clients
        </div>
        <div className="mt-1.5 text-lg leading-4 text-center text-white max-md:max-w-full">
          We have been working with some of the best players in the industry
        </div>
        <div className="flex gap-5 justify-between py-4 mt-3 w-full max-w-[802px] max-md:flex-wrap max-md:max-w-full">
          <ClientsCarousel clientLogos={clientLogos} />
        </div>
      </div>

      {/* Add Blog Section */}
      <Blog />
      
      {/* WhatsApp Floating Icon */}
      <WhatsappFloatingIcon />
    </div>

  );
});

export default Home;
