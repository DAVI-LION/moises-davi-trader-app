import "./SinalCard.css";

function SinalCard({ sinal }) {
  return (
    <div className="sinal-card">
      <h2>{sinal.ativo}</h2>
      <p><strong>Data:</strong> {sinal.data}</p>
      <p><strong>Hora:</strong> {sinal.hora}</p>
      <p><strong>Recomendação:</strong> {sinal.recomendacao}</p>
    </div>
  );
}

export default SinalCard;
