import { useContext } from "react";
import { UserContext } from "../../App";
import styled, { css } from "styled-components";
import './chat.styles.css';

const DisplayChat = (props) => {
  const { messages } = props;
  const user = useContext(UserContext);
  console.log('usersid', user);
  const currentUser = user.userId;
  const Paragraph = styled.p`
    text-align: left;
    padding: 0.25em 1 em;

    ${currentUser =>
    currentUser && css`
      text-align: right;
      font-weight: bold;
    `};
  `

  return (
    <section className="messagesWrapper">
      <section >
        {messages.map((message, i) => (
          <Paragraph key={i} font>{message.message + " - " + message.name}</Paragraph>
        ))}
      </section>
    </section>
  );
};

export default DisplayChat;
