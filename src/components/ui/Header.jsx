import styled from 'styled-components';

import Navbar from './Navbar';
import ThemeContext from '../darkmode/ThemeContext'

import DarkModeLogo from '../../assets/SVG-logo-black.svg'
import LightModeLogo from '../../assets/SVG-logo-white.svg'

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
  height: 160px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }
`;

const LinkLogo = styled(Link)`
  text-decoration: none;
  cursor: default;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const StyledLogo = styled.img`
  height: 150px;

  @media (max-width: 768px) {
    height: 150px;
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
      <LinkLogo to="/">
        {theme === 'light' ? (
          <StyledLogo src={DarkModeLogo} alt='logo'/>
        ) : (
          <StyledLogo src={LightModeLogo} alt='logo'/>
        )}
      </LinkLogo>
      <Navbar />
      <Label onClick={toggleTheme}>
        {theme === 'light' ? <FiSun /> : <FiMoon />}
      </Label>
    </Container>
  );
};

export default Header;
