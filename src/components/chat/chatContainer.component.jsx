// import { useState } from "react";
import DisplayChat from "./displayChat.component";
import WriteChat from "./writeChat.component";

const Chat = () => {
  // const [messages, setMessages] = useState([''])
  const messages = []
  const handleSubmit = (message) => {
    messages.push(message)
    console.log('updated messages:', messages)
  };

  return (
    <section className="chat">
      <DisplayChat showChat={messages}/>
      <WriteChat onSubmit={handleSubmit} />
    </section>
  );
};

export default Chat;
