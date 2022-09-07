import React, { FC, useState } from "react";
import { ITeam } from "../../types/interfaces";
import Modal from "../Modal/Modal";
import "./team-selection.scss";

interface ITeamSelection {
  teams: ITeam[];
  setTeam: Function;
  currentTeam: ITeam | undefined;
}

export const TeamSelection: FC<ITeamSelection> = ({
  teams,
  setTeam,
  currentTeam,
}) => {
  return (
    <div className={"team-selection"}>
      {teams.map((team) => {
        return team.id === currentTeam?.id ? (
          <MyTeamItem key={team.id} team={team} resetTeam={setTeam} />
        ) : (
          <TeamItem
            key={team.id}
            team={team}
            setTeam={setTeam}
            currentTeam={currentTeam}
          />
        );
      })}
    </div>
  );
};

interface ITeamItem {
  team: ITeam;
  setTeam: Function;
  currentTeam: ITeam | undefined;
}

const TeamItem: FC<ITeamItem> = ({ team, setTeam, currentTeam }) => {
  return (
    <div className="team-selection__item team-item">
      <div className="team-item__column">
        <div className="team-item__img">
          <img src="" alt="" />
        </div>
        <div className="team-item__title">{team.name}</div>
      </div>
      {currentTeam ? (
        <div className="team-item__join text-blue" style={{ color: "#545454" }}>
          Вступить
        </div>
      ) : (
        <div
          className="team-item__join text-blue"
          onClick={() => setTeam(team)}
        >
          Вступить
        </div>
      )}
    </div>
  );
};

interface IMyTeamItem {
  team: ITeam;
  resetTeam: Function;
}

const MyTeamItem: FC<IMyTeamItem> = ({ team, resetTeam }) => {
  const [quitTeamModal, setQuitTeamModal] = useState(false);
  const quitTeamHandler = () => {
    resetTeam(undefined);
  };
  return (
    <>
      {quitTeamModal && (
        <Modal
          closeCallback={setQuitTeamModal}
          actionCallback={quitTeamHandler}
        />
      )}
      <div className="team-selection__item team-item">
        <div className="team-item__column">
          <div className="team-item__img">
            <img src="" alt="" />
          </div>
          <div className="team-item__title">{team.name}</div>
        </div>
        <div
          onClick={() => setQuitTeamModal(true)}
          className="team-item__joined text-yellow"
        >
          Вы в команде <span />
        </div>
      </div>
    </>
  );
};
