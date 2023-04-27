import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: any;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="flex cursor-pointer group realtive">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
        className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale "
      />
      <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:h-28 md:w-28 xl:w-32 xl:h-32">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opavity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
