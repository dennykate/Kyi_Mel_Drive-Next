"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import MovieStreaming from "@/assets/streaming.svg";
import MovieDownloading from "@/assets/download.svg";
import UnlimitedBandwidth from "@/assets/upload.svg";

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
            className="lg:text-5xl sm:text-3xl text-2xl text-black tracking-wide md:leading-[70px] 
            lg:leading-[70px] sm:mx-0 mx-4
          font-black text-start"
          >
            Unlimited Movies <br className="sm:block hidden" />
            <span className="text-[#db36a4]">Streaming</span>
          </div>
          <div className="text-gray-600 sm:text-base text-sm sm:mt-5 mt-2 sm:mx-0 mx-4 tracking-normal">
            Streaming online is completely 100% free
            <br className="sm:block hidden" />
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
            className="lg:text-5xl sm:text-3xl text-2xl text-black tracking-wide md:leading-[70px] 
            lg:leading-[70px] sm:mx-0 mx-4
          font-black text-start"
          >
            <span className="text-[#db36a4]">Download</span> Unlimited{" "}
            <br className="sm:block hidden" />
            Movies
          </div>
          <div className="text-gray-600 sm:text-base text-sm sm:mt-5 mt-2 sm:mx-0 mx-4 tracking-normal">
            Store movies on your local devices with downloading movies{" "}
            <br className="sm:block hidden" />
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
            className="lg:text-5xl sm:text-3xl text-2xl text-black tracking-wide md:leading-[70px] 
             lg:leading-[70px] sm:mx-0 mx-4
           font-black text-start"
          >
            <span className="text-[#db36a4]">Ultrafast</span> Download{" "}
            <br className="sm:block hidden" />
            Speed
          </div>
          <div className="text-gray-600 sm:text-base text-sm sm:mt-5 mt-2 sm:mx-0 mx-4 tracking-normal">
            You can download movies with ultrafast download speed{" "}
            <br className="sm:block hidden" />
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
