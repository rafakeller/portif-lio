import styled from 'styled-components';
import { colorsVariants } from '../../../GlobalStyle/constants/variants';

export const BurguerMenuContainer = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 30px;
  justify-content: space-around;
  padding: 0;
  width: 30px;

  & > span {
    background-color: ${colorsVariants.terceary};
    height: 2px;
    transition: background-color 0.3s, transform 0.3s;
    width: 33px;
  }

  &:hover > span {
    background-color: ${colorsVariants.primary};
  }
`;
