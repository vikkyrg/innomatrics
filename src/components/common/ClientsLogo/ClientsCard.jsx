import React from 'react';

const ClientsCard = ({ image }) => {
  return (
 <div className="flex items-center justify-center p-6 h-32 md:h-40 w-full transition-all duration-300 group cursor-pointer">
      <img 
        className="max-h-16 md:max-h-20 w-auto max-w-full object-contain filter transition-all duration-300"
        src={image} 
        alt="Client Logo" 
      />
    </div>
  );
};

export default ClientsCard;
