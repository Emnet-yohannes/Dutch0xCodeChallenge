import React from "react";
import RightArrow from "../icons/RightArrow";
const OverviewBox = ({ title, data }) => {
  return (
    <div className="border-2 rounded-lg px-6 py-2.5 space-y-4 bg-white">
      {title && (
        <div className="text-black text-[20px] font-semibold "> {title} </div>
      )}
      {data.map((overview) => (
        <div className="flex justify-between text-[#00000099] text-[16px]">
          <div>{overview?.item}</div>
          <div className="flex items-center space-x-3 ">
            <div>{overview?.value}</div>
            <RightArrow />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewBox;
