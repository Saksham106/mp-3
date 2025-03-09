import { StyledContainer, StyledMain, StyledH3, StyledP} from "../StyledComponents";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { DynamicTitle } from "../components/DynamicTitle";



export function Education() {
  return (
    <>
    <DynamicTitle />
        <Header />
        <StyledContainer>
        <Nav />
        <StyledMain>
        <StyledH3>Boston University</StyledH3>
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
                    
                    <StyledH3>British International School</StyledH3>
                    <StyledP>
                        <em>Ho Chi Minh City, Vietnam | Class of 2022</em>
                        <br />
                        <br />
                        International baccalaureate
                        <br />
                        Higher Level: Maths, Chemistry, Physics
                    </StyledP>
        </StyledMain>
        </StyledContainer>
        <Footer />
    </>
  );
};

