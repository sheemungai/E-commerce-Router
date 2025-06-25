import { Link } from '@tanstack/react-router'
import { 
  Home, 
  Users, 
  Package, 
  FolderOpen, 
  ShoppingCart 
} from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="bg-slate-800 w-64 h-screen p-5 text-white">
      <nav className="space-y-2">
        <Link
          to="/"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 hover:text-blue-400 font-medium transition-colors"
        >
          <Home size={20} />
          Home
        </Link>

        <Link
          to="/users"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 hover:text-blue-400 font-medium transition-colors"
        >
          <Users size={20} />
          Users
        </Link>

        <Link
          to="/products"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 hover:text-blue-400 font-medium transition-colors"
        >
          <Package size={20} />
          Products
        </Link>

        <Link
          to="/categories"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 hover:text-blue-400 font-medium transition-colors"
        >
          <FolderOpen size={20} />
          Categories
        </Link>

        <Link
          to="/orders"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700 hover:text-blue-400 font-medium transition-colors"
        >
          <ShoppingCart size={20} />
          Orders
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar