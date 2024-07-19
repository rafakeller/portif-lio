import { Banner } from './banner/Banner';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Cabecalho } from './cabecalho/Cabecalho';
import { TextoImpacto } from './TextoImpacto/TextoImpacto';

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Cabecalho />
        <Banner />
        <TextoImpacto />
        <Projetos />
      </div>
    </>
  );
}

export default App;
