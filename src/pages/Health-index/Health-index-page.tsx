import React from "react";
import { Navigation } from "../../Components/Navigation/Navigation";
import "./health-index.scss";
import { Link } from "react-router-dom";
import { QUESTIONNAIRE_ROUTE } from "../../provider/constants-route";
import chart from "../../assets/image/Static-chart.png";
import { useSelector } from "react-redux";
import { HealthIndexResults } from "../Health-index-results/Health-index-results";

export const HealthIndexPage = () => {
  const answers = useSelector(
    (state: any) => state.visitedPages.indexPage.answers
  );
  console.log("answers", answers);

  return (
    <>
      {answers.length === 0 && <StartQuestionaire />}
      {answers.length < 10 && <ContinueQuestionaire />}
      {answers.length === 10 && <HealthIndexResults />}
    </>
  );
};

const StartQuestionaire = () => {
  return (
    <div className={"health-index"}>
      <Navigation />
      <div className="health-index__body">
        <Link to={QUESTIONNAIRE_ROUTE} className="health-index__image">
          <img src={chart} alt="" />
        </Link>
        <div className="health-index__title main-title">
          Индексы появятся после прохождения тестирования
        </div>
        <div className="health-index__text">
          Результаты сохраняются, проходите опрос в любое удобное время
        </div>
      </div>

      <Link
        to={QUESTIONNAIRE_ROUTE}
        className="health-index__button _button-dark"
      >
        Пройти тестирование
      </Link>
    </div>
  );
};

const ContinueQuestionaire = () => {
  return (
    <div className={"health-index"}>
      <Link
        to={QUESTIONNAIRE_ROUTE}
        className="health-index__button _button-dark"
      >
        Продолжить тестирование
      </Link>
    </div>
  );
};
