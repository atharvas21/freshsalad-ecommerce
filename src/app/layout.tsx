import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/providers/AuthProvider'
import { CartProvider } from '@/components/providers/CartProvider'
import Navbar from '@/components/layout/Navbar'
import FloatingCartButton from '@/components/cart/FloatingCartButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FreshSalad - Healthy Salads Delivered',
  description: 'Order fresh, healthy, and delicious salads online. Fast delivery of nutritious meals to your doorstep.',
  keywords: 'salads, healthy food, fresh vegetables, nutrition, delivery, organic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <FloatingCartButton />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
