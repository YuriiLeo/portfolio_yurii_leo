import styled from "styled-components";
import { PiArrowFatLinesUpFill } from "react-icons/pi";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  text-align: center;
  z-index: 100;
  color: ${({ theme }) =>
        theme.colors.accentText};
        
    &:hover {
    color: ${({ theme }) =>
        theme.colors.textColor};
    }
`;

export const StyledIcon = styled(PiArrowFatLinesUpFill)`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border:  2px solid ${({ theme }) =>
        theme.colors.accentText};
  color: inherit;
  cursor: pointer;
`;