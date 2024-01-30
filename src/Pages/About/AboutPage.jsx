import React from 'react'
import { AboutContainer, Info } from './AboutPage.styled'
import IconList from '../../components/SkillsIconList/IconList'

export default function About() {
  return (
    <AboutContainer title={"About Me"}>
      <Info>
        <p>
          Hey there! I'm Yuriy, a Full Stack Developer driven by a lifelong fascination with technology and creativity. 💻🚀
        </p>
        <p>In my earlier years, I dedicated myself to professional sports, achieving commendable results.</p>
        <p>However, my unwavering passion for technology and a keen interest in development led me back to the dynamic world of IT.</p>
        <p>Solving complex problems is a natural forte of mine, honed through years of experience.</p>
        <p>Let's join forces and explore how my diverse background, coupled with a relentless passion for development, can elevate and ensure the success of your projects! 🌐🚀</p>
        <div>
          <p>Here are some of the things I am good at</p>
          <IconList />
        </div>
      </Info>
    </AboutContainer>
  )
}
