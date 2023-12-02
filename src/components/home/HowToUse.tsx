"use client";
import React from "react";

import { motion } from "framer-motion";
import { FaWalking } from "react-icons/fa";
import { BsAlarmFill } from "react-icons/bs";
import { RiMovie2Fill } from "react-icons/ri";
import Link from "next/link";

const HowToUse = () => {
  return (
    <div id="how-to-use" className="w-full min-h-screen pt-20 mb-20">
      <div className="lg:text-5xl sm:text-3xl text-2xl text-center mb-10 font-black">
        How To <span className="text-[#db36a4]">Use</span>
      </div>

      <div className="max-w-4xl mx-auto h-auto flex justify-evenly flex-wrap">
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="sm:w-[380px] sm:h-[180px] h-[150px] w-11/12 mb-10 bg-[#f5f5f5] border border-[#db36a4]
        rounded-lg hover:shadow-xl hover:border-0 transition duration-150 "
        >
          <div className="w-full h-20 flex justify-center items-center text-2xl font-bold uppercase">
            Step-1
          </div>

          <div className="mx-3 text-base text-center font-semibold font-mono">
            <FaWalking className="inline text-lg" /> Go to our drive page
          </div>
        </motion.div>

        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="sm:w-[380px] sm:h-[180px] h-[150px] w-11/12 mb-10 bg-[#f5f5f5] border border-[#db36a4]
        rounded-lg hover:shadow-xl hover:border-0 transition duration-150 "
        >
          <div className="w-full h-20 flex justify-center items-center text-2xl font-bold uppercase">
            Step-2
          </div>
          <div className="mx-3 text-base text-center font-semibold font-mono">
            <BsAlarmFill className="inline text-lg" /> Wait 10 Seconds
          </div>
        </motion.div>

        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="sm:w-[380px] sm:h-[180px] h-[150px] w-11/12 mb-10 bg-[#f5f5f5] border border-[#db36a4]
        rounded-lg hover:shadow-xl hover:border-0 transition duration-150 "
        >
          <div className="w-full h-20 flex justify-center items-center text-2xl font-bold uppercase">
            Step-3
          </div>

          <div className="mx-3 text-base text-center font-semibold font-mono">
            <RiMovie2Fill className="inline text-lg" /> Choose Stream Online Or
            Download
          </div>
        </motion.div>

        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="sm:w-[380px] sm:h-[180px] h-[150px] w-11/12 mb-10 bg-[#f5f5f5] border border-[#db36a4]
        rounded-lg hover:shadow-xl hover:border-0 transition duration-150 "
        >
          <div className="w-full h-20 flex justify-center items-center text-2xl font-bold uppercase">
            Step-4
          </div>
          <Link
            href="/drive?url=https://drive.google.com/u/0/uc?id=15QidEp013sy8IRZH6CsMrmpemRZS6oef&export=download&type=googledrive"
            passHref
            target="_blank"
          >
            <div
              className="mx-3 text-base text-center font-semibold font-mono py-2 bg-[#bd36a4] text-white 
          cursor-pointer rounded-full hover:bg-[#f5f5f5] border hover:border-2 hover:border-[#db36a4] hover:text-[#db36a4]
          transform -translate-y-2"
            >
              Watch Demo
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HowToUse;
