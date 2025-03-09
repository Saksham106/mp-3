import { StyledContainer, StyledMain, StyledH3 } from "../StyledComponents";
import styled from "styled-components";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { DynamicTitle } from "../components/DynamicTitle";

const SkillsImage = styled.img`
  width: 30vw;
  height: auto;
  border-radius: 10px; 
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 750px) {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const SkillsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10rem;
padding: 50px
`;

export function Skills() {
  return (
    <>
    <DynamicTitle />
        <Header />
        <StyledContainer>
            <Nav />
            <StyledMain>
                <StyledH3>Here's What I Am Good At!</StyledH3>
                
                <ul>
                    <li>Technical: Python, C/C++, Java, JavaScript, SQL, CSS, HTML, Microsoft Office Word, PowerPoint and Excel</li>
                    <br />
                    <li>Interests: Combat sports, Game theory, Strength training</li>
                    <br />
                    <li>Languages: English (native), Hindi (native), Spanish (basic)</li>
                </ul>
                <SkillsContainer>
                <SkillsImage src="/imgs/skills.jpeg" alt="Skills" />
            </SkillsContainer>
            </StyledMain>
        </StyledContainer>
        <Footer />
    </>
  );
};

