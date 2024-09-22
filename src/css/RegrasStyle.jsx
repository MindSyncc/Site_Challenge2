import styled from "styled-components";

export const RegrasStyle = styled.section`
  .logo-container {
    background-color: black;
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
  }

  .image-wrapper {
    position: relative;
    margin: 80px 10px 20px 10px; /* Ajuste conforme necessário */
    flex: 0 0 calc(25% - 20px); /* Ajuste para 4 imagens por linha */
    text-align: center; /* Centraliza o conteúdo */
    margin-bottom: 180px;
  }

  .image {
    position: relative;
    display: inline-block; /* Garante que a seta fique na mesma linha que a imagem */
  }

  .image img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .description {
    position: absolute;
    bottom: -200px; /* Posicionamento abaixo da imagem */
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px;
    display: none;
    text-align: center; /* Centraliza o texto */
  }

  .description p {
    font-size: 1.8rem;
  }

  .description.show {
    display: block !important; /* Força a exibição da descrição */
  }

  .arrow {
    position: absolute;
    bottom: -40px; /* Posicionamento abaixo da imagem */
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    transition: transform 0.3s ease; /* Transição suave da rotação */
  }

  .arrow img {
    width: 30px; /* Ajuste o tamanho conforme necessário */
  }

  .arrow.rotate {
    transform: translateX(-50%) rotate(180deg); /* Rotação de 180 graus */
  }

  .titulo-regras {
    margin-top: 30px;
    font-size: 2rem;
  }

  /* Media query para telas menores, como celulares */
  @media (max-width: 768px) {
    .image-wrapper {
      flex: 0 0 calc(50% - 20px); /* Duas imagens por linha */
      padding-top: 30px;
      margin-bottom: 30px;
    }

    .description {
      margin-bottom: -30px;
    }

    footer {
      margin-top: 130px;
    }
  }
`;
