import { StyledContainer, StyledMain, StyledH3, StyledP, StyledUl, StyledLi } from "../StyledComponents";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { DynamicTitle } from "../components/DynamicTitle";



export function Experience() {
  return (
    <>
    <DynamicTitle />
        <Header />
        <StyledContainer>
        <Nav />
        <StyledMain>
        <StyledH3>Achillea Peer Tutoring</StyledH3>
        <StyledP>
                    <em><strong>Database Management Intern </strong>| Remote - New York City | June 2023 - September 2023</em>
                    <br />
                    <StyledUl>
                        <StyledLi>Implemented SQL queries using PostgreSQL for efficient data analysis and management, contributing to the
                            optimization of the tutoring company's database.</StyledLi>
                        <StyledLi>Spearheaded the design and development of a database on Amazon AWS, ensuring scalability and reliability.</StyledLi>
                        <StyledLi>Initiated the creation of a web application designed to streamline the management of tutors and students.</StyledLi>
                    </StyledUl>
                </StyledP>
                    
                <br />
                <StyledH3>Ernst & Young</StyledH3>
                <StyledP>
                    <em><strong>Tech Consulting Intern </strong>| Ho Chi Minh City, VN | May 2023 - July 2023</em>
                    <br />
                    <StyledUl>
                        <StyledLi>Worked on building a machine learning model for churn prediction of customers, for the largest bank in Vietnam
                            (BIDV), integrated on Microsoft Azure as primary cloud computing platform.</StyledLi>
                        <StyledLi>Successfully processed and feature-engineered extensive data sets containing information on over 400k BIDV
                            customers using Python libraries for data analysis to enhance the model's accuracy and predictive capabilities.</StyledLi>
                    </StyledUl>
                </StyledP>
        </StyledMain>
        </StyledContainer>
        <Footer />
    </>
  );
};

