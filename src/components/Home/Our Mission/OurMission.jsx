

import React from "react";
import innovation from '../../../assets/m1.webp'
import digiTransform from '../../../assets/m2.jpg'
import quality from '../../../assets/m3.jpg'
import growth from '../../../assets/m4.png'

const OurMission = () => {
  return (
    <div className=" mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 ">Our Mission</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden  p-6
        hover:bg-fuchsia-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out" style={{ height: '420px' }}>
          <img src={innovation} alt="Placeholder" className="w-full rounded h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Enhancing User Experience:</h3>
            <p className="text-gray-700 text-sm">At Innomatrics Technologies, we empower innovation by providing cutting-edge tech solutions tailored.</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-9/8 p-6
        hover:bg-violet-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={digiTransform} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Ensuring Data Security</h3>
            <p className="text-gray-700 text-sm">Our mission is to drive digital transformation for businesses by leveraging cutting-edge technologies.</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-9/8 p-6
        hover:bg-emerald-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={quality} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
            <p className="text-gray-700 text-sm">We are committed to delivering excellence by providing high-quality, reliable, and scalable tech solutions.</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-9/8 p-6
        hover:bg-lime-500 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={growth} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Social Impact</h3>
            <p className="text-gray-700 text-sm">Our mission is to enable growth for our clients by offering innovative tech solutions that empower them to adapt, evolve.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
