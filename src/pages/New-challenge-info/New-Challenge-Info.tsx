import React, { useState } from "react";
import "./new-challenge-info.scss";
import Header from "../../Components/Header/Header";
import { HeaderChallenge } from "../../Components/Active-challenge/Header-challenge";
import { ProgressBar } from "../../Components/Progress-bar/Progress-bar";
import { roles, typesChallenge } from "../../types/enums";
import icon_clock from "../../assets/image/Interesting/clock.svg";
import { TaskChallenge } from "../../Components/Challenge/Task-challenge";
import { RewardCount } from "../../Components/Reward/Reward-count";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  LECTURES_ROUTE,
  TEAM_SELECTION_ROUTE,
} from "../../provider/constants-route";
import { ListLeadersChallenge } from "../../Components/List-leaders-challenge/List-leaders-challenge";
import icon_edit from "../../assets/image/icon-edit.svg";
import { useSelector } from "react-redux";
import InstructionModal from "../../Components/Modal/InstructionModal";
import { useAppDispatch } from "../../utils/hooks/redux-hooks";
import { setStoreFirstChallenge } from "../../Redux/slice/visitedPagesSlice";

export const NewChallengeInfo = () => {
  const params = useParams();

  const itemsTask = [
    {
      title: "Обучающий материал",
      value: "50",
      id: 45633,
    },
    {
      title: "Обучающий материал",
      value: "4100",
      id: 23,
    },
    {
      title: "Обучающий материал",
      value: "va10lue",
      id: 4562333,
    },
    {
      title: "Обучающий материал",
      value: "va10lue",
      id: 235,
    },
  ];

  const itemsLeaders = [
    {
      reward: 40,
      place: 1,
      isYourCommand: true,
      avatar:
        "https://e7.pngegg.com/pngimages/36/880/png-clipart-avatar-series-wykop-pl-designer-graphic-artist-designer-face-cartoon.png",
      title: "Усейн Болт",
      isYou: false,
    },
    {
      reward: 40,
      place: 2,
      isYourCommand: false,
      avatar:
        "https://avatars.mds.yandex.net/i?id=3fd93707d9fb159c82e4a25dc15d9e2c-4885166-images-thumbs&n=13&exp=1",
      title: "Усейн Болт",
      isYou: true,
    },
  ];

  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const firstChallange = useSelector(
    (state: any) => state.visitedPages.newChallengeInfoPage.firstChallange
  );

  const [startInstruction, setStartInstruction] = useState(0);

  const goToTeam = () => {
    dispatch(setStoreFirstChallenge());
    navigation(TEAM_SELECTION_ROUTE + "/" + params.id);
  };

  return (
    <div className={"new-challenge-info"}>
      {startInstruction === 3 && <InstructionModal actionCallback={goToTeam} />}
      <Header title={"Челлендж"} />
      <div
        style={
          startInstruction === 1 || startInstruction === 2
            ? { opacity: 0.2 }
            : {}
        }
      >
        <div className="new-challenge-info__main">
          <HeaderChallenge />
        </div>
        <div className="new-challenge-info__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur
          adipiscing elit
        </div>
      </div>

      <div
        style={startInstruction === 2 ? { opacity: 0.2 } : {}}
        className="new-challenge-info__row"
      >
        <div className="new-challenge-info__data">
          <img
            className={"new-challenge-info__data-clock"}
            src={icon_clock}
            alt=""
          />
          15.01.22 - 01.03.22
        </div>
        <div className="new-challenge-info__reward">
          <div className="new-challenge-info__reward-text">Награда:</div>
          <RewardCount count={95} />
        </div>
      </div>
      {startInstruction === 1 && (
        <div
          style={{
            position: "absolute",
            width: "70%",
            zIndex: "6",
            marginTop: "-30px",
          }}
        >
          Здесь указана дата начала и конца челленджа, а так же ваша награда за
          выполнение.
          <div
            style={{ marginTop: "30px", width: "50%" }}
            onClick={() => setStartInstruction(2)}
            className="_button-white"
          >
            Понятно
          </div>
        </div>
      )}
      <div style={startInstruction === 1 ? { opacity: 0.2 } : {}}>
        <div className="new-challenge-info__title-block block-title">
          Задания
        </div>
        <div className="new-challenge-info__tasks">
          <TaskChallenge type={typesChallenge.common} tasks={itemsTask} />
        </div>
        {startInstruction === 2 && (
          <div
            style={{
              position: "absolute",
              width: "70%",
              zIndex: "6",
              marginTop: "20px",
            }}
          >
            Тут показанно что нужно сделать для завершения челленджа
            <div
              style={{ marginTop: "30px", width: "50%" }}
              onClick={() => setStartInstruction(3)}
              className="_button-white"
            >
              Понятно
            </div>
          </div>
        )}
        <div
          style={
            startInstruction === 2
              ? { marginTop: "20px", opacity: 0.2 }
              : { marginTop: "20px" }
          }
        >
          {firstChallange ? (
            <div
              onClick={() => setStartInstruction(1)}
              className="new-challenge-info__button _button-white"
            >
              Принять участие
            </div>
          ) : (
            <Link
              className="new-challenge-info__button _button-white"
              to={TEAM_SELECTION_ROUTE + "/" + params.id}
            >
              Принять участие
            </Link>
          )}
        </div>
      </div>

      <div
        style={
          startInstruction === 1 || startInstruction === 2
            ? { opacity: 0.2 }
            : {}
        }
      >
        <div className="new-challenge-info__title-block block-title">
          Лидеры челленджа
        </div>
        <ListLeadersChallenge items={itemsLeaders} role={roles.members} />
      </div>
    </div>
  );
};
