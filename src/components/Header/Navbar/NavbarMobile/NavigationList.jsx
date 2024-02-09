import PropTypes from "prop-types";

import { MenuItem } from "./MenuItem";
import { List } from "./NavbarMobile.styled";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const NavigationList = ({ navLinks, toggle }) => (
    <List
        variants={variants}>
        {navLinks.map((el, index) => (
            <MenuItem i={index} key={index} to={el.path} text={el.text} toggle={toggle} />
        ))}
    </List>
);

NavigationList.propTypes = {
    navLinks: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    toggle: PropTypes.func.isRequired
};