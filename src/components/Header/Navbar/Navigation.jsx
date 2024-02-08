import { useMediaQuery } from "react-responsive";
import { NavBar, Logo, Wrapper, ThemeToggleWrapper } from "./Navbar.styled";
import NavbarDesktop from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile/NavbarMobile";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";
import { MyLogo } from "../../../assets/Icons/Project";
import { useTranslation } from "react-i18next";

export default function Naavigation() {
  const { t } = useTranslation();

  const navLinks = [
    { path: "/projects", text: t("nav-projects") },
    { path: "/about", text: t("nav-about") },
    { path: "/contacts", text: t("nav-contacts") }
  ];

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <NavBar>
      <Wrapper>
        <Logo to="/">
          <MyLogo />
        </Logo>
        {isMobile ? (
          <NavbarMobile navLinks={navLinks} />
        ) : (
          <NavbarDesktop navLinks={navLinks} />
        )}
        <ThemeToggleWrapper>
          <ThemeToggle />
        </ThemeToggleWrapper>
      </Wrapper>
    </NavBar>
  );
}
