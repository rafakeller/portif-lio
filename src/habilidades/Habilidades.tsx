import { Conteiner, TitleProjetos } from '../projetos/styles';
import { HabilidadesConteiner, SoftSkillsConteiner } from './styles';

export const Habilidades = () => {
  return (
    <Conteiner id="habilidades">
      <TitleProjetos variant="secondary">&lt;habilidades&gt;</TitleProjetos>
      <div>
        <HabilidadesConteiner>
          <img src="public/html.svg" width="76" height="76" />
          <img src="public/css.svg" width="76" height="76" />
          <img src="public/javascript.svg" width="76" height="76" />
          <img src="public/typescript.svg" width="76" height="76" />
          <img src="public/react.svg" width="76" height="76" />
          <img src="public/csharp.svg" width="76" height="76" />
          <img src="public/netcore.svg" width="76" height="76" />
        </HabilidadesConteiner>
        <SoftSkillsConteiner>
          <TitleProjetos variant="terceary">&lt;softSkills&gt;</TitleProjetos>
          <div>
            <p>Capacidade de Aprendizagem Contínua</p>
            <p>Resolução de Problemas</p>
            <p>Resiliência</p>
          </div>
          <TitleProjetos variant="terceary">&lt;/softSkills&gt;</TitleProjetos>
        </SoftSkillsConteiner>

        <TitleProjetos variant="secondary">&lt;/habilidades&gt;</TitleProjetos>
      </div>
    </Conteiner>
  );
};
