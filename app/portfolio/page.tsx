"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function page({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto my-4 overflow-hidden text-left md:flex-row justify-evenly">
      <h3 className="lg:absolute lg:top-32 uppercase tracking-[15px] text-gray-500 text-2xl lg:text-4xl">
        projects
      </h3>
      <div className="relative z-20 flex w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory">
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44 "
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/programmer-icon.png"
            />

            <div className="max-w-6xl px-0 space-y-12 text-center lg:space-y-12 md:px-10">
              <h4 className="text-2xl font-semibold text-center lg:text-4xl">
                <span className="underline decoration-teal-200 ">
                  Projects {i + 1} of {projects.length}
                </span>
              </h4>
              <p className="text-base font-semibold text-black">
                Swipe right for more
              </p>
              <p className="text-sm text-center lg:text-lg md:text-left">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-teal-200/80 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default page;
