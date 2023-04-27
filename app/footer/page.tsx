import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <section id="contact">
      <div className="flex flex-col items-center h-32 px-10 mx-auto text-center border-t-2 border-teal-200 md:text-left md:flex-row max-w-7xl justify-evenly">
        <section className=" top-32 uppercase tracking-[15px] text-gray-500 lg:text-xl text-base">
          Copyright @ 2023 <span className="text-teal-200">Alex</span>
        </section>
      </div>
    </section>
  );
}

export default page;
