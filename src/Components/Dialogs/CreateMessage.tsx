import uploadImageIcon from "../../assets/image/chat/uploadImage.svg";
import sendIcon from "../../assets/image/chat/send.svg";

const CreateMessage = () => {
  return (
    <div className="create-message-wrapper">
      <div className="create-message-wrapper__image-upload">
        <label htmlFor="file-input">
          <img src={uploadImageIcon} />
        </label>

        <input id="file-input" type="file" />
      </div>
      <div className="create-message-wrapper__text-input">
        <input type="text" placeholder="Сообщение" />
      </div>
      <div className="create-message-wrapper__send-icon">
        <img src={sendIcon} alt="" />
      </div>
    </div>
  );
};

export default CreateMessage;
