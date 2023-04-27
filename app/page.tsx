import React from "react";
import Homepage from "../app/homepage/page";
import Link from "next/link";
import Hero from "../app/hero/page";
import About from "../app/about/page";
import Portfolio from "../app/portfolio/page";
import TechStuff from "../app/techstuff/page";
import Contact from "../app/contact/page";
import Footer from "../app/footer/page";

const page: React.FunctionComponent = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen lg:snap-y lg:snap-mandatory lg:overflow-y-scroll z-0">
      <section className="lg:pt-32 snap-center" id="hero ">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="techstuff" className="snap-center">
        <TechStuff />
      </section>
      <section className="snap-start" id="portfolio">
        <Portfolio />
      </section>
      <section className="snap-center" id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default page;
