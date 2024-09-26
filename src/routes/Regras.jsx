import { RegrasStyle } from "../css/RegrasStyle";
import seta from "../assets/img/home/secao/seta.png";
import imgSustentabilidade from "../assets/img/home/secao/sustentabilidade.webp";
import imgBateria from "../assets/img/home/secao/bateria-potencia.avif";
import imgEnergia from "../assets/img/home/secao/recupera-energia.png";
import imgFan from "../assets/img/home/secao/fanboost1.1.png";
import { useState } from "react";

const Regras = () => {
  const [show, setShow] = useState([false, false, false, false]); // Array de estado

  const toggleShowVisibility = (index) => {
    const updatedShow = [...show];
    updatedShow[index] = !updatedShow[index];
    setShow(updatedShow);
  };

  return (
    <RegrasStyle className="margin-bottom-100">
      <div className="gallery">
        <div className="image-wrapper">
          <div className="image">
            <img src={imgSustentabilidade} alt="Imagem 1" />
            <h2 className="titulo-regras">Sustentabilidade</h2>
            <div className="arrow" onClick={() => toggleShowVisibility(0)}>
              <img src={seta} alt="" />
            </div>
          </div>

          <div className={show[0] ? "description show" : "description"}>
            <p>
              A Fórmula E enfatiza a sustentabilidade e a consciência ambiental,
              promovendo tecnologias de energia limpa e eletrificação dos
              transportes.
            </p>
          </div>
        </div>

        <div className="image-wrapper">
          <div className="image">
            <img src={imgBateria} alt="Imagem 2" />
            <h2 className="titulo-regras">Baterias e Potência</h2>
            <div className="arrow" onClick={() => toggleShowVisibility(1)}>
              <img src={seta} alt="" />
            </div>
          </div>

          <div className={show[1] ? "description show" : "description"}>
            <p>
              Cada carro é equipado com uma bateria padrão que fornece energia
              ao motor elétrico. A potência máxima do carro é limitada a 250 kW
              (aproximadamente 335 cavalos de potência).
            </p>
          </div>
        </div>

        <div className="image-wrapper">
          <div className="image">
            <img src={imgEnergia} alt="Imagem 3" />
            <h2 className="titulo-regras">Sistema de Recuperação de Energia</h2>
            <div className="arrow">
              <img src={seta} alt="" onClick={() => toggleShowVisibility(2)} />
            </div>
          </div>

          <div className={show[2] ? "description show" : "description"}>
            <p>
              Os carros da Fórmula E estão equipados com um sistema de
              recuperação de energia cinética (similar ao KERS da Fórmula 1),
              que converte a energia cinética gerada durante a frenagem de volta
              em energia elétrica para recarregar a bateria.
            </p>
          </div>
        </div>

        <div className="image-wrapper">
          <div className="image">
            <img src={imgFan} alt="Imagem 4" />
            <h2 className="titulo-regras">Fanboost</h2>
            <div className="arrow" onClick={() => toggleShowVisibility(3)}>
              <img src={seta} alt="" />
            </div>
          </div>

          <div className={show[3] ? "description show" : "description"}>
            <p>
              Os fãs podem votar online para dar um impulso extra de potência
              para seus pilotos favoritos durante a corrida, através do sistema
              conhecido como Fanboost.
            </p>
          </div>
        </div>
      </div>
    </RegrasStyle>
  );
};

export default Regras;
