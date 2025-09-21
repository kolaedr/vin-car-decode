import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 md:px-0 py-6 text-sm text-slate-500 flex items-center justify-between">
        <span>© {new Date().getFullYear()} VIN Decode</span>
        <a href="https://www.nhtsa.gov/vin-decoder" target="_blank" rel="noreferrer" className="hover:text-slate-700">Data: NHTSA</a>
      </div>
    </footer>
  )
}


