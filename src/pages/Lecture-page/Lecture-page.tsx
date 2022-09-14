import React from "react";
import "./lecture-pages.scss";
import Header from "../../Components/Header/Header";
import { LectureTask } from "../../Components/Lecture/Lecture-task";
import { Video } from "../../Components/Lecture/Video";
import { LectureHead } from "../../Components/Lecture/Lecture-head";
import { ScanQR } from "../../Components/Lecture/ScanQR";
import { DownloadFile } from "../../Components/Lecture/DowloadFile";
import { useParams } from "react-router-dom";

export const LecturePage = () => {
  const params = useParams();
  const lectureSendFile = (file: any) => {
    console.log("send file", file);
  };
  const sendTextAnswer = (answer: string) => {
    console.log("send text", answer);
  };

  const sendOption = (option: string) => {
    console.log("send option", option);
  };

  return (
    <div className={"lecture-page"}>
      <Header title={"Лекция" + params.lectureId} />
      <div className="lecture-page__video">
        <Video />
      </div>

      <div className="lecture__task task-lecture">
        <LectureHead
          text={
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit"
          }
          title={"Задание"}
        />
        <div className="task-lecture__body">
          <LectureTask
            fileUploadHandler={lectureSendFile}
            sendTextHandler={sendTextAnswer}
            sendOption={sendOption}
            typeTask={4}
          />
        </div>
      </div>
    </div>
  );
};
