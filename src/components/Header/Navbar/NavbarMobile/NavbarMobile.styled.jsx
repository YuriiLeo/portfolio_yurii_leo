import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";


export const Navigation = styled(motion.nav)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 500px;
`;

export const Background = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: ${({ theme }) =>
    theme.colors.mobileDetailBackground};
`;

export const List = styled(motion.ul)`
    position: absolute;
    top: 100px;
    width: 95%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
`;

export const Item = styled(motion.li)`
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const Link = styled(NavLink)`
    font-family: Manrope;

    text-decoration: none;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: 0.04em;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accentText};
  }

  &.active {
    -webkit-text-fill-color: white;

    color: white;
  }
`;

export const ButtonToggle = styled.button`
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    position: absolute;
    top: 18px;
    right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
`;