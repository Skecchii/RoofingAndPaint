import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
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

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    font-size: 1.2rem;
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