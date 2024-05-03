import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsYoutube } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import SearchBar from "./SearchBar";
import { toggleMenu } from "../redux-store/ToggleSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch()

  const toggleMenuHander = () => {
    // console.log("inside ");
    dispatch(toggleMenu())
  }
  return (
    <div className="flex items-center w-auto mt-4">
      <button>
        <RxHamburgerMenu className="w-10 h-8 mx-4"  onClick={()=> toggleMenuHander()}/>
      </button>

      <div className="flex items-center basis-1/4">
        <BsYoutube className="w-10 h-8 mx-2 text-red-600" />
        <h1 className="font-semibold ">YouTube</h1>
      </div>

      <SearchBar />

      <div className="flex content-end items-center ml-80">
        <CiVideoOn className="cursor-pointer w-12 h-8" />
        <IoIosNotificationsOutline className="cursor-pointer w-12 h-8" />
        <FaUserCircle className="w-12 h-8 " />
      </div>
    </div>
  );
};

export default Header;
