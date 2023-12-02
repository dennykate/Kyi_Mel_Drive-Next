"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import MovieStreaming from "@/assets/movie-streaming.gif";
import MovieDownloading from "@/assets/movie-downloading.gif";
import UnlimitedBandwidth from "@/assets/unlimited-bandwidth.gif";

const About = () => {
  return (
    <div id="about" className="snap-center w-full min-h-screen bg-white pt-20">
      <div className="w-full h-auto flex sm:flex-row flex-col-reverse justify-center items-center sm:px-10 mb-20">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="sm:w-1/2 w-full sm:h-96 h-auto"
        >
          <div
            className="lg:text-5xl sm:text-3xl text-2xl text-black tracking-widest md:leading-[70px] lg:leading-[70px]
          leading-[50px] font-black sm:text-start text-center"
          >
            Unlimited Movies <br />
            <span className="text-[#db36a4]">Streaming</span>
          </div>
          <div className="text-gray-600 sm:text-base text-sm sm:mt-5 mt-2 sm:mx-0 mx-4 tracking-wide">
            Streaming online is completely 100% free <br />
            Dont waste time for downloading movies
          </div>
        </motion.div>

        <div className="sm:w-1/2 w-full h-auto flex justify-center">
          <motion.div
            initial={{
              x: 200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="md:w-[350px] md:h-[350px] w-[200px] h-[200px]"
          >
            <Image
              src={MovieStreaming}
              alt="movie-streaming"
              width={1024}
              height={1024}
            />
          </motion.div>
        </div>
      </div>

      <div className="w-full h-auto flex sm:flex-row flex-col justify-center items-center sm:px-10">
        <div className="sm:w-1/2 w-full h-auto flex justify-center ">
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="md:w-[350px] md:h-[350px] w-[200px] h-[200px]"
          >
            <Image
              src={MovieDownloading}
              alt="movie-streaming"
              width={1024}
              height={1024}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="sm:w-1/2 w-full sm:h-96 h-auto"
        >
          <div
            className="lg:text-5xl sm:text-3xl text-2xl text-black tracking-widest md:leading-[70px] lg:leading-[70px]
          leading-[50px] font-black sm:text-start text-center"
          >
            <span className="text-[#db36a4]">Download</span> Unlimited <br />
            Movies
          </div>
          <div className="text-gray-600 sm:text-base text-sm sm:mt-5 mt-2 sm:mx-0 mx-4 tracking-wide">
            Store movies on your local devices with downloading movies <br />
            We support both download and streaming
          </div>
        </motion.div>
      </div>

      <div className="w-full h-auto flex sm:flex-row flex-col-reverse justify-center items-center sm:px-10 my-20">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="sm:w-1/2 w-full sm:h-96 h-auto"
        >
          <div
            className="lg:text-5xl sm:text-3xl text-2xl text-black tracking-widest md:leading-[70px] lg:leading-[70px]
          leading-[50px] font-black sm:text-start text-center"
          >
            <span className="text-[#db36a4]">Ultrafast</span> Download <br />
            Speed
          </div>
          <div className="text-gray-600 sm:text-base text-sm sm:mt-5 mt-2 sm:mx-0 mx-4 tracking-wide">
            You can download movies with ultrafast download speed <br />
            This is also completely unlimited bandwidth
          </div>
        </motion.div>

        <div className="sm:w-1/2 w-full h-auto flex justify-center">
          <motion.div
            initial={{
              x: 200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="md:w-[350px] md:h-[350px] w-[200px] h-[200px]"
          >
            <Image
              src={UnlimitedBandwidth}
              alt="unlimited-bandwidth"
              width={1024}
              height={1024}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
