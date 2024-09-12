import styled from "styled-components";

const Welcome = () => {
    return(
        <Container>
            <Title>Welcome to the Admin Page!</Title>
            <Message>Here you can edit the content that appears on several components of the website.</Message>
            <Message>Login if you haven't already.</Message>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100%;
`;

const Title = styled.span`
    font-family: "DM Sans", serif;
    width: 100%;
    font-size: 5vh;
    text-align: center;
`;
const Message = styled.span`
    font-family: "DM Sans", serif;
    width: 100%;
    font-size: 2vh;
    text-align: center;
`

export default Welcome;