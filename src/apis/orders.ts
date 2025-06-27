import { url } from "@/constants/url";
import  type{ TOrders } from "@/Types/allTypes";

//get all orders
export const getAllOrders = async () => {
    const response = await fetch (`${url}/orders`)

    return response.json()
}

//get orders by id
export const getOrdersById =  async (id: number) =>{
    const response = await fetch (`${url}/orders/${id}`)

    return response.json()
}

//create order
export const createOrder = async (Orders: TOrders) =>{
    const response = await fetch (`${url}/orders`,{
        method:'CREATE',
        headers: {"Content-Type":"application.json"},
        body:JSON.stringify(Orders)
    })
    return response.json()
}

//patch an order
export const patchOrder = async (Orders:TOrders, id:number) =>{
    const response = await fetch (`${url}/orders/${id}`,{
        method:'PATCH',
        headers: {"Content-Type":"application.json"},
        body:JSON.stringify(Orders)
    })
    return response.json()
}

//delete an order
export const deleteOrder = async ( id:number) =>{
    const response = await fetch (`${url}/orders/${id}`,{
        method:'DELETE',
        
    })
    return response.json()
}
