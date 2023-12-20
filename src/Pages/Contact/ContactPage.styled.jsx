import { Container } from "../../components/Container/Container.styled";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContactDetails = styled.div`
      width: 100%;
      height: 100%;
    border-radius: 1.5rem;
    font-size: 20px;
    line-height: 1.25;
    font-weight: 700;

    & p {
        margin-top: 15px;
        font-size: 18px;

          @media (min-width: 768px) {
         font-size: 20px;
  }
    }
`;

export const ContactLink = styled.div`
    border: solid;

    border-color: ${({ theme }) =>
    theme.colors.borderColor};
    
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 1rem;
    text-align: center;
  
`;

export const StyledLinkItem = styled(Link)`
  display: contents;
`;

export const GridContainer = styled.div`
    display: grid;
    gap: 1.25rem 0 ;
    grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (min-width: 768px) {
    gap: 40px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

   @media (min-width: 1280px) {
    gap: 70px;
  }

  & > div {
    display: contents;
  }

`;

export const ContactInfoItem = styled.div`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    grid-column: span 2/span 2;
    border-radius: 1.5rem;
    background: ${({ theme }) =>
    theme.colors.basicBackground};
    padding: 1.5rem;
    opacity: 1;


  @media (min-width: 768px) {
  grid-column: auto;
   }

  & h2 {
     font-size: 32px;
     line-height: 1.5;

      @media (min-width: 768px) {
        font-size: 38px;

    }

    @media (min-width: 1200px){
        font-size: 44px;

    }
  }
`;


export const ContainerHome = styled(Container)`
  margin-top: 140px;
  color: ${({ theme }) =>
    theme.colors.textColor};
  
`;

export const StyledLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 2.5rem;

 @media (min-width: 769px) {   
  display: block;
    }
`;

