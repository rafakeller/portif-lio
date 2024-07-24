import { motion } from 'framer-motion';
import { MenuHamburguerContainer } from './style';

export type ToggleMenuProps = {
  toggle: () => void;
  isOpen: boolean;
};

export const MenuHamburguer = ({ toggle, isOpen }: ToggleMenuProps) => {
  return (
    <MenuHamburguerContainer onClick={toggle}>
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
