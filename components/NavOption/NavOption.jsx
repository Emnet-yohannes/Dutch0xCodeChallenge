import React from "react";

const NavOption = ({ backgroundColor , icon , label }) => {
  return (
    <div className={` w-full border-2 rounded-md h-[151px] `}>
      <div
        className={` w-full h-full flex justify-center items-center `}
        style={{backgroundColor:`${backgroundColor}`, opacity:"80%"}}
      >
        {icon}

      </div>
      <div className="flex justify-center font-bold text-[16px] pt-2 pb-6">
        {label}
      </div>
    </div>
  );
};

export default NavOption;
