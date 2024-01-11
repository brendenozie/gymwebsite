import React from "react";
import { plansData } from "../data/plansData";
import whiteTick from "../assets/whiteTick.png";
const Plans = () => {
  return (
    <div className="!mt-16 px-8 flex flex-col gap-16  relative">
      <div className="bg-[#fd782b] absolute rounded-full blur-[190px] w-[32rem] h-[23rem] top-[6rem] left-0"></div>
      <div className="bg-[#fd782b] absolute rounded-full blur-[190px] w-[32rem] h-[23rem] top-[10rem] right-[0rem]"></div>
      <div className="flex font-bold text-5xl justify-center text-white uppercase italic gap-[2rem]">
        <span className="font-outline-2 text-transparent">Ready to Start</span>
        <span>Your Journey</span>
        <span className="font-outline-2 text-transparent">now with us</span>
      </div>
      <div className="flex items-center justify-center gap-[3rem]">
        {plansData.map((plan, i) => (
          <div className={`flex flex-col text-white gap-[2rem] p-[1.5rem] w-[15rem] ${i==1 ? "scale-110 bg-gradient-to-r from-[#fa5042] to-[#ffa739]" :"bg-[#656565]"}`} key={i}>
            {plan.icon}
            <span className="text-base font-bold">{plan.name}</span>
            <span className="text-5xl font-bold">$ {plan.price}</span>
            <div className="flex flex-col gap-[1rem]">
              {plan.features.map((feature, i) => (
                <div className="flex items-center gap-[1rem]">
                  <img className="w-[1rem]" src={whiteTick.src} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div className="text-sm">
                <span>See more benefits </span>
            </div>
            <button className="p-[0.05rem] font-bold rounded-sm border-transparent transition-all duration-300 flex items-center justify-center text-white  bg-[#f48915] w-32">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
