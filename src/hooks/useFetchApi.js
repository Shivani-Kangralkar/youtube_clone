import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { initialRender,errorMethod,loadingMethod } from '../redux-store/VideoListSlice'


const useFetchApi = (url) => {
  const dispatch = useDispatch();
  const {videoLists} = useSelector((state) => state.videoLists);


  useEffect(() => {
    getVideos();
  }, [url]);

  const getVideos = async () => {
    try {
      dispatch(loadingMethod())
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Something Went Wrong");
      }
      const result = await res.json();
      const { items } = result;

      // NOTE: initialRender is updating videoLists variable in VideoListSlice
      // After fetching results from api ie; fetch(url), later send result into intialRender of videoListSlice
      dispatch(initialRender(items))

    } catch (err) {
      dispatch(errorMethod(err.message))
    }
  };

  return {videoLists};
};

export default useFetchApi;
