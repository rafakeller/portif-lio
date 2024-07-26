import styled from 'styled-components';
import {
  colorsVariants,
  fontFamilyVariant,
} from '../GlobalStyle/constants/variants';

export const PhraseConteiner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 40px;
  justify-content: center;
  margin: 0 auto;
  max-width: 75%;
  min-height: 70vh;
  text-transform: uppercase;
  width: 1200px;

  span {
    font-family: ${fontFamilyVariant.secondary};

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }

  strong {
    color: ${colorsVariants.primary};
    font-weight: 700;
  }
`;
