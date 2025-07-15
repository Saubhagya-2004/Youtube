import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Google_Api_key } from "../utils/constant";

const Watchpage = ({ viedio }) => {
  const [searchparams] = useSearchParams();
  const viedioId = searchparams.get("v");
  const [singleviedio, setSingleviedio] = useState();

  const fetchedviedio = async () => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${viedioId}&regionCode=jp&key=${Google_Api_key}`);
      console.log(res);
      
    } catch (err) {
      console.log(err);
      
    }
  };
  useEffect(()=>{
    fetchedviedio()
  },[])
  return (
    <div className="flex mt-1">
      <div>
        <iframe
          width="860"
          height="450"
          src={`https://www.youtube.com/embed/${viedioId}?si=zePkd6DqDR4IDXmQ`}
          title="YouTube video player"
         
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         
          
        ></iframe>
        
      </div>
      <div></div>
    </div>
  );
};

export default Watchpage;
