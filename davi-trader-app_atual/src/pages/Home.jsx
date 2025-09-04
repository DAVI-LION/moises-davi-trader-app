import React from 'react'
import SinalCard from '../components/SinalCard'
import './Home.css'

export default function Home({ sinais }) {
  return (
    <div className="home-container">
      <h1>📊 REI DAVI TRADER</h1>
      {sinais.length === 0 ? (
        <p>Nenhum sinal disponível</p>
      ) : (
        <div className="sinais-grid">
          {sinais.map((sinal, index) => (
            <SinalCard key={index} sinal={sinal} />
          ))}
        </div>
      )}
    </div>
  )
}
