import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.nav`
  background: #d2691e;
  width: 30%;
  padding: 0;
  
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  @media (min-width: 751px) {
    flex-direction: column;
    gap: 4vh;
    padding: 2vw;
    width: 100%;
  }
  
  @media (max-width: 750px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 1%;
    padding: 3% 3%;
    width: calc(100% - 20px);
    flex-wrap: wrap;
  }
`;

const NavItem = styled.li`
  box-sizing: border-box;
  
  @media (min-width: 751px) {
    width: 100%;
  }
  
  @media (max-width: 750px) {
    flex: 1;
    min-width: calc(15% - 6px);
    max-width: calc(15% - 6px);
  }
`;

const NavLink = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  background: #ffcc80;
  color: #3d2b1f;
  font-weight: bold;
  border-radius: 1.5vw;
  box-sizing: border-box;
  width: 100%;
  
  &:hover {
    background: #ffb74d;
  }
  
  @media (min-width: 751px) {
    padding: 10%;
    font-size: 1.2rem;
  }
  
  @media (max-width: 750px) {
    padding: 2vh 5%;
    font-size: 2vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;


export default function Nav() {
  return (
    <Navigation>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/education">Education</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/experience">Experience</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/skills">Skills</NavLink>
        </NavItem>
      </NavList>
    </Navigation>
  );
}
