"use client";

import Plyr from "plyr-react";
import "plyr-react/plyr.css";

import { Banner } from "../adses";
import { useEffect } from "react";
import { Button } from "..";

const videoSrc = {
  type: "video",
  title: "",
  sources: {},
  poster: "",
};

const Video = () => {
  useEffect(() => {}, []);

  const setVideoData = () => {
    videoSrc.title = "Test Video";
    videoSrc.sources = [
      {
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        type: "video/mp4",
      },
    ];
    videoSrc.poster = "https://i.postimg.cc/CKYqfhF7/icon.png";
  };

  return (
    <div className="w-full min-h-screen pt-2 pb-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        <Banner />

        <div className="w-[80%]">
          <Plyr
            source={{
              type: "video",
              title: "Test Video",
              sources: [
                {
                  src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                  type: "video/mp4",
                },
              ],
              poster: "https://i.postimg.cc/CKYqfhF7/icon.png",
            }}
            autoPlay
          />
        </div>

        <div className="w-full mt-4 flex flex-col items-start gap-2">
          <h6 className="text-lg font-[600] text-black">
            Title - How To Download Facebook Video
          </h6>
          <h6 className="text-lg font-[600] text-black">File Size - 100MB</h6>
          <Button className="mt-4">Download</Button>
        </div>

        <Banner />
      </div>
    </div>
  );
};

export default Video;
