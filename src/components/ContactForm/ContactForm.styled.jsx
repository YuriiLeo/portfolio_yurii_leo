import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    font-size: 20px;
    line-height: 1.25;
    font-weight: 700;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    button {
    margin: 1rem 0;
    cursor: pointer;
    background: inherit;
    border: solid rgb(216, 207, 206);
    height: 3.5rem;
    border-radius: 0.5rem;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    }
  
`;

export const Item = styled.div`
    display: flex;
    grid-column: span 2/span 2;
    border-radius: 1.5rem;
    background: ${({ theme }) =>
    theme.colors.basicBackground};
    padding: 1.5rem;
    opacity: 1;

  @media (min-width: 768px) {

  grid-column: auto;
   }

  @media (min-width: 1200px) {

  }
`;
