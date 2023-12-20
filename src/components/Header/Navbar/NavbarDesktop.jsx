import React from "react";
import { navLinks } from "../../DataJSON/navLink";
import { Item, Link, List, Menu } from "./Navbar.styled";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";

export default function NavbarDesktop({ CloseModal }) {
  return (
    <>
      <Menu>
        <List>
          {navLinks.map((el, index) => (
            <Item key={index} onClick={CloseModal} >
              <Link to={el.path}>{el.text}</Link>
            </Item>
          ))}
        </List>
      </Menu>
      <ThemeToggle />
    </>
  );
}
