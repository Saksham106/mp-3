import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledFooter = styled.footer`
    text-align: left;
    padding: 1vh;
    background: #8b0000;
    color: white;
    display: flex;
    flex-direction: row;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>All Rights Reserved by Saksham Goel<Link to={``}>Credits</Link> &copy;</p>
        </StyledFooter>
    );
}