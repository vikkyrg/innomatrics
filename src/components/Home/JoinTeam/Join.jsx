import React from "react";
import joinTeam from "../../../assets/joinTeam.jpg";
import { Link } from 'react-router-dom';

const Join = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 px-4 md:px-28 py-10">
      <div className="flex flex-col w-full md:w-[62%]">
        <div className="text-xl text-orange-600">JOIN A TEAM OF</div>
        <div className="mt-2 text-sm md:text-4xl font-semibold text-zinc-800 w-full md:w-3/4">
        <p className="text-gray-500 font-semibold">Leaders Innovators Thinkers Problem Solvers</p>

        </div>
        <Link to="/careers">
  <button className="bg-orange-600 rounded-md w-1/2 md:w-1/3 h-12 my-12 text-white  font-semibold hover:bg-black hover:text-white transition ease-in-out duration-300">
    Work With Us
  </button>
</Link>
      </div>
      <div className="flex flex-auto w-full md:w-[40%]">
        <img
          loading="lazy"
          src={joinTeam}
          className="w-full h-auto"
          alt="Join Our Team"
        />
      </div>
    </div>
  );
};

export default Join;
