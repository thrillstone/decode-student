import { useState } from "react";
import DisplayChat from "./displayChat.component";
import WriteChat from "./writeChat.component";

const Chat = () => {
  const [messages, setMessages] = useState([])
  const handleSubmit = (message) => {
    messages.push(message)
    setMessages(messages)
    console.log('updated messages:', messages)
  };

  return (
    <section className="chat">
      <DisplayChat messages={messages}/>
      <WriteChat onSubmit={handleSubmit} />
    </section>
  );
};

export default Chat;
