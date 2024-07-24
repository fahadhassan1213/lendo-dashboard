import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Utils } from "../../utils/chart";

const RiskScoreGraphCard = () => {
  const chartData = {
    labels: ["A - 45.7%", "B - 51.5%", "C - 23.2%", "D - 51.5%"],
    datasets: [
      {
        data: [45.7, 51.5, 23.2, 51.5],
        backgroundColor: Object.values(Utils.CHART_COLORS),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-10 border-[1px] border-light-gray rounded-[20px] p-7 w-full">
      <h1 className="w-[80%] text-2xl font-semibold text-darkblue">
        Excepted Risk Score Distribution
      </h1>
      <div className="flex justify-center h-[280px] w-full">
        <Doughnut
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "right",
                labels: {
                  usePointStyle: true,
                  pointStyle: "circle",
                  boxWidth: 10,
                  boxHeight: 10,
                },
              },
              title: {
                display: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default RiskScoreGraphCard;
