import { fallbackPortfolio } from '../data/fallback'

const API_BASE = import.meta.env.VITE_API_URL || '/api'

export async function fetchPortfolio() {
  try {
    const res = await fetch(`${API_BASE}/portfolio/`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    if (!data?.profile) throw new Error('Empty portfolio')
    return { ...data, source: 'api' }
  } catch {
    return { ...fallbackPortfolio, source: 'fallback' }
  }
}

export async function sendContact(payload) {
  const res = await fetch(`${API_BASE}/contact/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(data?.detail || data?.message || 'Failed to send message')
  }
  return data
}
