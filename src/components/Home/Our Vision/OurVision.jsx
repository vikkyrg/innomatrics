import React from "react";
import innovation from '../../../assets/mission1.jpg'
import digiTransform from '../../../assets/mission2.jpg'
import quality from '../../../assets/mission3.jpg'
import growth from '../../../assets/mission4.jpg'

const OurVision = () => {
  return (
    <div className=" mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 ">Our Vision</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-orange-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={innovation} alt="Placeholder" className="w-full rounded h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Empowering Innovation</h3>
            <p className="text-gray-700 text-sm">At Innomatrics Technologies, we empower innovation by providing cutting-edge tech solutions tailored to meet the needs of our clients.</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-blue-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={digiTransform} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Driving Digital Transformation</h3>
            <p className="text-gray-700 text-sm">Our mission is to drive digital transformation for businesses by leveraging cutting-edge technologies.</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-amber-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={quality} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Delivering Excellence</h3>
            <p className="text-gray-700 text-sm">We are committed to delivering excellence by providing high-quality, reliable, and scalable tech solutions.</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-6/7 p-6
        hover:bg-red-400 hover:transform hover:scale-105
              hover:shadow-lg transition duration-300 ease-in-out">
          <img src={growth} alt="Placeholder" className="w-full h-1/2" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Enabling Growth</h3>
            <p className="text-gray-700 text-sm">Our mission is to enable growth for our clients by offering innovative tech solutions that empower them to adapt, evolve.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
