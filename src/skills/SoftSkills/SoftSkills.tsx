import { useEffect, useState } from 'react';
import { Skill, SoftSkillsContent } from './style';
import { TitleProjects } from '../../GlobalStyle/components/Title/Title';

export const SoftSkills = () => {
  const [transforms, setTransforms] = useState<number[]>([-100, -100, -100]);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const content = document.querySelectorAll<HTMLLIElement>('.content');

    const transformDiv = Array.from(content).map((container) => {
      const distanceToTheTop = container.getBoundingClientRect().top;
      return distanceToTheTop < windowHeight ? 0 : -100;
    });

    setTransforms(transformDiv);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SoftSkillsContent>
      <TitleProjects variant="terceary">&lt;softSkills&gt;</TitleProjects>

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
        <div className="content" key={index}>
          <Skill variant={transforms[index]}>{item.text}</Skill>
        </div>
      ))}

      <TitleProjects variant="terceary">&lt;/softSkills&gt;</TitleProjects>
    </SoftSkillsContent>
  );
};
