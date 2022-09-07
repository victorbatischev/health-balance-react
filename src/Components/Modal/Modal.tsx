import { FC } from "react";
import "./modal.scss";

interface IModal {
  closeCallback: Function;
  actionCallback: Function;
}

const Modal: FC<IModal> = ({ closeCallback, actionCallback }) => {
  return (
    <div>
      <div className="modal-background"></div>
      <div className="modal-wrapper">
        <div className="modal-wrapper__button-wrapper">
          <div onClick={() => actionCallback()}>Выйти</div>
          <div onClick={() => closeCallback(false)}>Отмена</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
