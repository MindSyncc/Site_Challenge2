import React, { useState } from 'react';
import { JogoStyle } from '../css/JogoStyle';

// Pilotos disponíveis para seleção
const pilotos = [
  { id: 1, nome: 'Buemi' },
  { id: 2, nome: 'Dacosta' },
  { id: 3, nome: 'Dennis' },
  { id: 4, nome: 'Digrassi' },
  { id: 5, nome: 'Fenestraz' },
  { id: 6, nome: 'Frijns' },
  { id: 7, nome: 'Gunther' },
  { id: 8, nome: 'Hughes' },
  { id: 9, nome: 'Lotterer' },
  { id: 10, nome: 'Evans' },
  { id: 11, nome: 'Mortara' },
  { id: 12, nome: 'Cassidy' },
];

const equipes = [
  { id: 1, nome: 'Andretti' },
  { id: 2, nome: 'Cupra' },
  { id: 3, nome: 'DS' },
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

  // Função para calcular os pontos
  const calcularPontuacao = () => {
    // Simular uma corrida com base nos pilotos escolhidos e na equipe
    const pontuacao = {
      corridaPrincipal: Math.floor(Math.random() * 100),
      corridaClassificatoria: Math.floor(Math.random() * 50),
    };
    setResultados(pontuacao);
  };

  return (
    <JogoStyle>
    <div>
      <h1>Escolha Seus Pilotos</h1>
      <div>
        {pilotos.map((piloto) => (
          <button
            key={piloto.id}
            onClick={() => handlePilotSelect(piloto)}
            style={{
              backgroundColor: selectedPilotos.includes(piloto) ? 'lightgreen' : 'white',
            }}
          >
            {piloto.nome}
          </button>
        ))}
      </div>

      <h2>Escolha uma Equipe</h2>
      <div>
        {equipes.map((equipe) => (
          <button
            key={equipe.id}
            onClick={() => handleEquipeSelect(equipe)}
            style={{
              backgroundColor: selectedEquipe === equipe ? 'lightblue' : 'white',
            }}
          >
            {equipe.nome}
          </button>
        ))}
      </div>

      <button onClick={calcularPontuacao}>Iniciar Corrida</button>

      {resultados && (
        <div>
          <h3>Resultados</h3>
          <p>Corrida Principal: {resultados.corridaPrincipal} pontos</p>
          <p>Corrida Classificatória: {resultados.corridaClassificatoria} pontos</p>
        </div>
      )}
    </div>
    </JogoStyle>
  );
};

export default Jogo;
