import { useState } from "react";
import Header from "../components/Header";
import { Tab, Tabs } from "../components/Tabs";
import AssetCard from "../components/AssetCard";
interface MyComponentProps {
  heading: string;
  value: string;
}

const MarketPage = () => {
  const [selectedAsset, setSelectedAsset] = useState({
    id: 1,
    name: "USDC",
    yield: "4.98% - 9.89%",
  });
  const PinkDetailsComponent: React.FC<MyComponentProps> = ({
    heading,
    value,
  }) => (
    <div className="flex w-[277px] justify-between">
      <div className="font-Montserrat font-bold text-[16px]">{heading}</div>
      <div className="font-Montserrat font-normal text-[16px]">{value}</div>
    </div>
  );
  const AssetData = [
    {
      id: 1,
      name: "USDC",
      yield: "4.98% - 9.89%",
    },
    {
      id: 2,
      name: "DAI",
      yield: "4.98% - 9.89%",
    },
    {
      id: 3,
      name: "USDT",
      yield: "4.98% - 9.89%",
    },
    {
      id: 4,
      name: "USDC",
      yield: "4.98% - 9.89%",
    },
    {
      id: 5,
      name: "wETH",
      yield: "4.98% - 9.89%",
    },
    {
      id: 6,
      name: "wETH",
      yield: "4.98% - 9.89%",
    },
    {
      id: 7,
      name: "USDC",
      yield: "4.98% - 9.89%",
    },
    {
      id: 8,
      name: "USDC",
      yield: "4.98% - 9.89%",
    },
    {
      id: 9,
      name: "USDC",
      yield: "4.98% - 9.89%",
    },
    {
      id: 10,
      name: "USDC",
      yield: "4.98% - 9.89%",
    },
    {
      id: 11,
      name: "USDC",
      yield: "4.98% - 9.89%",
    },
    {
      id: 12,
      name: "USDC",
      yield: "4.98% - 9.89%",
    },
    {
      id: 13,
      name: "DAI",
      yield: "4.98% - 9.89%",
    },
    {
      id: 14,
      name: "USDC",
      yield: "4.98% - 9.89%",
    },
    {
      id: 15,
      name: "DAI",
      yield: "4.98% - 9.89%",
    },
  ];
  return (
    <div>
      <div className="flex justify-center">
        <div className="px-[50px] bg-primaryPink pt-3 pb-[26px] mb-[30px] w-[1300px] rounded-[10px]">
          <Header />
          <div className="mt-[26px]">
            <div className="pb-[27px]">Market</div>
            <div>
              <div className=" flex gap-24">
                <PinkDetailsComponent heading={"Asset"} value={"USDC"} />
                <PinkDetailsComponent
                  heading={"Yield"}
                  value={"4.98 - 9.89%"}
                />
                <PinkDetailsComponent heading={"Maturity"} value={"0 Months"} />
              </div>
              <div className=" flex gap-24">
                <PinkDetailsComponent heading={"Protocol"} value={"AAVE V3"} />
                <PinkDetailsComponent
                  heading={"Deposit"}
                  value={"000,000.000"}
                />
                <PinkDetailsComponent heading={"Date"} value={"XXX XX, XXXX"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Tabs>
          <Tab label={"Asset and Protocol"}>
            <div className="flex flex-wrap max-w-[1117px] gap-4 border-y-[1px] border-dashed border-black h-[410px] overflow-scroll">
              {AssetData.map((asset) => {
                return (
                  <AssetCard
                    assetName={asset.name}
                    precentage={asset.yield}
                    onClick={() => setSelectedAsset(asset)}
                    isSelected={asset.id === selectedAsset?.id}
                  />
                );
              })}
            </div>
            <div className="flex gap-[37px] justify-center mt-[43px]">
              <button className="w-[305px] h-[46px] border-[1px] rounded-full text-disabledText">
                Back
              </button>
              <button className="w-[305px] h-[46px] border-[1px] rounded-full text-disabledText">
                Select
              </button>
            </div>
          </Tab>
          <Tab label={"Maturity, Yield, and Deposit"}>
            <div>Comming Soon</div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default MarketPage;
