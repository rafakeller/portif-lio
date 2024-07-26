import { motion } from 'framer-motion';
import { BurguerMenuContainer } from './style';
import { ToggleMenuProps } from '../../types/ToggleMenuProps';

export const BurguerMenu = ({ toggle, isOpen }: ToggleMenuProps) => {
  return (
    <BurguerMenuContainer onClick={toggle}>
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
    </BurguerMenuContainer>
  );
};
