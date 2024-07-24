import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MainTitle } from '../GlobalStyle/Title';
import { TextoImapactoConteiner } from './style';

export const TextoImpacto = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const variants = {
    hidden: { x: -100, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 1, duration: 2 },
    }),
  };

  return (
    <TextoImapactoConteiner>
      <MainTitle>
        {[
          '"O trabalho de um programador',
          'É pensar.',
          'O código é só o resultado."',
        ].map((text, index) => (
          <React.Fragment key={index}>
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              animate={scrollY > 100 ? 'visible' : 'hidden'}
              variants={variants}
            >
              {text.split(' ').map((word, idx) => (
                <React.Fragment key={idx}>
                  {word.includes('pensar') ? <strong>{word}</strong> : word}
                  {idx < text.split(' ').length - 1 && ' '}
                </React.Fragment>
              ))}
            </motion.span>
            {index === 0 && <br />}
            {index === 1 && <br />}
          </React.Fragment>
        ))}
      </MainTitle>
    </TextoImapactoConteiner>
  );
};
