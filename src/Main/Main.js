import React from "react";
import code from "../assets/code.avif";
const Main = () => {
  return (
    <div className="px-5 sm:m-auto container pt-20 w-full lg:w-[60rem]">
      <div className="text-4xl font-bold text-textcolor font-inter">
        Hi 👋 I'm Pravin!
      </div>
      <div className="pt-5 text-2xl font-semibold text-textcolor font-inter">
        I'm a B.E student at SIES Graduate School of Technology and also a
        software developer intern at &nbsp;
        <span className="">
          <a
            href="https://grow90.org/"
            className="underline decoration-2 underline-offset-1 text-gray-500"
          >
            Grow90
          </a>
        </span>
      </div>
      <div className="text-md font-inter text-textcolor py-5 space-y-2 ">
        <div>🎓 IT @ SIES GST</div>
        <div>💻 Prev. Intern @ apartmint solutions and simba developer</div>
      </div>
      <div className="text-md font-inter text-textcolor py-5 space-y-2">
        <div className="">📍 Live in Badlapur, Maharashtra</div>

        <div className="">🌎 Speaks English, Hindi, Marathi </div>
      </div>
      <div className="px-10">
        <img src={code} alt="" />
      </div>
      {/* Experience */}
      <div className=" text-textcolor font-inter">
        <div className="pt-5 text-xl font-semibold italic">Experience</div>
        <hr class="dashed"></hr>
        <div className="flex py-2">
          <div className="flex items-center justify-center pr-2">
            &#128104;&#8205;&#128187;
          </div>
          <div className="font-medium">
            <div> Software Developer @ Grow90</div>
            <div className="text-sm italic"> Jun 2022 - Present</div>
          </div>
        </div>
        <hr className="dashed border-dashed mx-4"></hr>
        <div className="flex py-2">
          <div className="flex items-center justify-center pr-2">
            &#128104;&#8205;&#128187;
          </div>
          <div className="">
            <div className="font-medium pb-1">
              Flutter Developer @ Apartmint Solutions
            </div>
            <div className="text-sm ">
              <span className="italic">Dec 2021 - Jan 2022&nbsp; </span>
              <span className="font-normal text-xs text-black-600  bg-green-200 p-1 rounded-md">
                🔗 Complition Letter
              </span>
            </div>
          </div>
        </div>
        <hr className="dashed border-dashed mx-4"></hr>
        <div className="flex py-2">
          <div className="flex items-center justify-center pr-2">
            &#128104;&#8205;&#128187;
          </div>
          <div className="font-medium pb-1">
            <div>Application Developer Intern @ Simba Developers</div>
            <div className="text-sm">
              <span className="italic"> Jun 2021 - Dec 2021&nbsp; </span>
              <span className="font-normal text-xs text-black-600    bg-green-200 p-1 rounded-md">
                🔗 Complition Letter
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className=" text-textcolor font-inter">
        <div className="pt-5 text-xl font-semibold italic">Projects</div>
        <hr class="dashed"></hr>
        <div className="flex py-2">
          <div className="flex items-center justify-center pr-2">
            &#128104;&#8205;&#128187;
          </div>
          <div className="font-medium">
            <div> Diplopedia: MSBTE Resources</div>
            <div className="text-xs">
              <div>
                application aims to help diploma students in their daily
                academics.
              </div>
              <div className="font-semibold">Technologies Used</div>
              <ul className="list-disc	">
                <li>Hi</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="dashed border-dashed mx-4"></hr>
        <div className="flex py-2">
          <div className="flex items-center justify-center pr-2">
            &#128104;&#8205;&#128187;
          </div>
          <div className="font-medium pb-1">
            <div className=" pb-1">Flutter Developer @ Apartmint Solutions</div>
            <div className="text-sm ">
              <span className="italic">Dec 2021 - Jan 2022 &nbsp; </span>
              <span className="font-normal text-xs text-black-600  bg-green-200 p-1 rounded-md">
                🔗 Complition Letter
              </span>
            </div>
          </div>
        </div>
        <hr className="dashed border-dashed mx-4"></hr>
        <div className="flex py-2">
          <div className="flex items-center justify-center pr-2">
            &#128104;&#8205;&#128187;
          </div>
          <div className="font-medium pb-1">
            <div className=" pb-1">
              Application Developer Intern @ Simba Developers
            </div>
            <div className="text-sm">
              <span className="italic"> Jun 2021 - Dec 2021 &nbsp; </span>
              <span className="font-normal text-xs text-black-600    bg-green-200 p-1 rounded-md">
                🔗 Complition Letter
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Socials */}
      <div></div>
      {/* Footer */}
      <div className="pt-28"></div>
    </div>
  );
};

export default Main;
