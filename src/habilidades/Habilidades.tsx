import { Conteiner, TitleProjetos } from '../projetos/styles';
import { SoftSkills } from './SoftSkills/SoftSkills';
import { HabilidadesConteiner } from './styles';

export const Habilidades = () => {
  return (
    <Conteiner id="habilidades">
      <TitleProjetos variant="secondary">&lt;habilidades&gt;</TitleProjetos>
      <div>
        <HabilidadesConteiner>
          <img
            src="public/html.svg"
            width="76"
            height="76"
            alt="ícone habilidade html"
          />
          <img
            src="public/css.svg"
            width="76"
            height="76"
            alt="ícone habilidade css"
          />
          <img
            src="public/javascript.svg"
            width="76"
            height="76"
            alt="ícone habilidade javascript"
          />
          <img
            src="public/typescript.svg"
            width="76"
            height="76"
            alt="ícone habilidade typescript"
          />
          <img
            src="public/react.svg"
            width="76"
            height="76"
            alt="ícone habilidade react"
          />

          <img
            src="public/csharp.svg"
            width="76"
            height="76"
            alt="ícone habilidade csharp"
          />
          <img
            src="public/netcore.svg"
            width="76"
            height="76"
            alt="ícone habilidade dot net core "
          />
          <img
            src="public/sql.svg"
            width="76"
            height="76"
            alt="ícone habilidade sql"
          />
        </HabilidadesConteiner>
        <SoftSkills />

        <TitleProjetos variant="secondary">&lt;/habilidades&gt;</TitleProjetos>
      </div>
    </Conteiner>
  );
};
