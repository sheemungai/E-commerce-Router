import { useProductState } from "@/hooks/useProducts"


function Products() {
  const {data} = useProductState()
console.log(data)
  return(
     
    <header className='shadow-md bg-gray-50 p-5 font-bold text-2xl'>
      Products

    </header>
  )
}

export default Products
