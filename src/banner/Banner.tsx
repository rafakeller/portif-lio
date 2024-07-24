import { MainTitle, Title } from '../GlobalStyle/Title';
import { BannerConteiner } from './style';
import { Animation } from '../resumo/components/Animation/Animation';

export const Banner: React.FC = () => {
  return (
    <BannerConteiner id="home">
      <MainTitle>Rafaela Keller</MainTitle>
      <Title variant="subtext">Desenvolvedora FullStack</Title>
    </BannerConteiner>
  );
};
