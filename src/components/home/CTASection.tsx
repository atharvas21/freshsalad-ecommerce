import Link from 'next/link'

export default function CTASection() {
  return (
    <div className="bg-primary-600">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          <span className="block">Ready to eat healthier?</span>
          <span className="block">Start your fresh journey today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-primary-100">
          Join thousands of satisfied customers who have made healthy eating a delicious habit.
        </p>
        <Link
          href="/salads"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 sm:w-auto btn-hover"
        >
          Order Your First Salad
        </Link>
      </div>
    </div>
  )
}
