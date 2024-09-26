import styled from "styled-components";

export const PilotosStyle = styled.section`
  #header {
    background-color: black;
  }

  .nossos_carros {
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  #car-selector {
    position: relative;
    display: flex;
    align-items: center;
  }

  #car-selector .passos {
    font-size: 50px;
    margin: 10px;
    background: none;
    border: none;
    cursor: pointer;
    color: #dd052b;
    transition: all 0.3s;
  }

  #car-selector .passos:hover {
    color: #af0423;
  }

  #car-selector #carImage {
    width: 450px;
    transition: opacity 0.3s ease-in-out;
  }

  .nossos_carros h2 {
    margin-top: 80px;
    font-size: 50px;
  }

  .nossos_carros p {
    font-size: 20px;
    margin-bottom: 90px;
  }

  .nossos_carros {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Ajuste conforme necessário */
  }

  #car-selector {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px; /* Espaço entre os itens */
  }

  .nossos_carros .selecao {
    font-size: 20px;
    margin: 30px;
    background: none;
    border: none;
    cursor: pointer;
    color: #ffffff;
    background-color: #dd052b;
    transition: all 0.3s;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
  }

  .nossos_carros .selecao:hover {
    background-color: #af0423;
    color: #e7e7e7;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  @media screen and (max-width: 600px) {
    .nossos_carros h2 {
      font-size: 35px;
    }
    .nossos_carros p {
      font-size: 20px;
      margin: 10px;
    }
    #car-selector img {
      width: 250px;
    }
    .nossos_carros .selecao {
      font-size: 15px;
    }
    #car-selector .passos {
      font-size: 30px;
      margin: 0;
    }
  }

  #backToTop {
    visibility: hidden; /* Hidden by default */
    opacity: 0;
    transition: visibility 0s 0.3s, opacity 0.3s linear, all 0.3s; /* Transition effect */
    position: fixed; /* Fixed/sticky position */
    bottom: 20px; /* Place the button at the bottom of the page */
    right: 30px; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
    border: none; /* Remove borders */
    outline: none; /* Remove outline */
    color: #0e0e0e; /* Text color */
    background: none;
    cursor: pointer; /* Add a mouse pointer on hover */
    border-radius: 10px; /* Rounded corners */
    font-size: 45px; /* Increase font size */
  }

  #backToTop.show {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s, opacity 0.5s linear, all 0.3s;
  }

  #backToTop:hover {
    color: #dd052b; /* Add a dark-grey background on hover */
  }

  @media screen and (max-width: 600px) {
    #backToTop {
      bottom: 20px; /* Place the button at the bottom of the page */
      right: 10px; /* Place the button 30px from the right */
    }
  }

  .bi-arrow-right-circle-fill {
    font-size: 30px;
  }

  .bi-arrow-left-circle-fill {
    font-size: 30px;
  }

  .bi-arrow-up-circle-fill {
    font-size: 30px;
  }

  .info-button {
    font-size: 1.8rem;
    background-color: #af0423;
    border-radius: 50px;
    margin: 5% 0;
    transition: transform 0.3s ease;
    color: #fff;
    padding: 10px 20px;
    cursor: pointer;
  }

  #pilotInfo {
    position: absolute;
    bottom: -60%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    border: 2px solid black;
    border-radius: 10px;
    opacity: 0;
    animation: scale-display 0.5s forwards;
  }

  .hidden {
    display: none;
  }

  @keyframes scale-display {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .lower {
    transform: translateY(200%);
  }

  .button-pilotos {
    text-align: center;
  }
`;
