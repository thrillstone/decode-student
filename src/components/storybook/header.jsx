import React from 'react';
import styled from 'styled-components';
import BackButton from './assets/backButton';

const Header = (props) => {
    const HeaderDiv = styled.div`
        width: 100%;
        height: 10%;
        background-color: #E8067B;
        text-align: left;
        font-size: 18px;
        font-weight: bold;
        padding-left: 8%;
        color: white;
        align-content: center;
        display: flex;
        align-items: center;
    `;

	return(
        <HeaderDiv>
            <BackButton/>
            Your classes
        </HeaderDiv>
    );
};

export default Header;