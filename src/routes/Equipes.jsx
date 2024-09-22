import { useState } from "react";
import { EquipesStyle } from "../css/EquipesStyle";
import equipes from "../../lista-equipes.json";
import ModalEquipes from "../components/ModalEquipes";

const Equipes = () => {

  

  return (
    <EquipesStyle>
      <div id="banner">
        <img id="imgBanner" src="sua-imagem.jpg" alt="Banner" />
      </div>

      <div className="texto-inicio">
        <p>Temporada 23/24</p>
      </div>

      <section id="card-wrapper">
        <div className="box-area">

          {equipes.map((equipe, index) => {
            const { nameEquipe, descricao, equipeId } = equipe
            return (
              <div className="box" key={nameEquipe}>
                <picture>
                  <img src={`src/assets/img/equipes/${equipeId}/${equipeId}.jpg`}/>
                </picture>

                <div className="texto">
                  <h3>{nameEquipe}</h3>
                  <button className="openPopupBtn">
                    Saiba mais sobre a equipe {nameEquipe}
                  </button>

                  <ModalEquipes 
                  nameEquipe= { nameEquipe } 
                  descricao = { descricao } 
                  initialIsOpen= { false }
                  equipeId = { equipeId }/>
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
