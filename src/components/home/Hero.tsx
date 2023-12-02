"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SiFastapi } from "react-icons/si";
import { BiMoviePlay } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

import MovieCamera from "@/assets/movie-camera.png";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full min-h-screen bg-[#202a43] snap-start flex items-center "
    >
      <div className="w-full h-auto flex sm:flex-row flex-col-reverse">
        <div className="sm:w-1/2 h-auto w-full sm:px-10 px-5  ">
          <div
            className="lg:text-5xl sm:text-3xl text-3xl text-white tracking-widest md:leading-[70px] lg:leading-[70px]
          leading-[50px] font-black sm:text-start text-center"
          >
            Chilling With Our <br />
            <span className="text-[#db36a4]">Movie</span> Drive
          </div>

          <div className="flex flex-col mt-10 text-gray-400">
            <div className="w-full h-12 flex items-center ">
              <BiMoviePlay className="text-2xl sm:mr-5 mr-2" />
              <div className="tracking-wide sm:text-sm text-xs font-normal">
                Unlimited movies streaming
              </div>
            </div>
            <div className="w-full h-12 flex items-center ">
              <FaDownload className="text-2xl sm:mr-5 mr-2" />
              <div className="tracking-wide sm:text-sm text-xs font-normal">
                Download unlimited movies
              </div>
            </div>
            <div className="w-full h-12 flex items-center ">
              <SiFastapi className="text-2xl sm:mr-5 mr-2" />
              <div className="tracking-wide sm:text-sm text-xs font-normal">
                Ultrafast download speed
              </div>
            </div>
          </div>

          <a
            href={"/#about"}
            className="font-mono text-[#db36a4] underline cursor-pointer
          hover:no-underline sm:text-base text-sm"
          >
            Learn more about our services{" "}
            <BsArrowUpRightCircleFill className="ml-1 animate-bounce inline-block" />
          </a>
        </div>

        <div className="sm:w-1/2 h-60 w-full flex justify-center items-center sm:mt-20">
          <motion.div
            initial={{
              y: 200,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="md:w-[450px] md:h-[450px] w-[300px] h-[300px]"
          >
            <Image
              src={MovieCamera}
              alt="movie-camera"
              width={2756}
              height={2756}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
