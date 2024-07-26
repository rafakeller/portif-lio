import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PhraseConteiner } from './style';
import { MainTitle } from '../GlobalStyle/components/Title/Title';
import { styleAnimation } from './utils/utils';

export const Phrase = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <PhraseConteiner>
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
              variants={styleAnimation}
            >
              {text.split(' ').map((word, id) => (
                <React.Fragment key={id}>
                  {word.includes('pensar') ? <strong>{word}</strong> : word}
                  {id < text.split(' ').length - 1 && ' '}
                </React.Fragment>
              ))}
            </motion.span>
            {index === 0 && <br />}
            {index === 1 && <br />}
          </React.Fragment>
        ))}
      </MainTitle>
    </PhraseConteiner>
  );
};
