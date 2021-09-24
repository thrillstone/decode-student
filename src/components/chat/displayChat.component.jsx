const DisplayChat = () => {
    const messages = [
        'howdy',
        'test 2',
        'test 3'
    ]

  return (
    <section className="messagesWrapper">
      <h5>Message Board</h5>
        <section>{messages.map( e => <p>{e}</p>)}</section>
    </section>
  );
};

export default DisplayChat;
