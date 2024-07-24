import styled from 'styled-components';
import { colorsVariants, VariantProps } from '../GlobalStyle/GlobalStyle';
import { VariantPropsTransform } from './types/TransformProps';

export const Conteiner = styled.section`
  display: flex;
  align-itens: left;
  flex-direction: column;
  gap: 40px;
  width: 85%;
  margin: 60px auto;

  > div {
    display: flex;
    align-itens: center;
    flex-direction: column;
    gap: 20px;
  }
`;

export const TitleProjetos = styled.h2<VariantProps>`
  font-size: 25px;
  color: ${(props) => colorsVariants[props.variant] || colorsVariants.primary};
`;

export const ProjetoDescricao = styled.li`
  border: 1px solid ${colorsVariants.primary};
  padding: 17px;
  width: 90%;
  margin: 15px auto;
  position: relative;
  overflow: hidden;

  h3 {
    font-size: 19px;
    color: ${colorsVariants.text};
    font-weight: 800;
  }
  p {
    font-size: 18px;
    color: ${colorsVariants.text};
    margin: 10px 0 20px 0;
  }

  div {
    padding: 0;
    a {
      text-transform: uppercase;
      font-weight: 200;
      color: ${colorsVariants.primary};
      margin-right: 10px;
    }
  }
`;

export const Cover = styled.div<VariantPropsTransform>`
  border: 1px solid ${colorsVariants.primary};
  background-color: ${colorsVariants.primary};
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.variant}%);
  position: absolute;
  z-index: 10;
`;
