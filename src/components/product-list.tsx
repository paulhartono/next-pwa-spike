import * as React from 'react'

interface ProductListProps {
  products: {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
      rate: number
      count: number
    }
  }[]
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="flex flex-col">
      {products.map((product, index) => (
        <div key={index}>
          <div>{product.title}</div>
        </div>
      ))}
    </div>
  )
}
