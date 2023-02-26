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
    color: "#2EC62E",
    component: <NftManagement key={1} />,
    label: "Nft Management",
  },
  {
    color: "#FFFFFFCC",
    component: <FindHolders key={1} />,
    label: "Find Holders",
  },
  { color: "#2EC4DA", component: <AirDrop key={1} />, label: "Air Drop" },
  { color: "#A74CC9", component: <TradeIn key={1} />, label: "Trade-in" },
  { color: "#EF4FAD", component: <Sales key={1} />, label: "Sales" },
];
const Header = () => (
  <div>
    <div className="flex items-center py-[12px] space-x-[3%]">
      <div className="flex items-center w-[40%] space-x-[3%]">
        
          <Dutch0x className="w-[26%]"/>
        
        <button className="text-black  h-[20px]">DashBoard</button>
        <button className="text-black  h-[20px] ">Create</button>
        <div className="flex-col items-center pt-6">
        <button className="text-black h-[20px] ">MarketPlace</button>
        <h1 className="text-[#FF4800] text-[12px]">Coming soon</h1>
        </div>
        <button className="text-black  h-[20px] ">Learn</button>
      </div>
      <div className=" w-[41%] ">
        <SearchBar className="border-[1px] rounded-lg border-black" />
      </div>
      <div className="flex justify-evenly w-[20%] items-center">
        <div className="bg-[#3CAA2A33] px-1 py-[6px] rounded-md">
          <div>

          </div>
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
      <div className="flex justify-evenly space-x-2">
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
