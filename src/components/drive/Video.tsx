"use client";

import Plyr from "plyr-react";
import "plyr-react/plyr.css";

import { Banner } from "../adses";
import { Button } from "..";
import { VideoDataType } from "@/types";
import { useEffect, useRef } from "react";
import scrollToElement from "@/utilities/scrollToElement";

interface PropsType {
  data: VideoDataType | undefined;
}

const Video = ({ data }: PropsType) => {
  useEffect(() => {
    setTimeout(() => {
      scrollToElement("video-banner-1");
    }, 300);
  }, []);

  return (
    <div className="w-full min-h-screen pt-2 pb-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        <Banner id="video-banner-1" />

        <div className="w-[80%] relative">
          <Plyr
            source={{
              type: "video",
              title: data?.name,
              sources: [
                {
                  src: data?.video as string,
                  type: "video/mp4",
                },
              ],
              poster: data?.thumbnail,
            }}
            autoPlay={true}
          />
          {/* <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 z-10 flex justify-center icon">
            
          </div> */}
        </div>

        <div className="w-full mt-4 flex flex-col items-start gap-2 sm:px-8 px-4">
          <h6 className="text-lg font-[600] text-black">
            Title - {data?.name}
          </h6>
          <h6 className="text-lg font-[600] text-black">
            File Size - {data?.size}
          </h6>
          <h6 className="text-lg font-[600] text-black">
            Resolution - {data?.resolution}
          </h6>
          <Button className="mt-4" onClick={() => window.open(data?.video)}>
            Download
          </Button>
        </div>

        <Banner />
      </div>
    </div>
  );
};

export default Video;
