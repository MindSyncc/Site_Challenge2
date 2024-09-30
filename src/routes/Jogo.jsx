import React, { useState } from "react";
import { JogoStyle } from "../css/JogoStyle";

// Pilotos disponíveis para seleção, agora com imagens
const pilotos = [
  { id: 1, nome: "Buemi", imagem: "src/assets/img/pilotos/buemi.png" },
  { id: 2, nome: "Dacosta", imagem: "src/assets/img/pilotos/dacosta.png" },
  { id: 3, nome: "Dennis", imagem: "src/assets/img/pilotos/dennis.png" },
  { id: 4, nome: "Digrassi", imagem: "src/assets/img/pilotos/digrassi.png" },
  { id: 5, nome: "Fenestraz", imagem: "src/assets/img/pilotos/fenestraz.png" },
  { id: 6, nome: "Frijns", imagem: "src/assets/img/pilotos/frijns.png" },
  { id: 7, nome: "Gunther", imagem: "src/assets/img/pilotos/gunther.png" },
  { id: 8, nome: "Hughes", imagem: "src/assets/img/pilotos/hughes.png" },
  { id: 9, nome: "Lotterer", imagem: "src/assets/img/pilotos/lotterer2.png" },
  { id: 10, nome: "Evans", imagem: "src/assets/img/pilotos/mitch-evans.png" },
  { id: 11, nome: "Mortara", imagem: "src/assets/img/pilotos/mortara.png" },
  { id: 12, nome: "Muller", imagem: "src/assets/img/pilotos/muller.png" },
  { id: 13, nome: "Nato", imagem: "src/assets/img/pilotos/nato.png" },
  {
    id: 14,
    nome: "Cassidy",
    imagem: "src/assets/img/pilotos/nick-cassidy.png",
  },
  { id: 15, nome: "Rast", imagem: "src/assets/img/pilotos/rast2.png" },
  { id: 16, nome: "Rowland", imagem: "src/assets/img/pilotos/rowland.png" },
  { id: 17, nome: "Sam Bird", imagem: "src/assets/img/pilotos/sam-bird.png" },
  {
    id: 18,
    nome: "Sette-Câmara",
    imagem: "src/assets/img/pilotos/sette-camara.png",
  },
  { id: 19, nome: "Ticktum", imagem: "src/assets/img/pilotos/ticktum.png" },
  { id: 20, nome: "Vandoorne", imagem: "src/assets/img/pilotos/vandoorne.png" },
  { id: 21, nome: "Vergne", imagem: "src/assets/img/pilotos/vergne.png" },
  { id: 22, nome: "Wehrlein", imagem: "src/assets/img/pilotos/wehrlein.png" },
];

// Adicionando imagens às equipes
const equipes = [
  {
    id: 1,
    nome: "Avalanche Andretti Formula E",
    imagem: "src/assets/img/equipes/andretti/andretti.jpg",
  },
  {
    id: 2,
    nome: "Cupra Formula E Team",
    imagem: "src/assets/img/equipes/cupra/cupra.jpg",
  },
  { id: 3, nome: "DSPenske", imagem: "src/assets/img/equipes/ds/ds.jpg" },
  {
    id: 4,
    nome: "Jaguar TCS Racing",
    imagem: "src/assets/img/equipes/jaguar/jaguar.jpg",
  },
  {
    id: 5,
    nome: "Porsche Formula E Team",
    imagem: "src/assets/img/equipes/porsche/porsche.jpg",
  },
  {
    id: 6,
    nome: "Nissan Formula E Team",
    imagem: "src/assets/img/equipes/nissan/nissan.jpg",
  },
  {
    id: 7,
    nome: "Maserati MSG Racing",
    imagem: "src/assets/img/equipes/maserati/maserati.jpg",
  },
  {
    id: 8,
    nome: "Mahindra Racing",
    imagem: "src/assets/img/equipes/mahindra/mahindra.jpg",
  },
  {
    id: 9,
    nome: "TAG Heuer Porsche Formula E Team",
    imagem: "src/assets/img/equipes/porsche/porsche.jpg",
  },
  {
    id: 10,
    nome: "Envision Racing",
    imagem: "src/assets/img/equipes/envision/envision.jpg",
  },
  {
    id: 11,
    nome: "NEOM McLaren Formula E Team",
    imagem: "src/assets/img/equipes/mclaren/mclaren.jpg",
  },
];

const Jogo = () => {
  const [selectedPilotos, setSelectedPilotos] = useState([]);
  const [selectedEquipe, setSelectedEquipe] = useState(null);
  const [resultados, setResultados] = useState(null);

  // Adiciona ou remove pilotos da seleção
  const handlePilotSelect = (piloto) => {
    setSelectedPilotos((prev) => {
      if (prev.includes(piloto)) {
        return prev.filter((p) => p !== piloto);
      }
      if (prev.length < 10) {
        return [...prev, piloto];
      }
      return prev;
    });
  };

  // Escolhe uma equipe
  const handleEquipeSelect = (equipe) => {
    setSelectedEquipe(equipe);
  };

  const simularResultados = () => {
    return {
      voltaMaisRapida:
        selectedPilotos[Math.floor(Math.random() * selectedPilotos.length)], // Seleciona um piloto aleatório
      desqualificados: selectedPilotos.slice(0, 2), // Simula os dois primeiros pilotos como desqualificados
    };
  };

  // Função para calcular os pontos
  const calcularPontuacao = () => {
    console.log("Função calcularPontuacao foi chamada");
    let totalCorridaPrincipal = 0;
    let totalCorridaClassificatoria = 0;
    let pontosEquipePrincipal = 0;
    let pontosEquipeClassificatoria = 0;
    let pilotosPontuacao = [];

    // Simula os resultados da corrida
    const resultadosSimulados = simularResultados();

    // Calcula a pontuação de cada piloto na corrida principal
    selectedPilotos.forEach((piloto, index) => {
      let pontosCorridaPrincipal = 0;
      let pontosCorridaClassificatoria = 0;

      // Posição final na corrida principal
      if (index === 0) pontosCorridaPrincipal += 10; // 1º lugar
      else if (index === 1) pontosCorridaPrincipal += 5; // 2º lugar
      else if (index === 2) pontosCorridaPrincipal += 3; // 3º lugar
      else if (index === 3) pontosCorridaPrincipal += 2; // 4º lugar
      else if (index === 4) pontosCorridaPrincipal += 1; // 5º lugar

      // Posição final na corrida classificatória
      if (index === 0) pontosCorridaClassificatoria += 5; // 1º lugar
      else if (index === 1) pontosCorridaClassificatoria += 2.5; // 2º lugar
      else if (index === 2) pontosCorridaClassificatoria += 1.5; // 3º lugar
      else if (index === 3) pontosCorridaClassificatoria += 1; // 4º lugar
      else if (index === 4) pontosCorridaClassificatoria += 0.5; // 5º lugar

      // Verifica se o piloto foi desqualificado na corrida principal
      if (resultadosSimulados.desqualificados.includes(piloto)) {
        pontosCorridaPrincipal -= 5; // Penalidade de desqualificação
      }

      // Verifica se o piloto foi desqualificado na corrida classificatória
      if (resultadosSimulados.desqualificados.includes(piloto)) {
        pontosCorridaClassificatoria -= 2.5; // Penalidade de desqualificação
      }

      // Volta mais rápida na corrida principal
      if (resultadosSimulados.voltaMaisRapida === piloto) {
        pontosCorridaPrincipal += 10;
      }

      // Volta mais rápida na corrida classificatória
      if (resultadosSimulados.voltaMaisRapida === piloto) {
        pontosCorridaClassificatoria += 5;
      }

      // Acúmulo de pontos individuais para cada piloto
      pilotosPontuacao.push({
        nome: piloto.nome,
        corridaPrincipal: pontosCorridaPrincipal,
        corridaClassificatoria: pontosCorridaClassificatoria,
      });

      totalCorridaPrincipal += pontosCorridaPrincipal;
      totalCorridaClassificatoria += pontosCorridaClassificatoria;

      // Soma para a equipe (considerando os dois primeiros pilotos da equipe)
      if (selectedPilotos.indexOf(piloto) < 2) {
        pontosEquipePrincipal += pontosCorridaPrincipal;
        pontosEquipeClassificatoria += pontosCorridaClassificatoria;
      }
    });

    // Atualiza os resultados com os totais e a pontuação da equipe
    setResultados({
      corridaPrincipal: totalCorridaPrincipal,
      corridaClassificatoria: totalCorridaClassificatoria,
      pilotosPontuacao,
      equipePontuacao: {
        principal: pontosEquipePrincipal,
        classificatoria: pontosEquipeClassificatoria,
      },
    });
  };

  return (
    <JogoStyle>
      <div className="div-pilot">
        <p className="choice" >Escolha Seus Pilotos</p>
        <div className="section-pilot">
          {pilotos.map((piloto) => (
            <button
              className="card-button"
              key={piloto.id}
              onClick={() => handlePilotSelect(piloto)}
              style={{
                backgroundColor: selectedPilotos.includes(piloto)
                  ? "lightgreen"
                  : "white",
              }}
            >
              <img src={piloto.imagem} alt={piloto.nome} />
              {piloto.nome}
            </button>
          ))}
        </div>

        <div className="div-pilot">
        <p className="choice" >Escolha uma equipe</p>
          <div className="section-pilot">
            {equipes.map((equipe) => (
              <button
                className="card-button"
                key={equipe.id}
                onClick={() => handleEquipeSelect(equipe)}
                style={{
                  backgroundColor:
                    selectedEquipe === equipe ? "#FFD700" : "white",
                }}
              >
                <img src={equipe.imagem} alt={equipe.nome} />
                {equipe.nome}
              </button>
            ))}
          </div>
        </div>

        <button className="button-game" onClick={calcularPontuacao}>
          Iniciar Corrida
        </button>

        {resultados && (
          <div className="result-game">
            <h3>Resultados</h3>
            <p>
              <strong>Total da Corrida Principal:</strong>{" "}
              {resultados.corridaPrincipal} pontos
            </p>
            <p>
              <strong>Total da Corrida Classificatória:</strong>{" "}
              {resultados.corridaClassificatoria} pontos
            </p>

            <h4>Pontuação Individual de Pilotos:</h4>
            {resultados.pilotosPontuacao.map((piloto, index) => (
              <div key={index}>
                <p>
                  <strong>{piloto.nome}:</strong>
                </p>
                <p>Corrida Principal: {piloto.corridaPrincipal} pontos</p>
                <p>
                  Corrida Classificatória: {piloto.corridaClassificatoria}{" "}
                  pontos
                </p>
              </div>
            ))}

            <h4>Pontuação da Equipe:</h4>
            <p>
              <strong>Corrida Principal:</strong>{" "}
              {resultados.equipePontuacao.principal} pontos
            </p>
            <p>
              <strong>Corrida Classificatória:</strong>{" "}
              {resultados.equipePontuacao.classificatoria} pontos
            </p>
          </div>
        )}
      </div>
    </JogoStyle>
  );
};

export default Jogo;
