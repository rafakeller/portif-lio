import styled from 'styled-components';
import { VariantPropsTransform } from '../../projetos/types/TransformProps';
import { colorsVariants } from '../../GlobalStyle/GlobalStyle';

export const SoftSkillsConteiner = styled.div`
  margin: 40px 0 40px 40px;
`;

export const Skill = styled.p<VariantPropsTransform>`
  transition: transform 1s ease;
  transform: translateX(${(props) => props.variant}%);
  z-index: 10;
  color: ${colorsVariants.text};
  font-size: 18px;
  margin: 30px;
`;
