import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 1;
`;


const NavItem = styled(Link)`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;

  &:hover {
    text-decoration: underline;
    height: 120px;
  }
`;

const Navbar = () => {
    return (
            <Nav>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/services">Services</NavItem>
                <NavItem to="/about">About</NavItem>
                <NavItem to="/contact">Contact</NavItem>
            </Nav>
    )
}

export default Navbar