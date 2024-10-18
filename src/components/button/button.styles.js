import styled from 'styled-components';

const StyledButton = styled.button`
  // background-color: ${props => props.color}; ES lo mismo que la linea de abajo
  background-color: ${({ $color }) => $color};
  padding: ${({ $padding }) => $padding};
  border-radius: ${({ $rounded }) => ($rounded ? '1rem' : 'none')};
  border: none;
`;

/* @media (hover: hover) {
    ${({ $hover }) =>
      $hover &&
    // `
    //   &:hover{
    //     color:white
    //   }
    // `}
    
}
  } */

export { StyledButton };
