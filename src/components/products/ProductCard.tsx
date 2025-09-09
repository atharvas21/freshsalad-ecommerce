'use client'

import { useState } from 'react'
import { useCart } from '@/components/providers/CartProvider'
import Image from 'next/image'

interface Product {
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

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const { addItem, removeItem, getItemQuantity, decrementItem } = useCart()

  const quantity = getItemQuantity(product.id)

  const handleAddToCart = async () => {
    setIsAdding(true)
    
    // Add item to cart
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })

    // Show feedback for a short time
    setTimeout(() => {
      setIsAdding(false)
    }, 1000)
  }

  const handleIncrement = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  const handleDecrement = () => {
    decrementItem(product.id)
  }

  return (
    <article 
      className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-labelledby={`product-${product.id}-title`}
    >
      {/* Product Image */}
      <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <div className="w-full h-full relative">
          <Image
            src={product.image}
            alt={`${product.name} salad`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        {/* Health Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 border border-primary-200">
            <span className="mr-1">🌱</span>
            Organic
          </span>
        </div>

        {/* Calories Badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800 shadow-sm">
            {product.macros.calories} cal
          </span>
        </div>
        
        {/* Macros Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-white text-center p-6 w-full">
            <div className="text-sm font-medium mb-3">Nutritional Info</div>
            <div className="grid grid-cols-4 gap-3">
              <div className="text-center">
                <div className="text-lg font-bold text-primary-300">{product.macros.calories}</div>
                <div className="text-xs opacity-80">Calories</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary-300">{product.macros.protein}g</div>
                <div className="text-xs opacity-80">Protein</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary-300">{product.macros.carbs}g</div>
                <div className="text-xs opacity-80">Carbs</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary-300">{product.macros.fat}g</div>
                <div className="text-xs opacity-80">Fat</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div className="space-y-2 flex-1">
          <h3 id={`product-${product.id}-title`} className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        
          {/* Ingredients */}
          <div className="space-y-2 pt-2">
            <div className="text-sm font-medium text-gray-900">Key Ingredients:</div>
            <div className="flex flex-wrap gap-1">
              {product.ingredients.slice(0, 4).map((ingredient, index) => (
                <span key={index} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                  {ingredient}
                </span>
              ))}
              {product.ingredients.length > 4 && (
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-500">
                  +{product.ingredients.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Price and Cart Controls - Always at bottom */}
        <div className="pt-4 border-t border-gray-100 mt-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary-600">
                ${product.price.toFixed(2)}
              </div>
              <div className="text-xs text-gray-500">per serving</div>
            </div>
            
            {quantity > 0 && (
              <div className="text-sm font-medium text-gray-600">
                In cart: <span className="text-primary-600 font-bold">{quantity}</span>
              </div>
            )}
          </div>
          
          {quantity === 0 ? (
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                isAdding
                  ? 'bg-green-500 text-white shadow-lg scale-105'
                  : 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5'
              } disabled:cursor-not-allowed`}
              aria-label={`Add ${product.name} to cart for $${product.price.toFixed(2)}`}
            >
              {isAdding ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Added!
                </span>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13h10m0 0v6a1 1 0 01-1 1H8a1 1 0 01-1-1v-6" />
                  </svg>
                  Add to Cart
                </>
              )}
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={handleDecrement}
                  className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-primary-600 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="Decrease quantity"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <div className="flex items-center justify-center w-12 h-10 text-sm font-semibold text-gray-900 bg-white">
                  {quantity}
                </div>
                <button
                  onClick={handleIncrement}
                  className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-primary-600 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="Increase quantity"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                aria-label={`Add another ${product.name} to cart`}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add More
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
