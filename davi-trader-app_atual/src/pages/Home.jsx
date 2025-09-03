import React, { useEffect, useState } from "react";
import SinalCard from "../components/SinalCard";

export default function Home() {
  const [sinais, setSinais] = useState([]);

  useEffect(() => {
    fetch("/sinais.json")
      .then((res) => res.json())
      .then((data) => setSinais(data))
      .catch((err) => console.error("Erro ao carregar sinais:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">📊 REI DAVI TRADER</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sinais.map((sinal, index) => (
          <SinalCard key={index} sinal={sinal} />
        ))}
      </div>
    </div>
  );
}
