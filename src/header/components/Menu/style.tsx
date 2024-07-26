import styled from 'styled-components';
import {
  colorsVariants,
  fontFamilyVariant,
} from '../../../GlobalStyle/constants/variants';
import { VariantBooleanProps } from '../../../GlobalStyle/types/Variants';

export const MenuContainer = styled.nav<VariantBooleanProps>`
  background-color: ${colorsVariants.background};
  display: ${(prop) => (prop.variant ? 'flex' : 'none')};
  flex-direction: column;
  height: 100%;
  justify-content: left;
  padding: 100px;
  position: fixed;
  transition: transform 0.5s;
  width: 100%;

  button {
    font-family: ${fontFamilyVariant.secondary};
    font-size: 35px;
    font-weight: 100;
    margin-bottom: 10px;
    padding: 5px 0 5px;
    text-transform: uppercase;
    transition: background-color 0.5s;

    &:hover {
      background-color: ${colorsVariants.primary};
      text-align: left;
      width: 1000px;
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;

    button {
      &:hover {
        background-color: ${colorsVariants.primary};
        text-align: center;
        width: 300px;
      }
    }
  }
`;
