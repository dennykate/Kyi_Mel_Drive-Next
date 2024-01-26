"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { Info, Video } from ".";
import config from "@/config";
import { VideoDataType } from "@/types";

interface PropsType {
  slug: string;
  resData: VideoDataType;
}

const Container = ({ slug, resData }: PropsType) => {
  const [sectionType, setSectionType] = useState<"info" | "video">("info");
  const [videoData, setVideoData] = useState<VideoDataType>();
  const [isError, setIsError] = useState<boolean>(false);

  const fetchVideoData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        config.originalUrl + `/api/scrape?target_url=${resData?.url}`
      );

      if (data?.link) {
        const responseVideoData = resData;

        responseVideoData["video"] = data?.link;

        setVideoData(resData);
      }
    } catch (error) {
      setIsError(true);
    }
  }, [slug]);

  useEffect(() => {
    fetchVideoData();
  }, [fetchVideoData]);

  return (
    <>
      {sectionType === "info" ? (
        <Info setSectionType={setSectionType} />
      ) : isError ? (
        <p>Error</p>
      ) : (
        <Video data={videoData} />
      )}
    </>
  );
};

export default Container;
