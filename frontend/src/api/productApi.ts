import axios from 'axios'
import type { Product } from '../models/Product'
import type { CreateProductRequest } from '../models/CreateProductRequest'

const PRODUCT_SERVICE_URL = 'http://localhost:8082/api/v1/products'

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(`${PRODUCT_SERVICE_URL}/all`)
  return response.data
}

export const createProduct = async (
  product: CreateProductRequest
): Promise<Product> => {
  const response = await axios.post<Product>(
    PRODUCT_SERVICE_URL,
    product
  )

  return response.data
}