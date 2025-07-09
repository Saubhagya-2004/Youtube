import React from "react";
import { Outlet } from "react-router-dom";
import Feed from "./Feed";

const Body = () => {
  return (
    <div className="flex-1">
      <Feed />
      <Outlet />
    </div>
  );
};

export default Body;
