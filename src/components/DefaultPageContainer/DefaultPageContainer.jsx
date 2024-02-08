import React from "react"
import { DefaultPageStyled, WrapperLangSwitch } from "./DefaultPageContainer.styled"
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"



export const DefaultPageContainer = ({ children, title }) => {
    return (
        <>
            <DefaultPageStyled>
                {title && <h2>{title}</h2>}
                <WrapperLangSwitch>
                    <LanguageSwitcher />
                </WrapperLangSwitch>
                {children}
            </DefaultPageStyled>
        </>

    )
}