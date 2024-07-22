import { useState } from 'react';
import { motion } from 'framer-motion';
import { MenuHamburguerContainer } from './style';

export const MenuHamburguer = ({ toggleMenu }: { toggleMenu: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    toggleMenu();
  };

  return (
    <MenuHamburguerContainer onClick={handleToggle}>
      <motion.span
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </MenuHamburguerContainer>
  );
};
