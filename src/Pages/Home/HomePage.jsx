import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from 'framer-motion';

import { Outlet } from "react-router-dom";

import {
  ContainerHome,
  GridContainer,
  Item,
  LinkAbout,
  LinkStaled,
  PhotoItem,
  ThemeToggleWrapper,
} from "./HomePage.styled";
import IconList from "../../components/SkillsIconList/IconList";
import {
  ContactIcon,
  ProjectIcon,
  ResumeIcon,
  SkillsIcon,
} from "../../assets/Icons/Project";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";

export default function HomePage() {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  useEffect(() => {
    controls.start({ opacity: 1, x: 0 });
  }, [controls]);

  return (
    <ContainerHome>
      <GridContainer>
        <motion.div>
          <Item
            as={motion.div}
            initial={{ opacity: 0, x: -150 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.5 }}>
            <motion.h2>
              Welcome to my portfolio
            </motion.h2>
          </Item>
          <PhotoItem
            as={motion.div}
            initial={{ opacity: 0, x: 150 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.6 }}>
            <ThemeToggleWrapper>
              <ThemeToggle />
            </ThemeToggleWrapper>
            <LinkAbout
              to="about"
            >
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg"
                  alt="photo1"
                />
              </div>
              <div>
                <h3>I'm Yurii Leonteko</h3>
                <p>Full Stack developer</p>
              </div>
            </LinkAbout>
          </PhotoItem>
          <Item
            as={motion.div}
            initial={{ opacity: 0, x: 150 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            style={{
              gridColumn: "span 2",
            }}
          >
            <LinkStaled to="projects">
              <ProjectIcon />
              <h2>Projects</h2>
            </LinkStaled>
          </Item>
          <Item
            as={motion.div}
            initial={{ opacity: 0, x: 250 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}>
            <LinkStaled to="resume">
              <ResumeIcon />
              <h2>Resume</h2>
            </LinkStaled>
          </Item>
          <Item
            as={motion.div}
            initial={{ opacity: 0, x: -250 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 1.5 }}
            whileHover={{ scale: 1.05 }}>
            <LinkStaled to="contact">
              <ContactIcon />
              <h2>Contact</h2>
            </LinkStaled>
          </Item>
          <Item
            as={motion.div}
            initial={{ opacity: 0, x: -150 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 1.6 }}
            style={{
              gridColumn: "span 3 / span 3",
            }}
          >
            <LinkStaled to="skills">
              <SkillsIcon />
              <h2>Skills</h2>
            </LinkStaled>
            <IconList />
          </Item>
        </motion.div>
        <Outlet />
      </GridContainer>
      {/* <GridContainer>
        <div>
          <Item>
            <h2>
              Welcome to my portfolio
            </h2>
          </Item>
          <PhotoItem>
            <ThemeToggleWrapper>
              <ThemeToggle />
            </ThemeToggleWrapper>
            <LinkAbout
              to="about"
            >
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg"
                  alt="photo1"
                />
              </div>
              <div>
                <h3>I'm Yurii Leonteko</h3>
                <p>Full Stack developer</p>
              </div>
            </LinkAbout>
          </PhotoItem>
          <Item
            style={{
              gridColumn: "span 2",
            }}
          >
            <LinkStaled to="projects">
              <ProjectIcon />
              <h2>Projects</h2>
            </LinkStaled>
          </Item>
          <Item>
            <LinkStaled to="resume">
              <ResumeIcon />
              <h2>Resume</h2>
            </LinkStaled>
          </Item>
          <Item>
            <LinkStaled to="contact">
              <ContactIcon />
              <h2>Contact</h2>
            </LinkStaled>
          </Item>
          <Item
            style={{
              gridColumn: "span 3 / span 3",
            }}
          >
            <LinkStaled to="skills">
              <SkillsIcon />
              <h2>Skills</h2>
            </LinkStaled>
            <IconList />
          </Item>
        </div>
        <Outlet />
      </GridContainer> */}
    </ContainerHome>
  );
}
