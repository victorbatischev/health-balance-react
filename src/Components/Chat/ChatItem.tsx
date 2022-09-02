import React from "react";
import "./chat.scss";
import fixedIcon from "../../../src/assets/image/chat/fixed.svg";
import { NavLink } from "react-router-dom";
import { DIALOG_ROUTE } from "../../provider/constants-route";

const ChatItem = ({ chat }: any) => {
  return (
    <NavLink to={DIALOG_ROUTE + "/" + chat.id} className={"chat-item-wrapper"}>
      <div className={"chat-item-wrapper__title-wrapper"}>
        <div className={"chat-item-wrapper__avatar"}>
          <img src={chat.image} alt="Ava" />
        </div>
        <div className={"chat-item-wrapper__title"}>
          <div>{chat.title}</div>
          <div>
            {chat.message.user_id === 123 ? "Вы:" : "Арина.Н."}{" "}
            <span>Сделайте так)...</span>
          </div>
        </div>
      </div>
      <div className={"chat-item-wrapper__data"}>
        <div>2 дня назад</div>
        <div>{chat.fixed ? <img src={fixedIcon} alt="" /> : ""}</div>
      </div>
    </NavLink>
  );
};

export default ChatItem;
