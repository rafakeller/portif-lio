import { Button } from '../GlobalStyle/Button';
import { Menu } from './components/Menu/Menu';
import { MenuHamburguer } from './components/MenuHamburguer/MenuHamburguer';
import { useToggleMenu } from './hook/useToggleMenu';
import { CabecalhoContainer } from './style';

export const Cabecalho = () => {
  const { isOpen, handleToogleMenu } = useToggleMenu();

  return (
    <CabecalhoContainer>
      <div>
        <MenuHamburguer toggle={handleToogleMenu} isOpen={isOpen} />
        <Menu isOpen={isOpen} toggle={handleToogleMenu} />
      </div>

      <div>
        <Button>Pt</Button>
        <span>|</span>
        <Button>En</Button>
      </div>
    </CabecalhoContainer>
  );
};
