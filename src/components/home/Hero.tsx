import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden py-12 lg:py-20" aria-labelledby="hero-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <span className="mr-2">🌱</span>
                100% Organic & Fresh
              </div>
              
              <h1 id="hero-heading" className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">Fresh &</span>
                <span className="block text-primary-600">Healthy Salads</span>
                <span className="block">Delivered Fast</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Discover the perfect blend of taste and nutrition with our carefully crafted salads. 
                Made with the freshest ingredients and delivered straight to your door in 30-45 minutes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary-600">95%</div>
                <div className="text-sm text-gray-600">Organic</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary-600">30min</div>
                <div className="text-sm text-gray-600">Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary-600">4.9★</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/salads"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-2xl shadow-lg hover:bg-primary-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                aria-label="Browse our salad menu"
              >
                <span>View Salads</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-700 bg-white border-2 border-primary-200 rounded-2xl hover:bg-primary-50 hover:border-primary-300 hover:-translate-y-1 transition-all duration-300"
                aria-label="Learn more about our features"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-6">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-primary-100 rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-primary-600 text-sm font-medium">{String.fromCharCode(64 + i)}</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">2,500+</span> happy customers
                </div>
              </div>
              
              <div className="flex items-center space-x-1">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm text-gray-600">4.9 rating</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl opacity-60"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
              <span className="text-2xl" role="img" aria-label="Leaf">🌿</span>
            </div>
            <div className="absolute top-20 right-16 w-12 h-12 bg-secondary-200 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
              <span className="text-xl" role="img" aria-label="Carrot">🥕</span>
            </div>
            <div className="absolute bottom-20 left-16 w-14 h-14 bg-primary-200 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1.5s' }}>
              <span className="text-xl" role="img" aria-label="Tomato">🍅</span>
            </div>
            
            {/* Main Salad */}
            <div className="relative z-10 text-9xl lg:text-[12rem] opacity-90 transform hover:scale-105 transition-transform duration-500">
              🥗
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20 blur-3xl scale-75"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
