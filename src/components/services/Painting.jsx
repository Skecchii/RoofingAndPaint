import React from 'react';
import styled from 'styled-components';
import PaintingImage from '../../assets/Painting.jpg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-right: 2rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 50%;
    margin-right: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const List = styled.ul`
  list-style: disc;
  margin-left: 2rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-left: 4rem;
  }
`;

const ListItem = styled.li`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Painting = () => {
    return (
        <Container>
            <Title>Painting Services</Title>
            <Image src={PaintingImage} alt="Painting" />
            <Description>
                Our painting services include interior and exterior painting, as well as staining and refinishing. Our team of skilled painters will help you choose the perfect colors and finishes to transform your home or business.
            </Description>
            <List>
                <ListItem>Interior painting</ListItem>
                <ListItem>Exterior painting</ListItem>
                <ListItem>Staining and refinishing</ListItem>
                <ListItem>Color consultation</ListItem>
                <ListItem>Wallpaper removal and installation</ListItem>
            </List>
        </Container>
    );
};

export default Painting;
