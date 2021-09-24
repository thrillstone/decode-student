import { useContext, useState, useEffect } from "react";
import DisplayChat from "./displayChat.component";
import WriteChat from "./writeChat.component";
import { MessagingServiceContext } from "../../App";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const messagingService = useContext(MessagingServiceContext);

  const handleSubmit = (message) => {
    messagingService.publishMessage("messages", message);
  };

  useEffect(() => {
    const handleMessage = (message) => {
      const updatedMessages = [...messages];
      updatedMessages.push(message);
      setMessages(updatedMessages);
    };
    messagingService.subscribeToTopic("messages", handleMessage);
  }, [messagingService, messages]);

  return (
    <section className="chat">
      <DisplayChat messages={messages} />
      <WriteChat onSubmit={handleSubmit} />
    </section>
  );
};

export default Chat;
