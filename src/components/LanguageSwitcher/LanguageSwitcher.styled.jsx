import styled from "styled-components";

export const WrapperLangSwitch = styled.div`
    position: absolute;
    top: 170px;
    left: 10px;
    z-index: 1;

    color: ${({ theme }) => theme.colors.textColor};
    
   @media (min-width: 375px) {
    top: 130px;
  }

    @media (min-width: 768px) {
    top: 0;
    background: ${({ theme }) => theme.colors.basicBackground};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ListItem = styled.li`
  &:after {
    content: "|";
    padding-right: 2px;
  }

  &:last-child:after {
    content: none;
    padding-right: 0;
  }
`;

export const Button = styled.button`
  pointer-events: auto;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
   &.pointer-events-none{
    pointer-events: none;
    cursor: not-allowed;
   }
`;

export const Text = styled.span`
  text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textColor};

    &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accentText};
  }

  &.active {
  -webkit-text-fill-color: white;

    color: white;
  }

  @media (min-width: 768px) {
  }
`;