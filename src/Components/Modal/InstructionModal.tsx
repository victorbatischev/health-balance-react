import { FC } from "react";
import "./modal.scss";

interface IModal {
  actionCallback: Function;
}

const InstructionModal: FC<IModal> = ({ actionCallback }) => {
  return (
    <div>
      <div className="modal-background"></div>
      <div className="modal-wrapper" style={{ justifyContent: "center" }}>
        <div style={{ width: "55%", marginBottom: "50px" }}>
          <div style={{ marginBottom: "10px" }}>
            Примите участие в своем первом челлендже!
          </div>
          <div className="_button-white" onClick={() => actionCallback()}>
            Принять участие
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionModal;
