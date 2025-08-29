// src/components/ListaSinais.jsx
import { useEffect, useState } from "react";

export default function ListaSinais() {
  const [sinais, setSinais] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch("/sinais.json")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar sinais");
        return res.json();
      })
      .then((data) => {
        setSinais(data);
        setLoading(false);
      })
      .catch((err) => {
        setErro(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-500">Carregando sinais...</p>;
  if (erro) return <p className="text-red-500">Erro: {erro}</p>;

  return (
    <div className="space-y-4">
      {sinais.length === 0 ? (
        <p className="text-gray-500">Nenhum sinal disponível</p>
      ) : (
        sinais.map((sinal, index) => {
          // Define cor do card de acordo com a operação
          const cardColor =
            sinal.operacao === "COMPRA"
              ? "border-green-500 bg-green-50"
              : "border-red-500 bg-red-50";

          return (
            <div
              key={index}
              className={`p-4 rounded-2xl shadow bg-white border-2 ${cardColor}`}
            >
              <h2 className="text-lg font-semibold">
                {sinal.ativo} - {sinal.operacao}
              </h2>
              <p className="text-sm text-gray-600">
                {new Date(sinal.horario).toLocaleString("pt-BR")}
              </p>

              <div className="mt-2 text-sm text-gray-700 space-y-1">
                <p>
                  <span className="font-semibold">Entrada:</span> R${" "}
                  {sinal.precoEntrada.toFixed(2)}
                </p>
                <p>
                  <span className="font-semibold">Alvo:</span> R${" "}
                  {sinal.alvo.toFixed(2)}
                </p>
                <p>
                  <span className="font-semibold">Stop:</span> R${" "}
                  {sinal.stop.toFixed(2)}
                </p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
