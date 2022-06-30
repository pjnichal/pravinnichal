import React from "react";
// import menu from "../assets/menu1.svg";
export default function NavBar({ openCloseNav }) {
  return (
    <div className="bg-offWhite  w-full p-5 sticky top-0  opacity-100 overflow-hidden	font-inter font-semibold text-textcolor	">
      <a href="https://pravinnichal.in/"> pravinnichal.in</a>
    </div>
  );
}
// eslint-disable-next-line
{
  /* <div className="container m-auto flex content-between justify-between">
        <div className="text-black">logo</div>
        <div
          className="space-y-2 flex sm:hidden scale-125"
          onClick={openCloseNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <div className="hidden sm:flex">
          <ul className="flex space-x-6 items-center">
            <a href="#home">
              <li className="bg-gray-200 px-4 py-1 rounded-md">Home</li>
            </a>
            <a href="#about">
              <li>About Me</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#experience">
              <li>Experience</li>
            </a>
            <a href="#contactme">
              <li>Contact Me</li>
            </a>
          </ul>
        </div>
      </div> */
}
