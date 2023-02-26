import react from "react";
const ProgressBar=({ value, maxValue })=> {
    return (
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div style={{ width: `${(value / maxValue) * 100}%` }} className="bg-[#FF4800] flex flex-col text-center whitespace-nowrap text-white justify-center"></div>
        </div>
      </div>
    );
  }
export default ProgressBar;