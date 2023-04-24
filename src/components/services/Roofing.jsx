import React from 'react';
import styled from 'styled-components';
import RoofingImage from '../../assets/Roofing.jpg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style: disc;
  margin-left: 2rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Roofing = () => {
    return (
        <Container>
            <Title>Roofing Services</Title>
            <Image src={RoofingImage} alt="Roofing" />
            <Description>
                We offer professional roofing services for all types of roofs,
                including shingle, tile, and flat roofs. Our team of experienced
                roofers will ensure that your roof is installed or repaired to the
                highest standards of quality and safety.
            </Description>
            <List>
                <ListItem>Roof installation</ListItem>
                <ListItem>Roof repair</ListItem>
                <ListItem>Roof replacement</ListItem>
                <ListItem>Gutter installation and repair</ListItem>
                <ListItem>Roof maintenance and inspection</ListItem>
            </List>
        </Container>
    );
};

export default Roofing;
