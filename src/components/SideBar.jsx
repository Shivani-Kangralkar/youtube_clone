import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.toggle.isMenuOpen);
  const [isHomeBold, setIsHomeBold] = useState(false);
  const location =  useLocation()
  // console.log('location', location.pathname);

  if (!isMenuOpen) return null;

  const handleClick = () => {
    // console.log("click me ");
    if (location.pathname !== "/") {
      setIsHomeBold(!isHomeBold);
    }
  };

  // console.log("isHomeBold", isHomeBold);
  return (
    <div className="p-5 w-48">
      <ul>
        <Link to="/">
          <li
            className={`cursor-pointer ${
              isHomeBold ? "font-semibold" : ""
            } hover:bg-gray-100 px-5 py-1 rounded-md text-center`}
            onClick={handleClick}
          >
            Home
          </li>
        </Link>
        <li className="hover:bg-gray-100 px-5 py-1 rounded-md text-center">
          Shorts
        </li>
        <li className="hover:bg-gray-100 px-5 py-1 rounded-md text-center">
          Videos
        </li>
        <li className="hover:bg-gray-100 px-5 py-1 rounded-md text-center">
          Live
        </li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
