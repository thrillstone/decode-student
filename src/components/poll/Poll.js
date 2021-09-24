import React, { useState } from 'react';

function onSubmit(pollId, choiceId, studentId) {
    const reply = {
        "studentId": studentId,
        "pollId": pollId,
        "choiceId": choiceId
    }
    console.log(reply)
}

function Poll({data, studentId}) {
    const [selectedChoice, setChoice] = useState(data.choices[0].choiceId);

    function radioButtons(data) {
        let choices = [];
        for (let i = 0; i < data.choices.length; i++) {
            choices.push(<div className="radio-btn">
                <input type="radio" value={data.choices[i].choiceId} onChange={() => setChoice(data.choices[i].choiceId)} checked={data.choices[i].choiceId === selectedChoice}/>
                <label>{data.choices[i].description}</label></div>
                );
        }
        return choices
    }

    return(
        <div>
            <h3>Poll</h3>
            <h4>{data.question}</h4>

            <form>
                {radioButtons(data)}
                <button type="submit" onClick={() => {onSubmit(data.pollId, selectedChoice, studentId)}}>Submit</button>
            </form>

        </div>
    )
}

export default Poll;
