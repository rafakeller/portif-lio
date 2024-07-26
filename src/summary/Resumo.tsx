import { Button } from '../GlobalStyle/components/Button/Button';
import { SummaryContent, SummaryText } from './style';
import { Animation } from './components/Animation/Animation';
import { TitleProjects } from '../GlobalStyle/components/Title/Title';
import { Conteiner } from '../GlobalStyle/components/Conteiner/Conteiner';
import { handleOpenFile } from './utils/utils';

export const Summary = () => {
  return (
    <Conteiner id="sobreMim">
      <TitleProjects variant="primary">&lt;sobre mim&gt;</TitleProjects>
      <SummaryContent>
        <SummaryText>
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

          <Button onClick={handleOpenFile}>Curriculum Vitae (PDF)</Button>
        </SummaryText>
        <Animation />
      </SummaryContent>

      <TitleProjects variant="primary">&lt;/sobre mim&gt;</TitleProjects>
    </Conteiner>
  );
};
