import styled from "styled-components";

export const DefaultPageStyled = styled.main`
    color: ${({ theme }) =>
    theme.colors.textColor};
    background-color: ${({ theme }) => theme.colors.background};

    max-width: 1400px;
    width: 100%;

    padding-left: 20px;
    padding-right: 20px;
    
    margin-top: 90px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    
  h2 {
    font-family: "Eczar";
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 66px;
    text-transform: uppercase;

    text-align: center;
    @media screen and (min-width:767px) {
        font-size: 60px;
    }
  }
`;

export const WrapperLangSwitch = styled.div`
    position: absolute;
    top: 120px;
    right: 15px;
    z-index: 1;
    color: #273045;
    rotate: -90deg;

    background: ${({ theme }) => theme.colors.basicBackground};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    & span {      
      &.active {
     -webkit-text-fill-color: ${({ theme }) => theme.colors.textColor};

    color: ${({ theme }) => theme.colors.textColor};

  }}

    @media (max-width: 767px) {
      visibility: hidden;
    }

    @media (min-width: 1400px) {
      right: 30px;
    }


    & li {
      font-size: 20px;
    }

    & button {
      font-size: 20px;
    }
`;
