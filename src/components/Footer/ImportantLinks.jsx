import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const ImportantLinks = () => {
  const privacyRef = useRef(null);
  const termsOfServiceRef = useRef(null);
  const contentRef = useRef(null);
  const refundRef = useRef(null);
  const dataRef = useRef(null);

  const handleClick = (ref)=>{
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
  <ul className="miniServices text-gray-500 dark:text-gray-400 font-medium">
    <li className="mb-4">
    <Link onClick={()=> handleClick(privacyRef)} to="/privacy">
    Privacy Policy
    </Link>
    </li>
    <li className="mb-4">
      <Link to="/terms" onClick={()=> handleClick(termsOfServiceRef)}>
    Terms of Service
    </Link>
    </li>
    <li className="mb-4">
    <Link to= "/content" onClick={()=> handleClick(contentRef)}>
    Content Disclaimer
    </Link>
    </li>
    <li className="mb-4">
    <Link to= "/refund" onClick={()=> handleClick(refundRef)}>

    Refund/Cancellation
    </Link>
    </li>
    <li className="mb-4">
    <Link to= "/data" onClick={()=> handleClick(dataRef)}>

    Data Retention Policy
    </Link>
    </li>
  </ul>
    </div>
  )
}

export default ImportantLinks
