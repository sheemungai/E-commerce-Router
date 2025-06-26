import {
  getProductById,
  getAllProducts,
  createProduct,
  patchProduct,
  deleteProducts,
} from '@/apis/products'
import type { TProducts } from '@/Types/allTypes'
import type { UseMutationResult, UseQueryResult } from '@tanstack/react-query'
import {
  useQuery,
  useQueryClient,
  useMutation,
  QueryClient,
} from '@tanstack/react-query'

//get all products
export const useProductState = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  })
}

//get products by id

export const useProductByIdState = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  })
}
// create product hook

export const useCreateProductState = () => {
  const QueryClient = useQueryClient()
  return useMutation({
    mutationKey: ['addProduct'],
    mutationFn: createProduct,
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ['products'], exact: true })
    },
  })
}

//patch
type patchProduct = {id: number, Product: TProducts}
export const usePatchProductState = ():UseMutationResult<TProducts ,Error,patchProduct>  => {
    const QueryClient = useQueryClient()
    return useMutation({
        mutationKey: ['patchProduct'],
        mutationFn: ({id,Product}:patchProduct)  =>patchProduct (id,Product),
        onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ['products'], exact: true })
    },
    })
 
 
}

export const useDeleteProductState = () => {
  const QueryClient = useQueryClient()
  return useMutation({
    mutationKey: ['deleteProduct'],
    mutationFn: deleteProducts,
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ['product'], exact: true })
    },
  })
}
