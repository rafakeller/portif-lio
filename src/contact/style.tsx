import styled from 'styled-components';
import { colorsVariants } from '../GlobalStyle/constants/variants';

export const SocialMediaContent = styled.div`
  display: flex;
  margin-left: 34px;

  p {
    font-size: 18px;
  }

  div {
    margin-top: 34px;
  }
  span {
    color: ${colorsVariants.secondary};
    text-decoration: underline;
  }
  a {
    margin-right: 15px;
  }
`;
