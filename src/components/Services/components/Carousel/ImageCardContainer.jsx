import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MdOutlineWeb, 
  MdPhoneIphone, 
  MdCloudQueue, 
  MdOutlineSecurity, 
  MdAutoGraph, 
  
  MdArrowForward
} from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';

const BentoCard = ({ linkUrl, icon: Icon, title, description, isLarge }) => {
  return (
    <Link to={linkUrl} className={`group block h-full ${isLarge ? 'md:col-span-2' : ''}`}>
      <div className={`h-full bg-white border border-secondary-200 p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-primary-400 ${isLarge ? 'bg-secondary-50 border-secondary-200' : ''}`}>
        <div className="flex justify-between items-start mb-12">
          <div className="w-10 h-10 flex items-center justify-center text-primary-900 bg-secondary-100 transition-transform duration-300 group-hover:scale-105">
            <Icon className="text-xl" />
          </div>
          <MdArrowForward className="text-secondary-300 group-hover:text-primary-600 transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
        
        <div className="mt-auto">
          <h3 className={`font-bold text-secondary-900 mb-3 ${isLarge ? 'text-2xl' : 'text-lg'}`}>{title}</h3>
          <p className="text-secondary-600 text-sm leading-relaxed font-normal">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

const ImageCardContainer = () => {
  const coreCapabilities = [
    {
      title: 'Enterprise Software Engineering',
      description: 'Bespoke, highly-scalable software architectures designed for complex business logic and high-throughput environments.',
      linkUrl: "/custom-software",
      icon: FaLaptopCode,
      isLarge: true
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Cloud-native deployment, CI/CD automation, and zero-trust security architectures.',
      linkUrl: "/cloud-and-devops",
      icon: MdCloudQueue,
      isLarge: true
    }
  ];

  const supportingCapabilities = [
    {
      title: 'Web Platforms',
      description: 'Performant, accessible web applications.',
      linkUrl: "/web-development",
      icon: MdOutlineWeb
    },
    {
      title: 'Mobile Solutions',
      description: 'Native iOS and Android ecosystems.',
      linkUrl: "/app-development",
      icon: MdPhoneIphone
    },
    {
      title: 'AI & Machine Learning',
      description: 'Predictive models and automation.',
      linkUrl: "/ai-automation",
      icon: MdAutoGraph
    },
    {
      title: 'Cybersecurity',
      description: 'Threat modeling and compliance.',
      linkUrl: "/cybersecurity",
      icon: MdOutlineSecurity
    }
  ];

  return (
    <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Top Row: Large blocks */}
        {coreCapabilities.map((cap, index) => (
          <BentoCard key={`core-${index}`} {...cap} />
        ))}
        
        {/* Bottom Row: Supporting blocks */}
        {supportingCapabilities.map((cap, index) => (
          <BentoCard key={`support-${index}`} {...cap} />
        ))}
      </div>
    </div>
  );
};

export default ImageCardContainer;
