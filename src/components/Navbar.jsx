import { useState, useEffect } from 'react'
import { waLink } from '../App'
import Logo from './Logo'

const links = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Productos', href: '#productos' },
  { label: '¿Por qué nosotros?', href: '#por-que-nosotros' },
  { label: 'Contacto',  href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : ''}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#inicio">
            <Logo
              className="w-8 h-8"
              textClass={`transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}
            />
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors ${scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/70 hover:text-white'}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-full transition-colors"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 ${scrolled ? 'text-gray-700' : 'text-white'}`}
            aria-label="Menú"
          >
            {open
              ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              : <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            }
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white rounded-xl shadow-lg border border-gray-100 mb-2 p-4 flex flex-col gap-2">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-gray-600 hover:text-gray-900 py-1.5 px-2 rounded-lg hover:bg-gray-50">
                {l.label}
              </a>
            ))}
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="mt-1 bg-green-500 hover:bg-green-400 text-white text-center text-sm font-semibold px-4 py-2.5 rounded-full transition-colors">
              Contactar por WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
