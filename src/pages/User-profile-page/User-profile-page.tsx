import React, { useState } from "react";
import "./user-profile.scss";
import Header from "../../Components/Header/Header";
import icon_reward from "../../assets/image/icon_reward.svg";
import { Link, useParams } from "react-router-dom";

const userTestData = {};

export const UserProfile = () => {
  const params = useParams();
  return (
    <div className={"profile"}>
      <Header title={"Профиль участника"} />
      <div className="profile__block">
        <div className="profile__header">
          <div className="profile__avatar">
            <img
              src="https://w-dog.ru/wallpapers/3/19/345083118206129/sportsmenka-devushka-begovaya-dorozhka.jpg"
              alt="avatar"
            />
          </div>
          <div className="profile__user-info">
            <div className="profile__user-name">Усейн Болт {params.userId}</div>
          </div>
        </div>
        <div className="user-profile-add-common-chat">Добавить в общий чат</div>
      </div>
      <div className="profile__block">
        <div className="profile__title">Шаги</div>
        <div className="profile__items-steps">
          <div className="profile__row">
            <div className="profile__item-text">За все время</div>
            <div className="profile__item-text profile__item-text_yellow">
              2 456 254
            </div>
          </div>
          <div className="profile__row">
            <div className="profile__item-text">Километров пройденно</div>
            <div className="profile__item-text profile__item-text_yellow">
              1965
            </div>
          </div>
        </div>
      </div>
      <div className="profile__block">
        <div className="profile__title">Челленджи</div>
        <div className="profile__statistics-challenges">
          <div className="profile__card-statistics">
            <div className="profile__value">3</div>
            <div className="profile__items-text">Активные</div>
          </div>
          <div className="profile__card-statistics">
            <div className="profile__value">16</div>
            <div className="profile__items-text">Пройдено</div>
          </div>
        </div>
      </div>
      <div className="user-profile-data-wrapper">
        <div className="user-profile-data-wrapper__data">
          <span>Email</span>
          <div>useinbolt@gmail.com</div>
        </div>
        <div className="user-profile-data-wrapper__data">
          <span>Телефон</span>
          <div>+7 937 719 91 40</div>
        </div>
        <div className="user-profile-data-wrapper__data">
          <span>Дата рождения</span>
          <div>18.09.1988</div>
        </div>
      </div>
    </div>
  );
};
