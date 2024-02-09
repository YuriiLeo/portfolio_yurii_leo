import { useEffect, useRef } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useTranslation } from 'react-i18next'

import my_photo from "../../assets/img/my-photo.webp"
import { Outlet } from "react-router-dom";

import {
  ContainerHome,
  GridContainer,
  Item,
  LinkStaled,
  MyInfo,
  PhotoItem,
  ThemeToggleWrapper,
  WrapperLangSwitch,
} from "./HomePage.styled";
import IconList from "../../components/SkillsIconList/IconList";
import {
  ContactIcon,
  ProjectIcon,
  ResumeIcon,
  SkillsIcon,
} from "../../assets/Icons/Project";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
import { BodyWrapper } from "../../components/SharedLayout/SharedLayout.styled";

export default function HomePage() {
  const ref = useRef(null);
  const controls = useAnimation();
  const { t } = useTranslation();

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  useEffect(() => {
    controls.start({ opacity: 1, x: 0 });
  }, [controls]);

  return (
    <BodyWrapper>
      <ContainerHome>
        <GridContainer>
          <motion.div>
            <Item
              as={motion.div}
              initial={{ opacity: 0, x: -150 }}
              animate={controls}
              transition={{ duration: 0.5, delay: 0.5 }}>
              <motion.h2>{t('welcome')}</motion.h2>
              <WrapperLangSwitch>
                <LanguageSwitcher />
              </WrapperLangSwitch>

            </Item>
            <PhotoItem
              as={motion.div}
              initial={{ opacity: 0, x: 150 }}
              animate={controls}
              transition={{ duration: 0.5, delay: 0.6 }}>
              <ThemeToggleWrapper>
                <ThemeToggle />
              </ThemeToggleWrapper>
              <MyInfo>
                <div>
                  <img
                    src={my_photo}
                    alt="photo1"
                  />
                </div>
                <div>
                  <h3>{t('who-im')}</h3>
                  <p>{t('my-position')}</p>
                </div>
              </MyInfo>
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
              <LinkStaled to="about">
                <ResumeIcon />
                <h2>{t('nav-about')}</h2>
              </LinkStaled>

            </Item>
            <Item
              as={motion.div}
              initial={{ opacity: 0, x: 250 }}
              animate={controls}
              transition={{ duration: 0.5, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}>
              <LinkStaled to="projects">
                <ProjectIcon />
                <h2>{t('nav-projects')}</h2>
              </LinkStaled>
            </Item>
            <Item
              as={motion.div}
              initial={{ opacity: 0, x: -250 }}
              animate={controls}
              transition={{ duration: 0.5, delay: 1.5 }}
              whileHover={{ scale: 1.05 }}>
              <LinkStaled to="contacts">
                <ContactIcon />
                <h2>{t('nav-contacts')}</h2>
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
              <LinkStaled>
                <SkillsIcon />
                <h2>{t('nav-skills')}</h2>
              </LinkStaled>
              <IconList />
            </Item>
          </motion.div>
          <Outlet />
        </GridContainer>
      </ContainerHome>
    </BodyWrapper>
  );
}
