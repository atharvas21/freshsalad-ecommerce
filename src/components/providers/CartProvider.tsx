'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  size?: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string, size?: string) => void
  decrementItem: (id: string, size?: string) => void
  updateQuantity: (id: string, quantity: number, size?: string) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
  getItemQuantity: (id: string, size?: string) => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error('Error parsing cart data:', error)
      }
    }
  }, [])

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const addItem = (newItem: Omit<CartItem, 'quantity'>) => {
    setItems(currentItems => {
      const existingItemIndex = currentItems.findIndex(
        item => item.id === newItem.id && item.size === newItem.size
      )

      if (existingItemIndex > -1) {
        // Item already exists, increase quantity by exactly 1
        const updatedItems = [...currentItems]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        }
        return updatedItems
      } else {
        // New item, add to cart with quantity 1
        return [...currentItems, { ...newItem, quantity: 1 }]
      }
    })
  }

  const removeItem = (id: string, size?: string) => {
    setItems(currentItems =>
      currentItems.filter(item => !(item.id === id && item.size === size))
    )
  }

  const decrementItem = (id: string, size?: string) => {
    setItems(currentItems => {
      return currentItems.map(item => {
        if (item.id === id && item.size === size) {
          if (item.quantity <= 1) {
            // Remove item if quantity would go to 0
            return null
          } else {
            // Decrease quantity by 1
            return { ...item, quantity: item.quantity - 1 }
          }
        }
        return item
      }).filter(Boolean) as CartItem[]
    })
  }

  const updateQuantity = (id: string, quantity: number, size?: string) => {
    if (quantity <= 0) {
      removeItem(id, size)
      return
    }

    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id && item.size === size
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalPrice = () => {
    return Math.round(items.reduce((total, item) => total + (item.price * item.quantity), 0))
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const getItemQuantity = (id: string, size?: string) => {
    const item = items.find(item => item.id === id && item.size === size)
    return item ? item.quantity : 0
  }

  const value = {
    items,
    addItem,
    removeItem,
    decrementItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
    getItemQuantity
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
