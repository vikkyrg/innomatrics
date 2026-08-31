import React from 'react';

const ProcessTimeline = ({ steps = [], title = "Our Process", description = "A proven methodology for delivering excellence." }) => {
  return (
    <div className="section-padding bg-white border-t border-secondary-200">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary-800 font-bold uppercase tracking-widest text-xs mb-4 block">
            Methodology
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary-900 tracking-tight leading-tight mb-6">{title}</h2>
          <p className="text-lg md:text-xl text-secondary-600 leading-relaxed font-normal">{description}</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-0 mb-0 group">
              <div className="flex-shrink-0 w-full md:w-32 bg-secondary-50 border border-secondary-200 md:border-b-0 md:border-r-0 flex flex-col items-center justify-center py-6 md:py-0">
                <span className="text-primary-800 font-bold text-sm tracking-widest uppercase mb-1">Phase</span>
                <span className="text-3xl font-extrabold text-secondary-900">{String(index + 1).padStart(2, '0')}</span>
              </div>
              
              <div className={`bg-white border border-secondary-200 p-10 lg:p-14 flex-grow ${index !== steps.length - 1 ? 'border-b-0 md:border-b md:border-b-secondary-200 mb-6 md:mb-0' : ''}`}>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">{step.title}</h3>
                <p className="text-secondary-600 mb-8 leading-relaxed">{step.description}</p>
                {step.deliverables && step.deliverables.length > 0 && (
                  <div className="pt-6 border-t border-secondary-200">
                    <span className="text-xs font-bold tracking-widest text-secondary-900 uppercase mb-4 block">Deliverables</span>
                    <ul className="flex flex-wrap gap-3">
                      {step.deliverables.map((item, idx) => (
                        <li key={idx} className="bg-secondary-50 text-secondary-700 text-xs font-semibold px-4 py-2 border border-secondary-200 uppercase tracking-wide">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
