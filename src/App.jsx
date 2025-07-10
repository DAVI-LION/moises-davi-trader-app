import { useState, useEffect } from 'react';

export default function App() {
  const [saldo, setSaldo] = useState(() => Number(localStorage.getItem("saldo")) || 1000);
  const [valor, setValor] = useState(20);
  const [resultado, setResultado] = useState("✅");
  const [historico, setHistorico] = useState(() => JSON.parse(localStorage.getItem("historico")) || []);
  const [mensagem, setMensagem] = useState("");

  const registrarTrade = () => {
    if (valor <= 0) {
      setMensagem("Valor inválido.");
      return;
    }
    const novoSaldo = resultado === "✅" ? saldo + valor * 0.86 : saldo - valor;
    const registro = {
      horario: new Date().toLocaleTimeString(),
      valor,
      resultado,
    };
    const novoHistorico = [registro, ...historico];
    setSaldo(novoSaldo);
    setHistorico(novoHistorico);
    setMensagem("Trade registrado.");
  };

  const resetar = () => {
    setSaldo(1000);
    setHistorico([]);
    setMensagem("Sistema reiniciado.");
  };

  useEffect(() => {
    localStorage.setItem("saldo", saldo);
    localStorage.setItem("historico", JSON.stringify(historico));
  }, [saldo, historico]);

  return (
    <div style={{ fontFamily: "Arial", padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h1>🦁 DAVI Trader</h1>
      <p><strong>Saldo atual:</strong> R$ {saldo.toFixed(2)}</p>
      <p><strong>Valor da entrada:</strong> <input type="number" value={valor} onChange={e => setValor(Number(e.target.value))} /></p>
      <p><strong>Resultado:</strong>
        <select value={resultado} onChange={e => setResultado(e.target.value)}>
          <option value="✅">✅ WIN</option>
          <option value="❌">❌ LOSS</option>
        </select>
      </p>
      <button onClick={registrarTrade}>Registrar Trade</button>
      <button onClick={resetar} style={{ marginLeft: "1rem" }}>Resetar</button>
      <p style={{ color: "green" }}>{mensagem}</p>
      <hr />
      <h2>📊 Histórico</h2>
      <ul>
        {historico.map((h, i) => (
          <li key={i}>{h.horario} - {h.resultado} - R$ {h.valor}</li>
        ))}
      </ul>
    </div>
  );
}
