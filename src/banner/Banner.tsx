import { MainTitle, Title } from '../GlobalStyle/components/Title/Title';
import { BannerConteiner } from './style';

export const Banner: React.FC = () => {
  return (
    <BannerConteiner id="home">
      <MainTitle>Rafaela Keller</MainTitle>
      <Title variant="subtext">Desenvolvedora FullStack</Title>
    </BannerConteiner>
  );
};
