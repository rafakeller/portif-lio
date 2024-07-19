import styled from 'styled-components';
import { colorsVariants, fontFamilyVariant, VariantProps } from './GlobalStyle';

export const MainTitleBase = styled.h1`
  font-family: ${fontFamilyVariant.primary};
  color: ${colorsVariants.text};
`;

export const MainTitle = styled(MainTitleBase)`
  font-size: 40px;
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const TitleBase = styled.h2<VariantProps>`
  font-family: ${fontFamilyVariant.primary};
  color: ${colorsVariants.text};
`;

export const Title = styled(TitleBase)<VariantProps>`
  color: ${(props) => colorsVariants[props.variant] || colorsVariants.primary};
  letter-spacing: 4px;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 14.5px;
  }
`;
