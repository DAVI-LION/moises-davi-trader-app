import React, { useState, useEffect, useMemo } from "react";
import SinalCard from "./components/SinalCard";
import "./App.css";
import { formatarData } from "./utils/date";

export default function App() {
  const [sinais, setSinais] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

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
      .catch((error) => {
        console.error(error);
        setErr("Falha ao carregar os sinais.");
        setLoading(false);
      });
  }, []);

  const listaOrdenada = useMemo(() => {
    return [...sinais].sort(
      (a, b) => new Date(a.horario) - new Date(b.horario)
    );
  }, [sinais]);

  if (loading) return <p className="status">⏳ Carregando sinais...</p>;
  if (err) return <p className="status erro">{err}</p>;

  return (
    <div className="container">
      <h1 className="titulo">📊 REI DAVI TRADER</h1>
      <div className="lista">
        {listaOrdenada.map((sinal, idx) => (
          <SinalCard key={idx} sinal={sinal} />
        ))}
      </div>
    </div>
  );
}
