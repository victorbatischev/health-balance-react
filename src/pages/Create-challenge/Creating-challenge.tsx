import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import { stageCreatingChallenge, stageRegistration } from "../../types/enums";
import { CreatingChallengeItem } from "../../Components/Creating-challenge/Creating-challenge-item";
import "./creating-challenge.scss";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../utils/hooks/redux-hooks";
import {
  descriptionSelector,
  distanceSelector,
  durationSelector,
  numberTeamsSelector,
  participantsTeamSelector,
  platformChallengeSelector,
  purposeTypeSelector,
  rewardSelector,
  titleChallengeSelector,
  typeChallengeSelector,
} from "../../Redux/slice/creatingChallengeSlice";

export const CreatingChallengePage = () => {
  const [order, setOrder] = useState<number>(0);

  console.log("creating challenge page render");
  const platform = useAppSelector(platformChallengeSelector);
  const typeChallange = useAppSelector(typeChallengeSelector);
  const purposeType = useAppSelector(purposeTypeSelector);
  const distance = useAppSelector(distanceSelector);
  const reward = useAppSelector(rewardSelector);
  const duration = useAppSelector(durationSelector);
  const title = useAppSelector(titleChallengeSelector);
  const description = useAppSelector(descriptionSelector);
  const teamNumbers = useAppSelector(numberTeamsSelector);
  const teamParticipants = useAppSelector(participantsTeamSelector);
  const nextOrederHandler = () => {
    if (order === 0 && !platform) {
      console.log("err");
      return false;
    }
    if (order === 1 && !typeChallange) {
      console.log("err");
      return false;
    }
    if (order === 2 && purposeType.length === 0) {
      console.log("err");
      return false;
    }
    if (order === 2 && distance === 0) {
      console.log("err");
      return false;
    }
    if (order === 2 && reward === 0) {
      console.log("err");
      return false;
    }
    if (order === 3 && duration.length === 0) {
      console.log("err");
      return false;
    }
    if (order === 4 && !title) {
      console.log("err");
      return false;
    }
    if (order === 5 && !description) {
      console.log("err");
      return false;
    }
    if (order === 6 && !teamNumbers) {
      console.log("err");
      return false;
    }
    if (order === 6 && !teamParticipants) {
      console.log("err");
      return false;
    }
    setOrder((prev) => prev + 1);
  };

  const renderCreatingChallengeItems = () => {
    switch (order) {
      case 0:
        return (
          <CreatingChallengeItem
            stage={stageCreatingChallenge.platform}
            order={order}
            setOrder={setOrder}
          />
        );
      case 1:
        return (
          <CreatingChallengeItem
            stage={stageCreatingChallenge.type}
            order={order}
            setOrder={setOrder}
          />
        );
      case 2:
        return (
          <CreatingChallengeItem
            stage={stageCreatingChallenge.target}
            order={order}
            setOrder={setOrder}
          />
        );
      case 3:
        return (
          <CreatingChallengeItem
            stage={stageCreatingChallenge.data}
            order={order}
            setOrder={setOrder}
          />
        );
      case 4:
        return (
          <CreatingChallengeItem
            stage={stageCreatingChallenge.title}
            order={order}
            setOrder={setOrder}
          />
        );
      case 5:
        return (
          <CreatingChallengeItem
            stage={stageCreatingChallenge.description}
            order={order}
            setOrder={setOrder}
          />
        );
      case 6:
        return (
          <CreatingChallengeItem
            stage={stageCreatingChallenge.teams}
            order={order}
            setOrder={setOrder}
          />
        );
      case 7:
        return (
          <CreatingChallengeItem
            stage={stageCreatingChallenge.finally}
            order={order}
            setOrder={setOrder}
          />
        );
    }
  };

  return (
    <div className={"creating-challenge-page"}>
      <Header title={"Создание челленджа"} />
      {renderCreatingChallengeItems()}
      <button
        className="creating-challenge-page__button _button-white"
        onClick={nextOrederHandler}
      >
        Далее
      </button>
    </div>
  );
};
