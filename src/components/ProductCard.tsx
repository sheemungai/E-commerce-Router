import type { TProducts } from '../Types/allTypes';

interface ProductCardProps {
  product: TProducts;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={product.img} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">
            ₹{product.price?.toLocaleString()}
          </span>
          
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500">Stock:</span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              product.stock_quantity > 10 
                ? 'bg-green-100 text-green-800' 
                : product.stock_quantity > 0 
                ? 'bg-yellow-100 text-yellow-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {product.stock_quantity}
            </span>
          </div>
        </div>
        
        <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;