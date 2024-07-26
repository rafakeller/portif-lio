import { useEffect, useState } from 'react';
import { Cover, ProjectsContent } from './styles';
import { Conteiner } from '../GlobalStyle/components/Conteiner/Conteiner';
import { TitleProjects } from '../GlobalStyle/components/Title/Title';

export const Projects = () => {
  const [transform, setTransform] = useState<number[]>([0, 0, 0]);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const content = document.querySelectorAll<HTMLLIElement>('.content');

    const transformDiv = Array.from(content).map((container) => {
      const distanceToTheTop = container.getBoundingClientRect().top;
      return distanceToTheTop < windowHeight ? -100 : 0;
    });

    setTransform(transformDiv);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Conteiner id="projetos">
      <TitleProjects variant="primary">&lt;projetos&gt;</TitleProjects>
      <ul>
        {[
          {
            title: 'Tic-tac-toe',
            description:
              'Jogo da velha feito em HTML, CSS e Javascript. Meu projeto pioneiro na área de desenvolvimento frontend.',
            codeLink: 'https://github.com/rafakeller/Jogo-da-velha',
            previewLink: '',
          },
        ].map((project, index) => (
          <ProjectsContent className="content" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              <a href={project.codeLink}>Código</a>
              <a href={project.previewLink}>Preview</a>
            </div>
            <Cover variant={transform[index]} />
          </ProjectsContent>
        ))}
      </ul>
      <TitleProjects variant="primary">&lt;/projetos&gt;</TitleProjects>
    </Conteiner>
  );
};
