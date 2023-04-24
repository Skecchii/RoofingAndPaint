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
`;

const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 2rem;
`;

const Image = styled.img`
  background-position: left;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;

const Title = styled.h3`
  font-size: 2rem;
  margin: 1rem 0;
`;

const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

const LinkText = styled(Link)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  text-decoration: underline;
`

const Services = () => {
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
                <LinkText to='/services/roofing'>Learn more</LinkText>
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
                <LinkText to='/services/painting'>Learn more</LinkText>
            </Service>
        </Container>
    );
};

export default Services;
