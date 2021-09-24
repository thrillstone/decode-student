import React from 'react';
import styled from 'styled-components';

const Viewer = (props) => {
    const ViewerDiv = styled.div`
        max-height: 70%;
        background-color: white;
    `;

    const ViewerImg = styled.img`
        max-height: 100%;
        max-width: 100%;
    `;

	return(
        <ViewerDiv>
            <ViewerImg className="slide-image" src={`/Slide${props.currentSlide + 1}.png`} alt=""/>
        </ViewerDiv>
    );
};

export default Viewer;
