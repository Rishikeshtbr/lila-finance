import { useState } from "react";
import UpGrap from "../assets/UpGraph.svg";
import USDC from "../assets/USDC.svg";
import Dai from "../assets/Dai.svg";
import USDT from "../assets/USDT.svg";
import wETH from "../assets/wETH.svg";

interface AssetCardProps {
  assetName: string;
  precentage: string;
  isSelected: boolean;
  onClick: () => void;
}

const AssetImage: any = {
  USDC: USDC,
  DAI: Dai,
  USDT: USDT,
  wETH: wETH,
};

const AssetCard = ({
  assetName,
  precentage,
  isSelected,
  onClick,
}: AssetCardProps) => {
  return (
    <div
      className={`p-[20px] ${
        isSelected ? "bg-primaryPink border-black" : "border-borderLightGray"
      } rounded-xl w-[262px] border-[1px] h-[126px]`}
      onClick={onClick}
    >
      <div className="flex gap-4 border-b-[1px] border-dashed  border-borderDashedColor pb-4 mb-4">
        <img src={AssetImage[`${assetName}`]} />
        <div>
          <div>{assetName}</div>
          <div className="flex">
            <img src={UpGrap} />
            <div className="ml-2">{precentage}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="font-Montserrat font-semibold text-[14px]">AAVE V3</div>
        <div className="font-Montserrat font-normal text-[14px]">0.000000</div>
      </div>
    </div>
  );
};

export default AssetCard;
