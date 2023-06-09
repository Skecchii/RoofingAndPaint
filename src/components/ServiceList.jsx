import React from 'react';
import styled from 'styled-components';
import { FaHome, FaPaintRoller } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2rem;
`;

const Service = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 845px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 33.33%;
  }
`;

const IconWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.text};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #808080;
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.background};
  transition: color 0.2s ease-in-out;

  ${IconWrapper}:hover & {
    color: ${({ theme }) => theme.text};
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  margin: 1rem 0;
  text-align: center;
`;

const ServicesList = () => {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <Service>
        <IconWrapper to="/services/roofing" onClick={handleClick}>
          <Icon>
            <FaHome />
          </Icon>
        </IconWrapper>
        <Title>Roofing</Title>
      </Service>
      <Service>
        <IconWrapper to="/services/painting" onClick={handleClick}>
          <Icon>
            <FaPaintRoller />
          </Icon>
        </IconWrapper>
        <Title>Painting</Title>
      </Service>
    </Container>
  );
};

export default ServicesList;
