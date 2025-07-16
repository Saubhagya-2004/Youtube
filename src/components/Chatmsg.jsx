import React from "react";

const Chatmsg = ({item}) => {
  return (
    <div className="flex items-center">
      <div>
        <img
          src="http://localhost:5173/src/assets/profile.avif"
          className="w-4 rounded-full  h-4 object-cover"
        />
      </div>
      <div className="flex items-center">
        <h1 className="ml-2 font-bold text-sm">{item.name}</h1>
        <p className="my-2 p-2 text-sm">{item.message}</p>
      </div>
    </div>
  );
};

export default Chatmsg;
