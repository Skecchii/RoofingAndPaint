import React from "react";
import styled from "styled-components";
import RoofingImage from '../assets/Roofing.jpg'
import PaintingImage from '../assets/Painting.jpg'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 4rem 2rem;

  @media (max-width: 845px) {
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
  }
`;

const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 2rem;

  @media (max-width: 845px) {
    margin: 1rem;
  }
`;

const Image = styled.img`
  background-position: left;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 845px) {
    width: 150px;
    height: 150px;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  margin: 1rem 0;

  @media (max-width: 845px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;

  @media (max-width: 845px) {
    font-size: 1.2rem;
  }
`;

const LinkText = styled(Link)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  text-decoration: underline;

  @media (max-width: 845px) {
    font-size: 1.2rem;
  }
`;

const Services = () => {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
    return (
        <Container>
            <Service>
                <Image src={RoofingImage} alt="Roofing" />
                <Title>Roofing</Title>
                <Description>
                    We offer professional roofing services for all types of roofs,
                    including shingle, tile, and flat roofs. Our team of experienced
                    roofers will ensure that your roof is installed or repaired to the
                    highest standards of quality and safety.
                </Description>
                <LinkText to='/services/roofing' onClick={handleClick}>Learn more</LinkText>
            </Service>
            <Service>
                <Image src={PaintingImage} alt="Painting" />
                <Title>Painting</Title>
                <Description>
                    Our painting services include interior and exterior painting, as
                    well as staining and refinishing. Our team of skilled painters will
                    help you choose the perfect colors and finishes to transform your
                    home or business.
                </Description>
                <LinkText to='/services/painting' onClick={handleClick}>Learn more</LinkText>
            </Service>
        </Container>
    );
};

export default Services;
