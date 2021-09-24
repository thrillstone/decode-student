import { useContext, useEffect, useState } from 'react';
import { MessagingServiceContext } from '../../App';
import './Poll.css';

function Poll({data, studentId, setPollId}) {
    const [selectedChoice, setChoice] = useState(data.choices[0].option);
    const messagingService = useContext(MessagingServiceContext);
    return(
        <div className="pollContainer">
            <div className="wrapper">
                <div className="pollTitle">Poll</div>
                <div className="question">{data.question}</div>
            </div>
            <form>
                <div className={"pollButton " + (selectedChoice === data.choices[0].option ? "pollButtonActivated" : "")} onClick={() => setChoice(data.choices[0].option)}>
                    <div className="pollButtonText">{data.choices[0].answer}</div>
                    <div className="pollButtonImg"><img className="image" src='Carnivore.svg'></img></div>
                </div>
                <div className={"pollButton " + (selectedChoice === data.choices[1].option ? "pollButtonActivated" : "")} onClick={() => setChoice(data.choices[1].option)}>
                    <div className="pollButtonText">{data.choices[1].answer}</div>
                    <div className="pollButtonImg"><img className="image" src='Herbivore.svg'></img></div>
                </div>
                <div className={"pollButton " + (selectedChoice === data.choices[2].option ? "pollButtonActivated" : "")} onClick={() => setChoice(data.choices[2].option)}>
                    <div className="pollButtonText">{data.choices[2].answer}</div>
                    <div className="pollButtonImg"><img className="image" src='Omnivore.svg'></img></div>
                </div>
                <div className="submit-btn" type="submit" onClick={() => {messagingService.publishMessage("workbook/poll/answer", {"userId": studentId,"pollId": "001","answer": selectedChoice,"questionNumber": data.pollId}); console.log({"userId": studentId,"pollId": "001","answer": selectedChoice,"questionNumber": data.pollId}); setPollId('');}}>Submit</div>
            </form>
        </div>
    )
}

export default Poll;