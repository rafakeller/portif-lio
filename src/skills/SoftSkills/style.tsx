import styled from 'styled-components';
import { colorsVariants } from '../../GlobalStyle/constants/variants';
import { VariantPropsTransform } from '../../GlobalStyle/types/Variants';

export const SoftSkillsContent = styled.div`
  margin: 40px 0 40px 40px;
`;

export const Skill = styled.p<VariantPropsTransform>`
  color: ${colorsVariants.text};
  font-size: 18px;
  margin: 30px;
  transform: translateX(${(props) => props.variant}%);
  transition: transform 1s ease;
  z-index: 10;
`;
