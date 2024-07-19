import { MainTitle, Title } from '../GlobalStyle/Title';
import { BannerConteiner } from './style';

export const Banner: React.FC = () => {
  return (
    <BannerConteiner>
      <MainTitle>Rafaela Keller</MainTitle>
      <Title variant="subtext">Desenvolvedora FullStack</Title>
    </BannerConteiner>
  );
};
