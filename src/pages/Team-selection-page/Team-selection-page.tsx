import React, { useState } from "react";
import "./team-selection-page.scss";
import { TeamSelection } from "../../Components/Team-selection/Team-selection";
import Header from "../../Components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { addChallange } from "../../Redux/slice/myChallangeSlice";
import { useAppDispatch } from "../../utils/hooks/redux-hooks";
import { setShowFirstChallengeInstruction } from "../../Redux/slice/visitedPagesSlice";

export const TeamSelectionPage = () => {
  const params = useParams();
  const teams = [
    {
      id: 0,
      name: "Hardcore",
    },
    {
      id: 1,
      name: "Chelsea",
    },
    {
      id: 2,
      name: "Liverpool",
    },
    {
      id: 3,
      name: "Arsenal",
    },
    {
      id: 4,
      name: "ManUtd",
    },
  ];
  const [currentTeam, setCurrentTeam] = useState();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isFirstChallenge = useSelector(
    (state: any) => state.visitedPages.challengePage.challengeCount
  );

  const joinChallengeHandler = () => {
    if (!currentTeam) {
      return false;
    }
    const newChallenge = {
      team: currentTeam,
      challangeId: Number(params.challangeId),
    };

    if (isFirstChallenge === 0 || isFirstChallenge === 1) {
      dispatch(setShowFirstChallengeInstruction(isFirstChallenge + 1));
    }
    dispatch(addChallange(newChallenge));
    navigate("/challenge");
  };

  return (
    <div className={"team-selection-page"}>
      <Header title={"Выбор команды"} />
      <div className="team-selection-page__title main-title">
        Вступите в команду
      </div>
      <div className="team-selection-page__sub-title">
        Информацию о команде уточняйте у куратора
      </div>
      <div className="team-selection-page__team">
        <TeamSelection
          teams={teams}
          setTeam={setCurrentTeam}
          currentTeam={currentTeam}
        />
      </div>
      {currentTeam ? (
        <button
          onClick={joinChallengeHandler}
          className="team-selection-page__button _button-white"
        >
          Готово
        </button>
      ) : (
        <button className="team-selection-page__button _button-white disabled">
          Готово
        </button>
      )}
    </div>
  );
};
