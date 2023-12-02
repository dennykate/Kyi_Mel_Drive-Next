"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/icon.png";
import Menubar from "@/assets/menu-bar.png";

import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div className="w-full sm:h-20 h-16 bg-[#0f2027] flex justify-between">
      <div className="h-full sm:w-32 w-24 flex justify-center items-center">
        <div className="sm:w-[56px] sm:h-[56px] w-[45px] h-[45px]">
          <Link href={"/#home"}>
            <Image
              src={Logo}
              alt="logo"
              width={1024}
              height={1024}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <div className="items-center space-x-10 pr-12 sm:flex hidden">
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

      <div className="sm:hidden flex sm:w-24 w-16 h-full justify-center items-center">
        <div
          className="text-xl"
          onClick={() => {
            setShowNav((prevShowNav) => !prevShowNav);
          }}
        >
          {showNav ? (
            <AiOutlineClose className="text-white" />
          ) : (
            <AiOutlineBars className="text-white" />
          )}
        </div>
      </div>

      <div
        className={`sm:hidden visible absolute w-full h-60 bg-[#0f2027] top-16 left-0 flex flex-col justify-evenly items-center
        ${
          !showNav ? "-translate-x-full  " : "translate-x-0  "
        } transform duration-100 z-10`}
      >
        <Link href={"/#home"}>
          <div className="text-white font-sans ">Home</div>
        </Link>
        <Link href={"/#about"}>
          <div className="text-white font-sans ">About</div>
        </Link>
        <Link href={"/#how-to-use"}>
          <div className="text-white font-sans ">How To Use</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
