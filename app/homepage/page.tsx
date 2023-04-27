"use client";
import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
// import kian from "../assets/kian3.jpg";
// import black from "../assets/black.jpg";

const page = () => {
  return (
    <header className="sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-center bg-[rgb(36,36,36)]">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.facebook.com/MagalonaAlexanderAlvarez/"
          fgColor="gray"
          bgColor="transparent"
          target="{_blank}"
        />
        <SocialIcon
          url="https://www.instagram.com/alxmgln/"
          fgColor="gray"
          bgColor="transparent"
          target="{_blank}"
        />
        <SocialIcon
          url="https://twitter.com/clash085"
          fgColor="gray"
          bgColor="transparent"
          target="{_blank}"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/alex-magalona-b5b349220/"
          fgColor="gray"
          bgColor="transparent"
          target="{_blank}"
        />
        <SocialIcon
          url="https://github.com/"
          fgColor="gray"
          bgColor="transparent"
          target="{_blank}"
        />
        <h3>
          <Link href="/">
            <AiFillHome className="w-10 h-10 px-2 text-teal-300 bg-transparent" />
          </Link>
        </h3>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="hidden text-sm text-gray-400 uppercase md:inline-flex">
          <Link href="/contact">get in touch</Link>
        </p>
      </motion.div>

      {/* <div className="flex w-full h-full p-4 bg-slate-900">
        <div className="relative w-1/2 ">
          <h1 className="bottom-[32px] top-[250px]  absolute left-[300px] w-full text-9xl font-extrabold text text-teal-200 animate-pulse">
            KINTH IAN MURILLO
          </h1>
          <h1 className="bottom-[32px] top-[510px]  absolute left-[310px] w-full text-3xl font-normal text text-teal-100 animate-pulse">
            Frontend Web Developer
          </h1>
        </div>
        <div className="flex items-center justify-center w-1/2 h-full ">
          <Image
            className="w-[650px] h-[880px] rounded-lg relative-left m-6"
            src={kian}
            alt="kian"
          />
        </div>
      </div> */}
    </header>
  );
};

export default page;
