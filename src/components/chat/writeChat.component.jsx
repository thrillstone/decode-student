import { useState } from "react";

const WriteChat = ({ onSubmit }) => {
    const [message, setMessage] = useState("");
  return (
    <form className="writeMessageWrapper">
      <label>
        Write Your Message:  
        <input type="text" onChange={(e) => setMessage(e.target.value)}></input>
      </label>
      <button type="submit" onClick={() => onSubmit(message)}>
        Submit
      </button>
    </form>
  );
};

export default WriteChat;
