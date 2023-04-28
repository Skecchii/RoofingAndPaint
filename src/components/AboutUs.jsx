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
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
`;

const AboutUs = () => {
  return (
<Container>
  <Section>
    <Title>About Us</Title>
    <Paragraph>
      JBONS Construction is a trusted provider of high-quality roofing and painting services for residential and commercial clients. 
      With 16+ years of experience, we are dedicated to ensuring our clients' satisfaction with every project, whether it's a new construction or an existing repair. 
      We are fully licensed and insured, and use only the best materials and techniques to exceed industry standards. Our commitment to excellence, professionalism, and customer service has earned us a reputation as a reliable and dependable contractor. 
      Contact us today to learn more about how we can help with your roofing and painting needs.
    </Paragraph>
  </Section>
</Container>

  );
};

export default AboutUs;