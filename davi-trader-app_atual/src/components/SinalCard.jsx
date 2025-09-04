// src/components/SinalCard.jsx
import React from "react";

function SinalCard({ sinal }) {
  return (
    <div style={styles.card}>
      <h3>{sinal.ativo}</h3>
      <p><strong>Data:</strong> {sinal.data}</p>
      <p><strong>Hora:</strong> {sinal.hora}</p>
      <p><strong>Recomendação:</strong> {sinal.recomendacao}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "12px",
    marginBottom: "12px",
    backgroundColor: "#fff",
  },
};

export default SinalCard;
