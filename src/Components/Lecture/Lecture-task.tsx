import React, { FC } from "react";
import "./lecture.scss";
import { DownloadFile } from "./DowloadFile";
import { AnswerToQuestion } from "./AnswerToQuestion";
import { ScanQR } from "./ScanQR";
import { AnswerOptions } from "./AnswerOptions";

interface ILectureTask {
  typeTask: number;
  fileUploadHandler: Function;
  sendTextHandler: Function;
  sendOption: Function;
}

export const LectureTask: FC<ILectureTask> = ({
  typeTask,
  fileUploadHandler,
  sendTextHandler,
  sendOption,
}) => {
  const showTask = (type: number) => {
    switch (type) {
      case 1:
        return <DownloadFile fileUploadHandler={fileUploadHandler} />;
      case 2:
        return <AnswerToQuestion sendTextHandler={sendTextHandler} />;
      case 3:
        return <ScanQR />;
      case 4:
        return <AnswerOptions sendOption={sendOption} />;
      default:
        return <div>Задач нет!</div>;
    }
  };

  return showTask(typeTask);
};
