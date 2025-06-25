import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className=" top-0 bg-gray-50 shadow-md">
      <div className=" flex max-w-7xl mx-auto  p-8 text-2xl  ">
        
        <div className=" font-bold text-blue-600 text-3xl">
          <Link to="/">E-Commerce</Link>
        </div>

        <nav className="flex  text-black justify-between items-center  pl-5 text-2xl gap-4 ">
          <Link
            to="/"
            className=" hover:text-blue-400 font-medium transition-colors"
          >
            Home
          </Link>

          <Link
            to="/users"
            className=" hover:text-blue-400 font-medium transition-colors"
          >
            Users
          </Link>

          <Link
            to="/categories"
            className=" hover:text-blue-400 font-medium transition-colors"
          >
            Categories
          </Link>

          <Link
            to="/products"
            className=" hover:text-blue-400 font-medium transition-colors"
          >
            Products
          </Link>

          <Link
            to="/orders"
            className=" hover:text-blue-400 font-medium transition-colors"
          >
            Orders
          </Link>
        </nav>
      </div>
    </header>
  )
}
