import styled from 'styled-components';
import { colorsVariants, fontFamilyVariant } from '../GlobalStyle/GlobalStyle';

export const TextoResumo = styled.div`
  width: 50%;
  margin-left: 34px;
  p {
    color: ${colorsVariants.text};
    font-family: ${fontFamilyVariant.primary};
    font-size: 18px;
    font-weight: 200;
    line-height: 1.5;
  }

  button {
    border: 1px solid ${colorsVariants.primary};
    padding: 10px;
    transition: background-color 0.5s, transform 0.5s;
    letter-spacing: 2px;

    &:hover {
      background-color: ${colorsVariants.text};
      color: ${colorsVariants.background};
      border: 1px solid ${colorsVariants.text};
    }
  }
`;
