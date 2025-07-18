import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Google_Api_key } from "../utils/constant";
import { BiDislike, BiLike, BiSolidBellRing } from "react-icons/bi";
import { IoIosArrowDown, IoIosShareAlt, IoMdSend } from "react-icons/io";
import { MdDownload } from "react-icons/md";
import { HiDotsHorizontal, HiOutlineDotsVertical } from "react-icons/hi";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import Livechat from "./Livechat";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const Watchpage = ({ viedio }) => {
  const[input,setInput]= useState("");
  const [searchparams] = useSearchParams();
  const viedioId = searchparams.get("v");
  const [singleviedio, setSingleviedio] = useState();
  const [channelDetails, setChannelDetails] = useState();
const dispatch = useDispatch();



  const fetchedviedio = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${viedioId}&regionCode=jp&key=${Google_Api_key}`
      );
      console.log(res?.data?.items[0]);
      setSingleviedio(res?.data?.items[0]);
      if (res?.data?.items[0]?.snippet?.channelId) {
        fetchChannelDetails(res.data.items[0].snippet.channelId);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchChannelDetails = async (channelId) => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${channelId}&key=${Google_Api_key}`
      );
      setChannelDetails(res?.data?.items[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchedviedio();
  }, []);
  const sendmessage =(()=>{
    dispatch(addMessage({name:"king",message:input}))
    setInput("");
  })
  const formatSubscriberCount = (count) => {
    if (!count) return "Subscribers";

    const num = parseInt(count);
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M subscribers";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K subscribers";
    } else {
      return num + " subscribers";
    }
  };

  return (
    <div className="flex mt-1 ml-1.5">
      <div>
        <iframe
          width="860"
          height="450"
          src={`https://www.youtube.com/embed/${viedioId}?&`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
        <h1 className="font-medium mt-2 text-lg">
          {singleviedio?.snippet?.title}
        </h1>
        <div className="flex justify-between">
          {/* left */}
          <div>
            <div className="flex space-x-4 items-center">
              <img
                src="http://localhost:5173/src/assets/profile.avif"
                className="w-8 rounded-full  h-8 object-cover"
              />
              <div>
                <h1>{singleviedio?.snippet?.channelTitle}</h1>
                <h2>
                  {formatSubscriberCount(
                    channelDetails?.statistics?.subscriberCount
                  )}
                </h2>
              </div>
              <div className="flex items-center space-x-2 border cursor-pointer bg-gray-200 p-1 rounded-2xl">
                <BiSolidBellRing size={20} />
                <h1>Subscribed</h1>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="items-center flex space-x-6">
            <div className="flex items-center p-1 bg-gray-100 border rounded-2xl space-x-1">
              <BiLike />
              <p>1.5k</p>
              <span className="mx-2 h-5 border-l border-gray-400"></span>
              <BiDislike />
            </div>
            <div className="flex items-center p-1 bg-gray-100 border rounded-2xl space-x-1">
              <IoIosShareAlt size={22} />
              <p>Share</p>
            </div>
            <div className="flex items-center p-1 bg-gray-100 border rounded-2xl space-x-1">
              <MdDownload size={22} />
              <p>Download</p>
            </div>
            <div className="flex items-center p-1 bg-gray-100 border rounded-2xl space-x-1">
              <HiDotsHorizontal size={22} />
            </div>
          </div>
        </div>
      </div>
      {/*page right */}
      <div className="ml-2 w-full rounded-lg h-fit border border-gray-300 p-4">
        <div className="flex  items-center cursor-pointer">
          <h1 className="sm:text-sm text-lg">Top Chart</h1>
          <HiOutlineDotsVertical className="text-black " />
        </div>
        <div className="overflow-y-auto h-[28rem]"><Livechat/></div>
        <div className="flex items-center justify-between  border-t p-2">
          <div className="space-y-2 flex ">
            <div>
              <img
                src="http://localhost:5173/src/assets/profile.avif"
                className="w-8 rounded-full h-8 object-cover"
              />
            </div>
            <div className="relative flex items-center    ml-2">
              <input
              onChange={(e)=>setInput(e.target.value)}
                type="text"
                value={input}
                placeholder="send message...."
                className="border-b border-gray-600 rounded-2xl w-full p-0.5 pr-10 outline-none"
                
              /> 

              <span className="absolute right-3">
                <IoMdSend onClick={sendmessage} size={25}/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchpage;
