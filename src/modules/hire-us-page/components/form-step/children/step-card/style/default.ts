import styled, {css} from "styled-components";

export const StepCardWrapper = styled.a<{current?: boolean}>`
  margin-top: 1em;
  padding: 1em;
  background-color: #ddd;
  
  color: #000;
  text-decoration: none;
  
  transition: all .3s 0s ease-in-out;
  
  strong {
    font-size: 1.1em;
  }

  &:first-child {
    margin-top: 0;
  }
  
  &:hover {
    background-color: #FDD708;
  }

  ${props => props.current && css`
    background-color: #FDD708; 
  `}
`;