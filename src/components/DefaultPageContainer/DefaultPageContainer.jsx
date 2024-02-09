import PropTypes from "prop-types";
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

DefaultPageContainer.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string
};