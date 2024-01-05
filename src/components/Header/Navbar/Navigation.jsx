import React from "react";

import { useMediaQuery } from "react-responsive";
import { Link, NavBar, Logo, Wrapper } from "./Navbar.styled";
import NavbarDesktop from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile/NavbarMobile";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";

export default function Naavigation() {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <NavBar>
      <Wrapper>
        <Logo>
          <span>
            <Link to="/">YL</Link>
          </span>
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
