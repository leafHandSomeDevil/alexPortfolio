"use client";
import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex flex-wrap items-center justify-around p-6 bg-gray-900">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <span className="text-xl font-semibold tracking-tight">Your Logo</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            href="/"
            className="block mt-4 mr-4 font-semibold text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="about"
            className="block mt-4 mr-4 font-semibold text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
          >
            About
          </Link>

          <Link
            className="block mt-4 font-bold text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
            href="contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
