import SearchBar from "../SearchBar/SearchBar";
import Dutch0x from "../icons/Dutch0x";
import Alert from "../icons/Alert";
import User from "../icons/User";
import Wallet from "../icons/Wallet";
import NavOption from "../NavOption/NavOption";
import NftManagement from "../icons/NftManagement";
import FindHolders from "../icons/FindHolders";
import AirDrop from "../icons/AirDrop";
import TradeIn from "../icons/TradeIn";
import Sales from "../icons/Sales";
import OnlineStatusIndicator from "../OnlineStatusIndicator/OnlineStatusIndicator";
const navOptions = [
  {
    color: "#c0eec0",
    component: <NftManagement key={1} />,
    label: "Nft Management",
  },
  {
    color: "#fdf7d5",
    component: <FindHolders key={1} />,
    label: "Find Holders",
  },
  { color: "#d5f3f8", component: <AirDrop key={1} />, label: "Air Drop" },
  { color: "#d5f3f8", component: <TradeIn key={1} />, label: "Trade-in" },
  { color: "#eddbf4", component: <Sales key={1} />, label: "Sales" },
];
const Header = () => (
  <div>
    <div className="flex items-center py-[12px] space-x-[1%]">
      <div className="flex items-center w-[40%] space-x-[3%]">
        <Dutch0x className="w-[26%]" />
        <div>
          <button className="text-black  h-[20px] pt-4 text-[16px] font-bold">DashBoard</button>
          <div className="w-full flex justify-center pt-1">
            <span className="flex justify-center h-2 w-2 rounded-full bg-[#FF4800] mr-2"></span>
          </div>
        </div>
        <button className="text-black text-[16px] opacity-60 h-[20px] ">Create</button>
        <div className="flex-col items-center pt-6">
          <button className="text-black text-[16px] opacity-60  h-[20px] ">MarketPlace</button>
          <h1 className="text-[#FF4800] text-[12px] ">Coming soon</h1>
        </div>
        <button className="text-black text-[16px] opacity-60  h-[20px] ">Learn</button>
      </div>
      <div className=" w-[41%] ">
        <SearchBar className="border-[1px] rounded-lg border-black" />
      </div>
      <div className="flex justify-around w-[20%] items-center">
        <div className="bg-[#3CAA2A33] px-2 py-2 rounded-md">
          <div className="flex items-center justify-around">
            <OnlineStatusIndicator />
          </div>
        </div>
        <Alert className="w-4 fill-current text-off-white" />
        <Wallet className="w-4 fill-current text-off-white" />
        <User className="w-4 fill-current text-off-white" />
      </div>
    </div>

    <div>
      <div className="flex justify-evenly space-x-2 !bg-white">
        {navOptions.map((data, index) => (
          <NavOption
            key={index}
            backgroundColor={data?.color}
            icon={data?.component}
            label={data?.label}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Header;
