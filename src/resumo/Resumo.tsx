import { ButtonBase } from '../GlobalStyle/Button';
import { Conteiner, TitleProjetos } from '../projetos/styles';
import { ContentResumo, TextoResumo } from './style';
import { Animation } from './components/Animation/Animation';

export const Resumo = () => {
  return (
    <Conteiner id="sobreMim">
      <TitleProjetos variant="primary">&lt;sobre mim&gt;</TitleProjetos>
      <ContentResumo>
        <TextoResumo>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>

          <p>
            But also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>

          <p>
            But also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>

          <p>
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop.
          </p>

          <ButtonBase>Curriculum Vitae (PDF)</ButtonBase>
        </TextoResumo>
        <Animation />
      </ContentResumo>

      <TitleProjetos variant="primary">&lt;/sobre mim&gt;</TitleProjetos>
    </Conteiner>
  );
};
