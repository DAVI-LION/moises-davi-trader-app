// src/components/SinalCard.jsx
import React from 'react';
import { formatarData } from '../utils/date';
import './SinalCard.css'; // opcional — se não existir, não quebra (só o estilo)

export default function SinalCard({ sinal = {} }) {
  const ativo = sinal.ativo ?? sinal.papel ?? '—';
  const horario = sinal.horario ?? sinal.data ?? null;
  const tipo = (sinal.tipo ?? sinal.operacao ?? '').toString().toUpperCase() || '—';
  const preco = sinal.preco ?? sinal.precoEntrada ?? null;

  const precoStr =
    preco === null || preco === undefined || Number.isNaN(Number(preco))
      ? '—'
      : Number(preco).toFixed(2).replace('.', ',');

  return (
    <div className="card" aria-label={`Sinal ${ativo} ${tipo}`}>
      <h2>{ativo}</h2>
      <p><strong>Horário:</strong> {formatarData(horario)}</p>
      <p><strong>Tipo:</strong> {tipo}</p>
      <p><strong>Preço:</strong> {precoStr === '—' ? precoStr : `R$ ${precoStr}`}</p>
    </div>
  );
}
