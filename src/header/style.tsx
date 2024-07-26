import styled from 'styled-components';
import { colorsVariants } from '../GlobalStyle/constants/variants';

export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 30px;
  position: fixed;
  width: 100%;
  z-index: 1000;

  span {
    color: ${colorsVariants.primary};
    font-weight: 600;
  }
`;
