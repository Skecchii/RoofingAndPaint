import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.footer`
  padding: 2rem;
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
`;

const Title = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const LinkText = styled(Link)`
  color: ${({ theme }) => theme.text};
  display: block;
  margin-bottom: 0.5rem;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <Title>About Us</Title>
          <p>We are a trusted provider of high-quality roofing and painting services,
            dedicated to ensuring our clients' satisfaction with every project.</p>
        </Section>
        <Section>
          <Title>Services</Title>
          <LinkText to="/services/roofing">Roofing</LinkText>
          <LinkText to="/services/painting">Painting</LinkText>
        </Section>
        <Section>
          <Title>Contact Us</Title>
          <p>juanmtgonzalez@yahoo.com</p>
          <p>(555) 555-5555</p>
        </Section>
        <Section>
          <Title>Follow Us</Title>
          <LinkText to="#">Facebook</LinkText>
          <LinkText to="#">Twitter</LinkText>
          <LinkText to="#">Instagram</LinkText>
          <LinkText to="#">LinkedIn</LinkText>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Footer;
