import React from 'react';
import { Link } from 'react-router-dom';

const AboutHover = () => {
  return (
    <div className="about-hover-menu absolute z-50 bg-white rounded-lg shadow-lg py-2 w-64" style={{
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '16px'
    }}>
      <Link to="/about/overview" className="block px-4 py-2 hover:bg-gray-100">Company Overview</Link>
      <Link to="/about/vision-mission" className="block px-4 py-2 hover:bg-gray-100">Vision & Mission</Link>
      <Link to="/about/why-us" className="block px-4 py-2 hover:bg-gray-100">Why Choose Us</Link>
    </div>
  );
};

export default AboutHover; 