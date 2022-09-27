import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import Header from "../../Components/Header/Header";
import "chart.js/auto";
import "./report-page.scss";
import { jsPDF } from "jspdf";
import { font } from "../../assets/fonts/pobeda-regular1-normal";
import html2canvas from "html2canvas";
import { useParams } from "react-router-dom";

export const ReportPage = () => {
  const params = useParams();
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

  const createPdf = () => {
    const canvas: any = document.getElementById("canvas");
    html2canvas(canvas).then(function (canvas) {
      const img = canvas.toDataURL("image/png");
      const doc = new jsPDF("p", "mm", "a4");

      doc.addFileToVFS("pobeda-regular1-normal.ttf", font);
      doc.addFont("pobeda-regular1-normal.ttf", "pobeda-regular1", "normal");
      doc.setFont("pobeda-regular1");
      doc.setFontSize(20);
      doc.text("Отчет за " + params.date, 10, 10);
      doc.text("Онкология!", 10, 20);
      doc.setFontSize(12);
      doc.setTextColor("#00a62e");
      doc.text("Низкий риск заболевания", 10, 25);
      doc.setTextColor("#000");
      doc.text(
        "Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа модели развития.",
        10,
        30
      );
      doc.addImage(img, 10, 30, 50, 50);
      doc.setFontSize(20);
      doc.text("Диабет!", 10, 90);
      doc.setFontSize(12);
      doc.setTextColor("#f24a4a");
      doc.text("Высокий риск заболевания", 10, 95);
      doc.setTextColor("#000");
      doc.text(
        "Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют от нас анализа модели развития.",
        10,
        100
      );
      doc.save("report__" + params.date + ".pdf");
    });
  };
  return (
    <div className={"report-page"}>
      <Header title={"Отчет"} />
      <div>
        <div className="report-page__title test123">Онкология</div>
        <div className="report-page__ok">Низкий риск заболевания</div>
        <div className="report-page__text">
          Не следует, однако забывать, что постоянный количественный рост и
          сфера нашей активности требуют от нас анализа модели развития.{" "}
        </div>
        <div>
          <Line id="canvas" data={data} />
        </div>
        <div className="report-page__title">Диабет</div>
        <div className="report-page__danger">Высокий риск заболевания</div>
        <div className="report-page__text">
          Не следует, однако забывать, что постоянный количественный рост и
          сфера нашей активности требуют от нас анализа модели развития.{" "}
        </div>
        <div
          onClick={createPdf}
          style={{ marginTop: "50px" }}
          className="report-page__pdf"
        >
          Скачать отчет в PDF
        </div>
      </div>
    </div>
  );
};

const Test = () => {
  return (
    <div className={"report-page"}>
      <div>
        <div className="report-page__title">Онкология</div>
        <div className="report-page__ok">Низкий риск заболевания</div>
        <div className="report-page__text">
          Не следует, однако забывать, что постоянный количественный рост и
          сфера нашей активности требуют от нас анализа модели развития.{" "}
        </div>
        <div></div>
        <div className="report-page__title">Диабет</div>
        <div className="report-page__danger">Высокий риск заболевания</div>
        <div className="report-page__text">
          Не следует, однако забывать, что постоянный количественный рост и
          сфера нашей активности требуют от нас анализа модели развития.{" "}
        </div>
      </div>
    </div>
  );
};
