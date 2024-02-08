import React from 'react';
import ProjectsItem from './ProjectsItem/ProjectsItem';
import { Container } from './Projects.styled';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';
import { useTranslation } from 'react-i18next'

import movies_search from '../../assets/img/movies_search_screen.webp'
import phonebook from '../../assets/img/phonebook_screen.webp'
import ice_cream from '../../assets/img/ice_cream_screen.webp'
import web_studio from '../../assets/img/web_studio_screen.webp'

export default function Projects() {
  const { t } = useTranslation();

  const projectsDate = [
    {
      "id": 1,
      "title": "WebStudio",
      "image": web_studio,
      "description": t('web-studio-description'),
      "techSkills": ["HTML", "SASS", "JS"],
      "githubLink": "https://github.com/YuriiLeo/web_studio",
      "siteLink": "http://yuriileo.github.io/web_studio/"
    },
    {
      "id": 2,
      "title": "Movies Search",
      "image": movies_search,
      "description": t('movies-description'),
      "techSkills": [
        "React",
        "Redux",
        "Axios",
        "Styled Components"
      ],
      "githubLink": "https://github.com/YuriiLeo/movie-search-react",
      "siteLink": "https://yuriileo.github.io/movie-search-react/"
    },
    {
      "id": 3,
      "title": "Phonebook",
      "image": phonebook,
      "description": t('phonebook-description'),
      "techSkills": ["React", "Redux", "Axios", "MUI"],
      "githubLink": "https://github.com/YuriiLeo/phonebook_react",
      "siteLink": "https://yuriileo.github.io/phonebook_react/"
    },
    {
      "id": 4,
      "title": "IceCream",
      "image": ice_cream,
      "description": t('ice-cream-description'),
      "techSkills": ["HTML", "Parcel", "SCSS", "JS"],
      "githubLink": "https://github.com/YuriiLeo/ice_cream_new",
      "siteLink": "https://yuriileo.github.io/ice_cream_new/"
    },
  ]

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