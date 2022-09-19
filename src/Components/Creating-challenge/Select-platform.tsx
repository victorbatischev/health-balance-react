import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  platformChallengeSelector,
  setPlatform,
} from "../../Redux/slice/creatingChallengeSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux-hooks";
import HealthSelect from "../HealthSelect/HealthSelect";
import "./creating-challenge.scss";

const testPlatformData = [
  {
    id: 0,
    name: "first platform",
  },
  {
    id: 1,
    name: "second platform",
  },
  {
    id: 2,
    name: "third platform",
  },
];

export const SelectPlatform = () => {
  const dispath = useAppDispatch();
  const platform = useAppSelector(platformChallengeSelector);
  const changePlatform = (platform: any) => {
    dispath(setPlatform(platform));
  };

  return (
    <div className={"select-platform"}>
      <div className="select-platform__title main-title">
        Выберите платформу
      </div>

      <div>
        <HealthSelect
          placeholder="Ваша платформа"
          options={testPlatformData}
          selectValue={platform}
          handleChange={changePlatform}
        />
      </div>
    </div>
  );
};
