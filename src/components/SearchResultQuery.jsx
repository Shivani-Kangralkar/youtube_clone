import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SEARCH_URL } from "../constants/info";
import useFilterSearch from "../hooks/useFilterSearch";
import CategoryList from "./Category/CategoryList";
import SearchResultCard from "./SearchResultCard";

const SearchResultQuery = () => {
  const [searchQuery] = useSearchParams();
  const searchItem = searchQuery.get("search_query");

  const { videoLists, getSearchByKeyword } = useFilterSearch(
    `${SEARCH_URL}&q=${searchItem}`
  );

  useEffect(() => {
    getSearchByKeyword();
  }, [searchQuery.get("search_query")]);

  return (
    <div>
      <CategoryList />

      <div className="flex flex-row flex-wrap justify-evenly">
        {videoLists &&
          videoLists.map((elem, index) => {
            return ( <SearchResultCard key={elem?.id?.videoId || index} id={elem?.id?.videoId} descriptions={elem?.snippet?.description} channelTitle={elem?.snippet?.channelTitle} imgUrl ={elem?.snippet?.thumbnails?.medium?.url} title={elem.snippet.title} />)
          })}
        {videoLists?.length === 0 && (
          <p className="text-center p-12"> No videos found.Try Again </p>
        )}
      </div>
    </div>
  );
};

export default SearchResultQuery;
