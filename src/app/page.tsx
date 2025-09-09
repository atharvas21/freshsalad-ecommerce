import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import FeaturesSection from '@/components/home/FeaturesSection'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'FreshSalad - Fresh, Healthy Salads Delivered to Your Door',
  description: 'Order fresh, organic salads made with premium ingredients. Fast delivery in 30-45 minutes. Perfect for a healthy lifestyle.',
  keywords: 'fresh salads, organic food, healthy meals, salad delivery, nutritious food',
  openGraph: {
    title: 'FreshSalad - Fresh, Healthy Salads Delivered',
    description: 'Order fresh, organic salads made with premium ingredients. Fast delivery in 30-45 minutes.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FreshSalad - Fresh, Healthy Salads Delivered',
    description: 'Order fresh, organic salads made with premium ingredients. Fast delivery in 30-45 minutes.',
  }
}

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen">
        <Hero />
        <FeaturesSection />
        <CTASection />
      </main>
    </>
  )
}
