import { useState } from "react";
import "./chat.styles.css";

const WriteChat = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(message);
    setMessage("");
  };

  return (
    <form className="writeMessageWrapper" onSubmit={handleSubmit}>
      <input
        class="input"
        placeholder="Write a comment"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <input type="submit" value="submit" class="button"></input>
    </form>
  );
};

export default WriteChat;
