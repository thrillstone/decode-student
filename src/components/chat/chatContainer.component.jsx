import { useState } from "react";
import DisplayChat from "./displayChat.component";
// import DisplayChat from "./displayChat.component";
import WriteChat from "./writeChat.component";

const Chat = () => {
  const [messages, setMessages] = useState([])
  const handleSubmit = (message) => {
    const updatedMessages = [...messages]
    updatedMessages.push(message)
    setMessages(updatedMessages)
    console.log('updated messages:', updatedMessages)
  };


  return (
    <section className="chat">
      <DisplayChat messages={messages}/>
      <WriteChat onSubmit={handleSubmit} />
    </section>
  );
};

export default Chat;
