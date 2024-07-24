import { useEffect, useState } from 'react';
import { Conteiner, Cover, ProjetoDescricao, TitleProjetos } from './styles';

export const Projetos = () => {
  const [transforms, setTransforms] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const containers = document.querySelectorAll<HTMLLIElement>('.container');

      const transformConteiner = Array.from(containers).map((container) => {
        const distanceConteinerTop = container.getBoundingClientRect().top;
        return distanceConteinerTop < windowHeight ? -100 : 0;
      });

      setTransforms(transformConteiner);
    };

    window.addEventListener('scroll', handleScroll);

    // Executa uma vez para configurar as posições iniciais
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Conteiner id="projetos">
      <TitleProjetos variant="primary">&lt;projetos&gt;</TitleProjetos>
      <ul>
        {[
          {
            title: 'Tic-tac-toe',
            description:
              'Jogo da velha feito em HTML, CSS e Javascript. Meu projeto pioneiro na área de desenvolvimento frontend.',
            codeLink: 'https://github.com/rafakeller/Jogo-da-velha',
            previewLink: 'https://github.com/rafakeller/Jogo-da-velha',
          },
        ].map((project, index) => (
          <ProjetoDescricao className="container" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              <a href={project.codeLink}>Código</a>
              <a href={project.previewLink}>Preview</a>
            </div>
            <Cover variant={transforms[index]} />
          </ProjetoDescricao>
        ))}
      </ul>
      <TitleProjetos variant="primary">&lt;/projetos&gt;</TitleProjetos>
    </Conteiner>
  );
};
