import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.footer`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Section = styled.div`
  flex: 1;
  margin-right: 2rem;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 845px) {
    flex-basis: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const LinkText = styled(Link)`
  color: ${({ theme }) => theme.text};
  display: block;
  margin-bottom: 0.5rem;

  @media (max-width: 845px) {
  ${Wrapper} {
    flex-direction: column;
  }
}
`;


const Footer = () => {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <Wrapper>
        <Section>
          <Title>About Us</Title>
          <p>"High-quality roofing and painting services for residential and commercial clients. Licensed and insured."</p>
        </Section>
        <Section>
          <Title>Services</Title>
          <LinkText to="/services/roofing" onClick={handleClick}>Roofing</LinkText>
          <LinkText to="/services/painting" onClick={handleClick}>Painting</LinkText>
        </Section>
        <Section>
          <Title>Contact Us</Title>
          <p>jbonsconstruction@gmail.com</p>
          <p>(801)-215-9772</p>
        </Section>
        <Section>
          <Title>Follow Us</Title>
          <LinkText to="#">Facebook</LinkText>
          <LinkText to="#">Twitter</LinkText>
          <LinkText to="#">Instagram</LinkText>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Footer;
