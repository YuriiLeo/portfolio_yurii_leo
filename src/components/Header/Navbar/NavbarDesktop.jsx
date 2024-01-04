import React from "react";
import { navLinks } from "../../DataJSON/navLink";
import { Item, Link, List, Menu } from "./Navbar.styled";

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
    </>
  );
}
