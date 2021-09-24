const WriteChat = ({ getUserInput }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const userMessageInput = e.target.value;
    console.log("input:", userMessageInput);
  };

  return (
    <form className="writeMessageWrapper">
      <label>
        Write Your Message:
        <input type="text" onInput={handleSubmit}></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default WriteChat;
