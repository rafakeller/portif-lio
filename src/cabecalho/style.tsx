import styled from 'styled-components';
import { colorsVariants } from '../GlobalStyle/GlobalStyle';

export const CabecalhoContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
  height: 80px;

  span {
    color: ${colorsVariants.primary};
    font-weight: 600;
  }
`;
