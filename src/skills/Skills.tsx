import { Conteiner } from '../GlobalStyle/components/Conteiner/Conteiner';
import { TitleProjects } from '../GlobalStyle/components/Title/Title';
import { SoftSkills } from './SoftSkills/SoftSkills';
import { SkillsContent } from './styles';

export const Skills = () => {
  return (
    <Conteiner id="habilidades">
      <TitleProjects variant="secondary">&lt;habilidades&gt;</TitleProjects>
      <div>
        <SkillsContent>
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
        </SkillsContent>
        <SoftSkills />
        <TitleProjects variant="secondary">&lt;/habilidades&gt;</TitleProjects>
      </div>
    </Conteiner>
  );
};
