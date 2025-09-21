import React from 'react'

export function Input({ className = '', ...props }) {
  return (
    <input
      className={`border px-4 py-3 rounded-lg ${className}`}
      {...props}
    />
  )
}


