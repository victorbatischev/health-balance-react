import React, { FC, useState } from "react";
import "./lecture.scss";

interface IAnswerToQuestion {
  sendTextHandler: Function;
}

export const AnswerToQuestion: FC<IAnswerToQuestion> = ({
  sendTextHandler,
}) => {
  const [answer, setAnswer] = useState("");

  const sendAnswer = () => {
    if (!answer) {
      console.log("err");
      return false;
    }
    sendTextHandler(answer);
  };

  return (
    <>
      <div className="task-lecture__title title-17">Ответ на вопрос</div>
      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        type="text"
        className="task-lecture__field _field"
      />
      <button
        onClick={sendAnswer}
        className="task-lecture__button-execute _button-white"
      >
        Выполнить
      </button>
    </>
  );
};
