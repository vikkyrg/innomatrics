import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 }
      }
    ],
    beforeChange: () => setIsSliding(true),
    afterChange: () => setIsSliding(false),
  };

  return (
    <div className="w-full">
      <Slider ref={sliderRef} {...settings}>
        {clientLogos.map((clientLogo, index) => (
          <div key={index} className="px-4">
            <ClientsCard {...clientLogo} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientsCarousel;
