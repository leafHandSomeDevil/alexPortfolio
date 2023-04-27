import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

function page({}: Props) {
  return (
    <div className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly">
      <h3 className="lg:absolute lg:top-24 uppercase tracking-[20px] text-gray-500 text-2xl lg:text-4xl lg:pt-32">
        contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-lg font-semibold text-center lg:text-4xl ">
          I have just what you need
          <span className="px-2 underline decoration-teal-200">
            Lets Talk.{" "}
          </span>
        </h4>

        <div className="space-y-2 lg:space-y-6">
          <div className="flex items-center pl-2 space-x-5 lg:justify-center ">
            <PhoneIcon className="text-teal-200 h-7 w-7 animate-pulse" />
            <p className="text-xl lg:text-2xl">09603214631</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="text-teal-200 h-7 w-7 animate-pulse" />
            <p className="text-xl lg:text-2xl">ifortressalex@gmail.com</p>
          </div>

          <div className="flex items-center pl-2 space-x-5 lg:justify-center lg:pl-0">
            <MapPinIcon className="text-teal-200 h-7 w-7 animate-pulse" />
            <p className="text-xl lg:text-2xl">dev street</p>
          </div>
        </div>

        <form className="flex flex-col w-full mx-auto space-y-2 ">
          <div className="flex flex-col lg:space-x-2 lg:flex-row">
            <input
              placeholder="Name"
              className="w-full mb-2 contactInput lg:mb-0"
              type="text"
            />
            <input
              placeholder="Email"
              className="w-full contactInput"
              type="email"
            />
          </div>
          <input placeholder="Subject" className="contactInput" type="text" />

          <textarea placeholder="Messages" className="contactInput" />
          <button
            className="px-10 py-5 font-bold text-black rounded-md bg-teal-200/80"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
