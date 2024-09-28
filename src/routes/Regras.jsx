import React from "react";
import { useNavigate } from "react-router-dom";
import { RegrasStyle } from "../css/RegrasStyle";

const RegrasFormulaE = () => {
  const navigate = useNavigate(); // Para redirecionamento

  // Funções para redirecionar
  const handleRegrasFormulaE = () => {
    navigate("/regras-formula-e");
  };

  const handleRegrasEMasters = () => {
    navigate("/regras-emasters");
  };

  return (
    <RegrasStyle>
      <div>
        <h1 className="regras-h1">Regras de Corrida</h1>

        <div className="button-container">
          <button className="botao-regras" onClick={handleRegrasFormulaE}>
            Regras da Fórmula E
          </button>
          <button className="botao-regras" onClick={handleRegrasEMasters}>
            Regras do eMasters
          </button>
        </div>
      </div>
    </RegrasStyle>
  );
};

export default RegrasFormulaE;
