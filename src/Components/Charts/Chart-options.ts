import type { ChartArea } from "chart.js";

export const optionsChartBar: any = {
  responsive: true,
  plugins: {
    legend: {
      position: "none",
    },
  },
  scales: {
    xAxis: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#999999",
      },
    },
    y: {
      grid: {
        lineWidth: 0.5,
        color: "#404040",
        borderDash: [3],
      },
      position: "right",
      border: "none",
      ticks: {
        fontSize: 13,
        beginAtZero: true,
        color: "#DCDCDC",
        stepSize: 10000 / 3,
        callback: function (label: number) {
          return label === 0 ? "" : Math.floor(label / 1000) + "k";
        },
      },
    },
  },
};

export const getGradient = (
  ctx: any,
  chartArea: ChartArea,
  colorOne: string,
  colorTwo: string
) => {
  const gradientBg = ctx.createLinearGradient(
    0,
    chartArea.top,
    0,
    chartArea.bottom
  );
  gradientBg.addColorStop(0, colorOne);
  gradientBg.addColorStop(1, colorTwo);
  return gradientBg;
};
