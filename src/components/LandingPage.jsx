import React from 'react';
import styled from 'styled-components';
import RoofImage from '../assets/Roof.jpg'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${({src}) => src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3rem;
  max-width: 1000px;
  width: 100%;
  margin: auto;
  text-align: center;

  @media (max-width: 845px) {
    padding: 3rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 845px) {
    font-size: 1.75rem;
  }

  @media (max-width: 1024px) {
    font-size: 2.75rem
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 500;

  @media (max-width: 845px) {
    font-size: 1.2rem;
  }
`;

const ButtonLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  background-color: #ff9800;
  border: none;
  border-radius: 5px;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e64a19;
  }

  @media (max-width: 845px) {
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;
  }
`;

const LandingPage = () => {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
    return (
        <Container>
            <BackgroundImage src={RoofImage} alt='roof'>
                <TextContainer>
                    <Title>Expert Roofing and Painting Services</Title>
                    <Description>Transform your home with our professional roofing and painting services. Contact us today.</Description>
                    <ButtonLink to='/contact' onClick={handleClick}>Get a Quote</ButtonLink>
                </TextContainer>
            </BackgroundImage>
        </Container>
    );
};

export default LandingPage;