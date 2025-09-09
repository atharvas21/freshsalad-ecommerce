'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState, Suspense } from 'react'

interface Order {
  id: string
  items: any[]
  totalAmount: number
  deliveryInfo: any
  status: string
  createdAt: string
}

function OrderConfirmationContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')
  const [order, setOrder] = useState<Order | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (orderId) {
      fetchOrder(orderId)
    }
  }, [orderId])

  const fetchOrder = async (id: string) => {
    try {
      const response = await fetch(`/api/orders/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        setOrder(data.order)
      }
    } catch (error) {
      console.error('Failed to fetch order:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Order Confirmed! 🎉
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for your order! We&apos;re preparing your fresh salads right now.
          </p>

          {/* Order Details */}
          {order && (
            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Order Number</h3>
                  <p className="text-gray-600 font-mono">#{order.id}</p>
                  
                  <h3 className="font-medium text-gray-900 mb-2 mt-4">Total Amount</h3>
                  <p className="text-2xl font-bold text-primary-600">${order.totalAmount.toFixed(2)}</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Delivery Address</h3>
                  <p className="text-gray-600">
                    {order.deliveryInfo.address}<br />
                    {order.deliveryInfo.city}, {order.deliveryInfo.zipCode}
                  </p>
                  
                  <h3 className="font-medium text-gray-900 mb-2 mt-4">Phone</h3>
                  <p className="text-gray-600">{order.deliveryInfo.phone}</p>
                </div>
              </div>

              {/* Items */}
              <div className="mt-6">
                <h3 className="font-medium text-gray-900 mb-3">Items Ordered</h3>
                <div className="space-y-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600">
                        {item.quantity}x {item.name}
                      </span>
                      <span className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Delivery Info */}
          <div className="bg-primary-50 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="text-primary-600 text-2xl mr-3">🚚</div>
              <h3 className="text-lg font-semibold text-primary-900">
                Estimated Delivery Time
              </h3>
            </div>
            <p className="text-primary-700 text-lg font-medium">
              30-45 minutes
            </p>
            <p className="text-primary-600 text-sm mt-2">
              We&apos;ll send you updates via email and SMS
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/salads"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 btn-hover"
            >
              Order More Salads
            </Link>
            <Link
              href="/profile/orders"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 btn-hover"
            >
              View Order History
            </Link>
          </div>

          {/* Help Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              Need help with your order? Contact us at{' '}
              <a href="mailto:support@freshsalad.com" className="text-primary-600 hover:text-primary-500">
                support@freshsalad.com
              </a>{' '}
              or{' '}
              <a href="tel:+1234567890" className="text-primary-600 hover:text-primary-500">
                (123) 456-7890
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading order details...</p>
        </div>
      </div>
    }>
      <OrderConfirmationContent />
    </Suspense>
  )
}
