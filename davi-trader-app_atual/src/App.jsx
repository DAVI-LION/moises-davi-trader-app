import React, { useEffect, useState } from 'react'
import Home from './pages/Home'

export default function App() {
  const [sinais, setSinais] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/sinais.json')
      .then((res) => res.json())
      .then((data) => {
        setSinais(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Erro ao carregar sinais:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Carregando sinais...</p>
  }

  return <Home sinais={sinais} />
}
