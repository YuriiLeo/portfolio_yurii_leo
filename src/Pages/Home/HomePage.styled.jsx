import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../components/Container/Container.styled";
import { ResumeIcon } from "../../assets/Icons/Project";

export const ContainerHome = styled(Container)`
  margin-top: 2%;
  color: ${({ theme }) => theme.colors.textColor};

  @media (min-width: 1280px) {
    padding-left: 150px;
    padding-right: 150px;
  }
`;

export const ThemeToggleWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const GridContainer = styled.header`
  display: grid;
  gap: 1.25rem 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (min-width: 768px) {
    gap: 1.25rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  & > div {
    display: contents;
  }
`;

export const Item = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-column: span 2 / span 2;
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.colors.basicBackground};
  padding: 1.5rem;
  opacity: 0.9;

  @media (min-width: 426px) and (max-width: 767px) {
    padding: 2rem 4rem;
  }

  @media (min-width: 768px) {
    grid-column: auto;
  }

  @media (min-width: 1024px) {
    padding: 2rem;
  }

  &:hover, :focus {
    transform: scale(1.05);
    cursor: pointer;
  }

  &:first-child {
    background: inherit;
    grid-row: 1 / span 2;
    margin: auto;
    padding: 1rem;

    &:hover {
      cursor: default;
      transform: scale(1);
    }

    & h2 {
      font-size: 34px;

      @media (min-width: 1024px) {
        font-size: 47px;
      }
    }

    @media (min-width: 1200px) {
      padding: 0;
      text-align: center;
      margin: auto;
    }
  }

  &:last-child {
    &:hover, :focus {
      transform: scale(1);
      cursor: default;
    }
  }

  &:last-child > a {
    display: flex;
    margin-bottom: 2rem;
    flex-direction: row;
  }

  & > h2 {
    background: ${({ theme }) => theme.colors.basicBackground};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & h2 {
    font-size: 30px;
    line-height: 1.1;
    text-align: center;

    @media (min-width: 1200px) {
      font-size: 38px;
    }
  }
`;

export const FirstItem = styled(Item)`
  @media (max-width: 769px) {
    grid-column: span 4;
  }
`;

export const PhotoItem = styled(Item)`
  position: relative;
  grid-column: span 3 / span 3;
  display: flex;
  padding: 2rem;

  &:hover, :focus {
    transform: scale(1);
    cursor: default;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const LinkStaled = styled(Link)`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  & svg {
    height: 2.5em;

    &:hover {
    fill: ${({ theme }) =>
    theme.colors.accentText};
    
    stroke: ${({ theme }) =>
    theme.colors.accentText};
    }
  }
`;


export const LinkAbout = styled(LinkStaled)`
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 2.5rem;
    flex-direction: row;
  }

  & img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  & h3 {
    font-size: 21px;

    @media (min-width: 768px) {
      font-size: 30px;
    }

    @media (min-width: 1024px) {
      font-size: 36px;
    }
  }

  & p {
    margin-top: 10px;
    font-size: 17px;

    @media (min-width: 768px) {
      font-size: 23px;
    }

    @media (min-width: 1024px) {
      font-size: 26px;
    }
  }
`;

