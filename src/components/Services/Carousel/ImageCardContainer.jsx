import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import c1 from '../../../assets/AppDev.jpg';
import c2 from '../../../assets/devops.jpg';
import c3 from '../../../assets/webDevelopment.jpg';
import c4 from '../../../assets/digitalMarkt.webp';
import c5 from '../../../assets/brandDesign.jpg';
import c6 from '../../../assets/socialMedia.jpg';
import c7 from '../../../assets/uidesign.png';
import c8 from '../../../assets/security.jpg';
import c9 from '../../../assets/itservice.avif';
import './ImageCardContainer.css';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -left-2 md:-left-6 lg:-left-12 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] flex items-center justify-center text-blue-600 hover:text-blue-800 hover:bg-gray-50 transition-all focus:outline-none"
    >
      <MdChevronLeft className="text-2xl md:text-3xl" />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -right-2 md:-right-6 lg:-right-12 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] flex items-center justify-center text-blue-600 hover:text-blue-800 hover:bg-gray-50 transition-all focus:outline-none"
    >
      <MdChevronRight className="text-2xl md:text-3xl" />
    </button>
  );
};

const ImageCard = ({linkUrl, imageUrl, text }) => {
  return (
    <Link to={linkUrl} className="block group">
      <div className="Icard relative overflow-hidden rounded-2xl shadow-lg h-80 sm:h-96 lg:h-[420px] w-full border border-gray-700/30">
        <img
          src={imageUrl}
          alt={text}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Permanent bottom gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent pointer-events-none opacity-90"></div>
        
        {/* Text always visible at bottom */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-col pointer-events-none">
          <div className="w-10 h-1.5 bg-blue-500 mb-4 rounded-full transition-all duration-300 group-hover:w-20"></div>
          <p className="text-white text-xl sm:text-2xl font-bold leading-tight drop-shadow-md">{text}</p>
        </div>
      </div>
    </Link>
  );
};

const ImageCardContainer = () => {
  const cards = [
    {
      imageUrl: c1,
      text: 'App Development',
      linkUrl: "/app-development"
    },
    {
      imageUrl: c2,
      text: 'DevOps',
      linkUrl: "/webdesign"
    },
    {
      imageUrl: c3,
      text: 'Web Development',
      linkUrl: "/web-development"
    },
    {
      imageUrl: c4,
      text: 'Digital Marketing',
      linkUrl: "/digital-marketing"
    },
    {
      imageUrl: c5,
      text: 'Logo Designing',
      linkUrl: "/logo-design"
    },
    {
      imageUrl: c6,
      text: 'Social Media',
      linkUrl: "/social-media"
    },
    {
      imageUrl: c7,
      text: 'UI/UX Design',
      linkUrl: "/ui-ux-design"
    },
    {
      imageUrl: c8,
      text: 'Cybersecurity',
      linkUrl: "/cybersecurity"
    },
    {
      imageUrl: c9,
      text: 'IT Consulting',
      linkUrl: "/it-consulting"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
      text: 'QA Testing',
      linkUrl: "/qa-testing"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="Icontainer max-w-[1400px] mx-auto px-10 md:px-16 pb-12 relative">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-4 py-6 outline-none">
            <ImageCard imageUrl={card.imageUrl} text={card.text} linkUrl={card.linkUrl} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCardContainer;
