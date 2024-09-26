import { PilotosStyle } from "../css/PilotosStyle";
import { useState } from "react";

const Pilotos = () => {
  const cars = [
    {
      image: "src/assets/img/home/secao/piloto1.png",
      infoImage: "src/assets/img/home/secao/info1.png",
      info: "Piloto 1: Informações",
    },
    {
      image: "src/assets/img/home/secao/piloto2.png",
      infoImage: "src/assets/img/home/secao/info2.png",
      info: "Piloto 2: Informações",
    },
    {
      image: "src/assets/img/home/secao/piloto3.png",
      infoImage: "src/assets/img/home/secao/info3.png",
      info: "Piloto 3: Informações",
    },
    {
      image: "src/assets/img/home/secao/piloto4.png",
      infoImage: "src/assets/img/home/secao/info4.png",
      info: "Piloto 4: Informações",
    },
    {
      image: "src/assets/img/home/secao/piloto5.png",
      infoImage: "src/assets/img/home/secao/info5.png",
      info: "Piloto 5: Informações",
    },
    {
      image: "src/assets/img/home/secao/piloto6.png",
      infoImage: "src/assets/img/home/secao/info6.png",
      info: "Piloto 6: Informações",
    },
  ];

  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  // Função para avançar para o próximo piloto
  const nextCar = () => {
    setCurrentCarIndex((currentCarIndex + 1) % cars.length);
  };

  // Função para voltar para o piloto anterior
  const previousCar = () => {
    setCurrentCarIndex((currentCarIndex - 1 + cars.length) % cars.length);
  };

  // Função para mostrar ou esconder informações do piloto
  const showPilotInfo = () => {
    setShowInfo(!showInfo);
  };

  const showInfoToggle = showInfo ? "info-piloto" : "info-piloto hidden";

  const buttonClassName = showInfo ? "info-button lower" : "info-button";

  // Função para rolar a página para o topo
  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PilotosStyle className="margin-bottom-100">
      <section id="pagina-pilotos">
        <div className="nossos_carros">
          <h2>Conheça alguns pilotos:</h2>
          <p>Venha saber mais sobre os pilotos da Fórmula E</p>

          <div id="car-selector">
            <button className="passos" onClick={previousCar}>
              <i className="bi-arrow-left-circle-fill"></i>
            </button>
            <img
              src={cars[currentCarIndex].image}
              id="carImage"
              alt="Imagem do Carro"
              className="loaded"
            />

            <div className={showInfoToggle} id="pilotInfo">
              <img
                src={cars[currentCarIndex].infoImage}
                id="pilotInfoImage"
                alt="Imagem de Informações"
              />
              <div id="pilotInfoContent">{cars[currentCarIndex].info}</div>
            </div>

            <button className="passos" onClick={nextCar}>
              <i className="bi-arrow-right-circle-fill"></i>
            </button>
          </div>
        </div>

        <br />
        <br />

        <div className="button-pilotos">
          <button className={buttonClassName} onClick={showPilotInfo}>
            Saiba mais sobre o piloto
          </button>
        </div>
      </section>

      <button onClick={topFunction} id="backToTop" title="Go to top">
        <i className="bi-arrow-up-circle-fill"></i>
      </button>
    </PilotosStyle>
  );
};

export default Pilotos;
