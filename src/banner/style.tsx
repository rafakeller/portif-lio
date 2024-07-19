import styled from 'styled-components';

export const BannerConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 75vh;
  margin: 0 auto;
  width: 1200px;
  max-width: 75%;
  vertical-align: baseline;
  position: relative;

  &::before {
    content: url(public/triangulo.svg);
    position: absolute;
    z-index: -1;
    object-fit: cover;
    top: 200px;
  }

  @media (max-width: 768px) {
    width: 100%;

    &::before {
      top: 256px;
    }
  }
`;
