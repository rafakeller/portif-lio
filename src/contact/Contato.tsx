import { Conteiner } from '../GlobalStyle/components/Conteiner/Conteiner';
import { TitleProjects } from '../GlobalStyle/components/Title/Title';
import { SocialMediaContent } from './style';

export const Contact = () => {
  return (
    <Conteiner id="contato">
      <TitleProjects variant="text">&lt;contato&gt;</TitleProjects>
      <SocialMediaContent>
        <p>
          Sinta-se à vontade para enviar um e-mail:
          <span> rafaela.keller.rk@gmail.com</span>{' '}
        </p>
        <p>Me siga e me mande uma messagem nas minhas redes socias! </p>
        <div>
          <a href="https://wa.me/11981786682">
            <img
              src="public/whatsapp.svg"
              alt="ícone whatsapp"
              width="36"
              height="36"
            />
          </a>
          <a href="https://www.linkedin.com/in/rafaela-keller-ara%C3%BAjo-dos-santos-997565155/">
            <img
              src="public/linkedin.svg"
              alt="ícone linkedin"
              width="36"
              height="36"
            />
          </a>
          <a href="https://github.com/rafakeller">
            <img
              src="public/github.svg"
              alt="ícone github"
              width="36"
              height="36"
            />
          </a>
        </div>
      </SocialMediaContent>

      <TitleProjects variant="text">&lt;/contato&gt;</TitleProjects>
    </Conteiner>
  );
};
