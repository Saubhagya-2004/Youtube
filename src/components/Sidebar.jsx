import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { CgPlayList } from "react-icons/cg";
import { FaChevronRight, FaFire, FaYoutube } from "react-icons/fa";
import { FaChildDress } from "react-icons/fa6";
import { FiUserCheck } from "react-icons/fi";
import { GiLinkedRings } from "react-icons/gi";
import { GoVideo } from "react-icons/go";
import { Link } from "react-router-dom";
import { LuTarget } from "react-icons/lu";
import {
  MdHistory,
  MdOndemandVideo,
  MdOutlineMusicNote,
  MdOutlineOndemandVideo,
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
  MdPodcasts,
  MdSportsSoccer,
  MdWatchLater,
} from "react-icons/md";
import { PiNewspaperClipping } from "react-icons/pi";
import { RiShoppingBag4Line } from "react-icons/ri";
import { SiCoursera, SiYoutubegaming, SiYoutubekids, SiYoutubemusic, SiYoutubeshorts } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import { useSelector } from "react-redux";

const sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //early return
  if (!isMenuOpen) {
    return null;
  }
  const sidebaritems = [
    {
      id: 1,
      name: "Your Channel",
      icon: <FiUserCheck />,
    },
    {
      id: 2,
      name: "History",
      icon: <MdHistory />,
    },
    {
      id: 3,
      name: "Playlist",
      icon: <CgPlayList />,
    },
    {
      id: 4,
      name: "Your Videos",
      icon: <GoVideo />,
    },
    {
      id: 5,
      name: "Watch later",
      icon: <MdOutlineWatchLater />,
    },
    {
      id: 6,
      name: "Liked video",
      icon: <AiOutlineLike />,
    },
  ];
  const sidebaritems2 = [
    {
      id: 1,
      name: "Trending",
      icon: <FaFire />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <RiShoppingBag4Line />,
    },
    {
      id: 3,
      name: "Music",
      icon:<MdOutlineMusicNote />,
    },
    {
      id: 4,
      name: "Fashion",
      icon: <FaChildDress />,
    },
    {
      id: 5,
      name: "Films",
      icon: <MdOutlineOndemandVideo />,
    },
    {
      id: 6,
      name: "Live",
      icon: <LuTarget />,
    },
    {
      id: 7,
      name: "Gaming",
      icon: <SiYoutubegaming />,
    },
    {
      id: 8,
      name: "News",
      icon: <PiNewspaperClipping />,
    },
    {
      id: 9,
      name: "Course",
      icon: <SiCoursera />,
    },
    {
      id: 10,
      name: "poadcast",
      icon: <MdPodcasts />,
    },
  ];
  const sidebaritems3 = [
    {
      id:1,
      name:"Youtube Premium",
      icon:<FaYoutube />
    },
    {
      id:2,
      name:"Youtube Studio",
      icon:<TbBrandYoutubeKids />
    },
    {
      id:3,
      name:"Youtube Music",
      icon:<SiYoutubemusic />
    },
    {
      id:4,
      name:"Youtube Kids",
      icon:<SiYoutubekids/>
    },
  ]
  return (
    <div className="fixed p-4 top-16 w-60 max-h-screen bg-white border-r border-gray-200 overflow-y-scroll overflow-hidden z-40 ">
      <div className=" flex flex-col items-start space-y-2 py-4 ">
        <Link to='/'><div className="flex items-center space-x-3 hover:bg-gray-300  rounded-2xl px-3 py-2 w-full cursor-pointer">
          <TiHome size={24} />
          <span className="font-medium">Home</span>
        </div></Link>
        <Link to='/shorts'><div className="flex items-center space-x-3 hover:bg-gray-300 rounded-2xl px-3 py-2 w-full cursor-pointer">
          <SiYoutubeshorts size={24} />
          <span className="font-medium">Shorts</span>
        </div></Link>
        <div className="flex items-center space-x-3 hover:bg-gray-300 rounded-2xl px-3 py-2 w-full cursor-pointer">
          <MdOutlineSubscriptions size={24} />
          <span className="font-medium">Subscriptions</span>
        </div>
        <hr className="w-full my-2" />
        {/* item-2 */}
        <div className=" mt-4 space-y-3 items-center ">
          <div className="flex items-center space-x-1.5 hover:underline">
            <h1>You</h1>
            <span>
              <FaChevronRight size={15} />
            </span>
          </div>
          {sidebaritems.map((item) => {
            return (
              <div className=" flex items-center space-x-3 hover:bg-gray-300 rounded-2xl px-3 py-2 w-full cursor-pointer">
                <div className="text-2xl">{item.icon}</div>
                <span className="font-medium">{item.name}</span>
              </div>
            );
          })}
        </div>
        
        <hr className="w-full my-2" />
        {/* item-3 */}
        <div className="mt-3 space-y-3 items-center">
          <div>
            <h1>Explore</h1>
          </div>
          {sidebaritems2.map((item) => {
            return (
              <div className=" flex items-center space-x-3 hover:bg-gray-300 rounded-2xl px-3 py-2 w-full cursor-pointer">
                <div className="text-2xl">{item.icon}</div>
                <span className="font-medium">{item.name}</span>
              </div>
            );
          })}
        </div>
        <hr className="w-full my-2" />
        {/* item */}
        <div className="mt-3 space-y-3 items-center">
          <div>
            <h1>More From Youtube</h1>
          </div>
          {sidebaritems3.map((item) => {
            return (
              <div className=" flex items-center space-x-3 hover:bg-gray-300 rounded-2xl px-3 py-2 w-full cursor-pointer">
                <div className="text-2xl text-red-500">{item.icon}</div>
                <span className="font-medium">{item.name}</span>
              </div>
            );
          })}
        </div>
        <hr className="w-full my-2"/>
      </div>
  <span></span>
    </div>
  );};

export default sidebar;
