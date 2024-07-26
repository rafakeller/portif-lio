import styled from 'styled-components';

export const Conteiner = styled.div`
  align-itens: left;
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin: 60px auto;
  width: 85%;

  > div {
    align-itens: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
