import { Link } from '@tanstack/react-router'
import {
  Users,
  Package,
  FolderOpen,
  ShoppingCart,
  Home,
  BarChart3,
  DollarSign,
  Settings,
} from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="bg-slate-900 w-64 h-screen flex flex-col shadow-xl">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">Admin Panel</h2>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
          Main Menu
        </div>

        <Link
          to="/Dashboard"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 hover:text-blue-400 text-slate-300 font-medium transition-all duration-200 group"
          activeProps={{
            className: 'bg-slate-800 text-blue-400 shadow-lg',
          }}
        >
          <BarChart3
            size={20}
            className="group-hover:scale-110 transition-transform"
          />
          Overview
        </Link>

        <Link
          to="/Dashboard/user"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 hover:text-blue-400 text-slate-300 font-medium transition-all duration-200 group"
          activeProps={{
            className: 'bg-slate-800 text-blue-400 shadow-lg',
          }}
        >
          <Users
            size={20}
            className="group-hover:scale-110 transition-transform"
          />
          Users
        </Link>

        <Link
          to="/Dashboard/product"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 hover:text-blue-400 text-slate-300 font-medium transition-all duration-200 group"
          activeProps={{
            className: 'bg-slate-800 text-blue-400 shadow-lg',
          }}
        >
          <Package
            size={20}
            className="group-hover:scale-110 transition-transform"
          />
          Products
        </Link>

        <Link
          to="/Dashboard/categories"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 hover:text-blue-400 text-slate-300 font-medium transition-all duration-200 group"
          activeProps={{
            className: 'bg-slate-800 text-blue-400 shadow-lg',
          }}
        >
          <FolderOpen
            size={20}
            className="group-hover:scale-110 transition-transform"
          />
          Categories
        </Link>

        <Link
          to="/Dashboard/orders"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 hover:text-blue-400 text-slate-300 font-medium transition-all duration-200 group"
          activeProps={{
            className: 'bg-slate-800 text-blue-400 shadow-lg',
          }}
        >
          <ShoppingCart
            size={20}
            className="group-hover:scale-110 transition-transform"
          />
          Orders
        </Link>

        <Link
          to="/Dashboard/paymnets"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 hover:text-blue-400 text-slate-300 font-medium transition-all duration-200 group"
          activeProps={{
            className: 'bg-slate-800 text-blue-400 shadow-lg',
          }}
        >
          <DollarSign
            size={20}
            className="group-hover:scale-110 transition-transform"
          />
          Payments
        </Link>
      </nav>

      {/* Bottom Section */}
      {/* <div className="p-4 border-t border-slate-700">
        <Link
          to="/settings"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 hover:text-blue-400 text-slate-300 font-medium transition-all duration-200 group w-full"
        >
          <Settings
            size={20}
            className="group-hover:scale-110 transition-transform"
          />
          Settings
        </Link>
      </div> */}
    </div>
  )
}

export default Sidebar
