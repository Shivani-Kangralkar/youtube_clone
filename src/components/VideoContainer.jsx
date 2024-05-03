import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import { url } from "../constants/info";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videoLists, setVideoList] = useState("");

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const res = await fetch(url);
    const result = await res.json();
    setVideoList(result.items);
  };

  return (
    <div>
      <CategoryList />
      <div className="flex flex-row flex-wrap justify-evenly">
        {videoLists
          ? videoLists.map((elem) => {
              return (
                  <VideoCard
                    key={
                      typeof elem?.id === "object"
                        ? elem?.id?.videoId
                        : elem?.id
                    }
                    id={
                      typeof elem?.id === "object"
                        ? elem?.id?.videoId
                        : elem?.id
                    }
                    imgUrl={elem?.snippet?.thumbnails?.medium?.url}
                    title={elem?.snippet?.title}
                    viewCount={elem?.statistics?.viewCount}
                    channelTitle={elem?.snippet?.channelTitle}
                  />
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default VideoContainer;
