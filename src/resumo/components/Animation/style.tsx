import styled from 'styled-components';
import { colorsVariants } from '../../../GlobalStyle/GlobalStyle';

export const ConteinerAnimation = styled.div`
  perspective: 800px;
  width: 200px;
  height: 100px;
  top: 55%;
  left: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const Triangle = styled.div`
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
`;

export const Side = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  opacity: 0.8;

  &:nth-child(1) {
    border-width: 150px 150px 0 150px;
    border-color: ${colorsVariants.primary} transparent transparent transparent;
    transform: rotateY(0deg) translateZ(50px);
  }

  &:nth-child(2) {
    border-width: 150px 150px 0 150px;
    border-color: ${colorsVariants.secondary} transparent transparent
      transparent;
    transform: rotateY(120deg) translateZ(50px);
  }

  &:nth-child(3) {
    border-width: 150px 150px 0 150px;
    border-color: ${colorsVariants.terceary} transparent transparent transparent;
    transform: rotateY(240deg) translateZ(50px);
  }

  &:nth-child(4) {
    border-width: 150px 150px 0 150px;
    border-color: transparent transparent #0099ff transparent;
    transform: rotateX(90deg) translateY(-50px);
  }
`;
