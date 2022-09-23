import React from "react";
import { Line } from "react-chartjs-2";
import Header from "../../Components/Header/Header";
import "chart.js/auto";
import "./report-page.scss";

export const ReportPage = () => {
  const data = {
    labels: ["июн", "июл", "авг", "сен", "окт", "ноя"],
    datasets: [
      {
        label: "",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        borderColor: "#fff",
      },
    ],
  };
  return (
    <div className={"report-page"}>
      <Header title={"Отчет"} />
      <div>
        <div className="report-page__title">Онкология</div>
        <div className="report-page__ok">Низкий риск заболевания</div>
        <div className="report-page__text">
          Не следует, однако забывать, что постоянный количественный рост и
          сфера нашей активности требуют от нас анализа модели развития.{" "}
        </div>
        <div>
          <Line data={data} />
        </div>
        <div className="report-page__title">Диабет</div>
        <div className="report-page__danger">Высокий риск заболевания</div>
        <div className="report-page__text">
          Не следует, однако забывать, что постоянный количественный рост и
          сфера нашей активности требуют от нас анализа модели развития.{" "}
        </div>
        <div style={{ marginTop: "50px" }} className="report-page__pdf">
          Скачать отчет в PDF
        </div>
      </div>
    </div>
  );
};
