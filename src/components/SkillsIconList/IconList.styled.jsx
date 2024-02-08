import styled from "styled-components";

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 1024px) {
    gap: 1.5rem;
  }
`;

export const IconWrapper = styled.div`
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
      fill: ${({ color }) => color};
    }
  }
`;
