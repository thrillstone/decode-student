import Storybook from '../storybook/storybook';
import {exampleSlides} from '../storybook/exampleSlides';
import Chat from '../chat/chatContainer.component';
import FullScreen from '../styles/FullScreen';

function Classroom() {
  return (
    <FullScreen>
      <Storybook slides={exampleSlides}></Storybook>
      <Chat />
    </FullScreen>
  );
}
  
export default Classroom;
  