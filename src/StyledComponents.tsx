import styled from "styled-components"

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  background-color: #d2691e;
  
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

export const StyledMain = styled.main`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  font-size: calc(2px + 1vw);
  flex-grow: 1;
  
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const MainContent = styled.div`
  padding: 2vw;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledH3 = styled.h3`
    margin: 2vw
    align-items: left;
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