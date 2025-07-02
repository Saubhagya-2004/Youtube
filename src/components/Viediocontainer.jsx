import React, { useState, useEffect } from 'react';
import { YOUTUBE_API } from '../utils/constant';
import VideoCard from './ViedioCard';
import Shimmer from './Shimmer'; // Recommended to add a loading state
import { useLocation } from 'react-router-dom';
import Buttonlist from './Buttonlist';
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const location = useLocation()
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_API);
      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }
      const json = await response.json();
      setVideos(json.items);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
      {videos.map((video,key ) => (
        <VideoCard 
          key={video.id?.videoId || video.id} 
          info={video}
        />
      ))}
    </div>
    </>
  );
};

export default VideoContainer;