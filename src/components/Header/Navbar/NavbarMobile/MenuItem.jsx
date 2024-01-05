import * as React from "react";
import { Item, Link } from "./NavbarMobile.styled";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

export const MenuItem = ({ to, text, toggle }) => {
    return (
        <Item
            onClick={toggle}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link to={to} >{text}</Link>
        </Item>
    );
};
