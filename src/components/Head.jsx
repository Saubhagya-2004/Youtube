import React from "react";
import { FaMicrophone, FaRegUserCircle } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { togglemenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { CiBellOn } from "react-icons/ci";
import { RiVideoAddFill } from "react-icons/ri";
import Profile from "../assets/profile.avif";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(togglemenu());
  };

  return (
    <header className="sticky top-0 w-full p-4 shadow-md bg-white z-50">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
        {/* Left section */}
        <div className="flex items-center space-x-6">
          <RxHamburgerMenu 
            size={30} 
            onClick={toggleMenu} 
            className="cursor-pointer hover:bg-gray-100 p-1 rounded-full"
          />
          <div className="flex items-center space-x-1 cursor-pointer">
            <IoLogoYoutube size={28} className="text-red-500" />
            <span className="text-xl font-bold">YouTube</span>
          </div>
        </div>

        {/* Center search */}
        <div className="flex items-center w-[40%]">
          <div className="relative w-full flex">
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:border-blue-500"
            />
            <button className="px-5 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
              <IoSearchOutline size={20} />
            </button>
          </div>
          <button className="ml-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <FaMicrophone size={20} />
          </button>
        </div>

        {/* Right icons */}
       <div className="flex items-center space-x-5">
  <RiVideoAddFill size={22} className="cursor-pointer hover:text-red-500" />
  <CiBellOn size={22} className="cursor-pointer hover:text-red-500" />
  <div className="relative group">
    <img
      src={Profile}
      alt="profile"
      className="w-8 h-8 rounded-full cursor-pointer"
    />
    <div className="absolute right-0 top-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-gray-300 shadow-lg rounded-2xl p-2 w-40 pointer-events-auto">
      <div className="py-1 px-2 hover:bg-gray-100 rounded-md">Profile</div>
      <div className="py-1 px-2 hover:bg-gray-100 rounded-md">Logout</div>
    </div>
  </div>
</div>
      </div>
    </header>
  );
};

export default Head;