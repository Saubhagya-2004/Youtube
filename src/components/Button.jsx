import axios from "axios";
import React, { useEffect } from "react";
import { Google_Api_key } from "../utils/constant";
import { setCategory } from "../utils/appSlice";
import { useDispatch } from "react-redux";
const Button = ({ name, active, viediotag }) => {
  // const dispatch= useDispatch();
  // const handleClick = () => {
  //   setActive(name);
  // };
//  const viediotag = (tag) => {
//   if (active != tag) {
//     dispatch(setCategory(tag));
//     setActive(tag);
//   }
// };
  return (
   <div>
      <button
        onClick={() => viediotag(name)}
        className={`${
          active === name ? "bg-gray-900" : "bg-slate-500"
        } rounded-md text-white px-4 py-1 m-1 flex cursor-pointer`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
