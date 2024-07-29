import * as React from 'react'
import Link from 'next/link'
import { ThemeToggle } from './theme-togle'

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10 px-6">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <span className="hidden font-bold sm:inline-block">PWASpike</span>
      </Link>

      <nav className=" gap-6 text-sm">
        <Link href={'/'} className="border-gray-700 border-2 p-2 mr-2">
          Home
        </Link>
        <Link href={'/ssrget'} className="border-gray-700 border-2 p-2 mr-2">
          SSR-Get
        </Link>
        <Link href={'/csrget'} className="border-gray-700 border-2 p-2 mr-2">
          CSR-Get
        </Link>
        <Link href={'/csrpost'} className="border-gray-700 border-2 p-2 mr-2">
          CSR-POST
        </Link>
        <Link href={'/ssrpost'} className="border-gray-700 border-2 p-2 mr-2">
          SSR-POST
        </Link>
      </nav>
    </div>
  )
}
