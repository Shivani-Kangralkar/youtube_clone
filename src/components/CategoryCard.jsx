import React from "react";

const CategoryCard = ({ name }) => {
  const handleButtonClick = () => {
    // console.log("handleButtonClick");
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
