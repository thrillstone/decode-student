import Storybook from '../storybook/storybook';
import {exampleSlides} from '../storybook/exampleSlides';
import FullScreen from '../styles/FullScreen';
import MessagingContainer from './MessagingContainer';

function Classroom() {
  return (
    <FullScreen>
      <Storybook slides={exampleSlides}></Storybook>
      <MessagingContainer/>
    </FullScreen>
  );
}
  
export default Classroom;
  