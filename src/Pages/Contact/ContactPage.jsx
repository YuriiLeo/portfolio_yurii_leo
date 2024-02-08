import React from 'react'
import { ContactDetails, ContactLink, StyledLinkItem, GridContainer, ContactInfoItem, StyledLink } from './ContactPage.styled'
import { Outlet } from 'react-router-dom'
import { ContactUs } from '../../components/ContactForm/ContactForm'

import { useTranslation } from 'react-i18next'

import { DefaultPageContainer } from '../../components/DefaultPageContainer/DefaultPageContainer'


export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <DefaultPageContainer title={t('contacts-title')}>
      <GridContainer>
        <div>
          <ContactUs />
          <ContactInfoItem>
            <StyledLink to="projects" >
              <ContactDetails>
                <h2>{t('my-name')}</h2>
                <div>
                  <p>Full Stack Developer</p>
                  <p>yuriileontenko@gmail.com</p>
                  <p>{t('my-location')}</p>
                </div>
              </ContactDetails>
            </StyledLink>
          </ContactInfoItem>
          <ContactInfoItem>
            <StyledLink to="resume">
              <ContactDetails>
                <StyledLinkItem to='tel:+380937744581'>
                  <ContactLink>
                    <span>+380937755581</span>
                  </ContactLink>
                </StyledLinkItem>
                <StyledLinkItem to='mailto:yuriileontenko@gmail.com'>
                  <ContactLink>
                    <span>{t('contacts-action-email')}</span>
                  </ContactLink>
                </StyledLinkItem>
                <StyledLinkItem to='https://github.com/YuriiLeo' target='_blank'>
                  <ContactLink >
                    <span> GitHub</span>
                  </ContactLink>
                </StyledLinkItem>
                <StyledLinkItem to='https://www.linkedin.com/in/yurii-leontenko' target='_blank'>
                  <ContactLink>
                    <span> Linkedin</span>
                  </ContactLink>
                </StyledLinkItem>
                <StyledLinkItem href="https://drive.google.com/file/d/10WTVBfas9Yb8JIHw1T1i6Ujg9aljeZ7F/view?usp=sharing" target="_blank" >
                  <ContactLink  >
                    <span>{t('contacts-action-resume')}</span>
                  </ContactLink>
                </StyledLinkItem>
              </ContactDetails>
            </StyledLink>
          </ContactInfoItem>
        </div>
        <Outlet />
      </GridContainer>
    </DefaultPageContainer >
  )
}
