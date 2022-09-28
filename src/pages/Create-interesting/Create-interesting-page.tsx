import Header from "../../Components/Header/Header";
import "./create-interesting.scss";

import clipIcon from "../../assets/image/clip.svg";
import vectorIcon from "../../assets/image/vector.svg";
import { useState } from "react";
import RubricModal from "../../Components/Modal/RubricModal";
import { ModalStatus } from "../../Components/Modal-status/Modal-status";
import SuccessInteresting from "./SuccessInteresting";

const CreateInteresting = () => {
  const rubrics = ["Психология", "Инструкции", "Мотивация", "Новость"];

  const [rubricMode, setRubricMode] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverFile, setCoverFile] = useState();
  const [coverSrc, setCoverSrc] = useState();
  const [push, setPush] = useState(false);
  const [selectedRubrics, setSelectedRubrics] = useState<String[]>([]);
  const [onModeration, setOnModeration] = useState(false);

  const changeRubrichandler = (rubric: string) => {
    if (selectedRubrics.includes(rubric)) {
      const newRubric = selectedRubrics.filter((rub) => rub !== rubric);
      setSelectedRubrics(newRubric);
    } else {
      setSelectedRubrics([...selectedRubrics, rubric]);
    }
  };

  const setCover = (e: any) => {
    var reader = new FileReader();
    const data: any = {};
    reader.onload = function (e: any) {
      setCoverSrc(e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);
    data.file = e.target.files[0];

    // console.log(data);
    setCoverFile(e.target.files[0]);
    //setFile(e.target.files[0]);
  };

  const handlePublicInteresting = () => {
    const data = {
      title,
      description,
      file: coverFile,
      src: coverSrc,
      push,
      rubrics: selectedRubrics,
    };
    console.log("send", data);
    setOnModeration(true);
  };

  return (
    <>
      {onModeration && <SuccessInteresting />}

      {rubricMode ? (
        <RubricModal
          closeCallback={setRubricMode}
          rubrics={rubrics}
          changeHandler={changeRubrichandler}
          selectedRubrics={selectedRubrics}
        />
      ) : (
        <div className="create-interesting">
          <Header title="Добавить интересное" />
          <div>
            <div className="create-interesting__input">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Введите заголовок записи..."
                type="text"
              />
            </div>
            <div className="create-interesting__textarea">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Введите текст записи..."
                name=""
              ></textarea>
              <div className="create-interesting__download-wrapper">
                <div className="create-interesting__download">
                  <label htmlFor="file-input">
                    <div>
                      <img src={clipIcon} alt="" />
                      <span>Загрузите обложку</span>
                    </div>
                  </label>

                  <input
                    onChange={(e: any) => setCover(e)}
                    id="file-input"
                    type="file"
                    style={{ display: "none" }}
                  />
                </div>
                <div
                  onClick={() => setRubricMode(true)}
                  className="create-interesting__rubric"
                >
                  <span>Рубрика</span>
                  <img src={vectorIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ marginTop: "20px", marginBottom: "45px" }}
            className="custom-checkbox"
          >
            <input
              checked={push}
              onChange={(e) => setPush(!push)}
              type="checkbox"
              name={"radio"}
              className={"custom-checkbox__checkbox"}
              id="test"
              //onChange={(e) => console.log(e.target.value)}
            />
            <label htmlFor="test">Отправить PUSH</label>
          </div>
          <div className="create-interesting__publicbtn">
            <div onClick={handlePublicInteresting} className="_button-white">
              Опубликовать
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateInteresting;
