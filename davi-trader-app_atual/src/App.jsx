import React, { useEffect, useState } from "react";

export default function Sinais() {
  const [sinais, setSinais] = useState([]);
  const [dataAtual, setDataAtual] = useState("");

  useEffect(() => {
    // Carrega os sinais do JSON
    fetch("/sinais.json")
      .then((res) => res.json())
      .then((data) => setSinais(data))
      .catch((err) => console.error("Erro ao carregar sinais:", err));
  }, []);

  useEffect(() => {
    // Atualiza a data/hora a cada minuto
    const atualizarData = () => {
      const agora = new Date().toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      setDataAtual(agora);
    };

    atualizarData(); // Atualiza na primeira renderização
    const intervalo = setInterval(atualizarData, 60000); // Atualiza a cada 1 min

    return () => clearInterval(intervalo); // Limpa intervalo ao desmontar
  }, []);

  return (
    <div className="p-6 text-white bg-slate-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        📊 REI DAVI TRADER
      </h1>

      {sinais.map((sinal, index) => (
        <div key={index} className="mb-6 p-4 rounded-2xl shadow bg-slate-800">
          <h2 className="text-xl font-semibold mb-2">{sinal.ativo}</h2>
          <p>📌 {sinal.tipo}</p>
          <p>📅 {dataAtual}</p>
          <p>🎯 Entrada: {sinal.entrada}</p>
          <p>🛑 Stop Loss: {sinal.stop}</p>
          <p>✅ Take Profit: {sinal.gain}</p>
          <p>⚡ Ativo</p>
        </div>
      ))}
    </div>
  );
}
