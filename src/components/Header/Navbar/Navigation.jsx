import React from "react";

import { useMediaQuery } from "react-responsive";
import { Link, NavBar, Logo, Wrapper, FirstLater, SecondLater } from "./Navbar.styled";
import NavbarDesktop from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile/NavbarMobile";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";
import { MyLogo } from "../../../assets/Icons/Project";

export default function Naavigation() {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <NavBar>
      <Wrapper>
        <Logo to="/">
          <MyLogo />
        </Logo>
        <ThemeToggle />
        {isMobile ? (
          <NavbarMobile />
        ) : (
          <NavbarDesktop />
        )}
      </Wrapper>
    </NavBar>
  );
}
