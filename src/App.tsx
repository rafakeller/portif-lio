import { Banner } from './banner/Banner';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Cabecalho } from './cabecalho/Cabecalho';
import { TextoImpacto } from './TextoImpacto/TextoImpacto';
import { Projetos } from './projetos/Projetos';
import { Habilidades } from './habilidades/Habilidades';
import { Resumo } from './resumo/Resumo';
import { Contato } from './contato/Contato';

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Cabecalho />
        <Banner />
        <TextoImpacto />
        <Projetos />
        <Habilidades />
        <Resumo />
        <Contato />
      </div>
    </>
  );
}

export default App;
