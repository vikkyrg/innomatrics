import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappFloatingIcon = () => {
  const phoneNumber = "918431655799";
  const message = "Hello Innomatrics! I'd like to know more about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-[140px] right-4 md:bottom-[160px] md:right-6 z-[9999] group">
      {/* Animated Ping Background */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40 group-hover:opacity-0 transition-opacity duration-300"></div>
      
      {/* Realistic Icon Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-16 h-16 bg-primary-900 text-white rounded-full shadow-[0_8px_32px_rgba(18,140,126,0.5)] transform-gpu transition-all duration-500 hover:rotate-6 hover:shadow-[0_15px_45px_rgba(18,140,126,0.7)] group border-2 border-white/30 overflow-hidden"
      >
        {/* Subtle Shine/Reflections */}
        <div className="absolute top-0 left-0 w-full h-full bg-primary-900 from-white/20 to-transparent pointer-events-none"></div>
        <div className="absolute -top-[100%] left-[-100%] w-[200%] h-[200%] bg-primary-900 from-transparent via-white/10 to-transparent transform rotate-45 group-hover:animate-shine transition-all duration-1000"></div>
        
        <FaWhatsapp size={34} className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] relative z-10" />
      </a>

      {/* Floating Tooltip/Message */}
      <div className="absolute right-[85px] top-1/2 -translate-y-1/2 px-4 py-2.5 bg-white text-[#128C7E] text-sm font-bold rounded-md shadow-sm opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 whitespace-nowrap pointer-events-none border border-white/50 after:content-[''] after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:border-[10px] after:border-l-white/90 after:border-y-transparent after:border-r-transparent">
        <span className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Need Help? Chat with us!
        </span>
      </div>
    </div>
  );
};

export default WhatsappFloatingIcon;

