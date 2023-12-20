import React, { useState } from "react";
import { BtnClouse, DarkLight, Item, Link, List, Menu } from "./Navbar.styled";
import { CloseIcon, MenuIcon } from "../../../assets/Icons/Project";
// import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import { navLinks } from "../../DataJSON/navLink";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";

export default function NavbarMobile() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sidebarTogle = () => {
    setSidebarOpen((prevState) => !prevState);
  };
  return (
    <>
      {sidebarOpen ? (
        <BtnClouse onClick={sidebarTogle}>
          <MenuIcon />
        </BtnClouse>
      ) : null}
      {!sidebarOpen ? (
        <>
          <Menu>
            <div>
              <span>
                <Link>YL</Link>
              </span>
              <div>
                <ThemeToggle />
                <DarkLight className="darkLight">
                  <BtnClouse onClick={sidebarTogle}>
                    <CloseIcon />
                  </BtnClouse>
                </DarkLight>
              </div>
            </div>
            <List>
              {navLinks.map((el, index) => (
                <Item key={index} onClick={sidebarTogle}>
                  <Link to={el.path}>{el.text}</Link>
                </Item>
              ))}
            </List>
          </Menu>
        </>
      ) : null}
    </>
  );
}