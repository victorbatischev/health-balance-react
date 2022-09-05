import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import CreateMessage from "../../Components/Dialogs/CreateMessage";
import DialogItem from "../../Components/Dialogs/DialogItem";
import Header from "../../Components/Header/Header";

const testDialogData = [
  {
    id: 0,
    user_id: 123,
    text: "Не могу!1",
    data: "2022-09-01 12:32",
  },
  {
    id: 1,
    user_id: 111,
    text: "Добрый день! Усейн, как я могу вам помочь?2",
    data: "2022-09-01 17:26",
  },
  {
    id: 2,
    user_id: 123,
    text: "Не могу!3",
    data: "2022-09-01 12:32",
  },
  {
    id: 3,
    user_id: 111,
    text: "Добрый день! Усейн, как я могу вам помочь?4",
    data: "2022-09-01 17:26",
  },
  {
    id: 4,
    user_id: 123,
    text: "Не могу!5",
    data: "2022-09-01 12:32",
  },
  {
    id: 5,
    user_id: 111,
    text: "Добрый день! Усейн, как я могу вам помочь?6",
    data: "2022-09-01 17:26",
  },
  {
    id: 6,
    user_id: 123,
    text: "Не могу!7",
    data: "2022-09-01 12:32",
  },
  {
    id: 7,
    user_id: 111,
    text: "Добрый день! Усейн, как я могу вам помочь?8",
    data: "2022-09-01 17:26",
  },
  {
    id: 8,
    user_id: 123,
    text: "Не могу!9",
    data: "2022-09-01 12:32",
  },
  {
    id: 9,
    user_id: 111,
    text: "Добрый день! Усейн, как я могу вам помочь?10",
    data: "2022-09-01 17:26",
  },
  {
    id: 10,
    user_id: 123,
    text: "Не могу!11",
    data: "2022-09-01 12:32",
  },
  {
    id: 11,
    user_id: 111,
    text: "Добрый день! Усейн, как я могу вам помочь?12",
    data: "2022-09-01 17:26",
  },
];

export const DialogPage = () => {
  const params = useParams();
  const [messages, setMessages] = useState(testDialogData);
  const loadMoreMesage = () => {
    const newMessages = [
      {
        id: Date.now(),
        user_id: 123,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eius repellendus voluptatibus? Enim qui molestiae consectetur vitae, accusamus sapiente aperiam.",
        data: "2022-09-01 12:32",
      },
      {
        id: Date.now() + 5,
        user_id: 111,
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        data: "2022-09-01 17:26",
      },
    ];

    setTimeout(() => setMessages([...messages, ...newMessages]), 500);
  };

  const createMessage = (message: any, file: any) => {
    setMessages([message, ...messages]);
  };

  return (
    <div>
      <Header title={"Dialog - " + params.dialogId} />
      <div
        id="scrollableDiv"
        style={{
          height: "80vh",
          overflow: "auto",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        <InfiniteScroll
          dataLength={messages.length} //Тут указываем сколько уже загрузили, а не сколько всего
          next={loadMoreMesage}
          hasMore={messages.length < 20} // Когда будет бэк переделать на   loaded < allCount
          loader={<div>Loading ... </div>}
          inverse={true}
          style={{ display: "flex", flexDirection: "column-reverse" }}
          scrollableTarget="scrollableDiv"
        >
          {messages.map((message) => (
            <DialogItem key={message.id} message={message} />
          ))}
        </InfiniteScroll>
      </div>
      <div>
        <CreateMessage createMessage={createMessage} />
      </div>
    </div>
  );
};

//export default DialogPage;
