import PropTypes from "prop-types";

import { Item, Link, List, Menu } from "./Navbar.styled";

export default function NavbarDesktop({ navLinks, CloseModal }) {
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

NavbarDesktop.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  CloseModal: PropTypes.func.isRequired
};