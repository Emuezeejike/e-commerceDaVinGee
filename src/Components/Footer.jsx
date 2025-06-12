import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-600 w-full flex flex-col">
      <div className=" text-black h-[70%] flex justify-between p-6 family-poppins flex-wrap md:flex-nowrap gap-4">
        <div className="flex flex-col">
          <h2 className="font-bold font-pacifico">DaVinGee.</h2>
          <div className="family-poppins text-sm pt-8">
            <p>400 Osho Drive, Suite 200 Coral </p>
            <p>Lagos,</p>
            <p>PO 10011 Nigeria</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
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
        <div className="flex flex-col gap-4">
          <h1 className="opacity-50 family-poppins">Newsletter</h1>
          <div className="flex gap-2">
            <label htmlFor="email"></label>
            <input
              className="border-b-2 border-black focus:outline-none focus:border-black transition duration-200"
              type="text"
              placeholder="Enter Your Email Address"
            />
            <button className="bg-orange-300 p-2 text-sm rounded-sm font-bold hover:bg-amber-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-sm p-4 text-black pl-6">
          2023 DaVinGee. All rights reverved
        </p>
      </div>
    </div>
  );
};

export default Footer;
