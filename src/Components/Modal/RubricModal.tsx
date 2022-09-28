import { FC } from "react";

interface IModal {
  closeCallback: Function;
  rubrics: string[];
  changeHandler: Function;
  selectedRubrics: String[];
}

const RubricModal: FC<IModal> = ({
  closeCallback,
  rubrics,
  changeHandler,
  selectedRubrics,
}) => {
  return (
    <div>
      <div className="modal-background"></div>
      <div className="modal-rubric-content">
        <header className={"header "}>
          <div className="header__container">
            <div
              className="header__back icon-icon_back"
              onClick={() => closeCallback(false)}
            />
            <div className="header__title">Рубрики</div>
          </div>
        </header>
        <div style={{ marginLeft: "16px" }}>
          {rubrics.map((rubric: string, i: number) => {
            return (
              <div
                style={{ marginTop: "20px" }}
                className="custom-checkbox"
                key={i}
              >
                <input
                  checked={selectedRubrics.includes(rubric)}
                  onChange={(e) => changeHandler(e.target.value)}
                  value={rubric}
                  type="checkbox"
                  name={"radio"}
                  className={"custom-checkbox__checkbox"}
                  id={"test" + i}
                  //onChange={(e) => console.log(e.target.value)}
                />
                <label htmlFor={"test" + i}>{rubric}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RubricModal;
