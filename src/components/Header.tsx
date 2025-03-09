import styled from "styled-components";


const StyledHeader = styled.header`
    background: #8b0000;
    color: white;
    padding: 1% 2%;
    display: flex;
    flex-direction: column;

    
`;

const Title = styled.h1`
  font-size: calc(16px + 2vw);
`;

const Subtitle = styled.p`
  /* TODO */
`;




export default function Header() {
    return (
        <StyledHeader>
          <Title>Saksham Goel</Title>
          <Subtitle>My Online Resume</Subtitle>
        </StyledHeader>
      );

}

