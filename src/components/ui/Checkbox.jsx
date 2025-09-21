import React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

export function Checkbox({ id, checked, onCheckedChange }) {
  return (
    <CheckboxPrimitive.Root
      id={id}
      className="w-5 h-5 border rounded flex items-center justify-center"
      checked={checked}
      onCheckedChange={onCheckedChange}
    >
      <CheckboxPrimitive.Indicator>
        <span className="text-indigo-800">✓</span>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}


