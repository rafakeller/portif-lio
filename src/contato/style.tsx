import styled from 'styled-components';
import { colorsVariants } from '../GlobalStyle/GlobalStyle';

export const SocialConteiner = styled.div`
  display: flex;
  margin-left: 34px;

  p {
    font-size: 18px;
  }
  a {
    color: ${colorsVariants.secondary};

    text-decoration: underline;
  }
  a {
    margin-right: 15px;
  }
`;
