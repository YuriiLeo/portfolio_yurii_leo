import React from 'react';
import ProjectsItem from './ProjectsItem/ProjectsItem';
import { Container } from './Projects.styled';
import { projectsDate } from '../../components/DataJSON/projectsDate';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';

export default function Projects() {
  return (
    <Container>
      <ScrollToTop />
      {
        projectsDate.map(({ id, title, image, description, techSkills, githubLink, siteLink }) => {
          return (
            <ProjectsItem
              index={id}
              key={id}
              title={title}
              img={image}
              description={description}
              techSkills={techSkills}
              githubLink={githubLink}
              siteLink={siteLink} />)
        })}
    </Container>
  );

}