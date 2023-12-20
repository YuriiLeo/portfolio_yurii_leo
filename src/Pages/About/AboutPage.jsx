import { DefaultPageContainer } from '../../components/DefaultPageContainer/DefaultPageContainer'
import React from 'react'
import { Info } from './AboutPage.styled'

export default function About() {
  return (
    <DefaultPageContainer title={"About Me"}>
      <Info>
        <p>
          I am a Full stack developer with sound knowledge of HTML5, CSS3, JS, React, React Native, Node.js.
          For me important self development, possibilities to learn and practice something new.
          Always ready for challenging tasks.
        </p>
      </Info>
    </DefaultPageContainer>
  )
}
