import { StyledContainer, StyledMain, StyledH3, StyledUl, StyledLi } from "../StyledComponents";
import styled from "styled-components";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { DynamicTitle } from "../components/DynamicTitle";


const ContactImage = styled.img`
  width: 15vw;
  height: auto;
  border-radius: 10px; 


  @media (max-width: 750px) {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const ContactContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 30px
`;

export function Contact() {
  return (
    <>
        <DynamicTitle />
        <Header />
        <StyledContainer>
            <Nav />
            <StyledMain>
                <StyledH3>Reach Me Here!</StyledH3>
                <ContactContainer>
                <ContactImage src="/imgs/contact.jpeg" alt="contact" />
                </ContactContainer>
                <StyledUl>
                    <StyledLi><strong>Email:</strong> sakshamg@bu.edu </StyledLi>
                    <StyledLi><strong>Phone:</strong> +1 (617) 595-0000</StyledLi>
                    <StyledLi><strong>LinkedIn:</strong> linkedin.com/in/saksham-g</StyledLi>
                </StyledUl>
            </StyledMain>
        </StyledContainer>
        <Footer />
    </>
  );
};

