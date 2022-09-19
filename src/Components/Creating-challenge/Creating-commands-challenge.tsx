import React from "react";
import {
  numberTeamsSelector,
  participantsTeamSelector,
  setNumberTeams,
  setParticipantsTeam,
} from "../../Redux/slice/creatingChallengeSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux-hooks";
import HealthSelect from "../HealthSelect/HealthSelect";
import "./creating-challenge.scss";

const teams = [{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }];
const participants = [{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }];

export const CreatingCommandsChallenge = () => {
  const dispatch = useAppDispatch();

  const teamNumbers = useAppSelector(numberTeamsSelector);
  const teamParticipants = useAppSelector(participantsTeamSelector);

  const changeTeamNumberHandler = (val: number) => {
    dispatch(setNumberTeams(val));
  };
  const changeTeamParticipantHandler = (val: number) => {
    dispatch(setParticipantsTeam(val));
  };

  return (
    <div className={"creating-commands-challenge"}>
      <div className="creating-commands-challenge__title main-title">
        Команды
      </div>

      <HealthSelect
        placeholder="Количество команд"
        options={teams}
        selectValue={teamNumbers}
        handleChange={changeTeamNumberHandler}
      />
      <div style={{ height: "20px" }}></div>
      <HealthSelect
        placeholder="Участников на команду"
        options={participants}
        selectValue={teamParticipants}
        handleChange={changeTeamParticipantHandler}
      />
    </div>
  );
};
