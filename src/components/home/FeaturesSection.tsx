export default function FeaturesSection() {
  const features = [
    {
      icon: '🌱',
      title: 'Fresh Ingredients',
      description: 'Sourced daily from local farms and organic suppliers for maximum freshness and flavor.',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: '⚡',
      title: 'Quick Delivery',
      description: 'Fast 30-45 minute delivery straight to your door, ensuring your salads arrive fresh.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '🥗',
      title: 'Nutritious & Balanced',
      description: 'Each salad is carefully crafted by nutritionists to provide optimal health benefits.',
      color: 'from-emerald-400 to-teal-600'
    },
    {
      icon: '📱',
      title: 'Easy Ordering',
      description: 'Simple online ordering with real-time tracking and flexible delivery options.',
      color: 'from-blue-400 to-indigo-600'
    }
  ]

  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
            <span className="mr-2">✨</span>
            Why Choose Us
          </div>
          
          <h2 id="features-heading" className="text-4xl lg:text-5xl font-bold text-gray-900">
            Better health starts with better food
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re committed to providing you with the highest quality salads that taste great and fuel your body.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-20 blur-xl scale-75 group-hover:scale-100 transition-all duration-300`}></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Health Stats */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <span className="mr-2">📊</span>
                Health Impact
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Health Benefits You&apos;ll Love
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="text-center space-y-3">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🌿</span>
                </div>
                <div className="text-4xl font-bold text-primary-600">95%</div>
                <div className="text-gray-600 font-medium">Organic Ingredients</div>
                <div className="text-sm text-gray-500">Certified organic produce in every salad</div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <div className="text-4xl font-bold text-primary-600">300+</div>
                <div className="text-gray-600 font-medium">Calories on Average</div>
                <div className="text-sm text-gray-500">Perfect portion for a healthy meal</div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">💪</span>
                </div>
                <div className="text-4xl font-bold text-primary-600">25g+</div>
                <div className="text-gray-600 font-medium">Plant Protein</div>
                <div className="text-sm text-gray-500">Complete amino acid profile</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
