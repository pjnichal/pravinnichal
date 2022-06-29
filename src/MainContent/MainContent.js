import React from "react";
import image from "../assets/image.png";
import photo from "../assets/pravin.jpg";
import msbte from "../assets/msbte.jpeg";
import rasp from "../assets/rasp.png";
import gmail from "../assets/gmail.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
const MainContent = () => {
  return (
    <div className="container mx-auto ">
      <div className="py-10" id="home">
        <div className="grid grid-rows-1  md:grid-cols-2 sm:grid-rows-1 gap-4">
          <div className="p-10">
            <div className="py-10 font-bold text-7xl">Pravin Nichal</div>
            <div className="text-justify	">
              A passionate programmer & an engineering student. I am an
              intermediate Full Stack Android Developer learning new things. I
              create native android apps using Flutter and Android Studio. I am
              getting started with web development to improve my skills overall.
              I have completed my diploma in Computer Engineering. Now i am
              pursing B.E in Information Technology. Apart from programming I
              also love to play games such as Valorant.
            </div>
          </div>
          <div className="hidden md:flex mx-10   items-center justify-center">
            <img
              src={image}
              alt="Hello"
              className=""
              data-replace='{ "translate-x-12": "translate-x-0" }'
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 pb-10" id="about">
        <div className="flex items-center justify-center py-10 text-4xl font-bold">
          About Me
        </div>
        <div>
          <div className="grid  grid-rows-2 md:grid-cols-2 sm:grid-rows-1 gap-4">
            <div className="mx-10 flex items-center justify-center">
              <img
                src={photo}
                alt="Hello"
                className="w-1/2"
                data-replace='{ "translate-x-12": "translate-x-0" }'
              />
            </div>
            <div className="px-10">
              <div className="text-justify	">
                A passionate programmer & an engineering student. I am an
                intermediate Full Stack Android Developer learning new things. I
                create native android apps using Flutter and Android Studio. I
                am getting started with web development to improve my skills
                overall. I have completed my diploma in Computer Engineering.
                Now i am pursing B.E in Information Technology. Apart from
                programming I also love to play games such as Valorant.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50  pb-16 " id="projects">
        <div className="flex items-center justify-center py-10 text-4xl font-bold ">
          Projects
        </div>
        <div className="grid  grid-rows-2 md:grid-cols-2 sm:grid-rows-1 gap-4 align-middle  ">
          <div className=" justify-self-center   rounded overflow-hidden shadow-lg bg-white w-5/6 pb-5">
            <div className="font-bold text-2xl p-5">MSBTE Diplopedia</div>
            <img
              src={msbte}
              alt=""
              className=" flex justify-center justify-self-center"
            />
            <div className="p-5">
              Diplopedia is Educational app where all diploma students can find
              all study material at on place and can communicate with each other
              <br /> <br />
              Used PHP to create API and MySQL as a database Implemented
              Firebase Auth and firebase realtime database <br /> <br />
              Got over 16,000 downloads
            </div>
            <div>
              <button className="bg-gray-300  mx-5  mb-5 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <span>PlayStore Link</span>
              </button>
              <button className="bg-gray-300  mx-5 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <span>Demo Video</span>
              </button>
            </div>
          </div>

          <div className=" justify-self-center   rounded overflow-hidden shadow-lg bg-white w-5/6 pb-5">
            <div className="font-bold text-2xl p-5">MSBTE Diplopedia</div>
            <img
              src={rasp}
              alt=""
              className=" flex justify-center justify-self-center"
            />
            <div className="p-5">
              Diplopedia is Educational app where all diploma students can find
              all study material at on place and can communicate with each other
              <br /> <br />
              Used PHP to create API and MySQL as a database Implemented
              Firebase Auth and firebase realtime database <br /> <br />
              Got over 16,000 downloads
            </div>
            <div>
              <button className="bg-gray-300 mx-5 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex mb-5 items-center">
                <span>LinkedIn Post</span>
              </button>
              <button className="bg-gray-300  mx-5 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <span>Demo Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-100 pb-5" id="experience">
        <div className="flex items-center justify-center py-10 text-4xl font-bold ">
          Experience
        </div>
        <div className="flex  items-center justify-center my-5 mx-3">
          <div className="bg-white justify-self-center rounded  lg:w-4/5 shadow-md p-5 ">
            <div className="text-lg sm:text-lg md:text-2xl font-bold">
              Software Developer @ Grow90
            </div>
            <div className="pt-5 text-lg  ">
              Working on mobile app which help students find insitute colleges
              and schools
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-5 mx-3">
          <div className="bg-white justify-self-center rounded  lg:w-4/5 shadow-md p-5 ">
            <div className="text-lg sm:text-lg md:text-2xl font-bold">
              Flutter Developer @ Apartmint Solutions
            </div>
            <div className="pt-5 text-lg  ">
              Working on mobile app which help students find insitute colleges
              and schools
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-5 mx-3">
          <div className="bg-white justify-self-center rounded  lg:w-4/5 shadow-md p-5 ">
            <div className="text-lg sm:text-lg md:text-2xl font-bold">
              Application Developer Intern @ Simba Developers
            </div>
            <div className="pt-5 text-lg  ">
              Working on mobile app which help students find insitute colleges
              and schools
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 pb-5" id="contactme">
        <div className="flex items-center justify-center py-10 text-4xl font-bold ">
          Connect with me
        </div>
        <div
          className="flex  items-center justify-center my-5 mx-3"
          onClick={() =>
            (window.location = "mailto:nichal.pravin2001@gmail.com")
          }
        >
          <div className="bg-white justify-self-center rounded items-center w-full  lg:w-5/12 shadow-md p-5 flex">
            <div className="mr-5 items-center flex">
              <img src={gmail} alt="" />
            </div>
            <div className="w-max">
              <div className=" justify-self-center items-center flex text-lg ">
                nichal.pravin2001@gmail.com
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex  items-center justify-center my-5 mx-3"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/pravin-nichal-93080b1b4/",
              "_blank"
            )
          }
        >
          <div className="bg-white justify-self-center rounded items-center w-full lg:w-5/12 shadow-md p-5 flex">
            <div className="mr-5 items-center flex">
              <img src={linkedin} alt="" />
            </div>
            <div className="w-max">
              <div className=" justify-self-center items-center flex text-lg ">
                Pravin Nichal
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-center my-5 mx-3"
          onClick={() => window.open("https://github.com/pjnichal", "_blank")}
        >
          <div className="bg-white justify-self-center rounded items-center w-full  lg:w-5/12 shadow-md p-5 flex">
            <div className="mr-5 items-center flex">
              <img src={github} alt="" />
            </div>
            <div className="w-max">
              <div className=" justify-self-center items-center flex text-lg ">
                pjnichal
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
