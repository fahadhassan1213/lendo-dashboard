import React from "react";

const GeneralStatsCard = () => {
  return (
    <div className="flex items-center gap-10 border-[1px] border-light-gray rounded-[20px] p-7 w-full">
      <div className="flex flex-col gap-5 rounded-[20px] bg-primary text-white px-10 py-7">
        <p className="text-xl">Conservative</p>
        <div className="flex flex-col gap-2">
          <p className="text-4xl font-semibold">10-14%</p>
          <p className="font-thin">Interest Rate</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 py-5 w-full">
        <div className="flex gap-20 items-center">
          <div>
            <h1 className="font-semibold text-xl text-light-green">Active</h1>
            <p className="text-darkblue opacity-30">Status</p>
          </div>
          <div>
            <h1 className="font-semibold text-xl text-darkblue">1500 SAR</h1>
            <p className="text-darkblue opacity-30">Max. Investement</p>
          </div>
          <div>
            <h1 className="font-semibold text-xl text-darkblue">26</h1>
            <p className="text-darkblue opacity-30">Loans Funded</p>
          </div>
        </div>
        <div className="flex gap-20 items-center w-full">
          <p className="text-darkblue opacity-30">
            * Strategy started at 20th March 2021
          </p>
          <div className="flex gap-5">
            <button className="rounded-full bg-orange text-white border-0 outline-none py-4 w-[7rem]">
              Stop
            </button>
            <button className="rounded-full bg-white text-darkblue border-[1px] border-light-gray outline-none py-4 w-[12rem]">
              Change Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralStatsCard;
