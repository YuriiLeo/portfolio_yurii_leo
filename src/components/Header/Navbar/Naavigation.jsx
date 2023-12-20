import React from "react";

import { useMediaQuery } from "react-responsive";
import { Link, NavBar, Logo, Wrapper } from "./Navbar.styled";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

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
        {isMobile ? (
          <NavbarMobile />
        ) : (
          <NavbarDesktop />
        )}
      </Wrapper>
    </NavBar>
  );
}
