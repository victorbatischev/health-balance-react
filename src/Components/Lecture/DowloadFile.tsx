import React, { FC, useState } from "react";
import "./lecture.scss";

interface IDownloadFile {
  fileUploadHandler: Function;
}

export const DownloadFile: FC<IDownloadFile> = ({ fileUploadHandler }) => {
  const [src, setSrc] = useState("");
  const [file, setFile] = useState<any>();
  const sendFile = () => {
    if (!file) {
      console.log("err");
      return false;
    }
    fileUploadHandler(file);
    setSrc("");
    setFile("");
  };
  const setPhoto = (e: any) => {
    var reader = new FileReader();
    reader.onload = function (e: any) {
      setSrc(e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <>
      <div className="task-lecture__title title-17">Загрузите файл</div>

      <div
        className="create-message-wrapper__image-upload"
        style={{ width: "100%" }}
      >
        <label
          className="task-lecture__button-download _button-dark-yellow"
          htmlFor="file-input"
        >
          Загрузить
        </label>

        <input onChange={(e: any) => setPhoto(e)} id="file-input" type="file" />
      </div>
      <button
        onClick={sendFile}
        className="task-lecture__button-execute _button-white"
      >
        Выполнить
      </button>
    </>
  );
};
