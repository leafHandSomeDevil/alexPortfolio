"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function page({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center justify-center h-screen mx-auto text-center max-w-7xl xl:px-10 xl:space-y-0"
    >
      <h3 className="lg:absolute  lg:top-24 uppercase tracking-[20px] text-gray-500 text-2xl lg:text-4xl lg:pt-32 lg:mb-0  mb-10">
        skills
      </h3>
      <h3 className="lg:absolute lg:top-36 uppercase tracking-[3px] text-gray-500 text-sm lg:pt-40 mb-10">
        <span className="text-teal-200 ">hover</span> over a skill for current
        proficiency
      </h3>

      <div className="grid grid-cols-3 gap-2 lg:grid-cols-4 lg:gap-5">
        {/* <Skill directionLeft={directionLeft} /> */}
        {/* docker */}
        <div className="flex cursor-pointer group realtive">
          <motion.img
            initial={{
              x: 100,
              opacity: 0,
            }}
            transition={{
              duration: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 1,
            }}
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
            className="object-cover w-24 h-24 p-1 border border-gray-500 rounded-full lg:transition lg:duration-300 lg:ease-in-out md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:h-28 md:w-28 xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opavity-100">100%</p>
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer group realtive">
          <motion.img
            initial={{
              x: 100,
              opacity: 0,
            }}
            transition={{
              duration: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 1,
            }}
            src="https://cdn-icons-png.flaticon.com/512/919/919853.png"
            className="object-cover w-24 h-24 p-1 border border-gray-500 rounded-full lg:transition lg:duration-300 lg:ease-in-out md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:h-28 md:w-28 xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opavity-100">100%</p>
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer group realtive">
          <motion.img
            initial={{
              x: -100,
              opacity: 0,
            }}
            transition={{
              duration: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 1,
            }}
            src="https://ionicframework.com/docs/icons/logo-react-icon.png"
            className="object-cover w-24 h-24 p-1 border border-gray-500 rounded-full lg:transition lg:duration-300 lg:ease-in-out lg:w-32 lg:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:h-28 md:w-28 xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opavity-100">100%</p>
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer group realtive">
          <motion.img
            initial={{
              x: -100,
              opacity: 0,
            }}
            transition={{
              duration: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 1,
            }}
            src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
            className="object-cover w-24 h-24 p-1 border border-gray-500 rounded-full lg:transition lg:duration-300 lg:ease-in-out md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:h-28 md:w-28 xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opavity-100">100%</p>
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer group realtive">
          <motion.img
            initial={{
              x: -100,
              opacity: 0,
            }}
            transition={{
              duration: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 1,
            }}
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
            className="object-cover w-24 h-24 p-1 border border-gray-500 rounded-full lg:transition lg:duration-300 lg:ease-in-out md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:h-28 md:w-28 xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opavity-100">100%</p>
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer group realtive">
          <motion.img
            initial={{
              x: -100,
              opacity: 0,
            }}
            transition={{
              duration: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 1,
            }}
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            className="object-cover w-24 h-24 p-1 border border-gray-500 rounded-full lg:transition lg:duration-300 lg:ease-in-out md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:h-28 md:w-28 xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opavity-100">100%</p>
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer group realtive">
          <motion.img
            initial={{
              x: 100,
              opacity: 0,
            }}
            transition={{
              duration: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 1,
            }}
            src="https://cdn-icons-png.flaticon.com/512/919/919832.png"
            className="object-cover w-24 h-24 p-1 border border-gray-500 rounded-full lg:transition lg:duration-300 lg:ease-in-out md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:h-28 md:w-28 xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opavity-100">100%</p>
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer group realtive">
          <motion.img
            initial={{
              x: 100,
              opacity: 0,
            }}
            transition={{
              duration: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 1,
            }}
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--IwFcphyV--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/vb6ai56xqgpc0bcfn92y.png"
            className="object-cover w-24 h-24 p-1 border border-gray-500 rounded-full lg:transition lg:duration-300 lg:ease-in-out md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:h-28 md:w-28 xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opavity-100">100%</p>
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer group realtive">
          <motion.img
            initial={{
              x: -100,
              opacity: 0,
            }}
            transition={{
              duration: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 1,
            }}
            src="https://shadowblood.gallerycdn.vsassets.io/extensions/shadowblood/tailwind-moon/3.0.2/1673948732518/Microsoft.VisualStudio.Services.Icons.Default"
            className="object-cover w-24 h-24 p-1 border border-gray-500 rounded-full lg:transition lg:duration-300 lg:ease-in-out md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:h-28 md:w-28 xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opavity-100">100%</p>
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer group realtive">
          <motion.img
            initial={{
              x: -100,
              opacity: 0,
            }}
            transition={{
              duration: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 1,
            }}
            src="https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png"
            className="object-cover w-24 h-24 p-1 border border-gray-500 rounded-full lg:transition lg:duration-300 lg:ease-in-out md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale"
          />
          <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:h-28 md:w-28 xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
              <p className="text-3xl font-bold text-black opavity-100">100%</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default page;
