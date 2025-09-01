import React from "react";
// src/components/SinalCard.jsx
import React from 'react'
import { formatDateLocal } from '../utils/date'

const formatBRL = (value) => {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return '—'
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value))
}

// Definindo as classes por operação (fácil de expandir no futuro)
const operacaoStyles = {
  COMPRA: {
    container: 'border-green-200 bg-green-50',
    badge: 'text-green-700',
  },
  VENDA: {
    container: 'border-red-200 bg-red-50',
    badge: 'text-red-700',
  },
  NEUTRO: {
    container: 'border-gray-200 bg-gray-50',
    badge: 'text-gray-600',
  },
  AJUSTE: {
    container: 'border-yellow-200 bg-yellow-50',
    badge: 'text-yellow-700',
  },
  ENCERRAR: {
    container: 'border-purple-200 bg-purple-50',
    badge: 'text-purple-700',
  },
  DEFAULT: {
    container: 'border-gray-200 bg-white',
    badge: 'text-gray-700',
  },
}

export default function SinalCard({ sinal, isNext, isRead, onMarkRead, onView }) {
  const operacao = String(sinal.operacao ?? '').toUpperCase()
  const style = operacaoStyles[operacao] || operacaoStyles.DEFAULT

  let container = `p-4 rounded-2xl shadow border transition ${style.container}`
  let badgeText = operacao || '—'
  let badgeClasses = `text-2xl font-bold ${style.badge}`

  if (isRead) container += ' opacity-60'
  if (isNext) container += ' ring-2 ring-yellow-200'

  const dt = sinal.parsedHorario

  return (
    <article className={container} aria-label={`Sinal ${sinal.ativo} ${operacao}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div className="w-24 flex items-center justify-center">
              <div className={badgeClasses}>{badgeText}</div>
            </div>
            <div>
              <div className="text-xl font-semibold text-gray-800">{sinal.ativo}</div>
              <div className="text-xs text-gray-500">ID: {sinal.id ?? '—'}</div>
            </div>
          </div>

          <div className="mt-3 text-sm text-gray-700 space-y-1">
            <div className="text-sm text-gray-600">{formatDateLocal(dt)}</div>
            <div><span className="font-semibold">Entrada:</span> {formatBRL(sinal.precoEntrada)}</div>
            <div><span className="font-semibold">Alvo:</span> {formatBRL(sinal.alvo)}</div>
            <div><span className="font-semibold">Stop:</span> {formatBRL(sinal.stop)}</div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <button
            onClick={() => onView?.(sinal)}
            className="text-sm px-3 py-1 rounded-md border hover:bg-gray-100"
            aria-label={`Visualizar sinal ${sinal.ativo}`}
          >
            Ver
          </button>
          <button
            onClick={() => onMarkRead?.(sinal)}
            className="text-sm px-3 py-1 rounded-md border hover:bg-gray-100"
            aria-label={`Marcar sinal ${sinal.ativo}`}
          >
            {isRead ? 'Lido' : 'Marcar'}
          </button>
        </div>
      </div>
    </article>
  )
}
