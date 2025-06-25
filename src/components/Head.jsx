import React from "react";
import { FaMicrophone, FaRegUserCircle } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { togglemenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(togglemenu());
  };
  return (
    <>
      <div className="grid grid-flow-col p-2 m-3 shadow-lg align-middle rounded-b-xl w ">
        <div className="flex gap-3 col-span-1">
          <div onClick={toggleMenu} className="flex cursor-pointer">
            <RxHamburgerMenu size={25} />
          </div>
          <div className="flex ">
            <IoLogoYoutube size={25} className="text-red-500" />
            <span className="text-xl font-bold ml-1 mx-auto">YouTube</span>
          </div>
        </div>

        <div className="col-span-10 text-center">
          <div className="relative inline-block">
            <input
              type="text"
              className="border-2 rounded-2xl w-100 pl-10 pr-4 py-2"
              placeholder="Search..."
            />
            <IoSearchOutline
              size={22}
              className="absolute right-3  top-1/2 transform -translate-y-1/2 text-gray-900 hover:text-red-500"
            />
            <FaMicrophone size={22} className="absolute top-1/2 transform -translate-y-1/2 left-2" />
          </div>
          <button className="ml-3 border-2 border-black rounded-2xl bg-gradient-to-r from-zinc-400 via-fuchsia-300 to-zinc-600 p-1 px-3 uppercase text-white ">
            Search
          </button>
        </div>

        <div className="justify-end col-span-0">
         <FaRegUserCircle size={22}/>
        </div>
      </div>
    </>
  );
};

export default Head;
