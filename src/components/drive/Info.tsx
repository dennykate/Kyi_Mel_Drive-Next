"use client";

// import slugParser from "@/utilities/slugParser";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import { Button } from "..";
import { Banner, SideBanner } from "../adses";
import infoParas from "../constants/infoParas";
import scrollToElement from "@/utilities/scrollToElement";

interface PropsType {
  setSectionType: Dispatch<SetStateAction<"video" | "info">>;
}

const Info = ({ setSectionType }: PropsType) => {
  const [count, setCount] = useState<number>(10);
  const [type, setType] = useState<string | null>("generate");

  useEffect(() => {
    scrollToElement("info");
  }, []);

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
  }, [type]);

  return (
    <div id="info" className="min-h-screen bg-white py-2 pb-10">
      <div className="max-w-7xl mx-auto flex items-start">
        <div className="px-2 flex items-center flex-col gap-4 w-full  ">
          {/* upper section */}
          <div className="flex flex-col items-center w-full">
            <Banner />
            <h6 className="text-3xl font-[500] text-black my-4 text-center">
              Welcome to Kyi Mel Drive – Your Ultimate Movie Destination!
            </h6>
            {type === "generate" && (
              <>
                <Button
                  disabled={type !== "generate" || count !== 0}
                  onClick={() => {
                    setCount(10);
                    setType("download");
                    scrollToElement("lower-section");
                  }}
                >
                  {count !== 0 ? "Generating" : "Get Link"}
                </Button>
                <p className="text-lg font-[500] text-black font-sans underline my-4">
                  Generating your link for you, just wait {count} second(s)...
                </p>
              </>
            )}

            <Banner />
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

          {/* lower section */}
          <div className="w-full flex flex-col items-center gap-2">
            <Banner />
            {type === "download" && (
              <>
                <Button
                  disabled={count !== 0}
                  onClick={() => setSectionType("video")}
                  className="mt-6"
                >
                  {count !== 0 ? "Getting Link" : "Download"}
                </Button>
                <p className="text-lg font-[500] text-black font-sans underline my-4">
                  Getting your link for you, just wait {count} second(s)...
                </p>
              </>
            )}
            <Banner />
          </div>

          <div id="lower-section" className="w-full h-[100px]" />
        </div>

        <SideBanner />
      </div>
    </div>
  );
};

export default Info;
