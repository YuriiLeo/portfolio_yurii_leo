import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) =>
    theme.colors.textColor};
    
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

    text-align: center;
    @media screen and (min-width:767px) {
        font-size: 60px;
    }

  }


  @media (min-width: 1280px) {
       padding-left: 50px;
       padding-right: 50px;
  }
`;

