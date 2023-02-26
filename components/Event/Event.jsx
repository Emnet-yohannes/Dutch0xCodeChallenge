import React from "react";
import Image from "next/image";
import ManureNft from "../../public/images/manureNft.png";
import waterNft from "../../public/images/waterNft.png";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";
import Clock from "../icons/Clock";
import Occasion from "../icons/Occasion";

const Event = ({
  date,
  Name,
  successTransaction,
  processingTransaction,
  failedTransaction,
  progress,
  Nft,
  occasion
}) => {
  return (
    <div className="flex justify-between py-4 space-y bg-white border-[1px] rounded-lg">
      <div className="space-y-2">
      <div className="flex space-x-2">
        {/* <CircularProgressBar progress={1}  /> */}
        <div className="bg-[#3CAA2A]  pl-4 pr-1 rounded-r-md text-[12px] font-bold text-white"> 

        AirDrop
        </div>
        <div className="flex items-center space-x-2">
            <div className="flex items-center bg-[#0000001A] space-x-2">
                <Occasion />
                <h1 className="text-[14] font-bold">
                {occasion}
                </h1>
            </div>
            <div className="item-center">
                <Clock className="flex item-center"/>
            </div>
        <div className="flex items-center space-x-2">
            <div className="flex text-[#000000B2] font-bold text-[14px]">
            Started : 
            </div>
            <div className="text-[#000000B2] text-[14]">

            {date}</div>
            </div>
        </div>
      </div>
        <div className="px-4 space-y-3">
          <div>🍎🍌🍍The Fruit Salad Game🍆🥦🥕</div>
          <div className="flex items-center">
            <h1 className="text-[30px] font-bold text-black">{Name}</h1>
            <h1> &nbsp; x 100</h1>
          </div>
          <div className="flex">
            Wallet Transactions:
            
            <div className="text-[14px] font-bold flex"> &nbsp; {successTransaction} &nbsp; <h1 className="font-normal">success</h1></div>
            <div className="text-[14px] font-bold flex">&nbsp; {processingTransaction} &nbsp;  <h1 className="font-normal">processing</h1></div>
            <div className="text-[14px] font-bold flex"> &nbsp; {failedTransaction} &nbsp;  <h1 className="font-normal">failed</h1></div>
          </div>
          <div>
            <ProgressBar maxValue={100} value={progress} />
          </div>
          <div className="flex space-x-4">
            <button className="border-2 bg-black rounded-md border-black p-2 text-white">
              More Detail
            </button>
            {progress < 100 ? (
              <div>
                <button className="border-[1px] p-2 rounded-md border-black">
                  cancel
                </button>
                <input
                  type="checkbox"
                  id="emailReport"
                  name="emailReport"
                  value="report"
                  className="ml-2 accent-black"
                />
                <label for="emailReport" className="text-[16px]"> Receive report on email</label>
                <br></br>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div>
        <Image src={Nft} alt="nft" />
      </div>
    </div>
  );
};

export default Event;
