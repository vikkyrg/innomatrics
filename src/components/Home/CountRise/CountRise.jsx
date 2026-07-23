import React, { useEffect, useRef, useState } from 'react';

const useIntersection = (callback, options) => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [callback, options]);

  return ref;
};

const CountUpAnimation = ({ initialValue, targetValue, text }) => {
  const [count, setCount] = useState(initialValue);
  const [hasAnimated, setHasAnimated] = useState(false);
  const duration = 4000; // 4 seconds

  const startAnimation = () => {
    if (hasAnimated) return; // Do not animate again if already animated
    setHasAnimated(true); // Mark as animated
    let startValue = initialValue;
    const interval = Math.floor(duration / (targetValue - initialValue));
    
    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, interval);
  };

  const ref = useIntersection(() => {
    startAnimation();
  });

  return (
    <div ref={ref} className="flex flex-col items-center ">
      <span className="text-4xl md:text-6xl font-bold text-orange-500">{count >= targetValue ? `${targetValue}+` : count}</span>
      <span className="text-lg md:text-xl text-zinc-800 mt-2">{text}</span>
    </div>
  );
};

function CountRise() {
  return (
    <div className="container -my-16 mx-auto py-24 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Delivering Value for Our Customers
      </h2>
      <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
        <div className="flex flex-col items-center">
          <CountUpAnimation initialValue={0} targetValue={150}  text="Projects Delivered" />
        </div>
        <div className="w-px h-24 bg-orange-500 hidden md:block"></div>
        <div className="flex flex-col items-center">
          <CountUpAnimation initialValue={0} targetValue={400} text="Managed Services Customers" />
        </div>
        <div className="w-px h-24 bg-orange-500 hidden md:block"></div>
        <div className="flex flex-col items-center">
          <CountUpAnimation initialValue={0} targetValue={5} text="Years of Expereince" />
        </div>
      </div>
    </div>
  );
}

export default CountRise;
