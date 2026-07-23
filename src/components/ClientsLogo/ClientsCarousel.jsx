import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import './TestimonialCarousel.css'

import ClientsCard from './ClientsCard';
const ClientsCarousel = ({ clientLogos }) => {
  const sliderRef = useRef(null);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSliding && sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isSliding]);

  const settings = {

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Disable autoplay as we're handling it manually
    autoplaySpeed: 4000,
    arrows: true,
    beforeChange: (_, next) => {
      setIsSliding(true);
    },
    afterChange: () => {
      setIsSliding(false);
    },
  };

  return (

    <>
      <div className="carousel-container bg-inherit justify-center -mx-44">


        <div className="max-w-6xl mx-auto">
          <div className="carousel">
            <Slider ref={sliderRef} {...settings}>
              {clientLogos.map((clientLogo, index) => (
                <div key={index} className="testimonial-card-container mx-auto">
                  <ClientsCard {...clientLogo} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

    </>

  );
};

export default ClientsCarousel;
