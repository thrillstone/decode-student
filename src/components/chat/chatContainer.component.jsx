import { useContext, useState, useEffect } from "react";
import DisplayChat from "./displayChat.component";
import WriteChat from "./writeChat.component";
import { MessagingServiceContext, UserContext } from "../../App";

const Chat = () => {
  // Collect userId data
  const user = useContext(UserContext)
  const [messages, setMessages] = useState([]);
  const [showChat, setShowChat] = useState(false)
  const messagingService = useContext(MessagingServiceContext);

  const handleClose = () => {
    setShowChat(false)
  }
  const handleSubmit = (message) => {
    messagingService.publishMessage("messages", {
      "message": message,
      "userId": user.userId,
      "name": user.name
    });
    setShowChat(true);
  };

  useEffect(() => {
    const handleMessage = (message) => {
      const updatedMessages = [...messages];
      updatedMessages.unshift(message);
      setMessages(updatedMessages);
    };
    messagingService.subscribeToTopic("messages", handleMessage);
  }, [messagingService, messages]);



  return (
    <section className="chat">
      <WriteChat onSubmit={handleSubmit} />
      
      {showChat && <DisplayChat messages={messages} onClose={handleClose}/>}

    </section>
  );
};

export default Chat;
