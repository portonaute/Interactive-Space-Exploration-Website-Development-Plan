'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/70 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="space-gradient-text text-xl" aria-label="Cosmic Explorer - Home">
          COSMIC EXPLORER
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-blue-100 hover:text-blue-300 transition-colors">
            Home
          </Link>
          <Link href="/solar-system" className="text-blue-100 hover:text-blue-300 transition-colors">
            Solar System
          </Link>
          <Link href="/history" className="text-blue-100 hover:text-blue-300 transition-colors">
            History
          </Link>
          <Link href="/space-race" className="text-blue-100 hover:text-blue-300 transition-colors">
            Space Race
          </Link>
          <Link href="/modern-space" className="text-blue-100 hover:text-blue-300 transition-colors">
            Modern Space
          </Link>
          <Link href="/interactive" className="text-blue-100 hover:text-blue-300 transition-colors">
            Interactive
          </Link>
        </div>
        
        <div className="md:hidden">
          <button 
            className="text-white p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu" 
          className="md:hidden bg-black/90 backdrop-blur-md"
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link 
              href="/" 
              className="block py-2 text-blue-100 hover:text-blue-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/solar-system" 
              className="block py-2 text-blue-100 hover:text-blue-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Solar System
            </Link>
            <Link 
              href="/history" 
              className="block py-2 text-blue-100 hover:text-blue-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              History
            </Link>
            <Link 
              href="/space-race" 
              className="block py-2 text-blue-100 hover:text-blue-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Space Race
            </Link>
            <Link 
              href="/modern-space" 
              className="block py-2 text-blue-100 hover:text-blue-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Modern Space
            </Link>
            <Link 
              href="/interactive" 
              className="block py-2 text-blue-100 hover:text-blue-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Interactive
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
