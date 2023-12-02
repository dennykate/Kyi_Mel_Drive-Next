"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiCopyright } from "react-icons/bi";

import FooterFilm from "@/assets/footer-film.gif";
import Playstore from "@/assets/playstore.png";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#202a43] pt-10">
      <div className="max-w-4xl mx-auto h-full flex sm:flex-nowrap flex-wrap">
        <div className="w-[300px] h-full flex justify-center items-center">
          <div className="sm:w-[250px] sm:h-[250px] w-[200px] h-[200px]">
            <Image
              src={FooterFilm}
              alt="footer-film"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="sm:w-2/3 w-10/12 h-full flex justify-evenly sm:mx-0 mx-auto">
          <div className="w-40 h-full sm:py-24 py-12 flex flex-col space-y-5">
            <Link href={"/#home"}>
              <div
                className="text-white font-sans hover:text-[#db36a4] cursor-pointer 
        transition-all duration-150"
              >
                Home
              </div>
            </Link>
            <Link href={"/#about"}>
              <div
                className="text-white font-sans hover:text-[#db36a4] cursor-pointer
        transition-all duration-150"
              >
                About
              </div>
            </Link>
            <Link href={"/#how-to-use"}>
              <div
                className="text-white font-sans hover:text-[#db36a4] cursor-pointer
        transition-all duration-150"
              >
                How to Use
              </div>
            </Link>
          </div>

          <div className="w-40 h-full sm:py-24 py-12 flex flex-col space-y-5">
            <Link
              href="/drive?url=https://drive.google.com/u/0/uc?id=15QidEp013sy8IRZH6CsMrmpemRZS6oef&export=download&type=googledrive"
              passHref
              target="_blank"
            >
              <div
                className="text-white font-sans hover:text-[#db36a4] cursor-pointer 
      transition-all duration-150"
              >
                Our Drive
              </div>
            </Link>
            <Link href={"/#home"}>
              <div
                className="text-white font-sans hover:text-[#db36a4] cursor-pointer
        transition-all duration-150"
              >
                Helps
              </div>
            </Link>
            <div className="w-32 h-10 cursor-pointer">
              <Image
                src={Playstore}
                alt="playstore"
                width={1280}
                height={376}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full h-16 flex justify-center items-center text-white sm:text-base
        text-xs font-mono font-extralight"
      >
        Copyrights <BiCopyright className="mx-2" /> All rights reserved
      </div>
    </div>
  );
};

export default Footer;
