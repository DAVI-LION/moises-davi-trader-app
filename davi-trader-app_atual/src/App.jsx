import React, { useEffect, useState } from "react";

function App() {
  const [sinais, setSinais] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSinais = async () => {
      try {
        const res = await fetch("/sinais.json");
        if (!res.ok) throw new Error("Erro ao carregar sinais");
        const data = await res.json();
        setSinais(data);
      } catch (err) {
        console.error("Erro:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSinais();
    const interval = setInterval(fetchSinais, 60000); // atualiza a cada 60s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">📊 REI DAVI TRADER</h1>

      {loading ? (
        <p>Carregando sinais...</p>
      ) : sinais.length === 0 ? (
        <p>Nenhum sinal disponível.</p>
      ) : (
        <div className="grid gap-4 w-full max-w-2xl">
          {sinais.map((sinal, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-4 rounded-2xl shadow-md border border-gray-700"
            >
              <h2 className="text-xl font-semibold">{sinal.ativo}</h2>
              <p className="text-gray-300">Data: {sinal.data}</p>
              <p className="text-gray-400">Horário: {sinal.horario}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
