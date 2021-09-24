import Storybook from '../storybook/storybook';
import {exampleSlides} from '../storybook/exampleSlides';
import FullScreen from '../styles/FullScreen';
import MessagingContainer from './MessagingContainer';
import { useContext, useEffect, useState } from 'react';
import { MessagingServiceContext } from '../../App';
import Poll from '../poll/Poll';

const data = {
  "question":"hi",
  "pollId":"011",
  "choices":[
    {
      "choiceId":"001",
      "description":"hindn"
    },
    {
      "choiceId":"0012",
      "description":"hiffn"
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
      <MessagingServiceContext.Provider value={messagingService}>
        {pollId !== '' && <Poll data={data} studentId={studentId}></Poll>}
      </MessagingServiceContext.Provider>
    </FullScreen>
  );
}
  
export default Classroom;
  