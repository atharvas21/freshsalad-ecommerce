'use client'

import { useCart } from '@/components/providers/CartProvider'

interface CartItemProps {
  item: {
    id: string
    name: string
    price: number
    image: string
    quantity: number
    size?: string
  }
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(item.id, newQuantity, item.size)
  }

  const handleRemove = () => {
    removeItem(item.id, item.size)
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Product Image & Info Section */}
      <div className="flex items-center space-x-4 flex-1 min-w-0">
        {/* Product Image */}
        <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-medium text-gray-900 truncate">{item.name}</h3>
          {item.size && (
            <p className="text-sm text-gray-500">Size: {item.size}</p>
          )}
          <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
        </div>
      </div>

      {/* Controls Section */}
      <div className="flex items-center justify-between sm:justify-end sm:space-x-6">
        {/* Quantity Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors"
            disabled={item.quantity <= 1}
            aria-label="Decrease quantity"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          
          <span className="w-10 text-center font-medium text-gray-900 bg-gray-50 rounded px-2 py-1">{item.quantity}</span>
          
          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Increase quantity"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>

        {/* Price & Remove Section */}
        <div className="text-right">
          <p className="text-lg font-semibold text-gray-900 whitespace-nowrap">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
          <button
            onClick={handleRemove}
            className="text-red-600 hover:text-red-800 text-sm font-medium mt-1 transition-colors"
            aria-label={`Remove ${item.name} from cart`}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}
