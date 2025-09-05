import { useEffect, useState } from "react";
import SinalCard from "../components/SinalCard";
import "./Home.css";

function Home() {
  const [sinais, setSinais] = useState([]);

  useEffect(() => {
    fetch("/sinais.json")
      .then((response) => {
        if (!response.ok) throw new Error("Erro ao carregar sinais");
        return response.json();
      })
      .then((data) => setSinais(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="home-container">
      <h1 className="titulo">📊 REI DAVI TRADER</h1>
      {sinais.length > 0 ? (
        sinais.map((sinal, index) => (
          <SinalCard key={index} sinal={sinal} />
        ))
      ) : (
        <p>Carregando sinais...</p>
      )}
    </div>
  );
}

export default Home;
