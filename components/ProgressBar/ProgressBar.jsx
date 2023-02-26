import react from "react";
const ProgressBar=({ value, maxValue })=> {
    return (
      <div className="relative pt-1">
        <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-lg w-[600px] bg-gray-200">
          <div style={{ width: `${(value / maxValue) * 100}%` }} className="bg-gradient-to-r from-[#FF4800] to-[#ff2400] flex flex-col text-center whitespace-nowrap text-white justify-center"></div>
        </div>
      </div>
    );
  }
export default ProgressBar;