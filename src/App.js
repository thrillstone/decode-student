import Storybook from './components/storybook/storybook.jsx';
import './App.css';
import {exampleSlides} from './components/storybook/exampleSlides';

function App() {
  return (
    <div className="App">
      <Storybook slides={exampleSlides}></Storybook>
    </div>
  );
}

export default App;
