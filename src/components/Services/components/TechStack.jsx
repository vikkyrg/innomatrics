import React from 'react';

const TechStack = ({ title = "Technologies We Master", description = "We leverage the latest and most robust technologies to build scalable, high-performance solutions.", technologies = [] }) => {
  return (
    <div className="section-padding bg-secondary-50 border-t border-secondary-200">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-800 font-bold uppercase tracking-widest text-xs mb-4 block">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary-900 tracking-tight leading-tight mb-6">{title}</h2>
          <p className="text-lg text-secondary-600 leading-relaxed font-normal">{description}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-0 border-t border-l border-secondary-200">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white border-b border-r border-secondary-200 p-8 flex flex-col items-center justify-center text-center hover:bg-primary-900 hover:text-white transition-colors duration-300 group">
              <div className="text-4xl text-secondary-400 group-hover:text-white transition-colors mb-4 flex items-center justify-center h-12" aria-hidden="true">
                {tech.icon}
              </div>
              <span className="font-bold text-sm tracking-wide text-secondary-900 group-hover:text-white transition-colors uppercase">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
