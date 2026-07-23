import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSlider.css';

// Import images
import homeBg from '../../../assets/inomat.jpg';
import webDevHero from '../../../assets/webdevelopment1.jpg';
import digiHero from '../../../assets/010101.jpg';
import serviceBg from '../../../assets/it1.webp';
import Appdeve from '../../../assets/Appdevelopment.jpg';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: homeBg,
      title: "Innomatrics Technologies",
      subtitle: "Innovate Inspire Integrate",
      description: "Empowering businesses with cutting-edge technology solutions"
    },
    {
      image: webDevHero,
      title: "Web Development",
      subtitle: "Custom Solutions for Your Digital Presence",
      description: "Create stunning, responsive websites that drive results"
    },
    {
      image: digiHero,
      title: "Digital Marketing",
      subtitle: "Reach Your Target Audience Effectively",
      description: "Strategic digital marketing solutions to grow your business"
    },
    {
      image: serviceBg,
      title: "DevOps",
      subtitle: "End-to-End DevOps Implementation with AWS and Docker",
      description: "Automating deployment, monitoring, and infrastructure using modern DevOps tools"
    },
    {
      image: Appdeve,
      title: "App Development",
      subtitle: "End-to-End Technology Solutions",
      description: "Comprehensive IT services to transform your business"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-slider relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>

          {/* Content Container */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl ml-4 md:ml-12 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 transform translate-y-0 transition-transform duration-700 text-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-4 text-blue-200 font-semibold">
                  {slide.subtitle}
                </p>
                <p className="text-lg mb-8 text-gray-200">
                  {slide.description}
                </p>
                <div className="flex gap-4">
                  <Link to="/contact">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                      Get a Quote
                    </button>
                  </Link>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 z-20"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 z-20"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default HeroSlider; 