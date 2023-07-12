import React from 'react'

export default function useToday() {
  return (
    <div>Hoy, {Date().toLocaleString()}</div>
  )
}
