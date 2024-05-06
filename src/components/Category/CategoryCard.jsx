import React from "react";
import useFilterSearch from "../../hooks/useFilterSearch";
import {CATEGORY_SEARCH_URL} from '../../constants/info'

const CategoryCard = ({ name }) => {
  
  const { getSearchByKeyword } = useFilterSearch(`${CATEGORY_SEARCH_URL}&q=${name}`)
  
  const handleButtonClick = () => {
    getSearchByKeyword();
  };


  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="border w-max-content h-max-content px-5 py-1 bg-gray-100 hover:bg-gray-300 rounded-md text-center"
      >
        {name}
      </button>
    </div>
  );
};

export default CategoryCard;
