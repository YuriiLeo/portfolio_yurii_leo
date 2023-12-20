import React from 'react'
import { ContactDetails, ContactLink, StyledLinkItem, GridContainer, ContactInfoItem, ContainerHome, StyledLink } from './ContactPage.styled'
import { Outlet } from 'react-router-dom'
import { ContactUs } from '../../components/ContactForm/ContactForm'

export default function ContactPage() {
  return (
    <ContainerHome>
      <GridContainer>
        <div>
          <ContactUs />
          <ContactInfoItem>
            <StyledLink to="projects" >
              <ContactDetails>
                <h2>Yurii Leontenko</h2>
                <div>
                  <p>Full Stack Developer</p>
                  <p>yuriileontenko@gmail.com</p>
                  <p>Krakow, Poland</p>
                </div>
              </ContactDetails>
            </StyledLink>
          </ContactInfoItem>
          <ContactInfoItem>
            <StyledLink to="resume">
              <ContactDetails>
                <StyledLinkItem>
                  <ContactLink>
                    <span>+380937755581</span>
                  </ContactLink>
                </StyledLinkItem>
                <StyledLinkItem>
                  <ContactLink>
                    <span>Send email</span>
                  </ContactLink>
                </StyledLinkItem>
                <StyledLinkItem>
                  <ContactLink>
                    <span> GitHub</span>
                  </ContactLink>
                </StyledLinkItem>
                <StyledLinkItem>
                  <ContactLink>
                    <span> Linkedin</span>
                  </ContactLink>
                </StyledLinkItem>
                <StyledLinkItem href="https://drive.google.com/file/d/10WTVBfas9Yb8JIHw1T1i6Ujg9aljeZ7F/view?usp=sharing" target="_blank" >
                  <ContactLink  >
                    <span> Donlowd resume</span>
                  </ContactLink>
                </StyledLinkItem>
              </ContactDetails>
            </StyledLink>
          </ContactInfoItem>
        </div>
        <Outlet />
      </GridContainer>
    </ContainerHome>
  )
}