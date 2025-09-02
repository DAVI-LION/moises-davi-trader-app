// components/SinalCard.jsx
import React from "react";

function SinalCard({ papel, horario, operacao }) {
  const operacaoEstilo =
    operacao === "COMPRA"
      ? "text-green-600 font-bold"
      : "text-red-600 font-bold";

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-200">
      <h2 className="text-xl font-semibold">{papel}</h2>
      <p className="text-gray-500">{horario}</p>
      <p className={operacaoEstilo}>{operacao}</p>
    </div>
  );
}

export default SinalCard;
