import styled from 'styled-components';
import {
  colorsVariants,
  fontFamilyVariant,
} from '../../../GlobalStyle/GlobalStyle';

export const MenuContainer = styled.ul`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  flex-direction: column;
  z-index: 1000;
  background-color: ${colorsVariants.background};
  transition: background-color 0.5s, transform 0.5s;
  padding: 100px;

  button {
    font-size: 35px;
    font-weight: 100;
    font-family: ${fontFamilyVariant.secondary};
    height: 50px;

    &:hover {
      background-color: ${colorsVariants.primary};
      height: 40px;
      width: 1000px;
      text-align: left;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;

    button {
      &:hover {
        background-color: ${colorsVariants.primary};
        width: 300px;
        text-align: center;
      }
    }
  }
`;
