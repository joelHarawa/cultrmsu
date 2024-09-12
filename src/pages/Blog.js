/*
Title: Blog.js
Author: Joel Harawa
Purpose: Display the current blog post to the user
*/

import Navbar from "../components/Navbar";
import BlogPost from "../components/BlogPost";
import styled from "styled-components";

// Styled components
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

const Blog = () => {
    return(
        <>
            <Navbar/>
            <Container>
                <BlogPost/>
            </Container> 
        </>
    );
}

export default Blog;