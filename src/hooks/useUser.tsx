import { getAllUsers, getUserById, createUser, patchUser, deleteUser } from "@/apis/users";
import { useQuery, useQueryClient, useMutation, QueryClient } from "@tanstack/react-query";

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

//patch user hook
// export const usePatchUserState = () => {
//   const QueryClient = useQueryClient()
//   return useMutation({
//     mutationKey: ['patchUser'],
//     mutationFn: patchUser,
//     onSuccess: () => {
//       QueryClient.invalidateQueries({ queryKey: ['users'], exact: true })
//     },
//   })
// }

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
