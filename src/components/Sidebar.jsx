import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { CgPlayList } from "react-icons/cg";
import { FaChevronRight, FaFire, FaRegCopyright, FaYoutube } from "react-icons/fa";
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
import {
  SiCoursera,
  SiYoutubegaming,
  SiYoutubekids,
  SiYoutubemusic,
  SiYoutubeshorts,
} from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  
  // Early return - consider changing to a minimized version instead of null
  if (!isMenuOpen) return null;

  const sidebarItems = [
    { id: 1, name: "Your Channel", icon: <FiUserCheck /> },
    { id: 2, name: "History", icon: <MdHistory /> },
    { id: 3, name: "Playlist", icon: <CgPlayList /> },
    { id: 4, name: "Your Videos", icon: <GoVideo /> },
    { id: 5, name: "Watch later", icon: <MdOutlineWatchLater /> },
    { id: 6, name: "Liked video", icon: <AiOutlineLike /> },
  ];

  const sidebarItems2 = [
    { id: 1, name: "Trending", icon: <FaFire /> },
    { id: 2, name: "Shopping", icon: <RiShoppingBag4Line /> },
    { id: 3, name: "Music", icon: <MdOutlineMusicNote /> },
    { id: 4, name: "Fashion", icon: <FaChildDress /> },
    { id: 5, name: "Films", icon: <MdOutlineOndemandVideo /> },
    { id: 6, name: "Live", icon: <LuTarget /> },
    { id: 7, name: "Gaming", icon: <SiYoutubegaming /> },
    { id: 8, name: "News", icon: <PiNewspaperClipping /> },
    { id: 9, name: "Course", icon: <SiCoursera /> },
    { id: 10, name: "Podcast", icon: <MdPodcasts /> },
  ];

  const sidebarItems3 = [
    { id: 1, name: "Youtube Premium", icon: <FaYoutube /> },
    { id: 2, name: "Youtube Studio", icon: <TbBrandYoutubeKids /> },
    { id: 3, name: "Youtube Music", icon: <SiYoutubemusic /> },
    { id: 4, name: "Youtube Kids", icon: <SiYoutubekids /> },
  ];

  return (
    <div className={`
      fixed lg:sticky 
      top-16 left-0 
      w-[240px] md:w-[280px] 
      h-[calc(100vh-64px)] 
      p-4 
      bg-white 
      border-r border-gray-200 
      overflow-y-auto 
      z-40 
      transition-all duration-200 ease-in-out
      ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
    `}>
      <div className="flex flex-col items-start space-y-2 py-4">
        {/* Home */}
        <Link to="/" className="w-full">
          <div className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg px-3 py-2 w-full cursor-pointer">
            <TiHome size={24} />
            <span className="font-medium text-sm md:text-base">Home</span>
          </div>
        </Link>
        
        {/* Shorts */}
        <Link to="/shorts" className="w-full">
          <div className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg px-3 py-2 w-full cursor-pointer">
            <SiYoutubeshorts size={24} />
            <span className="font-medium text-sm md:text-base">Shorts</span>
          </div>
        </Link>
        
        {/* Subscriptions */}
        <div className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg px-3 py-2 w-full cursor-pointer">
          <MdOutlineSubscriptions size={24} />
          <span className="font-medium text-sm md:text-base">Subscriptions</span>
        </div>
        
        <hr className="w-full my-2 border-gray-200" />
        
        {/* Section 1 - You */}
        <div className="w-full mt-2 space-y-1">
          <div className="flex items-center space-x-1.5 hover:underline px-3 py-1">
            <h1 className="font-medium text-sm md:text-base">You</h1>
            <FaChevronRight size={12} className="mt-0.5" />
          </div>
          {sidebarItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg px-3 py-2 cursor-pointer">
              <div className="text-xl">{item.icon}</div>
              <span className="font-medium text-sm md:text-base">{item.name}</span>
            </div>
          ))}
        </div>

        <hr className="w-full my-2 border-gray-200" />
        
        {/* Section 2 - Explore */}
        <div className="w-full mt-2 space-y-1">
          <div className="px-3 py-1">
            <h1 className="font-medium text-sm md:text-base">Explore</h1>
          </div>
          {sidebarItems2.map((item) => (
            <div key={item.id} className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg px-3 py-2 cursor-pointer">
              <div className="text-xl">{item.icon}</div>
              <span className="font-medium text-sm md:text-base">{item.name}</span>
            </div>
          ))}
        </div>
        
        <hr className="w-full my-2 border-gray-200" />
        
        {/* Section 3 - More from YouTube */}
        <div className="w-full mt-2 space-y-1">
          <div className="px-3 py-1">
            <h1 className="font-medium text-sm md:text-base">More From YouTube</h1>
          </div>
          {sidebarItems3.map((item) => (
            <div key={item.id} className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg px-3 py-2 cursor-pointer">
              <div className="text-xl text-red-500">{item.icon}</div>
              <span className="font-medium text-sm md:text-base">{item.name}</span>
            </div>
          ))}
        </div>
        
        <hr className="w-full my-2 border-gray-200" />
      </div>
      
      {/* Footer */}
      <div className="text-xs p-3 text-left mb-10 font-medium text-gray-500 space-y-1">
        <div>About Press Copyright</div>
        <div>Contact us Creators</div>
        <div>Advertise Developers</div>
        <div className="text-gray-600 mt-3 space-y-1">
          <div>Terms Privacy policy & Safety</div>
          <div>How YouTube Works</div>
          <div>Test New Features</div>
        </div>
        <div className="mt-3 text-xs">© {new Date().getFullYear()} Google LLC</div>
      </div>
    </div>
  );
};

export default Sidebar;