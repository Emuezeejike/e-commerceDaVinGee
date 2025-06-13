import React from "react";
import image1 from "../assets/images/warranty.svg";
import image2 from "../assets/images/two47.svg";
import image3 from "../assets/images/highQuality.svg";
import image4 from "../assets/images/delivery.svg";

const Warranty = () => {
  return (
    <div className="bg-gray-300 flex flex-col md:flex-row justify-between items-center m-auto p-8 gap-4 family-poppins">
      <div className="flex">
        <img src={image3} alt="warranty" className="" />
        <div className="flex flex-col pl-2">
          <h3 className="font-bold">High Quality</h3>
          <p className="text-sm">Crafted from top materials</p>
        </div>
      </div>
      <div className="flex">
        <img src={image1} alt="warranty" className="" />
        <div className="flex flex-col pl-2">
          <h3 className="font-bold">Warranty Protection</h3>
          <p className="text-sm">Over 2 years</p>
        </div>
      </div>
      <div className="flex">
        <img src={image4} alt="warranty" className="" />
        <div className="flex flex-col pl-2">
          <h3 className="font-bold">Free Delivery</h3>
          <p className="text-sm">Order over #150,000</p>
        </div>
      </div>
      <div className="flex">
        <img src={image2} alt="warranty" className="" />
        <div className="flex flex-col pl-2">
          <h3 className="font-bold">24/7 Support</h3>
          <p className="text-sm">Dedicated Support</p>
        </div>
      </div>
    </div>
  );
};

export default Warranty;
