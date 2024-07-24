import styled from 'styled-components';
import { colorsVariants } from '../GlobalStyle/GlobalStyle';

export const CabecalhoContainer = styled.header`
  background-color: ${colorsVariants.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 1000;

  span {
    color: ${colorsVariants.primary};
    font-weight: 600;
  }
`;
