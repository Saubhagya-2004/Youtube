import React from 'react';

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center mt-[100px]">
      {Array(12)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="p-2 m-3 w-72 animate-pulse">
            {/* Thumbnail Shimmer */}
            <div className="h-40 bg-gray-200 rounded-xl mb-3"></div>
            
            {/* Channel Info Shimmer */}
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-200"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                <div className="h-3 bg-gray-200 rounded w-3/5"></div>
                <div className="h-3 bg-gray-200 rounded w-2/5"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;