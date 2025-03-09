import styled from "styled-components"

export const StyledContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;

    @media screen and (max-width: 750px) { 
        flex-direction: column;
    }

    
`;

export const StyledMain = styled.main`
    padding: 20px;
    background-color:rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    font-size: calc(2px + 1vw);
    min-height: 100vh;

    @media screen and (max-width: 750px) { 
            width: 100%;
        }
    

`;

export const StyledH3 = styled.h3`
    margin: 20px
`;

export const StyledP = styled.p`
    margin: calc(2px + 1vw) 0;
`;

export const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledLi = styled.li`
  margin: calc(4px + 1vw);
  alight-items: left;

  @media (max-width: 750px) {
    margin: 0;
  }
`;