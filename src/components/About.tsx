function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            About <span className="text-indigo-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're dedicated to providing you with the best e-commerce experience, 
            featuring quality products and exceptional customer service.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To create a seamless online shopping experience that connects customers 
              with quality products they love. We believe in making e-commerce simple, 
              secure, and enjoyable for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">What We Offer</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Wide range of quality products</li>
                <li>• Secure payment processing</li>
                <li>• Fast and reliable shipping</li>
                <li>• 24/7 customer support</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Why Choose Us</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Trusted by thousands of customers</li>
                <li>• Easy returns and exchanges</li>
                <li>• Competitive pricing</li>
                <li>• User-friendly platform</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About