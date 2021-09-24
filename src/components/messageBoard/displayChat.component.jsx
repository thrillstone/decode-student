import { useEffect } from "react";

const DisplayChat = () => {
  const messages = ["Message Board"];
  const updateMessagesArray = (message) => {
    messages.push(message);
  };

  useEffect(() => {
    updateMessagesArray();
  }, messages);

  return (
    <section className="messagesWrapper">
      <h2>Message Board</h2>
      <p>{messages}</p>
    </section>
  );
};

export default DisplayChat;
