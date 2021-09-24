import { useContext, useState, useEffect } from "react";
import DisplayChat from "./displayChat.component";
import WriteChat from "./writeChat.component";
import { MessagingServiceContext, UserContext } from "../../App";

const Chat = () => {
  // Collect userId data
  const user = useContext(UserContext)
  const [messages, setMessages] = useState([]);
  const messagingService = useContext(MessagingServiceContext);

  const handleSubmit = (message) => {
    messagingService.publishMessage("messages", {
      "message": message,
      "userId": user.userId,
      "name": user.name
    });
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
      <WriteChat onSubmit={handleSubmit} />
      <DisplayChat messages={messages} />
    </section>
  );
};

export default Chat;
