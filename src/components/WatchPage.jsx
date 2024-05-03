import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { close } from "../redux-store/ToggleSlice";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import Avatar from "react-avatar";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { apiKey } from "../constants/info";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParam] = useSearchParams();
  const [video, setVideo] = useState(null);
  const [input, setInput] = useState("");
  const id = searchParam.get("v");

  const getVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${apiKey}`
      );
      setVideo(res?.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideo();
  }, []);

  useEffect(() => {
    dispatch(close());
  }, []);

  console.log("sssssss", input);

  return (
    <>
      <div className="ml-36">
        <div className="mt-5 shadow-lg rounded-xl overflow-hidden">
          <ReactPlayer
            width={850}
            height={450}
            url={`https://www.youtube.com/embed/${id}`}
            controls
          />
        </div>

        <h1 className="font-bold mt-2 text-lg">{video?.snippet.title}</h1>

        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-[40%]">
            <div className="flex">
              <Avatar
                src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
                size={35}
                round={true}
              />
              <h1 className="font-bold ml-2">{video?.snippet?.channelTitle}</h1>
            </div>
            <div className="flex items-center mr-1 font-semibold cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
              <span>Join</span>
            </div>
            <button className="px-4 py-1 font-medium bg-black text-white rounded-full">
              Subscribe
            </button>
          </div>
          <div className="flex items-center w-[50%] justify-between mt-2">
            <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
              <AiOutlineLike size="20px" className="mr-5" />
              <AiOutlineDislike size="20px" />
            </div>
            <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
              <PiShareFatLight size="20px" className="mr-2" />
              <span>Share</span>
            </div>
            <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
              <GoDownload />
              <span>Download</span>
            </div>

            <div className="flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full">
              <BsThreeDots />
            </div>
          </div>
        </div>

        {/* comments */}

        <CommentsContainer className=" mb-8"/>
      </div>
    </>
  );
};

export default WatchPage;
