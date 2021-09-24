import React, {useState} from 'react';
import Viewer from './viewer';
import styled from 'styled-components';
import Emotes from './emotes'
import Header from './header'
import DinosaurClass from './assets/dinosaurClass';

const Storybook = (props) => {
    const StorybookDiv = styled.div`
        width: 100%;
        height: 60%;
        text-align: center;
        position: fixed;
        top: 0;
    `;

	const [slides] = useState(props.slides ? props.slides : []);
    const [currentSlide, setCurrentSlide] = useState(props.currentSlide ? props.currentSlide : 0);

	return(
        <StorybookDiv>
            <Header/>
            <Viewer slideData={slides[currentSlide]}></Viewer>
            <Emotes/>
            <DinosaurClass/>
        </StorybookDiv>
    );
};

export default Storybook;
