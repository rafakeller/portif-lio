import styled from 'styled-components';
import { colorsVariants, VariantProps } from '../GlobalStyle/GlobalStyle';

export const Conteiner = styled.div`
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

export const ProjetoConteiner = styled.ul`
  border: 1px solid ${colorsVariants.primary};
  padding: 17px;
  width: 90%;
  margin: 0 auto;
`;

export const ProjetoDescricao = styled.li`
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
