import { useState } from "react";
import { EquipesStyle } from "../css/EquipesStyle";
import equipes from "../../lista-equipes.json";
import ModalEquipes from "../components/ModalEquipes";
import Carrousel from "../components/Carrousel";

const Equipes = () => {

  {/*imagens para o carrousel*/}
  let imagens = [
    "src/assets/img/equipes/cupra/cupra2.jpg",
    "src/assets/img/equipes/ds/ds2.jpg",
    "src/assets/img/equipes/andretti/andretti2.jpeg",
    "src/assets/img/equipes/envision/envision2.webp",
    "src/assets/img/equipes/ert/ert2.jpg",
    "src/assets/img/equipes/jaguar/jaguar2.avif",
    "src/assets/img/equipes/mahindra/mahindra2.webp",
    "src/assets/img/equipes/maserati/maserati.jpg",
    "src/assets/img/equipes/mclaren/mclaren.jpg",
    "src/assets/img/equipes/nissan/nissan.jpg",
    "src/assets/img/equipes/porsche/porsche.jpg"
  ];
  
  return (
    <EquipesStyle>

      <Carrousel delay= '3000' slideArr = {imagens}/>
      

      <div className="texto-inicio">
        <p>Temporada 23/24</p>
      </div>

      <section id="card-wrapper">
        <div className="box-area">

          {equipes.map((equipe, index) => {
            const { nameEquipe, descricao, equipeId, equipeImages } = equipe
            return (
              <div className="box" key={nameEquipe}>
                  <img src={`src/assets/img/equipes/${equipeId}/${equipeId}.jpg`} id="card-img"/>

                <div className="texto">
                  <h3>{nameEquipe}</h3>
                  <button className="openPopupBtn">
                    Saiba mais sobre a equipe {nameEquipe}
                  </button>

                  <ModalEquipes 
                  nameEquipe= { nameEquipe } 
                  descricao = { descricao } 
                  initialIsOpen= { false }
                  equipeImages = { equipeImages }/>
                </div>
              </div>    
            )
          })}
        </div>
      </section>
    </EquipesStyle>
  );
};

export default Equipes;
