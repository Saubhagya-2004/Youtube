import React from "react";

const viedioCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info || {};
  const { channelTitle, title, thumbnails } = snippet || {};
  const formatview = (count) => {
    if (!count) return 0;
    const num = parseInt(count);
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  return (
    <div className="p-2 m-3 shadow-2xl w-72 rounded-4xl">
      <img
        className="rounded-2xl object-cover"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />

      <div className="p-3">
        <h3 className="font-semibold text-gray-700 hover:text-blue-500 text-sm mb-2 cursor-pointer h-100%">
          {title}
        </h3>
        <div />
        <div className="flex flex-col space-y-1">
          <p className="text-gray-600 hover:text-gray-800 mt-4">
            {channelTitle}
          </p>
          <div className="flex items-center text-gray-500 text-xs">
            <span>{formatview(statistics?.viewCount)} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default viedioCard;
