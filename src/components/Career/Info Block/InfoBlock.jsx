import React from "react";
import career2 from "../../../assets/app2.jpg";
import { Link } from "react-router-dom";
const InfoBlock = () => {
  return (
    <div className="bg-gray-200 flex flex-col  md:flex-row gap-x-0 md:gap-x-12 p-24 md:space-x-[100px]">
      <div className="w-full lg:w-[670px] text-justify lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
          The work we do impacts the world, and the future
        </h2>
        <p className="text-base md:text-lg text-zinc-800 mb-6"></p>
        <Link to="/contact">
          <button className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300">
            Learn More
          </button>
        </Link>
      </div>

      <div className="w-full lg:w-full gap-y-0 md:gap-y-12
        my-12 justify-start lg:justify-end">
        
        <p className="text-lg ">
          Give your career an Infinite edge, with a stimulating environment and
          a global work culture. You will find that taking pride in the work you
          do comes naturally at Infinite, with our focus on nurturing a
          workforce that is diverse, integrated, and aligned to a common
          purpose: delivering excellence, consistently.
        </p>
      </div>
    </div>
  );
};

export default InfoBlock;
