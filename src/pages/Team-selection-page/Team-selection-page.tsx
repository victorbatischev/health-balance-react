import React, { useState } from "react";
import "./team-selection-page.scss";
import { TeamSelection } from "../../Components/Team-selection/Team-selection";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router-dom";

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
        <button className="team-selection-page__button _button-white">
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
