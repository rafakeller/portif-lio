import { useState } from 'react';
import { Button } from '../GlobalStyle/Button';
import { Menu } from './components/Menu/Menu';
import { MenuHamburguer } from './components/MenuHamburguer/MenuHamburguer';
import { CabecalhoContainer } from './style';

export const Cabecalho = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <CabecalhoContainer>
      <div>
        <MenuHamburguer toggleMenu={toggleMenu} />
        <Menu isOpen={isMenuOpen} />
      </div>

      <div>
        <Button>Pt</Button>
        <span>|</span>
        <Button>En</Button>
      </div>
    </CabecalhoContainer>
  );
};
