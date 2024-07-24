import styled from 'styled-components';
import { colorsVariants } from '../GlobalStyle/GlobalStyle';

export const CabecalhoContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 1000;

  span {
    color: ${colorsVariants.primary};
    font-weight: 600;
  }
`;
