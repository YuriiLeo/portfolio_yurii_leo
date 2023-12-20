import React from 'react'
import { DefaultPageContainer } from '../../components/DefaultPageContainer/DefaultPageContainer'
import Projects from '../../components/Projects/Projects'

export default function ProjectsPage() {
  return (
    <DefaultPageContainer title={"My Project"}>
      <Projects />
    </DefaultPageContainer>
  )
}

