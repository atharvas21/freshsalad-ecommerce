'use client'

import { useCart } from '@/components/providers/CartProvider'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function FloatingCartButton() {
  const { items, getTotalItems, getTotalPrice } = useCart()
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const totalItems = getTotalItems()
  const totalPrice = getTotalPrice()

  // Show/hide based on cart items
  useEffect(() => {
    setIsVisible(totalItems > 0)
  }, [totalItems])

  // Animation when items are added
  useEffect(() => {
    if (totalItems > 0) {
      setIsAnimating(true)
      const timer = setTimeout(() => setIsAnimating(false), 600)
      return () => clearTimeout(timer)
    }
  }, [totalItems])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      <Link
        href="/cart"
        className={`group flex items-center bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          isAnimating ? 'animate-bounce' : ''
        }`}
        aria-label={`View cart with ${totalItems} items`}
      >
        {/* Compact version */}
        <div className="flex items-center justify-center w-14 h-14 group-hover:hidden">
          <div className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13h10m0 0v6a1 1 0 01-1 1H8a1 1 0 01-1-1v-6" />
            </svg>
            {/* Item count badge */}
            <div className="absolute -top-2 -right-2 bg-yellow-400 text-primary-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </div>
          </div>
        </div>

        {/* Expanded version on hover */}
        <div className="hidden group-hover:flex items-center px-6 py-3 space-x-3">
          <div className="relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13h10m0 0v6a1 1 0 01-1 1H8a1 1 0 01-1-1v-6" />
            </svg>
            <div className="absolute -top-2 -right-2 bg-yellow-400 text-primary-900 text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {totalItems}
            </div>
          </div>
          <div className="text-sm">
            <div className="font-semibold">₹{totalPrice}</div>
            <div className="text-xs opacity-90">{totalItems} item{totalItems !== 1 ? 's' : ''}</div>
          </div>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </div>
  )
}
