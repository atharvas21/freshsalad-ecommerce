'use client'

import { useCart } from '@/components/providers/CartProvider'
import CartItem from '@/components/cart/CartItem'
import Link from 'next/link'
import { useAuth } from '@/components/providers/AuthProvider'

export default function CartPage() {
  const { items, getTotalPrice, getTotalItems } = useCart()
  const { user } = useAuth()

  const totalPrice = getTotalPrice()
  const totalItems = getTotalItems()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="text-gray-400 text-8xl mb-8">🛒</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Looks like you haven&apos;t added any delicious salads to your cart yet.
            </p>
            <Link
              href="/salads"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 btn-hover"
            >
              Browse Salads
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pb-24 lg:pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">
            {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Items</h2>
                <div className="space-y-4">
                  {items.map((item) => (
                    <CartItem key={`${item.id}-${item.size || 'regular'}`} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm sticky top-4">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="text-gray-900">$3.99</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900">${(totalPrice * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span className="text-base font-semibold text-gray-900">Total</span>
                      <span className="text-base font-semibold text-gray-900">
                        ${(totalPrice + 3.99 + totalPrice * 0.08).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {user ? (
                  <Link
                    href="/checkout"
                    className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 btn-hover text-center block font-medium"
                  >
                    Proceed to Checkout
                  </Link>
                ) : (
                  <div className="space-y-3">
                    <Link
                      href="/auth/login"
                      className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 btn-hover text-center block font-medium"
                    >
                      Sign In to Checkout
                    </Link>
                    <p className="text-xs text-gray-500 text-center">
                      You need to sign in to place an order
                    </p>
                  </div>
                )}

                <div className="mt-4 pt-4 border-t">
                  <Link
                    href="/salads"
                    className="text-primary-600 hover:text-primary-500 text-sm font-medium"
                  >
                    ← Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
