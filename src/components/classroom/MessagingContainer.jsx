import React from 'react';
import styled from 'styled-components';
import Chat from '../chat/chatContainer.component';

const MessagingContainer = () => {
    const MessagingDiv = styled.div`
        bottom: 0;
        width: 100%;
        height: 10%;
        background-color: rgba(232, 6, 123, 0.1);
        position: fixed;
    `;

	return(
        <MessagingDiv>
            < Chat/>
        </MessagingDiv>
    );
};

export default MessagingContainer;
