// App.jsx
import React, { useEffect, useState } from "react";
import SinalCard from "./components/SinalCard";

function App() {
  const [sinais, setSinais] = useState([]);

  useEffect(() => {
    fetch("/sinais.json")
      .then((response) => response.json())
      .then((data) => setSinais(data.sinais))
      .catch((error) => console.error("Erro ao carregar sinais:", error));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        📊 REI DAVI TRADER
      </h1>

      <div className="grid gap-4">
        {sinais.length > 0 ? (
          sinais.map((sinal, index) => (
            <SinalCard
              key={index}
              papel={sinal.papel}
              horario={sinal.horario}
              operacao={sinal.operacao}
            />
          ))
        ) : (
          <p className="text-gray-500">Nenhum sinal disponível...</p>
        )}
      </div>
    </div>
  );
}

export default App;
