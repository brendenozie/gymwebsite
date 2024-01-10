import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import nb from '../assets/nb.png';
import adidas from '../assets/adidas.png'
import nike from '../assets/nike.png'
import tick from "../assets/tick.png";
// import "./Reasons.css";
const Reasons = () => {
  return (
    <div className="p-4 flex gap-8" id='reasons'>
      <div className="flex-1 grid grid-rows-3 grid-flow-col gap-1">
        <img className="object-cover w-48 row-span-3 h-96" src={`${image1.src}`} alt="" />
        <img className="object-cover col-span-3 w-auto h-64" src={`${image2.src}`} alt="" />
        <img className="object-cover row-span-2 col-span-1 w-56" src={`${image3.src}`} alt="" />
        <img className="object-cover row-span-2 col-span-1 w-40 h-44" src={`${image4.src}`} alt="" />
      </div>
      <div className="flex-1 uppercase gap-4 flex flex-col">
        <span className="font-bold text-[#fe9d43]">some reasons</span>
        <div className="text-5xl text-white font-bold">
          <span className="font-outline-2 text-transparent">Why </span>
          <span className="font-bold text-white">choose us?</span>
        </div>
        <div className="flex flex-col gap-4 text-5xl text-white font-bold">
          <div className="flex text-base gap-4">
            <img className="w-8 h-8" src={`${tick.src}`} alt="" />
            <span>over 140+ expert coachs</span>
          </div>
          <div className="flex text-base gap-4">
            <img className="w-8 h-8" src={`${tick.src}`} alt="" />
            <span>train smarter and faster than before</span>
          </div>
          <div className="flex text-base gap-4">
            <img className="w-8 h-8" src={`${tick.src}`} alt="" />
            <span>1 free program for new member</span>
          </div>
          <div className="flex text-base gap-4">
            <img className="w-8 h-8" src={`${tick.src}`} alt="" />
            <span>reliable partners</span>
          </div>
        </div>
        <span className="text-[#9C9C9C]">OUR PARTNERS</span>
        <div className="flex  gap-4">
              <img className="w-10" src={`${nb.src}`} alt="" />
              <img className="w-10" src={`${adidas.src}`} alt="" />
              <img className="w-10" src={`${nike.src}`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
