import { useEffect, useState } from "react";

function App() {
  const [sinais, setSinais] = useState([]);
  const [loading, setLoading] = useState(true);

  // URL correta do JSON no GitHub
  const API_URL =
    "https://raw.githubusercontent.com/DAVI-LION/davi-trader-signals/main/sinais.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Erro ao carregar os sinais");
        }
        const data = await response.json();
        setSinais(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar os sinais:", error);
        setLoading(false);
      }
    };

    fetchData();

    // Atualiza automaticamente a cada 60s
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Carregando sinais...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📊 REI DAVI TRADER</h1>
      <ul className="space-y-4">
        {sinais.map((sinal, index) => (
          <li
            key={index}
            className="p-4 rounded-2xl shadow-md bg-white border"
          >
            <p className="text-lg font-semibold">{sinal.ativo}</p>
            <p className="text-sm text-gray-600">{sinal.horario}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
