import styled from "styled-components";

export const NavBar = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  background: ${({ theme }) =>
    theme.colors.basicBackground};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  box-shadow: 0px 1px 10px 1px #9e9e9e;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

