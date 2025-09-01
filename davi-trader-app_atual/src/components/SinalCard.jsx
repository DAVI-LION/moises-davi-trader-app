import React from "react";

export default function SinalCard({ ativo, horario, operacao }) {
  return (
    <div
      className={`rounded-2xl shadow-md p-4 mb-4 text-white ${
        operacao === "COMPRA"
          ? "bg-green-500"
          : operacao === "VENDA"
          ? "bg-red-500"
          : "bg-gray-500"
      }`}
    >
      <h2 className="text-xl font-bold">{ativo}</h2>
      <p className="text-sm">{horario}</p>
      <p className="mt-2 text-lg font-semibold">{operacao}</p>
    </div>
  );
}
