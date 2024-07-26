import { Button } from '../GlobalStyle/components/Button/Button';
import { Menu } from './components/Menu/Menu';
import { BurguerMenu } from './components/MenuHamburguer/BurguerMenu';
import { useToggleMenu } from './hook/useToggleMenu';
import { HeaderContainer } from './style';

export const Header = () => {
  const { menuIsOpen, handleToogleMenu } = useToggleMenu();

  return (
    <HeaderContainer>
      <div>
        <BurguerMenu toggle={handleToogleMenu} isOpen={menuIsOpen} />
        <Menu isOpen={menuIsOpen} toggle={handleToogleMenu} />
      </div>

      <div>
        <Button>Pt</Button>
        <span>|</span>
        <Button>En</Button>
      </div>
    </HeaderContainer>
  );
};
