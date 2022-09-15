import React, { useState } from "react";
import "./creating-challenge.scss";
import { ScrollPicker } from "../Scroll-picker/Scroll-picker";
import {
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
  setStartRegister,
  startRegister,
} from "../../Redux/slice/creatingChallengeSlice";

registerLocale("ru", ru);

export const CreatingDate = () => {
  const dispatch = useAppDispatch();

  const itemDays = getItemsDays();
  const itemMonths = getItemsMonth();
  const itemYears = getItemsYear(1970, 2024);

  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<any>(null);
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const startReg = useAppSelector(startRegister);
  const startRegArr = startReg.split("-");

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
        <span>
          {startRegArr[2] + "." + startRegArr[1] + "." + startRegArr[0]}
        </span>
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
          {startDate && startDate.toLocaleString().substring(0, 10)} -{" "}
          {endDate && endDate.toLocaleString().substring(0, 10)}
        </span>
      </div>
      <div className="creating-date__calendar">
        <DatePicker
          renderCustomHeader={({
            date,
            changeYear,
            monthDate,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div
              style={{
                marginBottom: 20,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                {"<"}
              </button>
              <span className="react-datepicker__current-month">
                {monthDate.toLocaleString("ru", {
                  month: "long",
                  year: "numeric",
                })}
              </span>

              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                {">"}
              </button>
            </div>
          )}
          wrapperClassName={"datePickerCustom"}
          dateFormat="dd.MM.yyyy"
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          locale={ru}
        />
      </div>
    </div>
  );
};

/*
.ant-picker-panels > *:first-child button.ant-picker-header-next-btn {
  visibility: visible !important;
}

.ant-picker-panels > *:first-child button.ant-picker-header-super-next-btn {
  visibility: visible !important;
}

.ant-picker-panels > *:last-child {
  display: none;
}

.ant-picker-panel-container, .ant-picker-footer {
  width: 280px !important;
}

.ant-picker-footer-extra > div {
  flex-wrap: wrap !important; 
}

*/
