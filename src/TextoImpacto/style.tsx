import styled from 'styled-components';
import { colorsVariants, fontFamilyVariant } from '../GlobalStyle/GlobalStyle';

export const TextoImapactoConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 70vh;
  margin: 0 auto;
  width: 1200px;
  max-width: 75%;
  text-transform: uppercase;
  font-size: 40px;

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
