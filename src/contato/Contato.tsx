import { Conteiner, TitleProjetos } from '../projetos/styles';
import { SocialConteiner } from './style';

export const Contato = () => {
  return (
    <Conteiner>
      <TitleProjetos variant="text">&lt;contato&gt;</TitleProjetos>
      <SocialConteiner>
        <p>
          Sinta-se à vontade para enviar um e-mail:
          <a href=""> rafaela.keller.rk@gmail.com</a>{' '}
        </p>
        <p>Me siga e me mande uma messagem nas minhas redes socias! </p>
        <div>
          <a href="">
            <img
              src="public/whatsapp.svg"
              alt="ícone whatsapp"
              width="36"
              height="36"
            />
          </a>
          <a href="">
            <img
              src="public/linkedin.svg"
              alt="ícone linkedin"
              width="36"
              height="36"
            />
          </a>
          <a href="">
            <img
              src="public/github.svg"
              alt="ícone github"
              width="36"
              height="36"
            />
          </a>
          <a href="">
            <img
              src="public/discord.svg"
              alt="ícone discord"
              width="36"
              height="36"
            />
          </a>
        </div>
      </SocialConteiner>

      <TitleProjetos variant="text">&lt;/contato&gt;</TitleProjetos>
    </Conteiner>
  );
};
