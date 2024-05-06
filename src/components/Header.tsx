import { useState } from "react";
import Lilalogo from "../assets/LilaLogo.svg";

const headerTabs = [
  { name: "Market", id: 1 },
  { name: "Portfolio", id: 2 },
  { name: "Trade", id: 3 },
];
const Header = () => {
  const [selectedTab, setSelectedTab] = useState({
    name: "Market",
    id: 1,
  });
  return (
    <div className=" flex justify-between  flex-row px-2 py-2 h-[73px] rounded-[30px] bg-white">
      <div className="gap-2 flex items-center justify-center">
        <img src={Lilalogo} />
        <span className="flex items-center justify-center font-Montserrat font-normal text-xl">
          LILA FINANCE
        </span>
      </div>
      <div className="flex items-center">
        {headerTabs.map((tab, index) => {
          return (
            <div
              className="w-28 font-Montserrat font-normal text-lg relative justify-center text-center "
              onClick={() => {
                setSelectedTab(tab);
              }}
            >
              {tab.name}
              <div
                className={`h-[2px] bg-activeBrown absolute top-[49px] w-[${
                  tab.id == selectedTab?.id ? "112px" : "0px"
                }]`}
              ></div>
            </div>
          );
        })}
        <button className="bg-primaryPink text-activeBrown ont-Montserrat font-normal text-lg rounded-[30px] px-[32px] py-[10px]">
          Connect
        </button>
      </div>
    </div>
  );
};

export default Header;
