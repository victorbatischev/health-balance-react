import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ChatItem from "../../Components/Chat/ChatItem";
import Header from "../../Components/Header/Header";
import "./chat-page.scss";

const chatTestData = [
  {
    id: 0,
    title: "Чат с поддержкой",
    image:
      "https://w-dog.ru/wallpapers/3/19/345083118206129/sportsmenka-devushka-begovaya-dorozhka.jpg",
    fixed: true,
    message: {
      id: 0,
      user_id: 123,
      text: "Сделайте так)...",
      data: "21-05-1995",
    },
  },
  {
    id: 1,
    title: "Общий чат",
    image:
      "https://w-dog.ru/wallpapers/3/19/345083118206129/sportsmenka-devushka-begovaya-dorozhka.jpg",
    fixed: false,
    message: {
      id: 0,
      user_id: 111,
      text: "Сделайте так)...",
      data: "21-05-1995",
    },
  },
  {
    id: 2,
    title: "Иван Иванов",
    image:
      "https://w-dog.ru/wallpapers/3/19/345083118206129/sportsmenka-devushka-begovaya-dorozhka.jpg",
    fixed: false,
    message: {
      id: 0,
      user_id: 123,
      text: "И тебе удачи!",
      data: "21-05-1995",
    },
  },
  {
    id: 3,
    title: "Чат с поддержкой",
    image:
      "https://w-dog.ru/wallpapers/3/19/345083118206129/sportsmenka-devushka-begovaya-dorozhka.jpg",
    fixed: false,
    message: {
      id: 0,
      user_id: 123,
      text: "Сделайте так)...",
      data: "21-05-1995",
    },
  },
  {
    id: 4,
    title: "Общий чат",
    image:
      "https://w-dog.ru/wallpapers/3/19/345083118206129/sportsmenka-devushka-begovaya-dorozhka.jpg",
    fixed: false,
    message: {
      id: 0,
      user_id: 111,
      text: "Сделайте так)...",
      data: "21-05-1995",
    },
  },
  {
    id: 5,
    title: "Иван Иванов",
    image:
      "https://w-dog.ru/wallpapers/3/19/345083118206129/sportsmenka-devushka-begovaya-dorozhka.jpg",
    fixed: false,
    message: {
      id: 0,
      user_id: 123,
      text: "И тебе удачи!",
      data: "21-05-1995",
    },
  },
  {
    id: 6,
    title: "Чат с поддержкой",
    image:
      "https://w-dog.ru/wallpapers/3/19/345083118206129/sportsmenka-devushka-begovaya-dorozhka.jpg",
    fixed: false,
    message: {
      id: 0,
      user_id: 123,
      text: "Сделайте так)...",
      data: "21-05-1995",
    },
  },
  {
    id: 7,
    title: "Общий чат",
    image:
      "https://w-dog.ru/wallpapers/3/19/345083118206129/sportsmenka-devushka-begovaya-dorozhka.jpg",
    fixed: false,
    message: {
      id: 0,
      user_id: 111,
      text: "Сделайте так)...",
      data: "21-05-1995",
    },
  },
  {
    id: 8,
    title: "Иван Иванов",
    image:
      "https://w-dog.ru/wallpapers/3/19/345083118206129/sportsmenka-devushka-begovaya-dorozhka.jpg",
    fixed: false,
    message: {
      id: 0,
      user_id: 123,
      text: "И тебе удачи!",
      data: "21-05-1995",
    },
  },
];

export const ChatPage = () => {
  const [chats, setChats] = useState(chatTestData);
  const loadMoreChats = () => {
    const newChat = {
      id: Date.now(),
      title: "Иван Иванов",
      image:
        "https://w-dog.ru/wallpapers/3/19/345083118206129/sportsmenka-devushka-begovaya-dorozhka.jpg",
      fixed: false,
      message: {
        id: 0,
        user_id: 123,
        text: "И тебе удачи!",
        data: "21-05-1995",
      },
    };
    setTimeout(() => {
      setChats([...chats, newChat]);
    }, 1000);
  };
  return (
    <div>
      <Header title="Чат" />
      <InfiniteScroll
        dataLength={chats.length} //Тут указываем сколько уже загрузили, а не сколько всего
        next={loadMoreChats}
        hasMore={chats.length < 15} // Когда будет бэк переделать на   loaded < allCount
        loader={<div>Loading ... </div>}
      >
        {chats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} />
        ))}
      </InfiniteScroll>
    </div>
  );
};
