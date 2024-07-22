import styled from 'styled-components';
import {
  colorsVariants,
  fontFamilyVariant,
  VariantProps,
} from '../../../GlobalStyle/GlobalStyle';

export const MenuContainer = styled.nav<VariantProps>`
  position: fixed;
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: left;
  flex-direction: column;
  z-index: 1000;
  background-color: ${(prop) =>
    prop.variant ? colorsVariants.background : colorsVariants.transparent};
  transition: transform 0.5s;
  padding: 100px;

  button {
    font-size: 35px;
    font-weight: 100;
    text-transform: uppercase;
    font-family: ${fontFamilyVariant.secondary};
    padding: 5px 0 5px;
    transition: background-color 0.5s;
    margin-bottom: 10px;

    &:hover {
      background-color: ${colorsVariants.primary};
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
