import React from "react";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import { testimonialsData } from "../data/testimonialsData";
import { useState } from "react";
import { motion } from "framer-motion";
const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;
  const transition = { type: "spring", duration: 1 };
  return (
    <div className="flex gap-[1rem] p-x-[2rem]">
      <div className="flex flex-1 gap-[2rem] flex-col uppercase text-white">
        <span className="text-[#ff6200] font-bold">Testimonials</span>
        <span className="font-outline-2 text-transparent font-bold text-5xl ">What they</span>
        <span className="font-bold text-5xl ">say about us</span>
        <motion.span
          className="font-bold"
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span className="normal-case text-justify tracking-widest leading-10">
          <span className="text-[#ff6200]">
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="flex-1 relative">
        <motion.div
          className="absolute w-[17] h-[20rem] rounded-sm border-yellow-700 bg-transparent right-[9rem] top-[0.9rem]"
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
        className="absolute w-[17rem] h-[19rem] right-[7rem] top-[4rem] bg-gradient-to-r from-[#fa5042] to-[#ffa739]
        bg-[linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%)]"
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          className="absolute w-[17rem] h-[20rem] object-cover right-[8rem] top-[2rem]"
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image.src}
          alt=""
        />
        <div className="flex gap-[1rem] absolute bottom-[1rem] left-[3rem]">
          <img
            className="w-[1.5rem] cursor-pointer"
            src={leftArrow.src}
            alt=""
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
          />{" "}
          <img className="w-[1.5rem] cursor-pointer"
            src={rightArrow.src}
            alt=""
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
