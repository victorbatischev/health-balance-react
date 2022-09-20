import React from "react";
import "./health-index-result.scss";
import { QUESTIONNAIRE_ROUTE } from "../../provider/constants-route";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../utils/hooks/redux-hooks";
import { resetIndexPageAnswer } from "../../Redux/slice/visitedPagesSlice";

export const Retesting = () => {
  const dispatch = useAppDispatch();
  const resetTestResult = () => {
    dispatch(resetIndexPageAnswer());
  };
  return (
    <div className={"retesting"}>
      <div className="retesting__text">
        Индексы устарели
        <span>Пройдите тестирование</span>
      </div>
      <div onClick={resetTestResult} className="retesting__link">
        Тестирвоание
      </div>
    </div>
  );
};
