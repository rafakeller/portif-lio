import { Button } from '../GlobalStyle/Button';
// import { Menu } from './components/Menu/Menu';
import { MenuHamburguer } from './components/MenuHamburguer/MenuHamburguer';
import { CabecalhoContainer } from './style';

export const Cabecalho = () => {
  return (
    <>
      {/* <Menu /> */}
      <CabecalhoContainer>
        <MenuHamburguer />
        <div>
          <Button>Pt </Button>
          <span>|</span>
          <Button>En</Button>
        </div>
      </CabecalhoContainer>
    </>
  );
};
