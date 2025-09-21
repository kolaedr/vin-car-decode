import React from 'react'
import { Button as RadixButton } from '@radix-ui/themes'

export function Button({
  variant = 'solid',
  size = '3',
  color = 'indigo',
  radius = 'large',
  fullWidth = false,
  className = '',
  style = {},
  ...props
}) {
  const fallbackStyle = variant === 'solid' ? { backgroundColor: 'var(--accent-9)', color: 'white' } : {}
  return (
    <RadixButton
      variant={variant}
      size={size}
      color={color}
      radius={radius}
      highContrast
      className={`cursor-pointer ${fullWidth ? 'w-full' : ''} ${className}`}
      style={{ ...fallbackStyle, ...style }}
      {...props}
    />
  )
}


