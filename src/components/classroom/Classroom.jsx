import Storybook from '../storybook/storybook';
import {exampleSlides} from '../storybook/exampleSlides';
import Chat from '../chat/chatContainer.component';
import FullScreen from '../styles/FullScreen';
import MessagingContainer from './MessagingContainer';
import { useContext, useEffect, useState } from 'react';
import { MessagingServiceContext } from '../../App';
import Poll from '../poll/Poll';

const data = {
  "question":"What do you eat?",
  "pollId":"011",
  "choices":[
    {
      "choiceId":"001",
      "description":"Meat, like a carnivore!"
    },
    {
      "choiceId":"0012",
      "description":"Veggies, like a herbivore!"
    },
    {
      "choiceId":"0012",
      "description":"Both, like an omnivore!"
    }
  ]
}

const studentId = "abjcs"
function Classroom() {
  
  const [pollId, setPollId] = useState('');
  const messagingService = useContext(MessagingServiceContext);
  
  useEffect(() => {
    messagingService.subscribeToTopic("workbook/poll", (pollEvent) => {setPollId(pollEvent.pollId);});
  }, [messagingService, pollId]);
  

  return (
    <FullScreen>
      <Storybook slides={exampleSlides}></Storybook>
      <MessagingContainer/>
      <Chat />
      <MessagingServiceContext.Provider value={messagingService}>
        {pollId !== '' && <Poll data={data} studentId={studentId}></Poll>}
      </MessagingServiceContext.Provider>
    </FullScreen>
  );
}
  
export default Classroom;
  