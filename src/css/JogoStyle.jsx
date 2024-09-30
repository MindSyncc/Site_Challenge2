import styled from "styled-components";

export const JogoStyle = styled.section`
  * {
    font-size: 2rem;
  }


    .result-game{
    text-align:left;
    }

  .div-pilot .choice {
    text-align: center;
  }

  .section-pilot {
    display: flex;
    justify-content: center; /* Centraliza os itens no eixo horizontal */
    flex-wrap: wrap; /* Permite que os itens quebrem linha se necessário */
    padding: 20px;
  }

  .card-button {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 120px; /* Largura fixa para o botão do piloto */
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 10px;
    background-color: black;
    transition: background-color 0.3s ease;
    cursor: pointer;
    font-size: 1.5rem;
    text-align: center; /* Centraliza o texto */
  }

  .card-button img {
    width: 70px; /* Defina o tamanho da imagem */
    height: auto;
    margin-bottom: 10px;
  }

  .div-pilot {
    padding: 20px;
  }

  .button-game {
    border-radius: 30px;
    border: none;
    background-color: black;
    color: white;
    font-weight: lighter;
    padding: 10px;
    text-align: center;
    display: block;
    margin: 20px auto;
    width: 200px; 
    cursor: pointer;
  }

  .button-game:hover {
    background-color: #00001f;
    color: white;
  }
`;
