import React, { useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import * as Tooltip from '@radix-ui/react-tooltip'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import { VIN_VARIABLE_BY_ID, VIN_GROUPS } from '../config/vinVariables.js'
import { getMessage } from '../i18n/index.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import { Button } from './ui/Button.jsx'
import { Input } from './ui/Input.jsx'
import { Checkbox } from './ui/Checkbox.jsx'
import { useNavigate, useParams } from 'react-router-dom'

export default function VinForm() {
  const { vin: vinParam } = useParams()
  const navigate = useNavigate()
  const [vin, setVin] = useState(vinParam || '')
  const [carInfo, setCarInfo] = useState(null)
  const [showEmpty, setShowEmpty] = useState(false)
  const { lang } = useLanguage()

  const getVinData = useCallback(async (vinCode) => {
    try {
      const VIN_CODE = vinCode || vin
      if (!VIN_CODE) return
      const { data } = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/${VIN_CODE}?format=json`)
      setCarInfo(data)
      setVin(VIN_CODE)
      navigate(`/${VIN_CODE}`, { replace: true })
    } catch (_) {
      // ignore
    }
  }, [vin])

  const result = useMemo(() => {
    const exclude = ['Error Code', 'Error Text']
    const list = Array.isArray(carInfo?.Results) ? carInfo.Results : []
    return list
      .filter((item) => !exclude.includes(item.Variable))
      .filter((item) => (showEmpty ? true : Boolean(item.Value)))
  }, [carInfo, showEmpty])

  useEffect(() => {
    if (vinParam) {
      getVinData(vinParam)
    }
  }, [getVinData, vinParam])

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    getVinData()
  }, [getVinData])

  const grouped = useMemo(() => {
    const sections = {}
    for (const item of result) {
      const meta = VIN_VARIABLE_BY_ID[item.VariableId]
      const groupKey = meta?.group || VIN_GROUPS.other
      if (!sections[groupKey]) sections[groupKey] = []
      sections[groupKey].push({ item, meta })
    }
    // Ensure 'other' renders last
    const ordered = {}
    Object.keys(sections).sort((a, b) => {
      if (a === VIN_GROUPS.other) return 1
      if (b === VIN_GROUPS.other) return -1
      return 0
    }).forEach((k) => { ordered[k] = sections[k] })
    return ordered
  }, [result])

  const t = useMemo(() => ({
    searchCriteria: carInfo?.SearchCriteria,
    message: carInfo?.Message,
    showEmpty: getMessage(lang, 'common.showEmpty', 'Show Empty'),
  }), [carInfo, lang])

  return (
    <div>
      <div className="flex justify-center py-6 border-b">
        <form className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full md:w-auto" onSubmit={onSubmit}>
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <Input
              type="text"
              name="vin"
              id="vin"
              value={vin}
              onChange={(e) => setVin(e.target.value)}
              placeholder="VIN code"
              className="w-full md:w-96"
            />
          </div>
          <Button type="submit" variant="solid" className="w-full md:w-auto">Check</Button>
        </form>
      </div>

      <div className="mt-4 max-w-5xl mx-auto">
        {t.message && (
          <div className="bg-sky-100 border-sky-600 text-sky-600 text-center font-bold py-3 px-4 rounded-xl mb-6 text-xs">
            {t.message}
          </div>
        )}
        {t.searchCriteria && (
          <div className="flex flex-col md:flex-row justify-between mb-6 py-2 px-4 rounded border">
            <h3 className="text-xl font-bold text-indigo-800">{t.searchCriteria}</h3>
            <div className="flex gap-2 items-center">
              <Checkbox id="showEmpty" checked={showEmpty} onCheckedChange={(v) => setShowEmpty(Boolean(v))} />
              <label htmlFor="showEmpty">{t.showEmpty}</label>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4">
          {Object.entries(grouped).map(([groupKey, entries]) => (
            <div key={groupKey} className="border rounded-lg">
              <div className="px-4 py-2 border-b bg-slate-50 font-semibold ">
                {getMessage(lang, `groups.${groupKey}`, groupKey)}
              </div>
              <div className="divide-y">
                {entries.map(({ item, meta }, idx) => (
                  <div key={item.VariableId} className={`grid grid-cols-1 md:grid-cols-3 py-2 px-2 ${idx % 2 === 0 ? 'bg-indigo-50' : ''}`}>
                    <div className="flex items-center gap-2">
                      <span className="text-sm md:text-base">{meta?.label?.[lang] || item.Variable}</span>
                      {meta && (
                        <Tooltip.Provider delayDuration={200}>
                          <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                              <button aria-label="Info" className="text-slate-500 hover:text-slate-700">
                                <InfoCircledIcon />
                              </button>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                              <Tooltip.Content className="max-w-md bg-black text-white text-sm px-3 py-2 rounded shadow">
                                {meta.descriptions?.[lang] || meta.descriptions?.en}
                                <Tooltip.Arrow className="fill-black" />
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        </Tooltip.Provider>
                      )}
                    </div>
                    <div className="col-span-1 md:col-span-2 font-semibold break-words">{item.Value ?? ''}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


