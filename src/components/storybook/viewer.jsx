import React from 'react';
import styled from 'styled-components';

const Viewer = (props) => {
    const ViewerDiv = styled.div`
        max-height: 70%;
        padding-top: 15px;
        background-color: rgba(232, 6, 123, 0.1);
        padding-bottom: 15px;
    `;

    const ViewerImg = styled.img`
        max-height: 70%;
        max-width: 95%;
    `;

    const StyledH1 = styled.h1`
        margin-top: 0 !important;
    `;

	return(
        <ViewerDiv>
            <StyledH1 styles="margin-top: 0px !important;">{props.slideData.title}</StyledH1>
            {props.slideData.body ? <p>{props.slideData.body}</p> : null}
            {props.slideData.imageURL ? <ViewerImg className="slide-image" src={props.slideData.imageURL} alt=""/>: null}
        </ViewerDiv>
    );
};

export default Viewer;
