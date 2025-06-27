import { useProductState } from "@/hooks/useProducts"
import ProductCard from "../ProductCard" 

function Products() {
  const {data} = useProductState() as {data:any[]}
   console.log(data)
  
  return(
    <div className="min-h-screen bg-gray-200">
      <header className='shadow-md bg-white p-6 border-b border-gray-200'>
        <h1 className='font-bold text-3xl text-gray-800'>Products</h1>
      </header>
      
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data && data.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Products