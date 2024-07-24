"use client";

import { useState } from "react";
import { Chart, ArcElement, Legend, Tooltip } from "chart.js/auto";
import {
  GeneralStatsCard,
  InvestmentGraphCard,
  RiskScoreGraphCard,
} from "./components/auto-invest";

Chart.register(ArcElement, Legend, Tooltip);

export default function Home() {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="p-16 h-full overflow-auto">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-[1.7rem] font-semibold">Auto Investment</h1>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isToggle}
            className="sr-only peer"
            onChange={(e) => setIsToggle(e.target.checked)}
          />
          <span className="me-5 font-medium dark:text-gray-300">
            <span className={isToggle ? "text-light-green" : "text-gray-500"}>
              {isToggle ? "Active" : "Disabled"}
            </span>
          </span>
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-light-green"></div>
        </label>
      </div>
      <div className="flex flex-col gap-10">
        <GeneralStatsCard />
        <div className="flex gap-10">
          <InvestmentGraphCard />
          <RiskScoreGraphCard />
        </div>
      </div>
    </div>
  );
}
