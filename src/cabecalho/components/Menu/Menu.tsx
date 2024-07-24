import { motion } from 'framer-motion';
import { Button } from '../../../GlobalStyle/Button';
import { MenuContainer } from './style';
import { ToggleMenuProps } from '../MenuHamburguer/MenuHamburguer';

export type MenuProps = {
  isOpen: boolean;
  handleToggleMenu: () => void;
};
export const Menu = ({ isOpen, toggle }: ToggleMenuProps) => {
  const handleScrollToSection = (section: string) => {
    const sectionItem = document.getElementById(section);
    if (sectionItem) {
      console.log('entrou');
      sectionItem.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        toggle();
      }, 1000);
    }
  };
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
        <li onClick={() => handleScrollToSection('home')}>
          <Button>&lt;Home/&gt;</Button>
        </li>
        <li onClick={() => handleScrollToSection('projetos')}>
          <Button>&lt;Projetos/&gt;</Button>
        </li>
        <li onClick={() => handleScrollToSection('habilidades')}>
          <Button>&lt;Habilidades/&gt;</Button>
        </li>
        <li onClick={() => handleScrollToSection('sobreMim')}>
          <Button>&lt;Sobre mim/&gt;</Button>
        </li>
        <li onClick={() => handleScrollToSection('contato')}>
          <Button>&lt;Contato/&gt;</Button>
        </li>
      </motion.ul>
    </MenuContainer>
  );
};
