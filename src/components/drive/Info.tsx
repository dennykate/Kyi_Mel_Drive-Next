"use client";

import slugParser from "@/utilities/slugParser";
import { Button } from "..";
import { useEffect, useState } from "react";
import infoParas from "../constants/infoParas";

const Info = () => {
  const [count, setCount] = useState<number>(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount: number) => {
        if (prevCount <= 0) {
          clearInterval(intervalId);
          return 0;
        } else return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-white py-[2px]">
      <div className="max-w-7xl mx-auto flex items-start">
        <div className="px-2 flex items-center flex-col gap-4 w-full  py-10">
          <h6 className="text-3xl font-[500] text-black ">
            Welcome to Kyi Mel Drive – Your Ultimate Movie Destination!
          </h6>
          <Button>Download</Button>
          <div className="text-lg font-[500] text-black font-sans underline">
            Generating your link for you, just wait {count} second(s)...
          </div>
          <div className="flex flex-col gap-3">
            {infoParas.map((para: string, index: number) => (
              <p
                key={index}
                className="text-lg font-[400] font-sans indent-10 tracking-wide"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="min-w-[250px] h-[400px] bg-red-300"></div>
      </div>
    </div>
  );
};

export default Info;
