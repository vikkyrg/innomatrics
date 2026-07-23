import React from 'react';
import { Link } from 'react-router-dom';

const ServiceHover = () => {
  return (
    <div className="services-hover-menu absolute z-50 bg-white rounded-lg shadow-lg py-2 w-64" style={{
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '16px'
    }}>
      <Link to="/webdev" className="block px-4 py-2 hover:bg-gray-100">Web Development</Link>
      <Link to="/appdev" className="block px-4 py-2 hover:bg-gray-100">App Development</Link>
      <Link to="/digitalmarket" className="block px-4 py-2 hover:bg-gray-100">Digital Marketing</Link>
      <Link to="/logodesign" className="block px-4 py-2 hover:bg-gray-100">Logo Design</Link>
      <Link to="/socialmedia" className="block px-4 py-2 hover:bg-gray-100">Social Media Marketing</Link>
      <Link to="/devops" className="block px-4 py-2 hover:bg-gray-100">DevOps</Link>
    </div>
  );
};

export default ServiceHover;
