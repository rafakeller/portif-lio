import { Banner } from './banner/Banner';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Skills } from './habilidades/Skills';
import { Summary } from './resumo/Resumo';
import { Contact } from './contato/Contato';
import { Phrase } from './TextoImpacto/Phrase';
import { Projects } from './projetos/Projects';
import { Header } from './cabecalho/Cabecalho';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <Phrase />
      <Projects />
      <Skills />
      <Summary />
      <Contact />
    </>
  );
}

export default App;
