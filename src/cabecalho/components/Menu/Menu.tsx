import { motion } from 'framer-motion';
import { Button } from '../../../GlobalStyle/Button';
import { MenuContainer } from './style';

export const Menu = ({ isOpen }: { isOpen: boolean }) => {
  console.log(isOpen);
  return (
    <MenuContainer variant={isOpen}>
      <motion.ul
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <li>
          <Button>&lt;Home/&gt;</Button>
        </li>
        <li>
          <Button>&lt;Projetos/&gt;</Button>
        </li>
        <li>
          <Button>&lt;Habilidades/&gt;</Button>
        </li>
        <li>
          <Button>&lt;Sobre mim/&gt;</Button>
        </li>
        <li>
          <Button>&lt;Contato/&gt;</Button>
        </li>
      </motion.ul>
    </MenuContainer>
  );
};
