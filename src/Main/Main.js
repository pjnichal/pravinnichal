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
            rel="noopener noreferrer"
            target="_blank"
            className="underline decoration-2 underline-offset-1 text-gray-500"
          >
            Grow90
          </a>
        </span>
      </div>
      <div className="text-md font-inter text-textcolor py-5 space-y-2 ">
        <div>🎓 IT @ SIES GST</div>
        <div>🖥️ Prev. Intern @ apartmint solutions and simba developer</div>
      </div>
      <div className="text-md font-inter text-textcolor py-5 space-y-2">
        <div className="">📍 Live in Badlapur, Maharashtra</div>

        <div className="">🌎 Speaks English, Hindi, Marathi </div>
        <div className="">📬 nichal.pravin2001@gmail.com</div>
      </div>
      <div className="px-10">
        <img src={code} alt="" />
      </div>
      {/* Experience */}
      <div className=" text-textcolor font-inter">
        <div className="pt-5 text-xl font-semibold italic">Experience</div>
        <hr class="dashed"></hr>
        <div className="flex py-2">
          <div className="flex items-center justify-center pr-2">💻</div>
          <div className="font-medium">
            <div> Software Developer @ Grow90</div>
            <div className="text-sm italic"> Jun 2022 - Present</div>
          </div>
        </div>
        <hr className="dashed border-dashed mx-4"></hr>
        <div className="flex py-2">
          <div className="flex items-center justify-center pr-2">💻</div>
          <div className="font-medium">
            <div className=" pb-1">Flutter Developer @ Apartmint Solutions</div>
            <div className="text-sm ">
              <span className="italic">Dec 2021 - Jan 2022&nbsp; </span>

              <a
                href="https://drive.google.com/file/d/1SaoA1Fg9gcv3n3ewzUmL_0BRR1I_O-b0/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="font-normal text-xs text-black-600  bg-green-200 p-1 rounded-md">
                  🔗 Complition Letter
                </span>
              </a>
            </div>
          </div>
        </div>
        <hr className="dashed border-dashed mx-4"></hr>
        <div className="flex py-2">
          <div className="flex items-center justify-center pr-2">💻</div>
          <div className="font-medium pb-1">
            <div>Application Developer Intern @ Simba Developers</div>
            <div className="text-sm">
              <span className="italic"> Jun 2021 - Dec 2021&nbsp; </span>
              <a
                href="https://drive.google.com/file/d/11fb3w7WhsptqavUwsigTNFK_n5DQFdk4/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="font-normal text-xs text-black-600    bg-green-200 p-1 rounded-md">
                  🔗 Complition Letter
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className=" text-textcolor font-inter">
        <div className="pt-5 text-xl font-semibold italic">Projects</div>
        <hr class="dashed"></hr>
        <div className="flex py-2">
          <div className="flex pt-1 pr-2">🚀</div>
          <div className="font-medium">
            <div> Diplopedia: MSBTE Resources</div>
            <div className="text-sm">
              <div>
                application aims to help diploma students in their daily
                academics.
              </div>
              <div className="font-semibold">Technologies Used</div>
              <ul className="list-disc ml-7	">
                <li>Java/XML (Native Android) for mobile app</li>
                <li>Made API using PHP</li>
                <li>Firebase and MySQL for storage and authentication</li>
              </ul>
              <div className="font-semibold">Future Tech Stack</div>
              <ul className="list-disc ml-7	">
                <li>Flutter for mobile app</li>
                <li>Node.js with express and python for backend</li>
                <li>
                  Firebase and MongoDB Atlas for storage and authentication
                </li>
              </ul>
              <div className="pt-1 ">
                currently app is having 23k+ download on the playstore
              </div>
              <div className="pt-1 pb-1 ">
                <a
                  href="https://play.google.com/store/apps/details?id=com.pravin.yashlalit.msbtestudymaterial&hl=en_IN&gl=US"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="font-normal  text-sm text-white  pl-1 pr-2 py-1  bg-gray-400  rounded-md">
                    🔗 Playstore Link
                  </span>
                </a>

                <a
                  href="https://drive.google.com/file/d/1Hj32sSZn2Yhz6dqEgcPaaN0uVOUeF9hp/view"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="font-normal ml-1 pl-1 pr-2 py-1 text-sm text-white    bg-gray-400  rounded-md">
                    🎥 Demo Video
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="dashed border-dashed mx-4"></hr>
        <div className="flex py-2">
          <div className="flex pt-1 pr-2">🚀</div>
          <div className="font-medium">
            <div> Raspberry Pi Torrent Mobile App</div>
            <div className="text-sm">
              <div>
                mobile app for controling transmission torrent client on
                raspberry pi from anywhere.
              </div>
              <div className="font-semibold">Technologies Used</div>
              <ul className="list-disc ml-7	pb-2">
                <li>Flutter for mobile app</li>
                <li>Node.js with express and python for backend</li>
                <li>Firebase realtime database</li>
                <li>Raspberry Pi 3 Model B+</li>
              </ul>

              <div className="pt-1 ">
                <a
                  href="https://www.linkedin.com/posts/pravin-nichal-93080b1b4_flutter-iot-raspberrypi-activity-6830500834908938241-Ad1Y?utm_source=linkedin_share&utm_medium=member_desktop_web"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="font-normal  text-sm text-white  pl-1 pr-2 py-1  bg-gray-400  rounded-md">
                    🔗 LinkedIn Post
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className=" text-textcolor font-inter">
        <div className="pt-5 text-xl font-semibold italic">Skills</div>
        <hr class="dashed"></hr>
        <div className="pt-2  grid grid-cols-4 gap-y-1 gap-x-2 grid-rows-2 gap-0  md:grid-cols-7 lg:grid-cols-7	">
          <span className="font-normal text-center text-sm text-white  py-1  bg-gray-500  rounded-md">
            Flutter
          </span>

          <span className="font-normal text-center text-sm text-white   py-1  bg-gray-500  rounded-md">
            Node.js
          </span>
          <span className="font-normal text-center text-sm text-white   py-1  bg-gray-500  rounded-md">
            Express
          </span>

          <span className="font-normal text-center text-sm text-white   py-1  bg-gray-500  rounded-md">
            Heroku
          </span>
          <span className="font-normal text-center text-sm text-white   py-1  bg-gray-500  rounded-md">
            ReactJS
          </span>

          <span className="font-normal text-center text-sm text-white   py-1  bg-gray-500  rounded-md">
            NoSQL
          </span>
          <span className="hidden md:flex"></span>
          <span className="font-normal text-center text-sm text-white   py-1  bg-gray-500  rounded-md">
            SQL
          </span>
          <span className="font-normal text-center text-sm text-white   py-1  bg-gray-500  rounded-md">
            Java
          </span>
          <span className="font-normal text-center text-sm text-white   py-1  bg-gray-500  rounded-md">
            Firebase
          </span>
          <span className="font-normal text-center text-sm col-span-2 sm:col-span-1 mr-[3rem] sm:mr-0 text-white   py-1  bg-gray-500  rounded-md">
            Tailwind CSS
          </span>
        </div>
      </div>
      {/* Socials */}
      <div className="pt-4 font-inter font-medium text-textcolor">
        <div className=" space-x-2">
          <a
            href="https://www.linkedin.com/in/pravin-nichal-93080b1b4/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-textcolor underline underline-offset-1">
              LinkedIn
            </span>
          </a>
          <a
            href="https://github.com/pjnichal"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-textcolor underline underline-offset-1">
              GitHub
            </span>
          </a>
          <a
            href="https://drive.google.com/file/d/1OE-gMSXwJuGBMZ5ITPBrC9c0cuJL4w6c/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-textcolor underline underline-offset-1">
              Resume
            </span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-28"></div>
    </div>
  );
};

export default Main;
