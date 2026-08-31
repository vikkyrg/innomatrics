import React, { useState, useEffect } from 'react';




// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMoving, setIsMoving] = useState(true);

//   const images = [
//    c1,c2,c3,c4,c5,c6
//   ];

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (isMoving) {
//         handleNext();
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [currentIndex, isMoving]);

//   return (
//     <div className="relative overflow-hidden bg-gray-100">
//       <div className="flex items-center justify-center">
//       <h1>Carousel Test</h1>
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute left-1/2 transform -translate-x-1/2 ${
//               index === currentIndex ? 'scale-110' : 'scale-100'
//             } transition-transform duration-500`}
//             style={{
//               width: '500px',
//               height: '500px',
            
//               zIndex: `${images.length - index}`
//             }}
//           >
//             <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
//           </div>
//         ))}
//       </div>
//       <button
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
//         onClick={handlePrev}
//       >
//         &larr;
//       </button>
//       <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
//         onClick={handleNext}
//       >
//         &rarr;
//       </button>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//     </div>
//   );
// };



// 



// 'use client';

// import { Carousel } from 'flowbite-react';

// function carousel() {
//   return (
//     <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
//       <Carousel>
//         <img src={c1} alt="..." />
//         <img src={c2} alt="..." />
//         <img src={c3} alt="..." />
//         <img src={c4} alt="..." />
//         <img src={c5} alt="..." />
//         <img src={c6} alt="..." />
//       </Carousel>
//     </div>
//   );
// }


// export default carousel;