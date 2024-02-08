import React from "react";
import { Item, Link, List, Menu } from "./Navbar.styled";

export default function NavbarDesktop({ navLinks, CloseModal }) {
  console.log("navLinks", navLinks);
  return (
    <>
      <Menu>
        <List>
          {navLinks && navLinks.map((el, index) => (
            <Item key={index} onClick={CloseModal} >
              <Link to={el.path}>{el.text}</Link>
            </Item>
          ))}
        </List>
      </Menu>
    </>
  );
}
