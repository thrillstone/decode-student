const DisplayChat = (props) => {
    const {messages} = props


  return (
    <section className="messagesWrapper">
        <section>{messages.map( (message, i) => <p key={i}>{message.message + message.name}</p>)}</section>
    </section>
  );
};

export default DisplayChat;
