import closeIcon from "../../assets/image/interview/close.svg";
import successImage from "../../assets/image/icon_purpose__status_full.svg";
import { useNavigate } from "react-router-dom";
import { CHALLENGE_ROUTE } from "../../provider/constants-route";

const SuccessCreating = () => {
  const navigation = useNavigate();

  const handler = () => {
    navigation(CHALLENGE_ROUTE);
  };

  return (
    <div className="success-creating">
      <div className="success-creating__wrapper">
        <div className="success-creating__close-wrapper">
          <img onClick={handler} src={closeIcon} alt="" />
        </div>
        <div className="success-creating__content">
          <img src={successImage} alt="" />
          <div className="success-creating__title">Успех!</div>
          <div className="success-creating__description">
            Челлендж появится после проверки модератором{" "}
          </div>
          <div
            onClick={handler}
            className="success-creating__savebtn _button-white "
          >
            Ок!
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCreating;
