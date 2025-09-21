import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="inline-flex items-center gap-2 text-indigo-800 font-extrabold tracking-tight">
      <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-indigo-800 text-white">V</span>
      <span>VIN Decode</span>
    </Link>
  )
}


