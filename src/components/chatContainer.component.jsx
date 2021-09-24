import { useState } from "react";
import DisplayChat from "./messageBoard/displayChat.component";
import WriteChat from "./messageBoard/writeChat.component";

const Chat = () => {
  const [message, setMessage] = useState("");

  const collectMessage = (userMessageInput) => {
    setMessage(userMessageInput);
    console.log("collectedMessage", message);
  };

  return (
    <section className="chat">
      <DisplayChat collectMessage={collectMessage}/>
      <WriteChat collectMessage={collectMessage} />
    </section>
  );
};

export default Chat;
