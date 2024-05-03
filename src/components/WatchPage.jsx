import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { close } from "../redux-store/ToggleSlice";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParam] = useSearchParams();
  const id = searchParam.get("v");
  // console.log(id);

  useEffect(() => {
    dispatch(close());
  }, []);

  return (
    <div className="mt-5 ml-36 shadow-lg rounded-xl overflow-hidden">
      <ReactPlayer
        width={850}
        height={450}
        url={`https://www.youtube.com/embed/${id}`}
        controls
      />
    </div>
  );
};

export default WatchPage;
