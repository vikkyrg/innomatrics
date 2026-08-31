import React from "react";
import joinTeam from "../../../../assets/joinTeam.jpg";
import { Link } from 'react-router-dom';

const Join = () => {
  return (
    <div className="container-custom py-24 border-t border-secondary-200 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="flex flex-col w-full md:w-1/2">
          <span className="text-primary-800 font-bold uppercase tracking-widest text-xs mb-4 block">
            Careers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary-900 leading-[1.1] mb-6 tracking-tight">
            Join a team of leaders, innovators, and problem solvers.
          </h2>
          <p className="text-lg text-secondary-600 leading-relaxed mb-8 font-normal">
            We are always looking for exceptional talent to join our global network of technology professionals. Build your career working on high-impact enterprise projects.
          </p>
          <div>
            <Link to="/careers" className="inline-flex items-center justify-center gap-3 bg-primary-900 hover:bg-primary-800 text-white text-sm font-semibold px-8 py-4 transition-colors">
              Explore Opportunities
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-0 border border-secondary-200 transform translate-x-4 translate-y-4"></div>
          <img
            loading="lazy"
            src={joinTeam}
            className="w-full h-auto relative z-10 object-cover aspect-[4/3]"
            alt="Join Our Team"
          />
        </div>
      </div>
    </div>
  );
};

export default Join;
