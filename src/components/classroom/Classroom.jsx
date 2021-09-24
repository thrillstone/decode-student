import Storybook from '../storybook/storybook';
import {exampleSlides} from '../storybook/exampleSlides';
import FullScreen from '../styles/FullScreen';

function Classroom() {
  return (
    <FullScreen>
      <Storybook slides={exampleSlides}></Storybook>
    </FullScreen>
  );
}
  
export default Classroom;
  