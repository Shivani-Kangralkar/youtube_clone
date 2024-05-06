import { useDispatch, useSelector } from "react-redux";
import { errorMethod, searchByKeyword, loadingMethod } from "../redux-store/VideoListSlice";


const useFilterSearch = (url) => {
  const dispatch = useDispatch();

  const {videoLists} = useSelector((state) => state.videoLists);

  const getSearchByKeyword = async () => {
    try {
      dispatch(loadingMethod(false))

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const result = await res.json();

      const { items } = result

      // console.log('items',items);

// NOTE: Elements are filtered based upon cateorgy (which had id.kind.video). 
// Only filter those items of id.kind which has video in it.
// For Both category serach and searchBar search , this logic is used
      if (items || items !== null || items !== undefined) {
        const filteredItem = items.filter(
          (elem) => elem.id.kind.includes('video')

        );

        // console.log('filteredItem',filteredItem);

        dispatch(searchByKeyword(filteredItem));
      } else {
        dispatch(errorMethod("Some thing went wrong"));
      }
    } catch (err) {
      dispatch(errorMethod(err.message))
    }
  };

  // console.log('videoLists', videoLists);

  return { getSearchByKeyword, videoLists };
};

export default useFilterSearch;
