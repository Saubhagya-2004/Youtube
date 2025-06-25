import React from "react";
import { IoMdMusicalNote } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { MdOndemandVideo, MdOutlineKeyboardArrowRight, MdSportsSoccer } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { TiHome } from "react-icons/ti";

const sidebar = () => {
  return (
    <div className="shadow-2xl w-50 h-screen text-center">
      <ul className="m-3">
        <li className="p-3 flex  items-center gap-2 justify-center"><span><TiHome size={20} /></span>Home</li>
        <li className="p-3 flex  items-center gap-2 justify-center"><span><SiYoutubeshorts size={20} /></span>Shorts</li>
      </ul>
      <div className="  w-[190px] m-1 border-1 text-gray-500">
      </div>
      <h1 className="font-bold">Subsciptions</h1>
      
      <ul className="m-4">
       <li className="p-3 flex items-center gap-2 justify-center"> <IoMdMusicalNote size={20} /> <span>Music</span> </li>
        <li className="p-3 flex items-center gap-2 justify-center"> <MdOndemandVideo size={20} /> <span>Movies</span> </li>
        <li className="p-3 flex items-center gap-2 justify-center"> <IoGameController size={20} /> <span>Gaming</span> </li>
        <li className="p-3 flex items-center gap-2 justify-center"> <MdSportsSoccer size={20} /> <span>Sports</span> </li>
         
      </ul>
      <div className="  w-[190px] m-1 border-1 text-gray-500">
      </div>
      <ul className="m-4">
        <li>dnh</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default sidebar;
