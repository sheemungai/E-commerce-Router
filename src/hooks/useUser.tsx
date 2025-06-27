import { getAllUsers, getUserById, createUser, patchUser, deleteUser } from "@/apis/users";
import { useQuery, useQueryClient, useMutation, QueryClient } 
from "@tanstack/react-query";
import type { UseMutationResult, UseQueryResult } from '@tanstack/react-query'
import type { TUser } from "@/Types/allTypes";

//get all user hooks
export const useUserState = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: getAllUsers
    })
}

//get user id hook
export const UseGetUserByIdState = (id: number) =>{
    return useQuery({
        queryKey: ['user', id],
        queryFn:() => getUserById(id),
        enabled: !!id
    })
}

// create user hook
export const useCreateUserState = () => {
  const QueryClient = useQueryClient()
  return useMutation({
    mutationKey: ['addUser'],
    mutationFn: createUser,
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ['users'], exact: true })
    },
  })
}

type patchUser = {id:number, User: TUser}
export const usePatchUserState = ():UseMutationResult<TUser,Error,patchUser> => {
  const QueryClient = useQueryClient()
  return useMutation({
    mutationKey: ['patchUser'],
    mutationFn:({id, User}:patchUser) => patchUser( id,User),
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ['users'], exact: true })
    },
  })
}

//delete user hook
export const useDeleteUserState = () => {
  const QueryClient = useQueryClient()
  return useMutation({
    mutationKey: ['deleteUser'],
    mutationFn: deleteUser,
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ['delete'], exact: true })
    },
  })
}
