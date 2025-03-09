import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.nav`
  display: flex;
  width: 30%;
  background: #d2691e;
  padding: 1% 0;
  
  @media screen and (max-width: 750px) {
        width: 100%;
    } 
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 6%;
  gap: 2vw;
  width: 100%;

  @media (max-width: 750px) {
    flex-direction: row;
    padding: 2%;
    width: 100%; 
    gap: 1%;
  }
`;

const NavItem = styled.li`
  background-color: #ffffff;
  border-radius: 1vw;

  &:hover {
    background-color: #ffb74d;
  }

  @media (max-width: 750px) {
    display: flex;
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  background: #ffcc80;
  color: #3d2b1f;
  padding: 1rem;
  font-weight: bold;
  border-radius: 1vw;
  width: 90%;

  &:hover {
    background: #ffb74d;
  }

  @media (max-width: 750px) {
    font-size: calc(0.8rem + 1vw); 
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
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
