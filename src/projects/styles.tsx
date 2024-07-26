import styled from 'styled-components';
import { VariantPropsTransform } from './types/TransformProps';
import { colorsVariants } from '../GlobalStyle/constants/variants';

export const ProjectsContent = styled.li`
  border: 1px solid ${colorsVariants.primary};
  margin: 15px auto;
  overflow: hidden;
  padding: 17px;
  position: relative;
  width: 90%;

  h3 {
    color: ${colorsVariants.text};
    font-size: 19px;
    font-weight: 800;
  }
  p {
    color: ${colorsVariants.text};
    font-size: 18px;
    margin: 10px 0 20px 0;
  }

  div {
    padding: 0;
    a {
      color: ${colorsVariants.primary};
      font-weight: 200;
      margin-right: 10px;
      text-transform: uppercase;
    }
  }
`;

export const Cover = styled.div<VariantPropsTransform>`
  background-color: ${colorsVariants.primary};
  border: 1px solid ${colorsVariants.primary};
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateX(${(props) => props.variant}%);
  transition: transform 0.5s ease;
  width: 100%;
  z-index: 10;
`;
