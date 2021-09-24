import Storybook from '../storybook/storybook';
import styled from "styled-components";
import {exampleSlides} from '../storybook/exampleSlides';
import Chat from '../chat/chatContainer.component';

const Center = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function Classroom() {
  return (
    <Center>
      <Storybook slides={exampleSlides}></Storybook>
      <Chat />
    </Center>
  );
}
  
export default Classroom;
  