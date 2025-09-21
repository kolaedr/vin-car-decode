import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'lang'

const LanguageContext = createContext({ lang: 'uk', setLang: () => { } })

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState('uk')

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
    if (saved) setLangState(saved)
  }, [])

  const setLang = useCallback((value) => {
    setLangState(value)
    try { window.localStorage.setItem(STORAGE_KEY, value) } catch (_) { }
  }, [])

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)
