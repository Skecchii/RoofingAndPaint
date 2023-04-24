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
  background-image: url(${({src}) => src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1000px;
  width: 100%;
  margin: auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 500;
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
`;


const LandingPage = () => {
    return (
        <Container>
            <BackgroundImage src={RoofImage} alt='roof'>
                <TextContainer>
                    <Title>Expert Roofing and Painting Services</Title>
                    <Description>Transform your home with our professional roofing and painting services. Contact us today.</Description>
                    <ButtonLink to='/contact'>Get a Quote</ButtonLink>
                </TextContainer>
            </BackgroundImage>
        </Container>
    );
};

export default LandingPage;