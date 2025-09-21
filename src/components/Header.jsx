import React from 'react'
import Logo from './Logo.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { Select } from './ui/Select.jsx'

export default function Header() {
  const { lang, setLang } = useLanguage()
  return (
    <header className="border-b bg-white/70 backdrop-blur">
      <div className="container mx-auto px-4 md:px-0 h-14 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <Select
            value={lang}
            onValueChange={setLang}
            options={[{ value: 'uk', label: 'Українська' }, { value: 'en', label: 'English' }]}
          />
        </div>
      </div>
    </header>
  )
}


