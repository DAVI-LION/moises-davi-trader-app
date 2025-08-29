// src/utils/date.js
// Funções de parsing/format para garantir comportamento consistente (interpreta sem timezone como local)
export function parseISOToLocal(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return null
  // aceita "YYYY-MM-DDTHH:mm:ss" ou "YYYY-MM-DD HH:mm:ss"
  const m = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2}):(\d{2})$/)
  if (!m) return null
  const [, yyyy, mm, dd, hh, mi, ss] = m
  return new Date(
    Number(yyyy),
    Number(mm) - 1,
    Number(dd),
    Number(hh),
    Number(mi),
    Number(ss)
  )
}

export function formatDateLocal(d) {
  if (!d || !(d instanceof Date) || isNaN(d)) return '--'
  const dd = String(d.getDate()).padStart(2, '0')
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const yyyy = d.getFullYear()
  const hh = String(d.getHours()).padStart(2, '0')
  const mi = String(d.getMinutes()).padStart(2, '0')
  return `${dd}/${mm}/${yyyy} ${hh}:${mi}`
}
