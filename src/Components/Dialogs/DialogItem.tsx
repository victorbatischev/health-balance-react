import "./dialogs.scss";

const DialogItem = ({ message }: any) => {
  const myIdTest = 123;
  const time = message.data.split(" ");
  return (
    <div>
      {message.user_id === myIdTest ? (
        <div className="dialogs-my-message">
          <div className="dialogs-my-message__wrapper">
            <div>{message.text}</div>
            <span>{time[1]}</span>
          </div>
        </div>
      ) : (
        <div className="dialog-not-my-message">
          <div className="dialog-not-my-message__avatar">
            <img
              src={
                "https://w-dog.ru/wallpapers/3/19/345083118206129/sportsmenka-devushka-begovaya-dorozhka.jpg"
              }
              alt=""
            />
          </div>
          <div className="dialog-not-my-message__wrapper">
            <div>Хелпер</div>
            <div>{message.text}</div>
            <span>{time[1]}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DialogItem;
