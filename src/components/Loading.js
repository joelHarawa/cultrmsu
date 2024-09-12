/*
Title: Loading.js
Author: Joel Harawa
Purpose: Display the loading component to the user
*/

import styled, { keyframes } from "styled-components";
                                                
const Loading = () => {
    return(
        <Text>
            <RegularText>CULT</RegularText>
            <MirroredR>...R</MirroredR>
        </Text>
    );   
}

// Define the keyframes for the animations
const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const Text = styled.div`
    font-family: 'Playfair Display', serif;
    font-size: 40vh;
    position: relative;
    display: inline-block;
    animation: ${fadeIn} 2s ease-in-out infinite;
`;

const RegularText = styled.span`
`;

const MirroredR = styled.span`
    transform: scaleX(-1);
    display: inline-block;
`;

export default Loading;