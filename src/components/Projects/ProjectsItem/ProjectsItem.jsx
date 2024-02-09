import PropTypes from "prop-types";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Image, ImageOverlay, IntroName, LinksContainer, ProjectContainer, ProjectDetailsContainer, ProjectImageContainer, RevealOnScroll, SkillsContainer } from './ProjectsItem.styled';
import { Link } from 'react-router-dom';
import { fadeIn, staggerContainer } from '../../../utils/motion';


export default function ProjectsItem({ title, img, description, techSkills, githubLink, siteLink }) {

  return (
    <>
      <ProjectContainer
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <ProjectImageContainer
          variants={fadeIn('right', 'tween', 0.3, 1)}>
          <Image
            src={img}
            alt={title}
            placeholder="blur"
          />
          <ImageOverlay />
        </ProjectImageContainer>

        <ProjectDetailsContainer
          variants={fadeIn('right', 'tween', 0.6, 1)}
          whileHover={{ scale: 1.1 }}
          offset={20}
        >
          <>
            <IntroName
              title={title}
              initialDelay={2}
              wordDelay={0.1}
            >{title}</IntroName>
            <>
              <SkillsContainer>
                {techSkills.map((skill, index) => (
                  <RevealOnScroll
                    key={index}
                    delay={0.5 + 0.1 * index}
                    duration={0.4}
                  >
                    <li>
                      <p>{skill}</p>
                    </li>
                  </RevealOnScroll>
                ))}
              </SkillsContainer>
              <RevealOnScroll delay={1}>
                <p>{description}</p>
              </RevealOnScroll>
              <LinksContainer>
                <Link
                  to={githubLink}
                  target="_blank">
                  <FaGithub />
                </Link>
                <Link
                  to={siteLink}
                  target="_blank"
                >
                  <FaExternalLinkAlt />
                </Link>
              </LinksContainer>
            </>
          </>
        </ProjectDetailsContainer>
      </ProjectContainer>
    </>
  )
}

ProjectsItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techSkills: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string.isRequired,
  siteLink: PropTypes.string.isRequired,
};