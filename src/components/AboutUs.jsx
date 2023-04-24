import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled.div`
  max-width: 800px;
`

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1rem;
`;

const AboutUs = () => {
  return (
    <Container>
      <Section>
        <Title>About Us</Title>
        <Subtitle>Our Mission</Subtitle>
        <Paragraph>
          At JBONS Construction our mission is to provide our customers with the highest quality roofing and painting services in a timely and professional manner.
          We are committed to using the best materials and techniques to ensure that our work meets or exceeds industry standards.
          Our goal is to earn our customers' trust and satisfaction by providing excellent service and workmanship, and by always putting their needs first.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default AboutUs;