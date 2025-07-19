import React, { useEffect, useState } from "react";
import { Google_Api_key, YOUTUBE_API } from "../utils/constant";
import VideoCard from "./viedioCard";
import Shimmer from "./Shimmer";
import { Link, useLocation } from "react-router-dom";
import Buttonlist from "./Buttonlist";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setHomeviedio } from "../utils/appSlice";

const Feed = () => {
  const { viedio: videos, category } = useSelector((state) => state.app);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();

  const getVideos = async () => {
    try {
      const response = await axios.get(YOUTUBE_API);
      dispatch(setHomeviedio(response.data.items));
    } catch (err) {
      setError(err.response?.data?.error?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchVideosByCategory = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${category}&type=video&key=${Google_Api_key}`
      );
      dispatch(setHomeviedio(res?.data?.items));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("Category changed to:", category);
    if (category === "All") {
      getVideos();
    } else {
      fetchVideosByCategory();
    }
  }, [category]);

  if (loading) return <Shimmer />;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <>
      {location.pathname === "/" && (
        <div className="fixed top-18 p-1 w-full z-10 bg-white">
          <Buttonlist />
        </div>
      )}
      <div className="flex flex-wrap justify-center mt-[100px]">
        {videos.map((video) => (
          <Link
            to={`/watch?v=${video.id}`}
            key={video.id?.videoId || video.id}
          >
            <VideoCard
              key={video.id?.videoId || video.id}
              info={video}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Feed;
