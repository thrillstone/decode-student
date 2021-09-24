import React from 'react';
import styled from 'styled-components';

const MessagingContainer = () => {
    const MessagingDiv = styled.div`
        bottom: 0;
        width: 100%;
        height: 10%;
        background-color: rgba(232, 6, 123, 0.1);
        position: fixed;
    `;

	return(
        <MessagingDiv>Messaging placeholder</MessagingDiv>
    );
};

export default MessagingContainer;
