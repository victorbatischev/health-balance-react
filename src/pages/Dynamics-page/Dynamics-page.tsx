import React from "react";
import "./dynamics-page.scss";
import { CardIndex } from "../../Components/Health-index-result/Card-index";
import Header from "../../Components/Header/Header";
import { Bar } from "react-chartjs-2";
import { getGradient } from "../../Components/Charts/Chart-options";

export const DynamicsPage = () => {
  const labels = [
    {
      day: "Июнь",
      value: 18,
    },
    {
      day: "Июль",
      value: 25,
    },
    {
      day: "Авг",
      value: 22,
    },
    {
      day: "Снт",
      value: 19,
    },
    {
      day: "Окт",
      value: 33,
    },
    {
      day: "Ноя",
      value: 27,
    },
    {
      day: "Дек",
      value: 29,
    },
  ];

  const optionsChartBar: any = {
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
          stepSize: 18,
          callback: function (label: number) {
            return label === 0 ? "" : Math.floor(label);
          },
        },
      },
    },
  };

  const dataDay = {
    labels: labels.map((item) => item.day),
    datasets: [
      {
        data: labels.map((item) => item.value),
        //backgroundColor: '#F2994A',
        backgroundColor: function (context: any) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;

          return getGradient(ctx, chartArea, "#00A62E", "#3CF470");
        },
        borderRadius: 5,
      },
    ],
  };
  return (
    <div className={"dynamics-page"}>
      <Header title={"Динамика"} />
      <div className="dynamics-page__title title-17">Показатели вне нормы</div>
      <div className="dynamics-page__index">
        <div className="dynamics-page__index-item">
          <CardIndex />
        </div>
        <div className="dynamics-page__index-item">
          <CardIndex />
        </div>
        <div className="dynamics-page__index-item">
          <CardIndex />
        </div>
      </div>
      <div className="dynamics-page__main-title main-title">Динамика</div>
      <div className="dynamics-page-bar-scroll">
        <div className="dynamics-page-bar__wrapper">
          <div>Биологический возраст</div>
          <Bar options={optionsChartBar} data={dataDay} />
          <div className="dynamics-page-bar__footer">
            <div>Нет результатов</div>
            <div>Пройдите тестирование</div>
          </div>
        </div>
        <div className="dynamics-page-bar__wrapper">
          <div>Биологический возраст</div>
          <Bar options={optionsChartBar} data={dataDay} />
          <div className="dynamics-page-bar__footer">
            <div>Нет результатов</div>
            <div>Пройдите тестирование</div>
          </div>
        </div>
        <div className="dynamics-page-bar__wrapper">
          <div>Биологический возраст</div>
          <Bar options={optionsChartBar} data={dataDay} />
          <div className="dynamics-page-bar__footer">
            <div>Нет результатов</div>
            <div>Пройдите тестирование</div>
          </div>
        </div>
      </div>
    </div>
  );
};
