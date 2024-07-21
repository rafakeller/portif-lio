import styled from 'styled-components';
import { colorsVariants } from '../GlobalStyle/GlobalStyle';

export const HabilidadesConteiner = styled.div`
  img {
    margin: 10px;
  }
`;

export const SoftSkillsConteiner = styled.div`
  margin: 20px 0 20px 50px;
  p {
    color: ${colorsVariants.text};
    font-size: 18px;
    margin: 30px;
  }
`;
