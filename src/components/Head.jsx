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
    <>
      <div className="flex justify-between p-2 m-3 shadow-lg align-middle rounded-b-xl  ">
        <div className="flex gap-3 col-span-1">
          <div className="flex items-center cursor-pointer space-x-3">
            <RxHamburgerMenu size={25} onClick={toggleMenu} />
            <div className="flex space-x-1.5">
              <IoLogoYoutube size={25} className="text-red-500 " />
              <span className="text-xl font-bold  mx-auto">YouTube</span>
            </div>
          </div>
        </div>

        <div className="w-[35%] text-center flex items-center ">
          <div className="w-full  border-1 rounded-l-full px-3 py-1   ">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none placeholder:text-pink-700 w-[90%]"
            />
          </div>
          <button className="px-4 py-1 border rounded-r-full ">
            <IoSearchOutline size={24} className="hover:text-red-500" />
          </button>
          <FaMicrophone
            size={31}
            className="ml-3 border rounded-full bg-gray-600 hover:bg-gray-800 text-white p-2 duration-300 cursor-pointer"
          />
        </div>

        <div className="flex items-center space-x-2.5 relative">
          <RiVideoAddFill size={24} />
          <CiBellOn size={24} />
          <div className="relative group">
            <img
              src={Profile}
              alt="profile"
              className="w-auto h-8 rounded-full object-cover"
            />
            <div className=" absolute top-10 right-0 mt-2 bg-gray-300 border border-gray-200 rounded-lg shadow-lg p-2 min-w-24 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 text-center cursor-pointer">
              <li className="text-black hover:bg-gray-100 list-none w-full rounded-2xl">
                Profile
              </li>
              <li className="text-black hover:bg-gray-100 list-none w-full rounded-2xl">
                Logout
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
