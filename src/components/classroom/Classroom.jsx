import Storybook from '../storybook/storybook';
import FullScreen from '../styles/FullScreen';
import MessagingContainer from './MessagingContainer';
import { useContext, useEffect, useState } from 'react';
import { MessagingServiceContext } from '../../App';
import Poll from '../poll/Poll';
import Chat from '../chat/chatContainer.component';

const data = {
  "question":"What do you eat?",
  "pollId":"001",
  "choices":[
    {
      "answer":"Meat, like a carnivore!",
      "option":"A"
    },
    {
      "answer":"Veggies, like a herbivore!",
      "option":"B"
    },
    {
      "answer":"Both, like an omnivore!",
      "option":"C"
    }
  ]
}

const studentId = "011"
function Classroom() {
  
  const [pollId, setPollId] = useState('');
  const messagingService = useContext(MessagingServiceContext);
  
  useEffect(() => {
    messagingService.subscribeToTopic("workbook/poll", (pollEvent) => {setPollId(pollEvent.pollId);});
  }, [messagingService, pollId]);
  

  return (
    <FullScreen>
      <Storybook></Storybook>
      <MessagingContainer/>
      <MessagingServiceContext.Provider value={messagingService}>
        {pollId !== '' && <Poll data={data} studentId={studentId} setPollId={setPollId}></Poll>}
      </MessagingServiceContext.Provider>
    </FullScreen>
  );
}
  
export default Classroom;
  