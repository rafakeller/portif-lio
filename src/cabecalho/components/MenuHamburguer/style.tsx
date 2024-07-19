import styled from 'styled-components';
import { colorsVariants } from '../../../GlobalStyle/GlobalStyle';

export const MenuHamburguerContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 5px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;

  & > span {
    background-color: ${colorsVariants.terceary};
    height: 2px;
    width: 33px;
    transition: background-color 0.3s, transform 0.3s;
  }

  &:hover > span {
    background-color: ${colorsVariants.primary};
  }
`;
