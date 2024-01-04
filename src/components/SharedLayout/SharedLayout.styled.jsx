import styled from "styled-components";

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

export const MainTitle = styled.h2`
  background: ${({ theme }) =>
    theme.colors.basicBackground};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: 768px) {
    padding: 88px 0 0px 0;
  }

  @media screen and (min-width: 1280px) {
    padding: 70px 0 0px 0;
  }
`;

