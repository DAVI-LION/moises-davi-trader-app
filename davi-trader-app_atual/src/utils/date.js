// src/utils/date.js
export function parseISOToLocal(dateStr) {
  if (!dateStr) return null
  const s = String(dateStr).trim().replace(' ', 'T')
  const d = new Date(s)
  return isNaN(d) ? null : d
}

export function formatDateLocal(d) {
  if (!d) return '--'
  if (!(d instanceof Date)) d = new Date(String(d).replace(' ', 'T'))
  if (isNaN(d)) return '--'
  const dd = String(d.getDate()).padStart(2, '0')
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const yyyy = d.getFullYear()
  const hh = String(d.getHours()).padStart(2, '0')
  const mi = String(d.getMinutes()).padStart(2, '0')
  return `${dd}/${mm}/${yyyy} ${hh}:${mi}`
}
