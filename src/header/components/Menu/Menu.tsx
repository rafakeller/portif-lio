import { motion } from 'framer-motion';
import { Button } from '../../../GlobalStyle/components/Button/Button';
import { MenuContainer } from './style';
import { ToggleMenuProps } from '../../types/ToggleMenuProps';

export const Menu = ({ isOpen, toggle }: ToggleMenuProps) => {
  return (
    <MenuContainer variant={isOpen}>
      <motion.ul
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <li onClick={() => handleScrollToSection('home', toggle)}>
          <Button>&lt;Home/&gt;</Button>
        </li>
        <li onClick={() => handleScrollToSection('projetos', toggle)}>
          <Button>&lt;Projetos/&gt;</Button>
        </li>
        <li onClick={() => handleScrollToSection('habilidades', toggle)}>
          <Button>&lt;Habilidades/&gt;</Button>
        </li>
        <li onClick={() => handleScrollToSection('sobreMim', toggle)}>
          <Button>&lt;Sobre mim/&gt;</Button>
        </li>
        <li onClick={() => handleScrollToSection('contato', toggle)}>
          <Button>&lt;Contato/&gt;</Button>
        </li>
      </motion.ul>
    </MenuContainer>
  );
};
