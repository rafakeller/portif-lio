import styled from 'styled-components';
import {
  colorsVariants,
  fontFamilyVariant,
} from '../GlobalStyle/constants/variants';

export const SummaryContent = styled.div`
  align-itens: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

export const SummaryText = styled.div`
  margin-left: 34px;
  width: 50%;
  p {
    color: ${colorsVariants.text};
    font-family: ${fontFamilyVariant.primary};
    font-size: 18px;
    font-weight: 200;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  button {
    border: 1px solid ${colorsVariants.primary};
    letter-spacing: 2px;
    padding: 10px;
    transition: background-color 0.5s, transform 0.5s;
    width: 100%;

    &:hover {
      color: ${colorsVariants.background};
      background-color: ${colorsVariants.text};
      border: 1px solid ${colorsVariants.text};
    }
  }
`;
