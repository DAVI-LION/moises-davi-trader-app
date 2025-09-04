import React from "react";
import "./SinalCard.css";

function SinalCard({ ativo, data, hora, recomendacao }) {
  return (
    <div className="sinal-card">
      <h2>{ativo}</h2>
      <p>
        <strong>Data:</strong> {data}
      </p>
      <p>
        <strong>Hora:</strong> {hora}
      </p>
      <p>
        <strong>Recomendação:</strong> {recomendacao}
      </p>
    </div>
  );
}

export default SinalCard;
