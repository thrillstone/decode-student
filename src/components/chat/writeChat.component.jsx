import { useState } from "react";

const WriteChat = ({ onSubmit }) => {
    const [message, setMessage] = useState("");

    const handleSubmit= (e) => {
      e.preventDefault()
      onSubmit(message)
    }
  return (
    <form className="writeMessageWrapper" onSubmit={handleSubmit}>
      <label>
        Write Your Message:  
        <input type="text" onChange={(e) => setMessage(e.target.value)}></input>
      </label>
      <input type="submit" value="submit"></input>
    </form>
  );
};

export default WriteChat;
