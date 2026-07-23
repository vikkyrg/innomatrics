

// const VerticalImageCarousel = () => {
//   const [images, setImages] = useState([p2, p1, p3]);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="md:w-1/2 h-96 relative overflow-hidden">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Consultancy Service ${index + 1}`}
//           className={`absolute w-full h-full top-0 left-0 transition-transform duration-1000 ${
//             index === currentImageIndex ? 'opacity-100' : 'opacity-0'
//           }`}
//           style={{ transform: `translateY(${index * 100}%)` }}
//         />
//       ))}
//     </div>
//   );
// };

// export default VerticalImageCarousel;

// // const VerticalImageCarousel = () => {
// //   const [images, setImages] = useState([p1,p2]);
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const intervalId = setInterval(() => {
// //       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// //     }, 3000);

// //     return () => clearInterval(intervalId);
// //   }, [images.length]);

// //   return (
// //     <div className="md:w-1/2 overflow-hidden">
// //       <div
// //         className="h-full flex flex-col justify-start"
// //         style={{ transform: `translateY(-${currentIndex * 100}%)`, transition: 'transform 1s ease-in-out' }}
// //       >
// //         {images.map((image, index) => (
// //           <img
// //             key={index}
// //             src={image}
// //             alt={`Slide ${index + 1}`}
// //             className="w-full h-auto rounded-lg shadow-md"
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default VerticalImageCarousel;

import React, { useState, useEffect } from 'react';

import p1 from '../../../assets/portfolio/skb.jpg';
import p2 from '../../../assets/portfolio/chan.jpg';
import p3 from '../../../assets/portfolio/mriTowing.jpg';
import p4 from '../../../assets/portfolio/dstudio.jpg';
import p5 from '../../../assets/portfolio/goldKey.jpg';
import p6 from '../../../assets/portfolio/osprzet.jpg';
import p7 from '../../../assets/portfolio/royalKing.jpg';
import p8 from '../../../assets/portfolio/vkLights.jpg';
import './VerticalImageCarousle.css'

const cards = [
p1,p2,p3,p4,p5,p6,p7,p8
];

const VerticalImageCarousel = () => {
  return (
    <div className="carouselContainer flex justify-center items-center h-screen ">
      <div className="h-[500px] overflow-y-scroll snap-y snap-mandatory no-scrollbar">
        {cards.map((data, index) => {
          return (
            <section
              key={index}
              className="h-[500px] max-w-[900px] snap-center"
            >
              <img
                src={data}
                className="carousleImage bg-contain bg-no-repeat w-full h-full object-contain lg:max-h-[700px] sm:max-h-[500px] max-h-[400px]"
                alt="Carousel images for make scroll on verticle direction"
              />
            </section>
          );
        })}
      </div>
    </div>
  );
};
export default VerticalImageCarousel;
// external css to add in tailwind's Global css
// It is for remove scroll bar
/* @layer utilities {
  @variants responsive {
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }
} */