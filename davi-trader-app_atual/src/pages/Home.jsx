import React, { useEffect, useState } from "react";
import SinalCard from "../components/SinalCard";
import "./Home.css";

function Home() {
  const [sinais, setSinais] = useState([]);

  useEffect(() => {
    fetch("/sinais.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar sinais");
        }
        return response.json();
      })
      .then((data) => setSinais(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="home">
      {sinais.length === 0 ? (
        <p>Nenhum sinal disponível.</p>
      ) : (
        sinais.map((sinal, index) => (
          <SinalCard
            key={index}
            ativo={sinal.ativo}
            data={sinal.data}
            hora={sinal.hora}
            recomendacao={sinal.recomendacao}
          />
        ))
      )}
    </div>
  );
}

export default Home;
