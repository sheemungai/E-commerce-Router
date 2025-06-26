
function Home() {
  return (
    <div>
       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Welcome to <span className="text-indigo-600"> My Ecommerce</span> Website
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The E-Commerce System allows users to browse products, add items to their cart, make purchases, and track their orders. Admins can manage products, orders, and users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Sign In
            </button>
           
          </div>
        </div>
    </div>

    
    </div>
    </div>
  )
}

export default Home
