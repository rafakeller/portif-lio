import styled from 'styled-components';
import { colorsVariants } from '../../../GlobalStyle/constants/variants';

export const AnimationConteiner = styled.div`
  align-items: center;
  display: flex;
  height: 100px;
  justify-content: center;
  left: 70%;
  perspective: 800px;
  position: absolute;
  top: 55%;
  width: 200px;
`;

export const Triangle = styled.div`
  height: 200px;
  transform-style: preserve-3d;
  width: 200px;
`;

export const Side = styled.div`
  border-style: solid;
  height: 0;
  opacity: 0.8;
  width: 0;

  &:nth-child(1) {
    border-color: ${colorsVariants.primary} transparent transparent transparent;
    border-width: 150px 150px 0 150px;
    transform: rotateY(0deg) translateZ(50px);
  }

  &:nth-child(2) {
    border-color: ${colorsVariants.secondary} transparent transparent
    border-width: 150px 150px 0 150px;
    transform: rotateY(120deg) translateZ(50px);
  }

  &:nth-child(3) {
    border-color: ${colorsVariants.terceary} transparent transparent transparent;
    border-width: 150px 150px 0 150px;
    transform: rotateY(240deg) translateZ(50px);
  }

  &:nth-child(4) {
    border-color: transparent transparent #0099ff transparent;
    border-width: 150px 150px 0 150px;
    transform: rotateX(90deg) translateY(-50px);
  }
`;
