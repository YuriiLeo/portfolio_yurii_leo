import styled from "styled-components";

export const IconsWrapper = styled.div`
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const IconLink = styled.a`
  & svg {
    height: 2.5rem;
    width: 2.5rem;

    @media (min-width: 1024px) {
      height: 3rem;
      width: 3rem;
    }
  }

  &:hover {
    transform: scale(1.1);
    svg {
      fill: ${({ color }) =>
    color};
    }
  }
`;
