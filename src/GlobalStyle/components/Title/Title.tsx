import styled from 'styled-components';
import { colorsVariants, fontFamilyVariant } from '../../constants/variants';
import { VariantColorsProps } from '../../types/Variants';

export const MainTitle = styled.h1`
  color: ${colorsVariants.text};
  font-family: ${fontFamilyVariant.primary};
  font-size: 40px;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const TitleBase = styled.h2<VariantColorsProps>`
  color: ${colorsVariants.text};
  font-family: ${fontFamilyVariant.primary};
`;

export const Title = styled(TitleBase)<VariantColorsProps>`
  color: ${(props) => colorsVariants[props.variant] || colorsVariants.primary};
  font-size: 20px;
  letter-spacing: 4px;

  @media (max-width: 768px) {
    font-size: 14.5px;
  }
`;

export const TitleProjects = styled.h2<VariantColorsProps>`
  color: ${(props) => colorsVariants[props.variant] || colorsVariants.primary};
  font-size: 25px;
`;
