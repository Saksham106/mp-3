import styled from 'styled-components';
import { StyledContainer, StyledMain, MainContent } from "../StyledComponents";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { DynamicTitle } from "../components/DynamicTitle";


const MainTitle = styled.h3`
  font-size: calc(2px + 2vw);
  color: #8b0000;
  margin-bottom: 2vw;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20%;
`;

const MainImageContainer = styled.div`
  width: 40%;
  margin: 1vw 1vh;
  border-radius: 10%;
`;

const ProfileImage = styled.img`
  max-width: 100%;
`;

const MainText = styled.div`
  align-self: center;
  width: 60%;
  margin: 1vh 1vw;
`;

export function Home() {
  return (
    <>
    <DynamicTitle />
        <Header />
        <StyledContainer>
        <Nav />
        <StyledMain>
        <MainContent>
        <MainTitle>Home</MainTitle>
        <MainSection>
            <MainImageContainer>
            <ProfileImage src="/imgs/profile.jpg" alt="Saksham Goel" />
            </MainImageContainer>
            <MainText>
            <p>
                Hi! I am Saksham Goel, a junior student studying Computer Science. 
                I am super excited to learn about web development which is why I am taking this course.
            </p>
            </MainText>
        </MainSection>
        <p>
            Welcome to my website. Feel free to navigate to the different webpages and learn a little more about me!
        </p>
        </MainContent>
        </StyledMain>
        </StyledContainer>
        <Footer />
    </>
  );
};

