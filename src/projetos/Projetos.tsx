import {
  Conteiner,
  ProjetoConteiner,
  ProjetoDescricao,
  TitleProjetos,
} from './styles';

export const Projetos = () => {
  return (
    <Conteiner>
      <TitleProjetos variant="primary">&lt;projetos&gt;</TitleProjetos>
      <div>
        <ProjetoConteiner>
          <ProjetoDescricao>
            <h3>Tic-tac-toe</h3>
            <p>
              Jogo da velha feita em HTML+ CSS e Javascript. Meu projeto
              pioneiro na área de desenvolvimento frontend.{' '}
            </p>

            <div>
              <a href="https://github.com/rafakeller/Jogo-da-velha">Código</a>
              <a href="https://github.com/rafakeller/Jogo-da-velha">Preview</a>
            </div>
          </ProjetoDescricao>
        </ProjetoConteiner>
        <ProjetoConteiner>
          <li>
            <ProjetoDescricao>
              <h3>Tic-tac-toe</h3>
              <p>
                Jogo da velha feita em HTML+ CSS e Javascript. Meu projeto
                pioneiro na área de desenvolvimento frontend.{' '}
              </p>

              <div>
                <a href="https://github.com/rafakeller/Jogo-da-velha">Código</a>
                <a href="https://github.com/rafakeller/Jogo-da-velha">
                  Preview
                </a>
              </div>
            </ProjetoDescricao>
          </li>
        </ProjetoConteiner>
        <ProjetoConteiner>
          <li>
            <ProjetoDescricao>
              <h3>Tic-tac-toe</h3>
              <p>
                Jogo da velha feita em HTML+ CSS e Javascript. Meu projeto
                pioneiro na área de desenvolvimento frontend.{' '}
              </p>

              <div>
                <a href="https://github.com/rafakeller/Jogo-da-velha">Código</a>
                <a href="https://github.com/rafakeller/Jogo-da-velha">
                  Preview
                </a>
              </div>
            </ProjetoDescricao>
          </li>
        </ProjetoConteiner>
      </div>
      <TitleProjetos variant="primary">&lt;/projetos&gt;</TitleProjetos>
    </Conteiner>
  );
};
