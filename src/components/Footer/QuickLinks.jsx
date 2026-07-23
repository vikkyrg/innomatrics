import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
const QuickLinks = () => {
    const homeRef = useRef(null);
    const aboutUsRef = useRef(null);
    const servicesRef = useRef(null);
    const portfolioRef = useRef(null);
    const careerRef = useRef(null);
    const blogRef= useRef(null);
    const contactRef = useRef(null);
    const handleClick = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Navigation</h2>
            <ul className="Qlinks text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4  ">
                <Link to="/" onClick={() => handleClick(homeRef)} className="navbar-links">Home</Link>
              </li>
              <li className="mb-4">
                <Link to="/about" onClick={() => handleClick(aboutUsRef)} className="navbar-links">Who We Are</Link>
              </li>
              {/* <li className="mb-4">
                <Link to="/services" onClick={() => handleClick(servicesRef)} className="navbar-links">Services</Link>
              </li> */}
              {/* <li className="mb-4">
                <Link to="/portfolio" onClick={() => handleClick(portfolioRef)} className="navbar-links">Portfolio</Link>
              </li> */}
              <li className="mb-4">
                <Link to="/career" onClick={() => handleClick(careerRef)} className="navbar-links">Career</Link>
              </li>
                <li className="mb-4">
                <Link to="/blog" onClick={() => handleClick(blogRef)} className="navbar-links">Blog</Link>
              </li>
              <li className="mb-4">
                <Link to="/contact" onClick={() => handleClick(contactRef)} className="navbar-links">Contact Us</Link>
              </li>
            </ul>

            
       
      
      
    </div>
  )
}

export default QuickLinks
