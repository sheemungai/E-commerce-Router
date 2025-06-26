import {
  getAllOrders,
  getOrdersById,
  createOrder,
  patchOrder,
  deleteOrder,
} from '@/apis/orders'
import type { TOrders } from '@/Types/allTypes'
import type { UseMutationResult, UseQueryResult } from '@tanstack/react-query'
import {
  useQuery,
  useQueryClient,
  useMutation,
  QueryClient,
} from '@tanstack/react-query'

//get all hooks
export const useOrderState = () => {
  return useQuery({
    queryKey: ['order'],
    queryFn: getAllOrders,
  })
}

//get order id hooks
export const useOrderIdState = (id: number) => {
  return useQuery({
    queryKey: ['order'],
    queryFn: () => getOrdersById(id),
    enabled: !!id,
  })
}

//createOrder hook
export const useCreateOrderState = () => {
  const QueryClient = useQueryClient()
  return useMutation({
    mutationKey: ['addOrder'],
    mutationFn: createOrder,
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ['orders'], exact: true })
    },
  })
}

//patch hook
type patchOrders = { id: number; orders: TOrders }
export const usePatchOrderState = (): UseMutationResult<
  TOrders,
  Error,
  patchOrders
> => {
  const QueryClient = useQueryClient()
  return useMutation({
    mutationKey: ['patchOrders'],
    mutationFn: ({ id, orders }: patchOrders) => patchOrder( orders, id),
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ['orders'], exact: true })
    },
  })
}

export const useDeleteOrderState = () => {
  const QueryClient = useQueryClient()
  return useMutation({
    mutationKey: ['deleteorder'],
    mutationFn: deleteOrder,
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ['order'], exact: true })
    },
  })
}