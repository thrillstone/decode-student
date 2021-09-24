import { useState } from "react";
import DisplayChat from "./chat/displayChat.component";
import WriteChat from "./chat/writeChat.component";

const Chat = () => {
  const [messages, setMessages] = useState([])

  const handleSubmit = (message) => {
    setMessages(messages.push(message))
    console.log('message', message)
    console.log('messages', messages)
  };

  return (
    <section className="chat">
      <DisplayChat />
      <WriteChat onSubmit={handleSubmit} />
    </section>
  );
};

export default Chat;
