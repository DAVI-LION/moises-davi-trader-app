// src/App.jsx
import React, { useEffect, useState } from 'react'
import SinalCard from './components/SinalCard'

export default function App() {
  const [sinais, setSinais] = useState(null) // null = ainda carregando
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchSinais() {
      try {
        const res = await fetch('/sinais.json', { cache: 'no-store' })
        if (!res.ok) throw new Error(`Falha ao buscar sinais (HTTP ${res.status})`)
        const data = await res.json()
        // espera que o JSON seja um array no root
        if (!Array.isArray(data)) throw new Error('Formato inválido: esperado array no root de sinais.json')
        setSinais(data)
      } catch (err) {
        console.error(err)
        setError(err.message ?? 'Erro desconhecido')
        setSinais([])
      }
    }
    fetchSinais()
  }, [])

  if (sinais === null) return <div className="p-6">⏳ Carregando sinais...</div>
  if (error) return <div className="p-6 text-red-600">Erro ao carregar sinais: {error}</div>
  if (sinais.length === 0) return <div className="p-6">Nenhum sinal disponível.</div>

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="max-w-4xl mx-auto mb-6">
        <h1 className="text-3xl font-bold">📊 REI DAVI TRADER</h1>
        <p className="text-sm text-gray-600">Sinais — versão finalizada (COMPRA/VENDA/NEUTRO/AJUSTE/ENCERRAR)</p>
      </header>

      <main className="max-w-4xl mx-auto grid gap-4">
        {sinais.map((sinal) => (
          // passamos o objeto inteiro — SinalCard deve aceitar `sinal`
          <SinalCard key={sinal.id ?? `${sinal.ativo}-${sinal.horario}`} sinal={sinal} />
        ))}
      </main>
    </div>
  )
}
