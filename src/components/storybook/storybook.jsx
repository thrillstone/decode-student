import React, {useState, useEffect, useContext} from 'react';
import Viewer from './viewer';
import styled from 'styled-components';
import Emotes from './emotes'
import Header from './header'
import DinosaurClass from './assets/dinosaurClass';
import { MessagingServiceContext } from '../../App';

const Storybook = (props) => {
    const messagingService = useContext(MessagingServiceContext);

    const StorybookDiv = styled.div`
        width: 100%;
        height: 60%;
        text-align: center;
        position: fixed;
        top: 0;
    `;

    const handleSlideChange = (slide) => {
        setCurrentSlide(slide);
        console.log('Changed to slide: ' + slide);
    }

    useEffect(() => {
        messagingService.subscribeToTopic("workbook/slides", handleSlideChange);
    }, [messagingService])

    const [currentSlide, setCurrentSlide] = useState(0);

	return(
        <StorybookDiv>
            <Header/>
            <Viewer currentSlide={currentSlide}></Viewer>
            <Emotes/>
            <DinosaurClass/>
        </StorybookDiv>
    );
};

export default Storybook;
