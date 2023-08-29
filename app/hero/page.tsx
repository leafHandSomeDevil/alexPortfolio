"use client";
import Link from "next/link";
import React from "react";
import BackGroundCircle from "./BackGroundCircle";
import Typewriter from "typewriter-effect";

import alex from "../assets/alex.jpg";

type Props = {};

function page({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center ">
      <BackGroundCircle />

      <img
        className="relative object-cover w-64 h-64 mx-auto rounded-full lg:bottom-[165px] bottom-[100px] shadow-2xl "
        src="https://scontent.fcrk3-2.fna.fbcdn.net/v/t1.6435-9/136754899_10222525777390764_5917462024342076663_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=4dm8hgPk-wEAX9u697y&_nc_ht=scontent.fcrk3-2.fna&oh=00_AfA0pAb2d7rTKSk2IuWfaEkn8cgz0Erm78UCJ53dNe4SPg&oe=6514FC4D"
        alt=""
      />
      <div className="z-20">
        <h2 className="py-2 lg:text-3xl text-xl tracking-[25px] text-gray-500 uppercase">
          React Developer
        </h2>
        <h1 className="text-xl font-semibold lg:px-20 lg:text-6xl">
          <Typewriter
            options={{
              strings: ["Hi I'm Alex "],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div></div>
        <div className=" lg:pt-5">
          <Link href="/about">
            <button className="heroButton">
              <p className="text-xs lg:text-base">about</p>
            </button>
          </Link>
          <Link href="/techstuff">
            <button className="heroButton">
              <p className="text-xs lg:text-base">Technology</p>
            </button>
          </Link>
          <Link href="/portfolio">
            <button className="heroButton">
              <p className="text-xs lg:text-base">projects</p>
            </button>
          </Link>
          <Link href="/contact">
            <button className="heroButton">
              <p className="text-xs lg:text-base">contact</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
