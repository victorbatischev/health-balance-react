import React, { FC, useState } from "react";
import "./lecture.scss";

interface IAnswerOption {
  sendOption: Function;
}

export const AnswerOptions: FC<IAnswerOption> = ({ sendOption }) => {
  const [answer, setAnswer] = useState("");

  const sendOptionHandler = () => {
    if (!answer) {
      console.log("err");
      return false;
    }
    sendOption(answer);
  };

  return (
    <>
      <div className="task-lecture__title title-17">
        Выберите правильный ответ
      </div>
      <div className="task-lecture__answers-options custom-checkbox">
        <input
          type="radio"
          id="var1"
          className={"custom-checkbox__radio"}
          name={"radio"}
          value="1"
          onChange={(e) => setAnswer(e.target.value)}
        />
        <label htmlFor="var1">Вариант 1</label>
        <input
          type="radio"
          id="var2"
          className={"custom-checkbox__radio"}
          name={"radio"}
          value="2"
          onChange={(e) => setAnswer(e.target.value)}
        />
        <label htmlFor="var2" className="custom-checkbox__radio">
          Вариант 2
        </label>
      </div>
      <button
        onClick={sendOptionHandler}
        className="task-lecture__button-execute _button-white"
      >
        Выполнить
      </button>
    </>
  );
};
