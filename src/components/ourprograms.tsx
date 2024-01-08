import React from "react";
import { programsData } from "../data/programsData";
import RightArrow from '../assets/rightArrow.png';
import { motion } from "framer-motion";

const OurPrograms = () => {

  return (
    <>
    {/* //programs */}
      <div className="flex
                        flex-col
                        gap-8
                        p-x-8" 
                        id='programs'>

      {/* programs header */}
      <div className="flex
                        gap-20
                        font-bold
                        text-5xl
                        justify-content: center;
                        text-white
                        uppercase
                        italic">
      <span className="font-outline-2 text-transparent">Explore our</span>
      <span>Programs</span>
      <span className="font-outline-2 text-transparent">To shape you</span>
      </div>

      {/* programs-categories */}
      <div className="flex gap-4">
      {programsData.map((program)=>(
          <motion.div
          whileHover={{background: 'var(--planCard)', cursor: 'pointer'}}
          transition={{type: 'spring'}}
          className="flex
                      flex-col
                      bg-[#808080]
                      p-8
                      gap-4
                      text-white
                      flex-1
                      space-between">
                        {/* width: 2rem;
                                height: 2rem;
                                fill:white */}
              {program.image}
              <span className="text-xs font-bold">{program.heading}</span>
              <span className="text-xs leading-6">{program.details}</span>
              <div className="flex text-center gap-8">
                  <span>Join Now</span>
                  <img className="w-4" src={`${RightArrow}`} alt="" />
              </div>
          </motion.div>
      ))}
      </div>
      </div>
      
    </>
  );
};

export default OurPrograms;
