import React from "react";

const Button = ({name}) => {
  return <div>
    <button className="bg-gray-700 rounded-md text-white px-4  m-1 flex ">{name}</button>
  </div>;
};

export default Button;
