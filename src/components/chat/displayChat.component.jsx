const DisplayChat = (props) => {
    const {messages} = props

  return (
    <section className="messagesWrapper">
      <h5>Message Board</h5>
        <section>{messages.map( (message, i) => <p key={i}>{message}</p>)}</section>
    </section>
  );
};

export default DisplayChat;
