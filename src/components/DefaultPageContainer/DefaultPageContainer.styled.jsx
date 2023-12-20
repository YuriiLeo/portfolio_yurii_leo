import styled from "styled-components";

export const DefaultPageStyled = styled.main`
    color: ${({ theme }) =>
    theme.colors.textColor};
    background-color: ${({ theme }) => theme.colors.background};

    margin-top: 70px;
    margin-bottom: 40px;

    max-width: 1400px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
    
  h2 {
    font-family: "Eczar";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 66px;

    text-align: center;
    @media screen and (min-width:767px) {
        font-size: 48px;
    }

  }
`;
