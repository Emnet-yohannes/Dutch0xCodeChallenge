import React from 'react';

const OnlineStatusIndicator = () => {
  return (
    <div className="flex items-center">
      <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
      <p className="text-[#3CAA2A] text-[14px]">Status</p>
    </div>
  );
};

export default OnlineStatusIndicator;