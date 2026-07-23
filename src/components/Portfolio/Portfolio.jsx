// import React, { useState } from 'react';

// import v1 from '../../assets/video/v1.mp4';
// import v2 from '../../assets/video/v2.mp4';
// import p1 from '../../assets/portfolio/infinity.jpg';
// import p2 from '../../assets/portfolio/chan.jpg';
// import p3 from '../../assets/portfolio/dstudio.jpg';
// import p4 from '../../assets/portfolio/goldKey.jpg';
// import p5 from '../../assets/portfolio/indianDreams.jpg';
// import p6 from '../../assets/portfolio/mriTowing.jpg';
// import p7 from '../../assets/portfolio/osprzet.jpg';
// import p8 from '../../assets/portfolio/royalKing.jpg';
// import p9 from '../../assets/portfolio/skb.jpg';
// import p10 from '../../assets/portfolio/srisusa.jpg';
// import p11 from '../../assets/portfolio/tirupatiTours.jpg';
// import p12 from '../../assets/portfolio/vkLights.jpg';

// import './Portfolio.css'
// import VerticalImageCarousel from './Vertical Iamge Carousel/VerticalImageCarousle';
// import { Link } from 'react-router-dom';

// const Portfolio = () => {
//   const [videoUrl, setVideoUrl] = useState('');
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handleCardClick = (videoUrl) => {
//     setVideoUrl(videoUrl);
//     setIsPlaying(!isPlaying);
//   };

//   const handleCardHover = (videoUrl) => {
//     setVideoUrl(videoUrl);
//     setIsPlaying(true);
//   };

//   const imageCardsData = [
//     {
//       image: p1,
//       text: 'Inifinty Travles',
//       videoUrl: v1,
//       link: "https://infinitytravelsblr.com/"
//     },
//     {
//       image: p2,
//       text: 'Chan Construcn',
//       videoUrl: v2, link: "https://chanconstructions.com/"
      
//     },
//     {
//       image: p3,
//       text: 'D studio Weddings',
//       videoUrl: v2, 
//       link: "https://dstudioweddings.com/"
//     },
//     {
//       image: p4,
//       text: 'Gold Key',
//       videoUrl: v2, link: "http://goldenkeysolutions.co.in/"
      
//     },
//     {
//       image: p5,
//       text: 'Indian Dream Consultancy',
//       videoUrl: v2, link: "https://indiandreamsconsultancy.in/"
      
//     },
//     {
//       image: p6,
//       text: 'MRI Towing',
//       videoUrl: v2, link: "https://mritowingservice.com/"
//     },
//     {
//       image: p7,
//       text: 'Osprezt technologies',
//       videoUrl: v2, 
//       link: "https://osprzet.in/"
//     },
//     {
//       image: p8,
//       text: 'Royal King Facility',
//       videoUrl: v2, 
//       link: "https://royalkingfacility.co.in/"
//     },
//     {
//       image: p9,
//       text: 'SKB Tours and Travels',
//       videoUrl: v2, link: "https://skbtoursandtravels.com/"
//     },
//     {
//       image: p10,
//       text: 'Sri Susamskrutha Sai Charitable Trust',
//       videoUrl: v2, link: "https://srisusamskrutha.org/"
//     },
//     {
//       image: p11,
//       text: 'Tirupathi Balaji Tours',
//       videoUrl: v2, link: "https://tirupatibalajitours.in/"
//     },
//     {
//       image: p12,
//       text: 'V.K Lights',
//       videoUrl: v2, link: "https://vklights.in/"
//     },
//     // Add more card data as needed
//   ];

//   return (
//     <>
   


//     </>
    
//   );
// };

// export default Portfolio;

import React, { forwardRef, useState } from "react";
import indus1 from "../../assets/brandDesign.jpg";
import data from "./data";
import './Portfolio.css'
import { Link } from "react-router-dom";

const Portfolio = forwardRef((props,ref) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  

  const handleAccordionToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <section className="portfolio-section bg-cover  bg-center" ref={ref}>
        <div className="container mx-auto px-4 py-20 md:py-40">
          <div className="flex flex-col  items-start justify-start gap-4 text-start">
            <h1 className="text-3xl font-bold text-white md:text-5xl">
              Portfolio
            </h1>
            
            <p className="text-xl font-semibold text-white md:text-2xl">
              Helping businesses thrive with digital and tech solutions.
            </p>
            <hr className="text-sky-600 w-[70%] " />
          </div>
        </div>
      </section>
        <div className="portfolio    ">
      <p className="text-zinc-600
      py-16 px-4 my-6
       font-semibold text-2xl md:text-5xl">
        Industries we have collaborated with
      </p>

      {/* Large and Medium Screens Layout */}
      <div className="hidden largePortfolio lg:flex flex-col lg:flex-row justify-between items-center 
         space-y-8 lg:space-y-0
          lg:space-x-8 p-12  bg-opacity-75 backdrop-filter backdrop-blur-lg 
         shadow-lg border border-white border-opacity-30"
         >
  <div className="w-full lg:w-1/3 bg-white bg-opacity-20 p-6 rounded-md shadow-inner backdrop-filter
   backdrop-blur-sm border border-white border-opacity-30">
    <ul className="text-lg md:text-xl text-white space-y-4">
      {data.map((item, index) => (
        <li
          key={index}
          className="cursor-pointer hover:text-sky-400 transition ease-in-out duration-200 hover:scale-105"
          onMouseEnter={() => handleMouseEnter(index)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  </div>
<div  className="w-full lg:w-2/3 justify-center  
  lg:justify-start bg-white bg-opacity-20 p-6 rounded-md shadow-inner 
  backdrop-filter backdrop-blur-sm border border-white border-opacity-30">
  <div className=" flex justify-center  flex-row gap-x-64
  "> 
    
    <p className="text-white text-2xl my-12">{hoveredItem !== null ? data[hoveredItem].text : ""}</p>
    <img
      src={hoveredItem !== null ? data[hoveredItem].image : indus1}
      alt="Industry"
      className="w-[40%] h-[100px] rounded-md shadow-md"
    />
    

  </div>
  
  <p className="text-white text-2xl my-12">{hoveredItem !== null ? data[hoveredItem].desc : ""}</p>
  </div>
</div>



      {/* Small Screens Accordion */}
      <div className="lg:hidden">
        {data.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left text-lg md:text-xl text-sky-700 font-semibold
               bg-gray-800 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              onClick={() => handleAccordionToggle(index)}
            >
              {item.text}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              {openIndex === index && (
                <div className="mt-2 p-4 bg-gray-700 rounded-md">
                  <h2 className="text-2xl font-bold text-orange-500 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-white mb-4">{item.desc}</p>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto rounded-md shadow-md mb-4"
                  />
                  <a href= {item.link}>
                    <button className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300">
                      Learn More
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>

  );
})

export default Portfolio;
