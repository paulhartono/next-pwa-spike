'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className="flex ">
      <div onClick={() => setTheme('light')}>
        <span>Light</span>
      </div>
      /
      <div onClick={() => setTheme('dark')}>
        <span>Dark</span>
      </div>
    </div>
  )
}
