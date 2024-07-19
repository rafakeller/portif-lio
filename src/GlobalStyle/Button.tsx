import styled from 'styled-components';
import { colorsVariants } from './GlobalStyle';

export const ButtonBase = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: transparent;
  color: ${colorsVariants.text};
`;

export const Button = styled(ButtonBase)``;
