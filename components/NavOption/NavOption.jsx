import React from "react";

const  NavOption = ({ backgroundColor, icon, label }) => {
  return (
    <div className={` w-full h-[209px] `}>
      <div
        className={` w-full h-[151px] flex justify-center rounded-lg items-center `}
        style={{ backgroundColor: `${backgroundColor}`, opacity: "80%" }}
      >
        {icon}
      </div>
      <div className="flex h-[24px] justify-center font-bold text-[16px] pt-2 pb-6">
        {label}
      </div>
    </div>
  );
};

export default NavOption;
