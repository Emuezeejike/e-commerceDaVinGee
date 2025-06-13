import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-950 w-full flex flex-col text-gray-300">
      <div className="h-[70%] flex justify-between p-6 family-poppins flex-wrap md:flex-nowrap gap-4">
        <div className="flex flex-col">
          <h2 className="font-bold font-pacifico text-gray-50">DaVinGee.</h2>
          <div className="family-poppins text-sm pt-8 text-gray-300">
            <p>Block 39 Babani, Ajegunle </p>
            <p>Apap Lagos.</p>
            <p>PO 10011 Nigeria</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-gray-300">
          <h1 className="opacity-50 family-poppins">Links</h1>
          <ul className="flex flex-col gap-2 family-poppins ">
            <li>
              <Link className="hover:text-amber-500" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-amber-500" to={"/shop"}>
                Shop
              </Link>
            </li>
            <li>
              <Link className="hover:text-amber-500" to={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-gray-300">
          <h1 className="opacity-50 family-poppins">Newsletter</h1>
          <div className="flex gap-2">
            <label htmlFor="email"></label>
            <input
              className="text-white border-b-2 border-gray-100 focus:outline-none focus:border-black transition duration-200"
              type="text"
              placeholder="Enter Your Email Address"
            />
            <button className="bg-orange-600 text-black p-2 text-sm rounded-sm font-bold hover:bg-amber-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-sm p-4 text-gray-100 pl-6 font-berkshire">
          2025 DaVinGee. All rights reverved
        </p>
      </div>
    </div>
  );
};

export default Footer;
