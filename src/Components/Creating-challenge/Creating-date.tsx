import React, { useState } from "react";
import "./creating-challenge.scss";
import { ScrollPicker } from "../Scroll-picker/Scroll-picker";
import {
  convertDateWithPoint,
  getItemsDays,
  getItemsMonth,
  getItemsYear,
} from "../../utils/common-functions";
import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux-hooks";
import {
  durationSelector,
  setDuration,
  setStartRegister,
  startRegister,
} from "../../Redux/slice/creatingChallengeSlice";
import HealthRangepicker from "../HealthRangepicker/HealthRangepicker";

registerLocale("ru", ru);

export const CreatingDate = () => {
  const dispatch = useAppDispatch();

  const duration = useAppSelector(durationSelector);

  const itemDays = getItemsDays();
  const itemMonths = getItemsMonth();
  const itemYears = getItemsYear(1970, 2024);

  const startReg = useAppSelector(startRegister);
  const startRegArr = startReg.split("-");

  const changeRangepickerHandler = (date: string[]) => {
    dispatch(setDuration(date));
  };

  const onChangeDay = (value: string) => {
    const payload = {
      value: value,
      essence: "day",
    };
    dispatch(setStartRegister(payload));
  };

  const onChangeMonth = (value: any) => {
    const payload = {
      value: value,
      essence: "month",
    };
    dispatch(setStartRegister(payload));
  };

  const onChangeYear = (value: string) => {
    const payload = {
      value: value,
      essence: "year",
    };
    dispatch(setStartRegister(payload));
  };

  return (
    <div className={"creating-date"}>
      <div className="creating-date__title creating-title">Даты</div>
      <div className="creating-date__sub-title creating-sub-title">
        Начало регистрации
        <span>{convertDateWithPoint(startReg)}</span>
      </div>
      <div className={"creating-date__picker"}>
        <div className="creating-date__picker-item">
          <ScrollPicker
            onChange={onChangeDay}
            items={itemDays}
            value={startRegArr[2]}
          />
        </div>
        <div className="creating-date__picker-item">
          <ScrollPicker
            onChange={onChangeMonth}
            items={itemMonths}
            value={startRegArr[1]}
          />
        </div>
        <div className="creating-date__picker-item">
          <ScrollPicker
            onChange={onChangeYear}
            items={itemYears}
            value={startRegArr[0]}
          />
        </div>
      </div>
      <div className="creating-date__sub-title creating-sub-title">
        Продолжительность челленджа
        <span>
          {duration.length > 0 &&
            convertDateWithPoint(duration[0]) +
              " - " +
              convertDateWithPoint(duration[1])}
        </span>
      </div>
      <div className="creating-date__calendar">
        <HealthRangepicker
          dropdownClassname="top-295"
          onChange={changeRangepickerHandler}
        />
      </div>
    </div>
  );
};
