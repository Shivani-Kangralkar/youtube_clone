import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { initialRender,errorMethod } from '../redux-store/VideoListSlice'


const useFetchApi = (url) => {
  const dispatch = useDispatch();
  const {videoLists} = useSelector((state) => state.videoLists);


  useEffect(() => {
    getVideos();
  }, [url]);

  const getVideos = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Something Went Wrong");
      }
      const result = await res.json();
      const { items } = result;
      dispatch(initialRender(items))

    } catch (err) {
      dispatch(errorMethod(err.message))
    }
  };

  return {videoLists};
};

export default useFetchApi;
