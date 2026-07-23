import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const WhatWeDo = () => {
  const webDesRef = useRef(null)
  const webDevRef = useRef(null)
  const appDevRef = useRef(null)
  const socialMediaRef = useRef(null)
  const digitalMarktRef = useRef(null)
  const logoDesRef = useRef(null)

  const handleClick = (ref)=>{
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">What We Do</h2>
  <ul className="miniServices text-gray-500 dark:text-gray-400 font-medium">
  <Link to ="/webdesign" onClick={()=> handleClick(webDesRef)}>
    <li className="mb-4">
      Web Design
    </li>
    </Link>

    <Link to ="/webdev" onClick={()=> handleClick(webDevRef)}>
    <li className="mb-4">
      Web Development
    </li>
    </Link>
    
    <Link to ="/appdev" onClick={()=> handleClick(appDevRef)}>
    <li className="mb-4">
      App Development
    </li>
    </Link>

    <Link to ="/socialmedia" onClick={()=> handleClick(socialMediaRef)}>
    <li className="mb-4">
      Social Media Marketing
    </li>
    </Link>

    <Link to = "/logodesign" onClick={()=> handleClick(logoDesRef)}>
    <li className="mb-4">
      Brand/Logo Design
    </li>
    </Link>
    
    <Link to = "/digitalmarket" onClick={()=> handleClick(digitalMarktRef)}>
    <li className="mb-4">
      Digital Marketing
    </li>
    </Link>
  </ul>
    </div>
  )
}

export default WhatWeDo
