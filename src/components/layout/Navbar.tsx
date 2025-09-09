'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/components/providers/AuthProvider'
import { useCart } from '@/components/providers/CartProvider'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const { getTotalItems } = useCart()
  const pathname = usePathname()

  const totalItems = getTotalItems()

  const navigation = [
    { name: 'Home', href: '/', ariaLabel: 'Go to homepage' },
    { name: 'Salads', href: '/salads', ariaLabel: 'Browse our salad menu' },
    { name: 'Cart', href: '/cart', ariaLabel: `Shopping cart with ${totalItems} items` },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group" aria-label="FreshSalad homepage">
              <div className="flex items-center space-x-2">
                <span className="text-3xl" role="img" aria-label="Salad">🥗</span>
                <span className="text-2xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors">
                  FreshSalad
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg group ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                  aria-label={item.ariaLabel}
                >
                  <span className="relative z-10">{item.name}</span>
                  {item.name === 'Cart' && totalItems > 0 && (
                    <span 
                      className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-medium shadow-lg animate-pulse z-20"
                      aria-label={`${totalItems} items in cart`}
                    >
                      {totalItems > 9 ? '9+' : totalItems}
                    </span>
                  )}
                  {!isActive && (
                    <span className="absolute inset-0 bg-primary-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 ease-out z-0" />
                  )}
                </Link>
              )
            })}
            {user ? (
              <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-medium text-sm">{user.name?.charAt(0).toUpperCase()}</span>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Hello, {user.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md"
                  aria-label="Sign out of your account"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-gray-200">
                <Link
                  href="/auth/login"
                  className="text-gray-700 hover:text-primary-600 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-50"
                  aria-label="Sign in to your account"
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  aria-label="Create a new account"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fadeInScale" id="mobile-menu">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100 rounded-b-2xl shadow-lg">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg relative ${
                      isActive
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-label={item.ariaLabel}
                  >
                    <span className="flex items-center justify-between">
                      {item.name}
                      {item.name === 'Cart' && totalItems > 0 && (
                        <span 
                          className="bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium z-20 relative"
                          aria-label={`${totalItems} items in cart`}
                        >
                          {totalItems > 9 ? '9+' : totalItems}
                        </span>
                      )}
                    </span>
                  </Link>
                )
              })}
              
              {user ? (
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="flex items-center px-4 py-2 space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-medium">{user.name?.charAt(0).toUpperCase()}</span>
                    </div>
                    <span className="text-gray-700 font-medium">Hello, {user.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      logout()
                      setIsMenuOpen(false)
                    }}
                    className="w-full text-left text-gray-700 hover:text-primary-600 hover:bg-primary-50 block px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg mt-2"
                    aria-label="Sign out of your account"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="border-t border-gray-100 pt-4 mt-4 space-y-1">
                  <Link
                    href="/auth/login"
                    className="text-gray-700 hover:text-primary-600 hover:bg-primary-50 block px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Sign in to your account"
                  >
                    Login
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="bg-primary-600 hover:bg-primary-700 text-white block px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg mx-2 text-center shadow-md"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Create a new account"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

