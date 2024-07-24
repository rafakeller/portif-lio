import { useAnimationFrame } from 'framer-motion';
import React, { useRef } from 'react';
import { ConteinerAnimation, Side, Triangle } from './style';

export const Animation: React.FC = () => {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <ConteinerAnimation>
      <Triangle ref={ref}>
        <Side />
        <Side />
        <Side />
        <Side />
      </Triangle>
    </ConteinerAnimation>
  );
};
