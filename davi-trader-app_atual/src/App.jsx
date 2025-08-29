// src/App.jsx
import React from 'react'
import ListaSinais from './components/ListaSinais'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">REI DAVI TRADER — Sinais</h1>
          <p className="text-sm text-gray-600">
            Versão refinada — leitura de sinais locais com tratamento de erros, cache e atualização automática (60s).
          </p>
        </header>

        <main>
          <ListaSinais />
        </main>
      </div>
    </div>
  )
}
