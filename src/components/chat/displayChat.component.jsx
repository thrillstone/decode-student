const DisplayChat = (props) => {
    const messages = props
    console.log('Messages from displayChat', messages);

    const TESTING = [
      'one',
      'two',
      'three'
    ]

  return (
    <section className="messagesWrapper">
      <h5>Message Board</h5>
        <section>{TESTING.map( e => <p>{e}</p>)}</section>
    </section>
  );
};

export default DisplayChat;
