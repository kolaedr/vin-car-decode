import React, { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getMessage } from '../i18n/index.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import { Button } from '../components/ui/Button.jsx'
import { Input } from '../components/ui/Input.jsx'

export default function Home() {
  const [vin, setVin] = useState('')
  const { lang } = useLanguage()
  const navigate = useNavigate()

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    if (!vin) return
    navigate(`/${vin}`)
  }, [navigate, vin])

  const t = useMemo(() => ({
    title: getMessage(lang, 'common.appTitle', ''),
    subtitle: getMessage(lang, 'common.appSubtitle', ''),
    placeholder: getMessage(lang, 'common.inputPlaceholder', ''),
    search: getMessage(lang, 'common.search', ''),
  }), [lang])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">{t.title}</h1>
        <p className="text-center text-slate-600 mb-8">{t.subtitle}</p>
        <form onSubmit={onSubmit} className="flex flex-col md:flex-row gap-3">
          <Input
            type="text"
            value={vin}
            onChange={(e) => setVin(e.target.value)}
            placeholder={t.placeholder}
            className="flex-1"
          />
          <Button type="submit" variant="solid" className="!px-4 !py-3 w-full md:w-auto">{t.search}</Button>
        </form>
      </div>
    </div>
  )
}


