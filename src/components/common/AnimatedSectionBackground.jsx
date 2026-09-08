import React from 'react';

const AnimatedSectionBackground = ({ variant = 'default' }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Decorative Gradient Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary-900/[0.04] rounded-full blur-[80px] animate-pulse-slower"></div>

      {variant === 'default' && (
        <>
          {/* Subtle Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,16,62,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,16,62,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)]"></div>

          {/* Floating Dots */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-900/20 rounded-full animate-float-slow shadow-sm"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary-900/10 rounded-full animate-float-slower shadow-sm"></div>
          <div className="absolute top-1/2 left-2/3 w-1.5 h-1.5 bg-accent-500/40 rounded-full animate-float-horizontal-slow shadow-sm"></div>
          
          {/* Thin Tech Line */}
          <div className="absolute top-1/3 right-10 w-48 h-[1px] bg-primary-900/15 animate-float-horizontal-slow" style={{ animationDelay: '2s' }}></div>
        </>
      )}

      {variant === 'industries' && (
        <>
          {/* Subtle Radial Blob */}
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-accent-500/[0.05] rounded-full blur-[60px] animate-pulse-slower" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-primary-900/10 rounded-full animate-float-slow"></div>
          <div className="absolute top-2/3 left-1/3 w-24 h-24 border border-accent-500/15 rounded-full animate-float-slower" style={{ animationDelay: '3s' }}></div>
        </>
      )}

      {variant === 'services' && (
        <>
           {/* Subtle Tech Pattern */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(0,16,62,0.03)_1px,transparent_1px)] bg-[size:100%_3rem] [mask-image:linear-gradient(to_bottom,#000_10%,transparent_100%)]"></div>
           <div className="absolute top-20 right-20 w-4 h-4 border border-primary-900/20 rotate-45 animate-float-slow"></div>
           <div className="absolute bottom-40 left-10 w-2.5 h-2.5 bg-accent-500/20 rounded-sm animate-float-horizontal-slow"></div>
        </>
      )}
    </div>
  );
};

export default AnimatedSectionBackground;
