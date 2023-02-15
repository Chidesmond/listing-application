import React from "react";
import { Hero } from "../Hero";

export const Listing = () => {
  return (
    <div className="border-solid border-2 border-orange-500 h-auto flex mt-4">
      <div className="w-4/12 border-solid border-2 border-sky-500">Image</div>
      <div className="w-8/12 border-solid border-2 border-zinc-500 py-2 px-2">
        <div className="text-primary text-sm font-medium">
          2020 Volvo XC40 D4R-Design AWD
        </div>
        <div className="my-3 mt-3">
          <span className="text-2xl font-semibold">R23,900</span>
        </div>
        <p className="text-xs mt-4">
          Description and stufm,mdmvl;jkvl;kl;vkp;k
        </p>
        <div className="flex text-xs mt-4 justify-between">
          <p className="">10 days ago</p>
          <p>View more details</p>
        </div>
      </div>
    </div>
  );
};
