import { FC, useState } from "react";
import HealthSelect from "../HealthSelect/HealthSelect";

interface IAddLecture {
  closeCallback: Function;
  addLectureHandler: Function;
}

const taskTypesTest = [
  {
    id: 0,
    name: "type 1",
  },
  {
    id: 1,
    name: "type 2",
  },
];

const AddLecture: FC<IAddLecture> = ({ closeCallback, addLectureHandler }) => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<any>();

  const [task, setTask] = useState("");
  const [taskType, setTasktype] = useState();

  const setFileHandler = (e: any) => {
    var reader = new FileReader();
    const data: any = {};
    //reader.onload = function (e: any) {
    //  dispatch(setIconSrc(e.target.result));
    //};
    reader.readAsDataURL(e.target.files[0]);
    data.file = e.target.files[0];

    setFile(e.target.files[0]);
  };

  const saveLectureHandler = () => {
    const data = {
      title,
      file,
      task,
      taskType,
    };
    setTitle("");
    setFile(undefined);
    setTask("");
    setTasktype(undefined);
    addLectureHandler(data);
    closeCallback(false);
  };

  return (
    <div className="add-lecture">
      <header className={"header "}>
        <div className="header__container">
          <div
            className="header__back icon-icon_back"
            onClick={() => closeCallback(false)}
          />
          <div className="header__title">Добавить лекцию</div>
        </div>
      </header>
      <div className={"creating-lecture"}>
        <div className="creating-lecture__title creating-title">
          Лекции и ДЗ
        </div>
        <div className="creating-lecture__sub-title creating-sub-title">
          Лекции
        </div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="creating-lecture__input _field"
          placeholder={"Заголовок лекции"}
        />
        <div>
          <label htmlFor="file-inputdsad">
            <div
              className={
                "creating-lecture__button-download _button-dark-yellow"
              }
            >
              Загрузить лекцию
            </div>
          </label>

          <input
            onChange={(e: any) => setFileHandler(e)}
            id="file-inputdsad"
            type="file"
            style={{ display: "none" }}
          />
        </div>

        <div className="creating-lecture__sub-title creating-sub-title">
          Задание
        </div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="creating-lecture__input _field"
          placeholder={"Описание задания"}
        />
        <div style={{ marginBottom: "40px" }}>
          <HealthSelect
            options={taskTypesTest}
            selectValue={taskType}
            handleChange={setTasktype}
            placeholder="Тип задания"
          />
        </div>

        <div className="creating-lecture__buttons">
          <button
            onClick={() => closeCallback(false)}
            className="creating-lecture__button button-end"
          >
            Завершить
          </button>
          <button
            onClick={saveLectureHandler}
            className="creating-lecture__button _button-white"
          >
            Добавить лекцию
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLecture;
/*
<button
              className={
                "creating-lecture__button-download _button-dark-yellow"
              }
            >
              Загрузить лекцию
            </button>
*/
