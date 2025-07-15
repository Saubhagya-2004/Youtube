import React, { useEffect, useState } from "react";
import axios from "axios";
import { Google_Api_key } from "../utils/constant";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info || {};
  const { channelTitle, title, thumbnails, channelId } = snippet || {};
  const [channelIcon, setChannelIcon] = useState("");

  useEffect(() => {
    const fetchChannelIcon = async () => {
      try {
        const res = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${Google_Api_key}`
        );
        // console.log(res);
        
        const icon = res.data?.items[0]?.snippet?.thumbnails?.default?.url;
        if (icon) setChannelIcon(icon);
      } catch (error) {
        console.error("Error fetching channel icon:", error);
      }
    };

     fetchChannelIcon();
  }, [channelId]);

  const formatViews = (views) => {
    if (!views) return "0";
    const num = parseInt(views);
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <div className="p-2 m-5 w-80 rounded-xl shadow-sm hover:shadow-md">
      <img
        className="rounded-lg w-full h-40 object-cover"
        src={thumbnails?.medium?.url}
        alt={title}
      />
      <div className="p-2">
        <h3 className="font-medium text-sm line-clamp-2">{title}</h3>
        <div className="flex items-center mt-2">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={channelIcon || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMJTHo3IkHitDvs7knlCZHMIqDEImf_yYm2Q&s"}
            alt={channelTitle}
          />
          <div>
            <p className="text-sm text-gray-600">{channelTitle}</p>
            <p className="text-xs text-gray-500">
              {formatViews(statistics?.viewCount)} views
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;