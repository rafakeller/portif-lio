import { Button } from '../../../GlobalStyle/Button';
import { MenuContainer } from './style';

export const Menu = () => {
  return (
    <MenuContainer>
      <li>
        <Button>&lt;Home/&gt;</Button>
      </li>
      <li>
        <Button>&lt;Projetos&gt;</Button>
      </li>
      <li>
        <Button>&lt;Habilidades&gt;</Button>
      </li>
      <li>
        <Button>&lt;Sobre mim&gt;</Button>
      </li>
      <li>
        <Button>&lt;Contato&gt;</Button>
      </li>
    </MenuContainer>
  );
};
