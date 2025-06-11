import React, { useRef } from "react";
import Slide1 from "../../assets/images/slide11.png";
import Slide2 from "../../assets/images/slide2.png";
import Slide3 from "../../assets/images/slide9.png";
import Slide4 from "../../assets/images/slide4.png";
import Slide5 from "../../assets/images/slide5.png";
import Slide6 from "../../assets/images/slide6.png";
import Slide7 from "../../assets/images/slide7.png";
import Slide8 from "../../assets/images/slide8.png";

import html2canvas from "html2canvas";
import "../../../src/index.css";

const Section2 = () => {
  const detailRef = useRef(null);

  const handleCapture = async () => {
    if (detailRef.current) {
      const canvas = await html2canvas(detailRef.current);
      const link = document.createElement("a");
      link.download = "product-detail.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };
  return (
    <div className="bg-gray-200">
      <div className=" flex items-center justify-center text-black family-poppins flex-col">
        <p className="text-sm MyCustomFont">Share your style with</p>
        <h2 className="font-bold tracking-wider font-pacifico text-2xl">
          #DaVinGee
        </h2>
      </div>

      <div className="m-auto grid grid-cols-2 sm:grid-cols-4 gap-2 p-4 w-[60%]">
        <div>
          <div ref={detailRef} className="rounded-2xl">
            <img
              crossOrigin="anonymous"
              loading="lazy"
              src={Slide4}
              alt="Instagram Post"
              className="rounded-2xl"
            />
          </div>
          <button
            className="bg-blue-400 text-white text-sm px-4 py-2 rounded-2xl m-4 hover:bg-blue-500 transition duration-200 hover:cursor-pointer"
            onClick={handleCapture}
          >
            Screenshot
          </button>
        </div>

        <div>
          <div ref={detailRef} className="rounded-2xl">
            <img
              crossOrigin="anonymous"
              loading="lazy"
              src={Slide3}
              alt="Instagram Post"
              className="rounded-2xl"
            />
          </div>
          <button
            className="bg-blue-400 text-white px-4 py-2 text-sm rounded-2xl m-4 hover:bg-blue-500 transition duration-200 hover:cursor-pointer"
            onClick={handleCapture}
          >
            Screenshot
          </button>
        </div>
        <div>
          <div ref={detailRef} className=" rounded-2xl">
            <img
              crossOrigin="anonymous"
              loading="lazy"
              src={Slide2}
              alt="Instagram Post"
              className="object-cover rounded-2xl"
            />
          </div>
          <button
            className="bg-blue-400 text-white px-4 py-2 text-sm rounded-2xl m-4 hover:bg-blue-500 transition duration-200 hover:cursor-pointer"
            onClick={handleCapture}
          >
            Screenshot
          </button>
        </div>
        <div>
          <div ref={detailRef} className="rounded-2xl">
            <img
              crossOrigin="anonymous"
              loading="lazy"
              src={Slide1}
              alt="Instagram Post"
              className="rounded-2xl"
            />
          </div>
          <button
            className="bg-blue-400 text-white px-4 py-2 text-sm rounded-2xl m-4 hover:bg-blue-500 transition duration-200 hover:cursor-pointer"
            onClick={handleCapture}
          >
            Screenshot
          </button>
        </div>
        <div>
          <div ref={detailRef} className="rounded-2xl">
            <img
              crossOrigin="anonymous"
              loading="lazy"
              src={Slide5}
              alt="Instagram Post"
              className="rounded-2xl"
            />
          </div>
          <button
            className="bg-blue-400 text-white px-4 py-2 text-sm rounded-2xl m-4 hover:bg-blue-500 transition duration-200 hover:cursor-pointer"
            onClick={handleCapture}
          >
            Screenshot
          </button>
        </div>
        <div>
          <div ref={detailRef} className="rounded-2xl">
            <img
              crossOrigin="anonymous"
              loading="lazy"
              src={Slide6}
              alt="Instagram Post"
              className="rounded-2xl"
            />
          </div>
          <button
            className="bg-blue-400 text-white px-4 py-2 text-sm rounded-2xl m-4 hover:bg-blue-500 transition duration-200 hover:cursor-pointer"
            onClick={handleCapture}
          >
            Screenshot
          </button>
        </div>
        <div>
          <div ref={detailRef} className="rounded-2xl">
            <img
              crossOrigin="anonymous"
              loading="lazy"
              src={Slide7}
              alt="Instagram Post"
              className="rounded-2xl"
            />
          </div>
          <button
            className="bg-blue-400 text-white px-4 py-2 text-sm rounded-2xl m-4 hover:bg-blue-500 transition duration-200 hover:cursor-pointer"
            onClick={handleCapture}
          >
            Screenshot
          </button>
        </div>
        <div>
          <div ref={detailRef} className="rounded-2xl">
            <img
              crossOrigin="anonymous"
              loading="lazy"
              src={Slide8}
              alt="Instagram Post"
              className="rounded-2xl"
            />
          </div>
          <button
            className="bg-blue-400 text-white px-4 py-2 text-sm rounded-2xl m-4 hover:bg-blue-500 transition duration-200 hover:cursor-pointer"
            onClick={handleCapture}
          >
            Screenshot
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
