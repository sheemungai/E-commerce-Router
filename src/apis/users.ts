import  type { TUser } from "@/Types/allTypes";
import { url } from "@/constants/url";

// GET ALL USERS
export  const getAllUsers = async () => {
    const response = await fetch (`${url}/users`)

    return response.json()
}

//get userby id
export const getUserById = async (id: number) =>{
    const response = await fetch (`${url}/user/${id}`)

    return response.json()
}
 
//create user
export const createUser = async (Users:TUser) => {
    const response = await fetch (`${url}/users`, {
        method: 'CREATE',
        headers: { "Content-Type":"application.json"},
        body:JSON.stringify(Users)
    })
    return response.json()

}

//patch user
export const patchUser = async ( id:number, Users:TUser) =>{
    const response = await fetch (`${url}/user/${id}`,{
        method:'PATCH',
        headers: {"Content-Type": "applicaation.json"},
        body: JSON.stringify(Users)
    })
  return response.json()
}

//delete user
export const deleteUser = async( id:number) => {
    const response = await fetch (`${url}/users/${id}`,{
        method:'DELETE'
    })
    return response.json()
} 