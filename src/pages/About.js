/*
Title: About.js
Author: Joel Harawa
Purpose: Display the about page to the user
*/

import Navbar from "../components/Navbar";
import AboutComponent from "../components/About";
import styled from "styled-components";

// Styled components
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

const About = () => {
    
    return(
        <>
            <Navbar/>
            <Container>
                <AboutComponent/>
            </Container> 
        </>
    );
}

export default About;