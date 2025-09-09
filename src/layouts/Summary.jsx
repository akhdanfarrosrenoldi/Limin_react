import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import sourceData from "../data/sourceData.json";
import yardStay from "../data/yardStay.json";
import statusData from "../data/statusData.json";
const Summary = () => {
  return (
    <>
      <div class="ml-32 w-full -mt-25">
        <div class="p-12 ">
          <div class="my-4 text-2xl font-bold">
            <h1>Cost Summary</h1>
          </div>
          <div class="grid grid-cols-4 gap-4 mb-4">
            <div class="flex flex-col justify-center rounded-sm border bg-gray-50 h-24">
              <p class="text-gray-500 px-3">Budget</p>
              <p class="px-3 font-bold">200,000$</p>{" "}
            </div>
            <div class="flex flex-col justify-center rounded-sm border bg-gray-50 h-24">
              <p class="text-gray-500 px-3">Yard Estimates</p>
              <p class="px-3 font-bold"> 300$</p>{" "}
            </div>
            <div class="flex flex-col justify-center rounded-sm border bg-gray-50 h-24">
              <p class="text-gray-500 px-3">Owner Estimates</p>
              <p class="px-3 font-bold">500$</p>{" "}
            </div>
            <div class="flex flex-col justify-center rounded-sm border bg-gray-50 h-24">
              <p class="text-gray-500 px-3">Total Estimates</p>
              <p class="px-3 font-bold">50,000$</p>{" "}
            </div>
          </div>

          <div class="grid grid-cols-4 gap-4 mb-4">
            <div class="flex flex-col justify-center rounded-sm border bg-gray-50 h-24">
              <p class="text-gray-500 px-3">Actual Yard Costs</p>
              <p class="px-3 font-bold">400$</p>{" "}
            </div>
            <div class="flex flex-col justify-center rounded-sm border bg-gray-50 h-24">
              <p class="text-gray-500 px-3">Actual Owner Costs</p>
              <p class="px-3 font-bold">300$</p>{" "}
            </div>
            <div class="flex flex-col justify-center rounded-sm border bg-gray-50 h-24">
              <p class="text-gray-500 px-3">Total Cost</p>
              <p class="px-3 font-bold">60,000$</p>{" "}
            </div>
            <div class="flex flex-col justify-center rounded-sm border bg-gray-50 h-24">
              <p class="text-gray-500 px-3">Variance</p>
              <p class="px-3 font-bold">500.</p>{" "}
            </div>
          </div>

          <div>
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div class="flex items-center justify-center rounded-sm h-100 border">
                <Doughnut
                  data={{
                    labels: ["Open", "In Progress", "On Hold", "Complete", ""],
                    datasets: [
                      {
                        label: "Count",
                        data: statusData.map((data) => data.value),
                        backgroundColor: [
                          "rgba(255, 99, 132)",
                          "rgba(54, 162, 235)",
                          "rgba(255, 206, 86)",
                          "rgba(704, 162, 235)",
                          "rgba(15, 206, 86)",
                        ],
                        borderRadius: 5,
                      },
                    ],
                  }}
                />{" "}
              </div>

              <div class="flex items-center justify-center rounded-sm border h-100">
                <Doughnut
                  data={{
                    labels: ["In Dock", "Repair", ""],
                    datasets: [
                      {
                        label: "Count",
                        data: yardStay.map((data) => data.value),
                        backgroundColor: [
                          "rgba(255, 99, 132)",
                          "rgba(54, 162, 235)",
                          "rgba(255, 206, 86)",
                        ],
                        borderRadius: 5,
                        weight: 1,
                      },
                    ],
                  }}
                />
              </div>
            </div>

            <div class="flex items-center justify-center h-128 mb-4 rounded-sm border">
              <Bar
                data={{
                  labels: ["Open", "In Progress", "On Hold", "Complete", ""],
                  datasets: [
                    {
                      label: "Count",
                      data: sourceData.map((data) => data.value),
                      backgroundColor: [
                        "rgba(255, 99, 132)",
                        "rgba(54, 162, 235)",
                        "rgba(255, 206, 86)",
                      ],
                      borderRadius: 5,
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
