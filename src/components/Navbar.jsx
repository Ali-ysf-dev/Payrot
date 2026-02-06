import { useState } from 'react'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
  ]

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <nav className="z-1001 relative w-full flex items-center justify-between px-4 sm:px-6 py-3 lg:py-4 bg-transparent">
      {/* Logo - left */}
      <a
        href="#"
        className="text-lg sm:text-xl font-bold text-white tracking-tight hover:opacity-90 transition-opacity z-10"
      >
        PAYROT
      </a>

      {/* Desktop: Nav links - center */}
      <ul className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-6 xl:gap-8">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-white/90 hover:text-white font-medium transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop: Contact Us button - right */}
      <div className="hidden lg:block">
        <button
          type="button"
          className="px-5 py-2.5 bg-white text-slate-900 font-semibold rounded-lg hover:bg-white/90 transition-colors"
        >
          Contact Us
        </button>
      </div>

      {/* Mobile: Hamburger button */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        className="lg:hidden relative z-10 p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
      >
        <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`block h-0.5 w-full bg-current transition-all origin-center ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-current transition-all ${
              mobileMenuOpen ? 'opacity-0 scale-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-current transition-all origin-center ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </div>
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/95 backdrop-blur-sm lg:hidden transition-opacity duration-300 z-[8] ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-slate-900 shadow-xl lg:hidden z-[9] transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col pt-20 px-6 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              className="text-white text-lg font-medium py-2 border-b border-white/10 hover:text-white/90 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={closeMobileMenu}
            className="mt-4 w-full px-5 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-white/90 transition-colors text-center"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
