import React from "react"
import { ProjectsContainer } from "../../components/Container/Container.styled"


export const DefaultPageContainer = ({ children, title }) => {
    return (
        <>
            <ProjectsContainer>
                {title && <h2>{title}</h2>}
                {children}
            </ProjectsContainer>
        </>

    )
}