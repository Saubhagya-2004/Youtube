export const Google_Api_key = import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_API = 
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=in&key=${Google_Api_key}`;
  