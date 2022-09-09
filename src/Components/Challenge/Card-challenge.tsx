import React, { FC, useState } from "react";
import "./challenge.scss";
import { definitionColor } from "../../utils/common-functions";
import { ProgressBar } from "../Progress-bar/Progress-bar";
import { typesChallenge } from "../../types/enums";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ACTIVE_CHALLENGE_ROUTE } from "../../provider/constants-route";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../utils/hooks/redux-hooks";
import { setShowFirstChallengeInstruction } from "../../Redux/slice/visitedPagesSlice";

interface ICardChallenge {
  type: string;
  percent: number;
  id: number;
}

export const CardChallenge: FC<ICardChallenge> = ({ percent, type, id }) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const isFirstChallenge = useSelector(
    (state: any) => state.visitedPages.challengePage.challengeCount
  );
  const [startInstruction, setStartInstruction] = useState(0);

  const goToTask = () => {
    dispatch(setShowFirstChallengeInstruction(isFirstChallenge + 1));
    navigation(ACTIVE_CHALLENGE_ROUTE + "/" + id);
  };

  return (
    <>
      <Link to={ACTIVE_CHALLENGE_ROUTE + "/" + id} className={"card-challenge"}>
        <div className="card-challenge__container">
          <div style={startInstruction === 1 ? { opacity: 0.2 } : {}}>
            <div className="card-challenge__dots">
              <div className="card-challenge__dot" />
              <div className="card-challenge__dot" />
              <div className="card-challenge__dot" />
            </div>
            <div className="card-challenge__head">
              <div className="card-challenge__img">
                <img
                  src="https://a.d-cd.net/55199ads-1920.jpg"
                  alt="challenge-image"
                />
              </div>
              <div className="card-challenge__head-body">
                <div className={definitionColor(type, "card-challenge__type")}>
                  {type}
                </div>
                <div className="card-challenge__title">
                  Российский марафон “Зимние забавы”
                </div>
                <div className="card-challenge__sub-title">
                  Вы в команде “Hardcore”
                </div>
              </div>
            </div>
          </div>

          <div className="card-challenge__progress-bar">
            <ProgressBar percent={percent} type={typesChallenge.common} />
            <div className={"progress-bar__value"}>{percent}%</div>
          </div>
          <div className="card-challenge__data">
            <div className="card-challenge__days">
              12 <span>Дней</span>
            </div>
            <div className="card-challenge__days">
              200К <span>Шагов</span>
            </div>
            <div className="card-challenge__days">
              0/2 <span>Лекций</span>
            </div>
            <div className="card-challenge__days">
              1/2 <span>Заданий</span>
            </div>
          </div>
        </div>
      </Link>
      {isFirstChallenge === 1 && startInstruction === 0 && (
        <div className="card-challenge-first-instruction">
          <div>У вас появился первый активный челлендж</div>
          <div onClick={() => setStartInstruction(1)} className="_button-white">
            Да, супер!
          </div>
        </div>
      )}
      {startInstruction === 1 && (
        <div className="card-challenge-first-instruction">
          <div>
            Тут показан общий прогресс и сколько еще нужно пройти или выполнить
            заданий
          </div>
          <div onClick={() => setStartInstruction(2)} className="_button-white">
            Понятно
          </div>
        </div>
      )}
      {startInstruction === 2 && (
        <div className="card-challenge-first-instruction">
          <div>Супер! Перейдем к заданию</div>
          <div onClick={goToTask} className="_button-white">
            Перейти
          </div>
        </div>
      )}
    </>
  );
};
