import { useContext, useEffect, useState } from 'react';
import { MessagingServiceContext } from '../../App';
import './Poll.css';

function OnSubmit(pollId, choiceId, studentId) {
    const messagingService = useContext(MessagingServiceContext);
    const reply = {
        "userId": studentId,
        "pollId": "001",
        "answer": choiceId,
        "questionNumber": pollId,
    };
    console.log(reply);
    messagingService.publishMessage("workbook/poll/answer", reply);
    
}

function Poll({data, studentId}) {
    const [selectedChoice, setChoice] = useState(data.choices[0].choiceId);

    function radioButtons(data) {
        return (
            <div>
                <div className="pollButton" onChange={() => setChoice(data.choices[0].choiceId)}>
                    <div className="pollButtonText">{data.choices[0].description}</div>
                    <div className="pollButtonImg"><img className="image" src='Carnivore.svg'></img></div>
                </div>
                <div className="pollButton" onChange={() => setChoice(data.choices[1].choiceId)}>
                    <div className="pollButtonText">{data.choices[1].description}</div>
                    <div className="pollButtonImg"><img className="image" src='Herbivore.svg'></img></div>
                </div>
                <div className="pollButton" onChange={() => setChoice(data.choices[2].choiceId)}>
                    <div className="pollButtonText">{data.choices[2].description}</div>
                    <div className="pollButtonImg"><img className="image" src='Omnivore.svg'></img></div>
                </div>
            </div>
        )
    }

    return(
        <div className="pollContainer">
            <div className="wrapper">
                <div className="pollTitle">Poll</div>
                <div className="question">{data.question}</div>
            </div>
            

            <form>
                {radioButtons(data)}
                <div className="submit-btn" type="submit" onClick={() => {OnSubmit(data.pollId, selectedChoice, studentId)}}>Submit</div>
            </form>

        </div>
    )
}

export default Poll;