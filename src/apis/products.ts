import type { TProducts } from '@/Types/allTypes'
import { url } from '@/constants/url'

//Get all products
export const getAllProducts = async () => {
  const response = await fetch(`${url}/products`)

  return response.json()
}

//get user by id

export const getProductById = async (id: number) => {
  const response = await fetch(`${url}/products/${id}`)

  return response.json()
}

//create product
export const createProduct = async (Products: TProducts) => {
  const response = await fetch(`${url}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application.json' },
    body: JSON.stringify(Products),
  })
  return response.json()
}

//update products
export const patchProduct = async (
  id: number,
  Products: TProducts,
): Promise<any> => {
  const response = await fetch(`${url}/products/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application.json' },
    body: JSON.stringify(Products),
  })
  return response.json()
}
//delete products

export const deleteProducts = async (id: number) => {
  const response = await fetch(`${url}/products/${id}`, {
    method: 'DELETE',
  })
  return response.json()
}
