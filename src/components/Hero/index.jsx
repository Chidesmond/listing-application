import React from "react";
import { NavLink } from "react-router-dom";
// import { GumTree } from "../../assets/svg";

export const Hero = () => {
  return (
    <section className="relative h-72 bg-primary flex flex-col justify-center align-center text-center space-y-4 mb-4">
      <div className="z-10">
        <h1 className="text-6xl font-bold uppercase text-white">
          Ad<span className="text-black">Tree</span>
        </h1>
        <p className="text-2xl text-gray-200 font-bold my-4">
          Find or post Ads
        </p>
        <div className="inline-block border-2 border-white text-white py-2 px-4 rounded-xl uppercase mt-2 hover:text-black hover:border-black">
          <NavLink to="/register">Sign Up to List an Ad</NavLink>
        </div>
      </div>
    </section>
  );
};
