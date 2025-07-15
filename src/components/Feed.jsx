import React, { useState, useEffect } from 'react';
import { YOUTUBE_API } from '../utils/constant';
import VideoCard from './viedioCard';
import Shimmer from './Shimmer';
import { Link, useLocation } from 'react-router-dom';
import Buttonlist from './Buttonlist';
import axios from 'axios';

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  const getVideos = async () => {
    try {
      const response = await axios.get(YOUTUBE_API);
      
      // With axios, you don't need response.ok or response.json()
      // The data is directly available in response.data
      // console.log(response.data);
      setVideos(response.data.items);
    } catch (err) {
      // Axios throws errors for HTTP error status codes
      setError(err.response?.data?.error?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  if (loading) return <Shimmer />;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <>
      {location.pathname === "/" && (
        <div className="fixed top-18 p-1 w-full z-10 bg-white">
          <Buttonlist />
        </div>
      )}
      <div className='flex flex-wrap justify-center mt-[100px]'>
        {videos.map((video) => {
          // console.log(video.id);
          
          return(
          <Link to={`/watch?v=${video.id}`} key={video.id?.videoId || video.id}>
            <VideoCard
              key={video.id?.videoId || video.id}
              info={video}
            />
          </Link>
          
          )  
})}
          
          
      </div>
    </>
  );
};

export default Feed;