import { StyledContainer, StyledMain, MainContent, StyledH3, StyledP} from "../StyledComponents";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { DynamicTitle } from "../components/DynamicTitle";

const EdImage = styled.img`
  width: 10vw;
  height: auto;
  border-radius: 10px;
  justify-content: left; 
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 750px) {
    width: 100%;
    max-width: 100px;
    margin: 0 auto;
  }
`;

const EdContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: auto;
    gap: 5rem;
    padding: 20px
`;

export function Education() {
  return (
    <>
    <DynamicTitle />
        <Header />
        <StyledContainer>
        <Nav />
        <StyledMain>
          <MainContent>
        <StyledH3>Boston University</StyledH3>
        <EdContainer>
            <EdImage src="/imgs/bu.jpg" alt="Boston University" />
        
            <StyledP>
                <em><strong>Dean's List </strong>| Boston, MA | Class of 2026</em>
                <br />
                <br />
                Bachelor of Arts in Computer Science
                <br />
                Master of Science in Computer Science
                <br />
                Minor in Business Administration
            </ StyledP>
            <br />
        </EdContainer>
        <br />  
        <br />      
        <StyledH3>British International School</StyledH3>
        <EdContainer>
            <EdImage src="/imgs/bis.jpg" alt="British International School" />
            <StyledP>
                <em>Ho Chi Minh City, Vietnam | Class of 2022</em>
                <br />
                <br />
                International baccalaureate
                <br />
                Higher Level: Maths, Chemistry, Physics
            </StyledP>
        </EdContainer>
        </MainContent>
        </StyledMain>
        </StyledContainer>
        <Footer />
    </>
  );
};

