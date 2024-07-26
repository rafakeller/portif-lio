import styled from 'styled-components';

export const BannerConteiner = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 75%;
  min-height: 75vh;
  position: relative;
  vertical-align: baseline;
  width: 1200px;

  &::before {
    content: url(public/triangulo.svg);
    object-fit: cover;
    position: absolute;
    top: 200px;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 100%;

    &::before {
      top: 256px;
    }
  }
`;
