import uploadImageIcon from "../../assets/image/chat/uploadImage.svg";
import sendIcon from "../../assets/image/chat/send.svg";
import { FC, useState } from "react";
import moment from "moment";

interface ICreateMessage {
  createMessage: Function;
}

const CreateMessage: FC<ICreateMessage> = ({ createMessage }) => {
  const [src, setSrc] = useState("");
  const [file, setFile] = useState<any>();
  const [text, setText] = useState("");
  const sendMessage = () => {
    const message = {
      id: Date.now(),
      src: src,
      text: text,
      user_id: 123, //переделать когда будет мой айди
      data: moment(Date.now()).format("YYYY-MM-DD HH:ss"),
    };

    createMessage(message, file);
    setSrc("");
    setFile("");
    setText("");
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
    <div className="create-message-wrapper">
      <div className="create-message-wrapper__image-upload">
        <label htmlFor="file-input">
          <img src={uploadImageIcon} />
        </label>

        <input onChange={(e: any) => setPhoto(e)} id="file-input" type="file" />
      </div>
      <div className="create-message-wrapper__text-input">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Сообщение"
        />
      </div>
      <div onClick={sendMessage} className="create-message-wrapper__send-icon">
        <img src={sendIcon} alt="" />
      </div>
    </div>
  );
};

export default CreateMessage;
