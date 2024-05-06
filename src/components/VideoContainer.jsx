import React, { useEffect, useState } from "react";
import CategoryList from "./Category/CategoryList";
import { url } from "../constants/info";
import VideoCard from "./VideoCard";
import useFetchApi from "../hooks/useFetchApi";


const VideoContainer = () => {
  const { videoLists } = useFetchApi(url);


  // NOTE: After selecting category ('sports','movies'), It shows output on videoConatiner component.
  // Also when api is called for very first time , It shows output over here.
  // console.log("inside useFetchApi", videoLists);



  return (
    <div>
      <CategoryList />

      <div className="flex flex-row flex-wrap justify-evenly">
        {videoLists
          ? videoLists.map((elem) => {
              return (
                <VideoCard
                  key={
                    typeof elem?.id === "object" ? elem?.id?.videoId : elem?.id
                  }
                  id={
                    typeof elem?.id === "object" ? elem?.id?.videoId : elem?.id
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
