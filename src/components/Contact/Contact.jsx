import React, { forwardRef, useEffect } from 'react';
import './Contact.css';
import InquiryAndMapComponent from './InquiryForm/InquiryForm';

const Contact = forwardRef((props, ref) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50" ref={ref}>
      <div 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-63452.jpg')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <InquiryAndMapComponent />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;