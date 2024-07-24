import React from "react";
import { Bar } from "react-chartjs-2";
import { Utils } from "../../utils/chart";
import { CircleHelp } from "lucide-react";

const InvestmentGraphCard = () => {
  const chartData = {
    labels: Utils.months(),
    datasets: [
      {
        label: "Spent",
        data: Utils.numbers(),
        backgroundColor: Utils.CHART_COLORS.primary,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
        label: "Expected",
        data: Utils.numbers(),
        backgroundColor: Utils.CHART_COLORS.secondary,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  const chartScales = {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        callback: function (value: string | number) {
          return `${value}k SAR`;
        },
      },
    },
  };

  return (
    <div className="flex flex-col justify-between gap-10 border-[1px] border-light-gray rounded-[20px] p-7 w-full">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-semibold text-darkblue">Invested</h1>
        <CircleHelp fill="lightgray" color="white" size={20} />
      </div>
      <div className="flex justify-center h-[250px] w-full">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            scales: chartScales,
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  usePointStyle: true,
                  pointStyle: "circle",
                  boxWidth: 5,
                  boxHeight: 5,
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

export default InvestmentGraphCard;
