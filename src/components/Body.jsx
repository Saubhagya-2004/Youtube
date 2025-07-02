import React from "react";
import VideoContainer from "./ViedioContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex-1">
      <VideoContainer />
      <Outlet />
    </div>
  );
};

export default Body;
