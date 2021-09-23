import Storybook from './components/storybook/storybook';
import styled from "styled-components";
import {exampleSlides} from './components/storybook/exampleSlides';

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
    </Center>
  );
}
  
export default Classroom;
  