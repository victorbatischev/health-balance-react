import React, { useState } from "react";
import "./creating-challenge.scss";
import icon_reward from "../../assets/image/icon_reward.svg";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux-hooks";
import {
  distanceSelector,
  purposeTypeSelector,
  rewardSelector,
  setDistance,
  setPurposeType,
  setReward,
} from "../../Redux/slice/creatingChallengeSlice";
//import HealthCheckbox from "../HealthCheckbox/HealthCheckbox";

export const CreatingTargets = () => {
  const dispatch = useAppDispatch();

  const distance = useAppSelector(distanceSelector);
  const reward = useAppSelector(rewardSelector);

  const checkboxHandler = (val: string) => {
    dispatch(setPurposeType(val));
  };

  const minReward = 0;
  const maxReward = 200;
  const minDistance = 0;
  const maxDistance = 50;

  const handlerTargetRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //setTargetRangeValue(e.target.value);
    dispatch(setDistance(e.target.value));
  };

  const handlerRewardRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setRewardRangeValue(e.target.value);
    dispatch(setReward(e.target.value));
  };

  return (
    <div className={"targets"}>
      <div className="targets__top-block">
        <div className="targets__title creating-title">Цели</div>
        <div className="targets__sub-title creating-sub-title">Тип цели</div>
        <div className="targets__checkbox custom-checkbox">
          <input
            onChange={(e) => checkboxHandler(e.target.value)}
            type="checkbox"
            value="Бег"
            className={"custom-checkbox__checkbox"}
            id={"1"}
          />
          <label htmlFor="1">Бег</label>
          <input
            onChange={(e) => checkboxHandler(e.target.value)}
            value="Ходьба"
            type="checkbox"
            className={"custom-checkbox__checkbox"}
            id={"2"}
          />
          <label htmlFor="2">Ходьба</label>
        </div>
      </div>
      <div className="targets__block">
        <div className="targets__choice choice-target">
          <div className="choice-target__head">
            <div className="choice-target__sub-title creating-sub-title">
              Цель челленджа
            </div>
            <div className="choice-target__value creating-title">
              {distance} км
            </div>
          </div>
          <input
            min={minDistance}
            max={maxDistance}
            type="range"
            className={"choice-target__range "}
            value={distance}
            onChange={handlerTargetRange}
            style={{
              backgroundImage: `linear-gradient( to right, #F2994A, 
                        #F4C319 ${(100 * +distance) / maxDistance}%, 
                        #474747 ${(100 * +distance) / maxDistance}%)`,
            }}
          />
        </div>

        <div className="targets__title creating-title">Награда</div>

        <div className="targets__choice-target choice-target">
          <div className="choice-target__head">
            <div className="choice-target__sub-title creating-sub-title">
              Количество <img src={icon_reward} alt="icon reward" />
            </div>
            <div className="choice-target__value creating-title">{reward}</div>
          </div>
          <input
            min={minReward}
            max={maxReward}
            type="range"
            className={"choice-target__range green"}
            value={reward}
            onChange={handlerRewardRange}
            style={{
              backgroundImage: `linear-gradient( to right, #00A62E, 
                        #3CF470 ${(100 * +reward) / maxReward}%, 
                        #474747 ${(100 * +reward) / maxReward}% )`,
            }}
          />
        </div>
      </div>
    </div>
  );
};
