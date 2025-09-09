'use client'

import { useState, useEffect } from 'react'
import ProductCard from '@/components/products/ProductCard'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

interface Salad {
  id: string
  name: string
  price: number
  image: string
  description: string
  macros: {
    calories: number
    protein: number
    carbs: number
    fat: number
  }
  ingredients: string[]
}

export default function SaladsPage() {
  const [salads, setSalads] = useState<Salad[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchSalads()
  }, [])

  const fetchSalads = async () => {
    try {
      const response = await fetch('/api/salads')
      if (response.ok) {
        const data = await response.json()
        setSalads(data.salads)
      } else {
        setError('Failed to load salads')
      }
    } catch (error) {
      setError('An error occurred while loading salads')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-8">{error}</p>
          <button
            onClick={fetchSalads}
            className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 btn-hover"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pb-24 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fresh & Healthy Salads
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our collection of nutritious, delicious salads made with the freshest ingredients. 
            Each salad is carefully crafted to provide you with the perfect balance of taste and nutrition.
          </p>
        </div>

        {/* Salads Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {salads.map((salad) => (
            <ProductCard key={salad.id} product={salad} />
          ))}
        </div>

        {/* Empty State */}
        {salads.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🥗</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No salads available</h3>
            <p className="text-gray-600">Check back soon for new additions to our menu!</p>
          </div>
        )}
      </div>
    </div>
  )
}
