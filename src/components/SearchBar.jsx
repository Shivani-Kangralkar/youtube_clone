import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GOOGLE_AC_URL } from "../constants/info";
import axios from "axios";
import jsonpAdapter from "axios-jsonp";
import { cacheResults } from "../redux-store/SearchSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestResult, setSuggestResult] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((state)=> state.search)
  const dispatch = useDispatch()



  useEffect(() => {
    const timer = setTimeout(()=>{

      // If item is present in cache if(searchCache[searchQuery]) , it checks if present than just return 
      // cached item
      if(searchCache[searchQuery]) {
        // When there is no delay of time , when pressing two key stroke
        setSuggestResult(searchCache[searchQuery])
      }else {
        // If item is not present in cache , than make an api call
          // when there is a delay of 500ms between two key stroke than call api
        searchApiCall();
      }
    },500);

    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery]);

  const searchApiCall = async () => {
    try {
      const res = await axios({
        url: GOOGLE_AC_URL,
        adapter: jsonpAdapter,
        params: {
          client: "youtube",
          hl: "en",
          ds: "yt",
          q: searchQuery,
        },
      });
      setSuggestResult(res.data[1]);

      // After making an api call, store the updated item into cache.
      dispatch(
        cacheResults({
          [searchQuery] : res.data[1],
        }
      ));
    } catch (err) {
      console.log(err.message);
    }
  };

  // console.log("suggestResult", suggestResult);
  return (
    <>
      <div className="basis-1/3">
        <form>
          <div className="flex">
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => {
                if (showSuggestion == false) {
                  setShowSuggestion(true);
                }
                setSearchQuery(e.target.value);
              }}
              className="w-full py-2 px-4 border border-gray-400 rounded-l-full outline-none"
            />
            <button className="py-2 border border-gray-400 rounded-r-full px-4">
              <BsSearch />
            </button>
          </div>

          {showSuggestion && suggestResult.length > 0 ? (
            <div
              className="absolute bg-white border rounded-lg p-2 px-4 mx-6 w-[27rem] mt-1"
              onMouseEnter={() => {
                setShowSuggestion(true);
              }}
              onMouseLeave={() => {
                setShowSuggestion(false);
              }}
            >
              <ul>
                {suggestResult &&
                  suggestResult.map((elem, idx) => {
                    return (
                      <li
                        key={idx}
                        className="hover:bg-gray-100 pt-1 "
                      >
                        <button>
                          <div className="flex ">
                            <BsSearch  style={{ fontSize: '15px' }}/>
                            <p className="ml-4 font-semibold"> {elem[0]}</p>
                          </div>
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
    </>
  );
};

export default SearchBar;
