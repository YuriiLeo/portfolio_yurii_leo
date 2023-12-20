import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 70px;
  width: 100%;
  background: ${({ theme }) =>
    theme.colors.basicBackground};
  z-index: 100;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1400px;
  padding-left: 20px;
  padding-right: 20px;

  margin-left: auto;
  margin-right: auto;

      @media (min-width: 768px) {
       padding-left: 40px;
      padding-right: 40px;
  }

        @media (min-width: 1280px) {
       padding-left: 50px;
       padding-right: 50px;
  }
  
`;
export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const List = styled.ul`
      display: flex;
      justify-content: space-evenly;
    

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      padding-top: 60px;
    }
`;

export const Item = styled.li`
      
      list-style: none;

      @media (max-width: 767) {
        margin-top: 30px;
      }
      
      & a {
        position: relative;
        font-size: 20px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.textColor};

        text-decoration: none;
        padding: 10px;

        @media (max-width: 767px) {
          display: block;
          font-size: 45px;
          margin-top: 30px;
        }

        &:hover {
          &::before {
            opacity: 1;
            color: red;
          }
        }

        &::before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          height: 6px;
          width: 6px;
          border-radius: 50%;
          transition: all 0.5s ease;
        }
      }
  
`;

export const Menu = styled.nav`
  z-index: 100;

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }


  @media (max-width: 767px) {
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    padding: 20px;
    background: ${({ theme }) =>
    theme.colors.mobileDetailBackground};
    z-index: 100;
    transition: all 1s ease;
  }
    @media (min-width: 768px) {
    width: 520px;
  }
`;
export const BtnClouse = styled.button`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  background-color: transparent;
  border: none;

  & svg {
    position: absolute;
    color: wheat;
    width: 22px;
    height: 22px;
    cursor: pointer;
  }
`;
export const DarkLight = styled.div`
  display: flex;
  align-items: center;

  & div {
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;

    & svg {
      position: absolute;
      color: ${({ theme }) => theme.colors.textColor};
      width: 22px;
      height: 22px;
      cursor: pointer;
    }
  }
`;

export const Link = styled(NavLink)`
  font-family: Manrope;

  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 27px;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accentText};
  }

  &.active {
  -webkit-text-fill-color: white;

    color: white;
  }
`;
