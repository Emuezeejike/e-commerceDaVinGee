import React from "react";
import "./Section1.css";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div className="backgroundImage bg-gray-200 flex items-center justify-left text-white flex-col md:flex-row">
      <div className="absolute top-100 left-0 text-left p-8 w-[70%] rounded-lg flex flex-col items-start m-8 shadow-2xl md:w-[40%]">
        <p className="pt-4 font-croissant">New Arrival</p>
        <h2 className="text-3xl font-extrabold text-orange-700 font-berkshire">
          Discover Our
        </h2>
        <h2 className="text-3xl font-extrabold text-orange-700 font-berkshire">
          New Collection
        </h2>
        <Link
          className="hover:cursor-pointer bg-gray-300 text-black p-2 rounded-sm text-sm hover:gray-500 mt-4"
          to={"/products"}
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Section1;
