import React from 'react'
import styled from 'styled-components'

import roofingImage1 from '../assets/project-images/roofing1.jpg'
import roofingImage2 from '../assets/project-images/roofing2.jpg'
import roofingImage3 from '../assets/project-images/roofing3.jpg'
import roofingImage4 from '../assets/project-images/roofing4.jpg'
import roofingImage5 from '../assets/project-images/roofing5.jpg'

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  gap: 3rem; 
  justify-items: center;
  padding: 2rem;
  grid-column-gap: 2rem;

  @media (max-width: 845px) {
    padding: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const projects = () => {

  const projectImages = [
    roofingImage1,
    roofingImage2,
    roofingImage3,
    roofingImage4,
    roofingImage5,
  ];

  return (
    <section>
      <h2>Our Projects</h2>
      <ProjectContainer>
        {projectImages.map((imageUrl, index) => (
          <ProjectImage key={index} src={imageUrl} alt={`Project ${index + 1}`} />
        ))}
      </ProjectContainer>
    </section>
  );
};

export default projects