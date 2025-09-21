import React from 'react'
import { languages } from '../i18n/index.js'

export default function LanguageSwitcher({ lang, onChange }) {
  return (
    <select
      className="border rounded px-2 py-1"
      value={lang}
      onChange={(e) => onChange(e.target.value)}
    >
      {Object.entries(languages).map(([code, label]) => (
        <option key={code} value={code}>{label}</option>
      ))}
    </select>
  )
}


