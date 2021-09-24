import React, {useContext} from 'react';
import styled from 'styled-components';
import { Dino1, Dino2, Dino3 } from './assets/dinos';
import {MessagingServiceContext} from '../../App';

const Emotes = (props) => {
    const EmotesDiv = styled.div`    
        max-height: 10%;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 5%;
    `;

    const DinoButton = styled.button`
        border: 0;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        background-color: transparent;
        padding: 0;
        margin-left: 3%;
        margin-right: 3%;
        transition: transform .2s;

        &:active{
            background-color: #E8067B;
            transform: scale(1.5);
            transition: transform .3s;
        }
    `;

    const messageService = useContext(MessagingServiceContext);
    const sendEmote = (dinoID) => {
        messageService.publishMessage("workbook/slide/emote", dinoID);
    }

	return(
        <EmotesDiv>
            <DinoButton onClick={() => sendEmote(0)}><Dino1/></DinoButton>
            <DinoButton onClick={() => sendEmote(1)}><Dino2/></DinoButton>
            <DinoButton onClick={() => sendEmote(2)}><Dino3/></DinoButton>
        </EmotesDiv>
    );
};

export default Emotes;
