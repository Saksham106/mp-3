import { StyledContainer, StyledMain, StyledH3, StyledP, StyledUl, StyledLi} from "../StyledComponents";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Calculator } from "../components/Calculator";
import { DynamicTitle } from "../components/DynamicTitle";


export function Projects() {
  return (
    <>
    <DynamicTitle />
        <Header />
        <StyledContainer>
        <Nav />
        <StyledMain>
        <StyledH3>All In </StyledH3>
                <StyledP>
                    <em><strong>Founder & Full Stack Developer</strong>| Boston | June 2024 - Present</em>
                    <br />
                    <StyledUl>
                        <StyledLi>I developed a full-stack game hosting platform using React.js and Node.js with MongoDB for database
                            management.</StyledLi>
                        <StyledLi>Integrated REST APIs for game scheduling, hosting, and player invitations.</StyledLi>
                    </StyledUl>
                </StyledP>
                <br />
                <StyledH3>Phanes Masks</StyledH3>
                <StyledP>
                    <em><strong>Founder & CEO</strong>| Ho Chi Minh City, VN | March 2020 - June 2022</em>
                    <br />
                    <StyledUl>
                        <StyledLi>Founded a company which created and sold reusable masks made with environmentally friendly materials. Phanes
                            Masks also prevent fogging up of glasses.</StyledLi>
                        <StyledLi>Led a team of 36 spanning 4 countries preventing the disposal of roughly 917,000 single-use masks.</StyledLi>
                    </StyledUl>
                </StyledP>

                <Calculator />


        </StyledMain>
        </StyledContainer>
        <Footer />
    </>
  );
};

