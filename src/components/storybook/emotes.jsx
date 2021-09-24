import React from 'react';
import styled from 'styled-components';
import { Dino1, Dino2, Dino3 } from './assets/dinos';

const Emotes = (props) => {
    const EmotesDiv = styled.div`    
        max-height: 10%;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 5%;
    `;

	return(
        <EmotesDiv>
            <Dino1/>
            <Dino2/>
            <Dino3/>
        </EmotesDiv>
    );
};

export default Emotes;
