import styled from 'styled-components';

import Navbar from './Navbar';
import ThemeContext from '../darkmode/ThemeContext'

import CompanyLogo from '../../assets/Logo.png'

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
  height: 120px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }
`;

const LinkLogo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  cursor: default;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const StyledLogo = styled.img`
  height: 100px;

  @media (max-width: 768px) {
    height: 80px;
  }
`

const Label = styled.label`
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <LinkLogo to="/"><StyledLogo src={CompanyLogo} alt='logo'/></LinkLogo>
      <Navbar />
      <Label onClick={toggleTheme}>{theme === 'light' ? <FiSun /> : <FiMoon />}</Label>
    </Container>
  );
};

export default Header;
