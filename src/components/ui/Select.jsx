import React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons'

export function Select({ value, onValueChange, options }) {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
      <SelectPrimitive.Trigger className="inline-flex items-center justify-between gap-2 border rounded px-3 py-1.5 min-w-[140px]">
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon>
          <ChevronDownIcon />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content className="bg-white border rounded shadow z-[9999]">
          <SelectPrimitive.Viewport className="p-1">
            {options.map((opt) => (
              <SelectPrimitive.Item key={opt.value} value={opt.value} className="px-2 py-1.5 rounded flex items-center justify-between gap-2 hover:bg-slate-100">
                <SelectPrimitive.ItemText>{opt.label}</SelectPrimitive.ItemText>
                {value === opt.value && <CheckIcon />}
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}


