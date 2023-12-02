"use client";

import slugParser from "@/utilities/slugParser";
import { Button } from "..";
import { useCallback, useEffect, useState } from "react";
import infoParas from "../constants/infoParas";
import { Banner } from "../adses";

const Info = () => {
  const [count, setCount] = useState<number>(10);
  const [type, setType] = useState<string | null>("generate");

  const counterGenerator = useCallback(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount: number) => {
        if (prevCount <= 0) {
          clearInterval(intervalId);
          return 0;
        } else return prevCount - 1;
      });
    }, 1000);
  }, [type]);

  useEffect(() => {
    counterGenerator();
  }, [counterGenerator]);

  const onClickHandler = useCallback(() => {
    if (type === "generate") {
      setCount(10);
      return setType("download");
    }

    alert("download");
  }, []);

  return (
    <div className="min-h-screen bg-white py-2 pb-10">
      <div className="max-w-7xl mx-auto flex items-start">
        <div className="px-2 flex items-center flex-col gap-4 w-full  ">
          <Banner />
          <h6 className="text-3xl font-[500] text-black my-4">
            Welcome to Kyi Mel Drive – Your Ultimate Movie Destination!
          </h6>
          <Button disabled={count !== 0} onClick={onClickHandler}>
            {count !== 0
              ? type === "generate"
                ? "Generating"
                : "Getting Link"
              : type === "generate"
              ? "Get Link"
              : "Download"}
          </Button>
          <div className="text-lg font-[500] text-black font-sans underline my-4">
            Generating your link for you, just wait {count} second(s)...
          </div>
          <Banner />
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
