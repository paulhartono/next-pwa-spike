import { sleep } from './sleep'

export default async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products/')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch products data')
  }

  return res.json()
}
