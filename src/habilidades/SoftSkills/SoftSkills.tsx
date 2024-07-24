import { useEffect, useState } from 'react';
import { TitleProjetos } from '../../projetos/styles';
import { Skill, SoftSkillsConteiner } from './style';

export const SoftSkills = () => {
  const [transforms, setTransforms] = useState<number[]>([-100, -100, -100]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const containers =
        document.querySelectorAll<HTMLLIElement>('.conteinerSkill');

      const transformConteiner = Array.from(containers).map((container) => {
        const distanceConteinerTop = container.getBoundingClientRect().top;
        return distanceConteinerTop < windowHeight ? 0 : -100;
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
    <SoftSkillsConteiner>
      <TitleProjetos variant="terceary">&lt;softSkills&gt;</TitleProjetos>

      {[
        {
          text: 'Capacidade de Aprendizagem Contínua',
        },
        {
          text: 'Resolução de Problemas',
        },
        {
          text: 'Resiliência',
        },
      ].map((item, index) => (
        <div className="conteinerSkill" key={index}>
          <Skill variant={transforms[index]}>{item.text}</Skill>
        </div>
      ))}

      <TitleProjetos variant="terceary">&lt;/softSkills&gt;</TitleProjetos>
    </SoftSkillsConteiner>
  );
};
