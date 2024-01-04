import styled from "styled-components";
import { motion } from 'framer-motion';

export const ProjectContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  min-height: 640px;
  max-height: 90vh;
  color: ${({ theme }) =>
    theme.colors.textColor};

    @media (min-width: 1024px) {
      flex-direction: row;
      justify-content: flex-start;

      &:nth-of-type(2n+1) {
        justify-content: flex-end;

    & > div {        
      &:nth-child(2) {
        
        @media (min-width: 1024px) {
        left: 0px;
    }
        }}
    }}
`;

export const ProjectImageContainer = styled(motion.div)`
    width: 100%;
    height: 320px;
    background: ${({ theme }) =>
    theme.colors.background};
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: rgb(158, 158, 158) 0px 4px 10px 4px;

        @media (min-width: 768px) {
      height: 350px;
    
  }
          @media (min-width: 1024px) {
        width: 600px;   
  }
            @media (min-width: 1440px) {
        width: 700px;   
  }
`;

export const Image = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0px;
    color: transparent;
    object-fit: cover;
    object-position: 5%;
`;

export const ImageOverlay = styled.div`
      position: absolute;
      width: inherit;
      height: inherit;
      background: linear-gradient(
        0deg,
        /* rgba(29, 36, 51, 0.7),
        rgba(29, 36, 51, 0.7) */
                  rgba(53,141,222, 0.4),
          rgba(53,141,222, 0.1)
      );
      border-radius: 3px;
      transition: opacity 800ms;

        @media (min-width: 576px) {
        background: linear-gradient(
          0deg,
          rgba(53,141,222, 0.4),
          rgba(53,141,222, 0.1)
        );
  }

`;


export const ProjectDetailsContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 320px;
    border-radius: 3px;
    padding: 10px;

    background: ${({ theme }) =>
    theme.colors.mobileDetailBackground};
    box-shadow: rgb(158, 158, 158) 0px 4px 10px 4px;

     @media (min-width: 576px) {
      padding: 30px;
    }

     @media (min-width: 768px) {
    height: 350px;
    }

     @media (min-width: 1024px) {
      position: absolute;
      right: 0px;
      width: 600px;
      background: ${({ theme }) =>
    theme.colors.basicBackground};
  
  }

      @media (min-width: 1440px) {
      background: ${({ theme }) =>
    theme.colors.basicBackground};
    
  }

    & a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    z-index: 5;

    @media (min-width: 768px) {
      gap: 20px;
    }

    @media (min-width: 1200px){
      align-items: flex-start;
    }
    }

    & p {
    font-size: 14px;
    margin-bottom: 0;
    text-align: center;
    padding: 5px 8px;

    @media (min-width: 576px) {
      text-align: left;
      font-size: 16px;
    }
  }  
`;

export const IntroName = styled.h2`
    font-size: 24px;
    font-weight: 800;
    margin: 0;
    text-align: center;

    @media (min-width: 576px) {
      font-size: 36px;
      text-align: center;
    }

    @media (min-width: 768px) {
      text-align: left;
      font-size: 56px;
    }
`;

export const LinksContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 25px;
    font-size: 21px;

    @media (min-width: 768px) {
      justify-content: flex-start;
    }

  & a {
    z-index: 10;
    padding: 5px 8px;

    &:hover {
    color: ${({ theme }) =>
    theme.colors.textColor};
    }
  }
`;


export const SkillsContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 20px;
    list-style: none;
    padding: 0;

    @media(min-width: 768px) {
      justify-content: flex-start;
      margin-top: 10px;
    }

    & li {
      font-size: 12px;
      transition: font-size 400ms;


      @media (min-width: 992px){
        margin-top: 10px;
        font-size: 14px;
      }
    }
`;

export const RevealOnScroll = styled.div`
  padding: 0;
  margin: 0;
  opacity: 1;
  transform: none;
`;




